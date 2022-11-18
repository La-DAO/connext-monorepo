// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import {LibDiamond} from "../../../../contracts/core/connext/libraries/LibDiamond.sol";
import {IStableSwap} from "../../../../contracts/core/connext/interfaces/IStableSwap.sol";
import {BaseConnextFacet} from "../../../../contracts/core/connext/facets/BaseConnextFacet.sol";
import {TokenFacet} from "../../../../contracts/core/connext/facets/TokenFacet.sol";
import {TestERC20} from "../../../../contracts/test/TestERC20.sol";
import {TokenId} from "../../../../contracts/core/connext/libraries/TokenId.sol";

import "../../../utils/FacetHelper.sol";

contract TokenFacetTest is TokenFacet, FacetHelper {
  // ============ storage ============
  // owner
  address _owner = address(12345);

  // sample data
  uint32 _domain = _originDomain;

  // ============ Test set up ============
  function setUp() public {
    setOwner(_owner);
    utils_deployAssetContracts();
    utils_setFees();
  }

  // ============ Utils ==============
  // Set diamond storage owner
  function setOwner(address owner) internal {
    // set owner
    LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();
    ds.contractOwner = owner;
  }

  function setupAssetAndAssert(address adoptedInput, bytes4 err) public {
    // Get key
    bytes32 key = utils_calculateCanonicalHash();
    // Get shortcut
    bool isCanonical = s.domain == _canonicalDomain;
    bool success = keccak256(abi.encode(err)) == keccak256(abi.encode(bytes4("")));

    // setup events
    if (!success) {
      vm.expectRevert(err);
    } else {
      // Should emit a token deployed event
      if (!isCanonical) {
        vm.expectEmit(true, true, true, true);
        emit TokenDeployed(_canonicalDomain, _canonicalId, _local);
      }

      // Should emit a pool event if added
      if (_stableSwap != address(0) && isCanonical) {
        vm.expectEmit(true, true, true, true);
        emit StableSwapAdded(key, _canonicalId, _canonicalDomain, _stableSwap, _owner);
      }

      // Should emit an AssetAdded event
      vm.expectEmit(true, true, true, true);
      emit AssetAdded(key, _canonicalId, _canonicalDomain, _adopted, _local, _owner);

      // Should emit a cap event
      if (_cap > 0 && isCanonical) {
        vm.expectEmit(true, true, true, true);
        emit LiquidityCapUpdated(key, _canonicalId, _canonicalDomain, _cap, _owner);
      }
    }
    // Make call
    vm.prank(_owner);
    this.setupAsset(
      TokenId(_canonicalDomain, _canonicalId),
      uint8(18),
      "nextTest",
      "nTST",
      adoptedInput,
      _stableSwap,
      _cap
    );

    // Update approval
    assertEq(s.approvedAssets[key], success);

    if (!success) {
      return;
    }
    // Update adopted
    assertEq(s.adoptedToCanonical[_adopted].id, _canonicalId);
    assertEq(s.adoptedToCanonical[_adopted].domain, _canonicalDomain);

    // Update canonical
    assertEq(s.canonicalToAdopted[key], _adopted);

    // Update the local <> canonical mapping
    assertEq(s.representationToCanonical[isCanonical ? _canonical : _local].domain, isCanonical ? 0 : _canonicalDomain);
    assertEq(
      s.representationToCanonical[isCanonical ? _canonical : _local].id,
      isCanonical ? bytes32(0) : _canonicalId
    );
    // Update the canonical <> local mapping
    assertEq(s.canonicalToRepresentation[key], isCanonical ? address(0) : _local);

    // Should update the pool if nonzero
    if (_stableSwap != address(0)) {
      assertEq(address(s.adoptedToLocalExternalPools[key]), _stableSwap);
    }

    // should update liquidity cap if on canonical
    assertEq(s.caps[key], isCanonical ? _cap : 0);
  }

  // Calls removeAsset and asserts state changes/events
  function removeAssetAndAssert(
    bytes32 key,
    address adopted,
    address representation
  ) public {
    vm.expectEmit(true, true, false, true);
    emit AssetRemoved(key, _owner);

    this.removeAssetId(key, adopted, representation);
    assertEq(s.approvedAssets[key], false);
    assertEq(s.adoptedToCanonical[adopted].domain, 0);
    assertEq(s.adoptedToCanonical[adopted].id, bytes32(0));
    assertEq(s.canonicalToAdopted[key], address(0));
    assertEq(address(s.adoptedToLocalExternalPools[key]), address(0));
  }

  // ============ Getters ============
  // canonicalToAdopted
  function test_TokenFacet__canonicalToAdopted_success() public {
    s.canonicalToAdopted[_canonicalId] = _local;
    assertTrue(this.canonicalToAdopted(_canonicalId) == _local);
  }

  // if the canonicalToAdopted lookup fails using the helper, we revert: adopted asset not allowlisted
  function test_TokenFacet__canonicalToAdopted_notFound() public {
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__getAdoptedAsset_notAllowlisted.selector);
    this.canonicalToAdopted(_canonicalId);
  }

  // adoptedToCanonical
  function test_TokenFacet__adoptedToCanonical_success() public {
    s.adoptedToCanonical[_local].domain = _domain;
    s.adoptedToCanonical[_local].id = _canonicalId;
    TokenId memory canonical = this.adoptedToCanonical(_local);
    assertEq(canonical.domain, _domain);
    assertEq(canonical.id, _canonicalId);
  }

  function test_TokenFacet__adoptedToCanonical_notFound() public {
    TokenId memory canonical = this.adoptedToCanonical(_local);
    assertTrue(canonical.domain == 0);
    assertTrue(canonical.id == bytes32(0));
  }

  // approvedAssets
  function test_TokenFacet__approvedAssets_success() public {
    s.approvedAssets[_canonicalId] = true;
    assertTrue(this.approvedAssets(_canonicalId));
  }

  function test_TokenFacet__approvedAssets_notFound() public {
    assertTrue(this.approvedAssets(_canonicalId) == false);
  }

  // adoptedToLocalExternalPools
  function test_TokenFacet__adoptedToLocalExternalPools_success() public {
    address stableSwap = address(42);
    s.adoptedToLocalExternalPools[_canonicalId] = IStableSwap(stableSwap);
    assertEq(address(this.adoptedToLocalExternalPools(_canonicalId)), stableSwap);
  }

  function test_TokenFacet__adoptedToLocalExternalPools_notFound() public {
    assertEq(address(this.adoptedToLocalExternalPools(_canonicalId)), address(0));
  }

  // ============ Admin functions ============
  // ============ setupAsset ============
  function test_TokenFacet__setupAsset_failsIfInvalidCanonicalCofig() public {
    // local is adopted, on canonical
    s.domain = _canonicalDomain;
    _adopted = _canonical;
    _local = _canonical;

    // revert if nonzero stable swap
    _stableSwap = address(123123);
    setupAssetAndAssert(address(0), TokenFacet.TokenFacet__setupAsset_invalidCanonicalConfiguration.selector);

    // revert if adopted != (address(0), _canonical)
    _stableSwap = address(0);
    setupAssetAndAssert(address(123123), TokenFacet.TokenFacet__setupAsset_invalidCanonicalConfiguration.selector);
  }

  function test_TokenFacet__setupAsset_worksOnCanonical() public {
    // local is adopted, on canonical
    s.domain = _canonicalDomain;
    _adopted = _canonical;
    _local = _canonical;
    _stableSwap = address(0);
    setupAssetAndAssert(address(0), bytes4(""));
  }

  function test_TokenFacet__setupAsset_worksOnRemote() public {
    // local != adopted, on remote
    s.domain = 123123;
    // TODO: this was pulled from test logs, ideally calculate
    _local = address(0xf5a2fE45F4f1308502b1C136b9EF8af136141382);
    _stableSwap = address(0);
    setupAssetAndAssert(_adopted, bytes4(""));
  }

  function test_TokenFacet__setupAsset_worksWithCap() public {
    // local is adopted, on canonical
    s.domain = _canonicalDomain;
    _adopted = _canonical;
    _local = _canonical;
    _stableSwap = address(0);
    _cap = 1 ether;
    setupAssetAndAssert(address(0), bytes4(""));
  }

  // ============ setupAssetWithDeployedRepresentation ============

  function test_TokenFacet__setupAssetWithDeployedRepresentation_failOnCanonicalDomain() public {
    address asset = address(0);
    address stableSwap = address(0);
    address adoptedAssetId = address(1234);

    vm.prank(_owner);
    vm.expectRevert(TokenFacet.TokenFacet__setupAssetWithDeployedRepresentation_onCanonicalDomain.selector);
    this.setupAssetWithDeployedRepresentation(
      // Passing in the current domain as the canonical domain for the asset should result in a revert.
      TokenId(s.domain, _canonicalId),
      asset,
      adoptedAssetId,
      stableSwap,
      100000 ether
    );
  }

  // ============ addStableSwapPool ============
  function test_TokenFacet__addStableSwapPool_success() public {
    address stableSwap = address(65);

    vm.expectEmit(true, true, false, true);
    emit StableSwapAdded(_canonicalKey, _canonicalId, _domain, stableSwap, _owner);

    TokenId memory canonical = TokenId(_domain, _canonicalId);

    vm.prank(_owner);
    this.addStableSwapPool(canonical, stableSwap);
    assertEq(address(s.adoptedToLocalExternalPools[_canonicalKey]), stableSwap);
  }

  function test_TokenFacet__addStableSwapPool_canDelete() public {
    address og = address(65);
    s.adoptedToLocalExternalPools[_canonicalId] = IStableSwap(og);
    address empty = address(0);

    vm.expectEmit(true, true, false, true);
    emit StableSwapAdded(_canonicalKey, _canonicalId, _domain, empty, _owner);

    TokenId memory canonical = TokenId(_domain, _canonicalId);

    vm.prank(_owner);
    this.addStableSwapPool(canonical, empty);
    assertEq(address(s.adoptedToLocalExternalPools[_canonicalKey]), empty);
  }

  // ============ removeAssetId ============
  // function test_TokenFacet__removeAssetId_successErc20Token() public {
  //   vm.prank(_owner);
  //   setupAssetAndAssert(_local, address(12));

  //   removeAssetAndAssert(_canonicalKey, _local, _local);
  // }

  // function test_TokenFacet__removeAssetId_failIfNotAlreadyApproved() public {
  //   vm.expectRevert(TokenFacet.TokenFacet__removeAssetId_notAdded.selector);

  //   vm.prank(_owner);
  //   this.removeAssetId(_canonicalId, _local);
  // }

  // updateLiquidityCap
  function test_TokenFacet__updateLiquidityCap_failsIfNotCanonicalDomain() public {
    s.domain = 123123;
    vm.prank(_owner);
    vm.expectRevert(TokenFacet.TokenFacet__setLiquidityCap_notCanonicalDomain.selector);
    this.updateLiquidityCap(TokenId(_canonicalDomain, _canonicalId), 0);
  }

  function test_TokenFacet__updateLiquidityCap_worksIfZero() public {
    s.domain = _canonicalDomain;
    bytes32 key = utils_calculateCanonicalHash();
    uint256 updated;
    // If balance is 0, do nothing
    vm.expectEmit(true, true, true, true);
    emit LiquidityCapUpdated(key, _canonicalId, _canonicalDomain, updated, _owner);

    vm.prank(_owner);
    this.updateLiquidityCap(TokenId(_canonicalDomain, _canonicalId), updated);

    // assertEq
    assertEq(s.custodied[_canonical], 0);
    assertEq(s.caps[key], updated);
  }

  function test_TokenFacet__updateLiquidityCap_works() public {
    s.domain = _canonicalDomain;
    bytes32 key = utils_calculateCanonicalHash();
    uint256 updated = 1 ether;
    uint256 balance = 2 ether;

    // If balance is nonzero, setup balance mock
    vm.mockCall(_canonical, abi.encodeWithSelector(TestERC20.balanceOf.selector, address(this)), abi.encode(balance));

    // Event emitted
    vm.expectEmit(true, true, true, true);
    emit LiquidityCapUpdated(key, _canonicalId, _canonicalDomain, updated, _owner);

    vm.prank(_owner);
    this.updateLiquidityCap(TokenId(_canonicalDomain, _canonicalId), updated);

    // assertEq
    assertEq(s.custodied[_canonical], balance);
    assertEq(s.caps[key], updated);
  }
}
