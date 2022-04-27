// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./ForgeHelper.sol";

import "../contracts/Connext.sol";
import "../contracts/interfaces/ICallback.sol";
import "../contracts/nomad-xapps/contracts/promise-router/PromiseRouter.sol";
import {Home} from "../contracts/nomad-core/contracts/Home.sol";

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

// running tests (with logging on failure):
// yarn workspace @connext/nxtp-contracts test:forge -vvv
// run a single test:
// yarn workspace @connext/nxtp-contracts test:forge -m testAddRouterAlreadyApproved -vvv

// other forge commands: yarn workspace @connext/nxtp-contracts forge <CMD>
// see docs here: https://onbjerg.github.io/foundry-book/index.html

contract MockPromiseRouter is PromiseRouter {
  using TypedMemView for bytes;
  using TypedMemView for bytes29;
  using PromiseMessage for bytes29;

  function initialize(address _xAppConnectionManager) public override initializer {
    super.initialize(_xAppConnectionManager);
  }

  function mockHandle(
    address callbackAddress,
    bool returnSuccess,
    bytes calldata returnData
  ) public {
    bytes32 transferId = "A";

    bytes memory message = PromiseMessage.formatPromiseCallback(transferId, callbackAddress, returnSuccess, returnData);
    bytes29 _msg = message.ref(0).mustBePromiseCallback();

    promiseMessages[transferId] = message;
  }
}

contract MockHome {
  function dispatch(
    uint32 _destinationDomain,
    bytes32 _recipientAddress,
    bytes memory _messageBody
  ) external {
    1 == 1;
  }
}

contract MockCallback is ICallback {
  function callback(
    bytes32 transferId,
    bool success,
    bytes memory data
  ) external {
    require(data.length != 0);
  }
}

contract PromiseRouterTest is ForgeHelper {
  using TypedMemView for bytes;
  using TypedMemView for bytes29;
  using PromiseMessage for bytes29;

  // ============ Libraries ============
  using stdStorage for StdStorage;

  event Send(
    uint32 domain,
    bytes32 remote,
    bytes32 transferId,
    address callbackAddress,
    bool success,
    bytes data,
    bytes message
  );

  event Receive(
    uint64 indexed originAndNonce,
    uint32 indexed origin,
    bytes32 transferId,
    address callbackAddress,
    bool success,
    bytes data,
    bytes message
  );

  event CallbackFeeAdded(bytes32 indexed transferId, uint256 addedFee, uint256 totalFee, address caller);

  event SetConnext(address indexed connext);

  // ============ Storage ============

  MockPromiseRouter promiseRouter;
  MockPromiseRouter promiseRouterImpl;
  ERC1967Proxy proxy;

  address internal xAppConnectionManager = address(1);
  address internal home;
  Connext internal connext;
  MockCallback internal callback;
  address internal connext2 = address(3);
  address internal recipient = address(4);
  bytes32 internal remote = "remote";
  uint32 internal localDomain = uint32(123);
  uint32 internal remoteDomain = uint32(1);
  address internal relayer = address(5);

  // ============ Test set up ============

  function setUp() public {
    connext = new Connext();
    callback = new MockCallback();
    home = address(new MockHome());
    vm.mockCall(xAppConnectionManager, abi.encodeWithSignature("home()"), abi.encode(home));
    vm.mockCall(xAppConnectionManager, abi.encodeWithSignature("isReplica(address)"), abi.encode(bool(true)));
    vm.mockCall(home, abi.encodeWithSignature("localDomain()"), abi.encode(localDomain));

    promiseRouterImpl = new MockPromiseRouter();
    promiseRouterImpl.initialize(xAppConnectionManager);
    
    // proxy = new ERC1967Proxy(
    //   address(promiseRouterImpl),
    //   abi.encodeWithSelector(MockPromiseRouter.initialize.selector, xAppConnectionManager)
    // );
    
    // promiseRouter = MockPromiseRouter(payable(address(proxy)));
    
    promiseRouter.setConnext(address(connext));
    promiseRouter.enrollRemoteRouter(remoteDomain, bytes32(remote));
  }

  // ============ Utils ============
  // https://github.com/brockelmore/forge-std
  // specifically here with overriding mappings: https://github.com/brockelmore/forge-std/blob/99107e3e39f27339d224575756d4548c08639bc0/src/test/StdStorage.t.sol#L189-L192
  function setCallbackFee(bytes32 transferId, uint256 _fee) internal {
    stdstore.target(address(promiseRouter)).sig(promiseRouter.callbackFees.selector).with_key(transferId).checked_write(
        _fee
      );
  }

  function setApprovedRelayer(address _relayer, bool _approved) internal {
    stdstore.target(address(connext)).sig(connext.approvedRelayers.selector).with_key(_relayer).checked_write(
      _approved ? 1 : 0
    );
  }

  // ============ initialize ============
  function testInitializeParameters() public {
    assertEq(address(promiseRouter.xAppConnectionManager()), address(xAppConnectionManager));
    assertEq(address(promiseRouter.connext()), address(connext));
  }

  // ============ setConnext ============

  // Should work
  function testSetConnext() public {
    vm.expectEmit(true, true, true, true);
    emit SetConnext(connext2);

    promiseRouter.setConnext(connext2);
    assertEq(address(promiseRouter.connext()), connext2);

    promiseRouter.setConnext(address(connext));
  }

  // Fail if not called by owner
  function testSetConnextOnlyOwner() public {
    vm.prank(address(0));
    vm.expectRevert("Ownable: caller is not the owner");
    promiseRouter.setConnext(connext2);
  }

  // ============ send ============
  // Fail if not called by connext
  function testSendOnlyConnext(bool returnSuccess, bytes calldata returnData) public {
    vm.assume(returnData.length > 0);
    vm.prank(address(0));
    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__onlyConnext_notConnext.selector));

    bytes32 transferId = "A";
    address callbackAddress = address(1);

    promiseRouter.send(remoteDomain, transferId, callbackAddress, returnSuccess, returnData);
  }

  // Fail if return data is empty
  function testSendEmptyReturnData(bool returnSuccess, bytes calldata returnData) public {
    vm.assume(returnData.length == 0);
    vm.prank(address(connext));
    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__send_returndataEmpty.selector));

    bytes32 transferId = "A";
    address callbackAddress = address(1);

    promiseRouter.send(remoteDomain, transferId, callbackAddress, returnSuccess, returnData);
  }

  // Fail if callback address is not contract
  function testSendNonContractCallback(bool returnSuccess, bytes calldata returnData) public {
    vm.assume(returnData.length > 0);
    vm.prank(address(connext));
    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__send_callbackAddressNotContract.selector));

    bytes32 transferId = "A";
    address callbackAddress = address(1);

    promiseRouter.send(remoteDomain, transferId, callbackAddress, returnSuccess, returnData);
  }

  // Should work
  function testSend(bool returnSuccess, bytes calldata returnData) public {
    vm.prank(address(connext));
    vm.assume(returnData.length > 0);

    bytes32 transferId = "A";
    address callbackAddress = address(callback);

    bytes memory message = PromiseMessage.formatPromiseCallback(transferId, callbackAddress, returnSuccess, returnData);

    vm.expectCall(home, abi.encodeWithSelector(MockHome.dispatch.selector, remoteDomain, remote, message));
    vm.expectEmit(true, true, true, true);
    emit Send(remoteDomain, remote, transferId, callbackAddress, returnSuccess, returnData, message);

    promiseRouter.send(remoteDomain, transferId, callbackAddress, returnSuccess, returnData);
  }

  // ============ handle ============
  // Should work
  function testHandle(bytes calldata returnData, uint32 _nonce) public {
    vm.assume(returnData.length != 0);

    uint64 originAndNonce = (uint64(remoteDomain) << 32) | _nonce;
    bytes32 transferId = "A";
    address callbackAddress = address(callback);
    bool success = true;

    bytes memory message = PromiseMessage.formatPromiseCallback(transferId, callbackAddress, success, returnData);
    bytes29 _msg = message.ref(0).mustBePromiseCallback();

    vm.expectEmit(true, true, true, true);
    emit Receive(originAndNonce, remoteDomain, transferId, callbackAddress, success, returnData, message);

    promiseRouter.handle(remoteDomain, _nonce, remote, message);
    assertTrue(!_msg.isNull());
    assertEq(
      keccak256(abi.encodePacked(promiseRouter.promiseMessages(transferId))),
      keccak256(abi.encodePacked(message))
    );
  }

  // ============ process ============
  // Fail if relayer is not approved on connext contract
  function testProcessNotApprovedRelayer(bytes calldata returnData) public {
    vm.assume(returnData.length != 0);
    bytes32 transferId = "A";
    address callbackAddress = address(callback);
    bool success = true;

    promiseRouter.mockHandle(callbackAddress, success, returnData);

    setApprovedRelayer(relayer, false);

    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__process_notApprovedRelayer.selector));

    vm.prank(relayer);
    promiseRouter.process(transferId);
  }

  // Fail if callback fee is zero
  function testProcessZeroCallbackfee(bytes calldata returnData) public {
    vm.assume(returnData.length != 0);
    bytes32 transferId = "A";
    address callbackAddress = address(callback);
    bool success = true;

    promiseRouter.mockHandle(callbackAddress, success, returnData);

    setApprovedRelayer(relayer, true);
    setCallbackFee(transferId, 0 ether);

    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__process_insufficientCallbackFee.selector));

    vm.prank(relayer);
    promiseRouter.process(transferId);
  }

  // Should work
  function testProcess(bytes calldata returnData, uint32 _nonce) public {
    vm.assume(returnData.length != 0);
    bytes32 transferId = "A";
    address callbackAddress = address(callback);
    bool success = true;

    // transfer 200 wei to promiseRouter as callback fee
    payable(address(promiseRouter)).transfer(1 ether);

    uint256 relayerBeforeBalance = relayer.balance;
    uint256 callbackFee = 0.5 ether;

    setApprovedRelayer(relayer, true);
    setCallbackFee(transferId, callbackFee);

    promiseRouter.mockHandle(callbackAddress, success, returnData);

    bytes29 _msg = bytes29(promiseRouter.promiseMessages(transferId).ref(0).mustBePromiseCallback());
    assertTrue(_msg.isValid());
    assertTrue(AddressUpgradeable.isContract(_msg.callbackAddress()));
    assertTrue(callbackAddress == _msg.callbackAddress());

    // check if callback executed
    vm.expectCall(
      address(callback),
      abi.encodeWithSelector(MockCallback.callback.selector, transferId, success, returnData)
    );

    vm.prank(relayer);
    promiseRouter.process(transferId);

    // check if promiseMessage cleared after callback
    assertTrue(promiseRouter.promiseMessages(transferId).length == 0);

    // check if callbackFee cleared after callback
    assertTrue(promiseRouter.callbackFees(transferId) == 0);

    // check if callback fee is transferred to relayer
    uint256 relayerAfterBalance = relayer.balance;
    assertEq(relayerAfterBalance, relayerBeforeBalance + callbackFee);
    assertEq(address(promiseRouter).balance, 1 ether - callbackFee);
  }

  // ============ bumpCallbackFee ============
  // Fail if value is zero
  function testBumpCallbackFeeZeroValue() public {
    bytes32 transferId = "A";

    vm.expectRevert(abi.encodeWithSelector(PromiseRouter.PromiseRouter__bumpCallbackFee_valueIsZero.selector));

    uint256 amount = 0 ether;
    promiseRouter.bumpCallbackFee{value: amount}(transferId);
  }

  // Should work
  function testBumpCallbackFee() public {
    bytes32 transferId = "A";

    uint256 initialFee = 0.5 ether;
    setCallbackFee(transferId, initialFee);

    uint256 amount = 0.5 ether;

    vm.expectEmit(true, false, false, true);
    emit CallbackFeeAdded(transferId, initialFee, initialFee + amount, address(this));

    promiseRouter.bumpCallbackFee{value: amount}(transferId);

    assertEq(promiseRouter.callbackFees(transferId), initialFee + amount);
  }
}
