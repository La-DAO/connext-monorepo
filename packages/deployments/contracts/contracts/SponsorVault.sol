// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import {ISponsorVault} from "./interfaces/ISponsorVault.sol";
import {ITokenExchange} from "./interfaces/ITokenExchange.sol";
import {IGasTokenOracle} from "./interfaces/IGasTokenOracle.sol";

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20, Address} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title SponsorVault
 * @author Connext Labs
 * @notice Contains logic for sponsoring liquidity and relayer fees
 */
contract SponsorVault is ISponsorVault, Ownable{
  // ============ Libraries ============
  using SafeERC20 for IERC20;

  // ============ Struct ============
  struct Rate {
    uint256 num;
    uint256 den;
  }

  // ============ Private storage ============

  // ============ Public storage ============

  /**
   * @notice The address of connext
   */
  address public connext;

  /**
   * @notice The origin domain to this domain gas token rates
   * @dev Used when no oracle is available
   */
  mapping(uint32 => Rate) public rates;

  /**
   * @notice The maximum amount this domain gas token to be sponsored for relayer fee
   */
  uint256 public relayerFeeCap;

  /**
   * @notice The origin domain to this domain gas token oracle
   * @dev Used to calculate sponsored relayer fee
   */
  IGasTokenOracle public gasTokenOracle;

  /**
   * @notice The this domain gas token to token exchange
   * @dev Used to exchange this domain gas token to the token used to pay liquidity fees
   */
  mapping(address => ITokenExchange) public tokenExchanges;

  // ============ Errors ============

  error SponsorVault__setConnext_invalidConnext();
  error SponsorVault__setRate_invalidOriginDomain();
  error SponsorVault__setGasTokenOracle_invalidOriginDomain();
  error SponsorVault__setTokenExchange_invalidAdopted();
  error SponsorVault__onlyConnext();

  // ============ Events ============

  /**
   * @notice Emitted when a new connext is set
   */
  event ConnextUpdated(address oldConnext, address newConnext, address caller);

  /**
   * @notice Emitted when a new rate is set
   */
  event RateUpdated(uint32 originDomain, Rate oldRate, Rate newRate, address caller);

  /**
   * @notice Emitted when a new relayerFeeCap is set
   */
  event RelayerFeeCapUpdated(uint256 oldRelayerFeeCap, uint256 newRelayerFeeCap, address caller);

  /**
   * @notice Emitted when a new gas token oracle is set
   */
  event GasTokenOracleUpdated(address oldOracle, address newOracle, address caller);

  /**
   * @notice Emitted when a new token exchange is set
   */
  event TokenExchangeUpdated(address token, address oldTokenExchange, address newTokenExchange, address caller);

  // ============ Modifiers ============

   /**
   * @notice Restricts the caller to connext
   */
  modifier onlyConnext() {
    if (msg.sender != connext) revert SponsorVault__onlyConnext();
    _;
  }

  // ============ Constructor ============

  constructor(address _connext) Ownable() {
    _setConnext(_connext);
  }

  // ============ Owner Functions ============

  /**
   * @notice Sets the Connext.
   * @dev Connext and sponsor vault store references to each other
   * @param _connext The address of the Connext implementation
   */
  function setConnext(address _connext) external onlyOwner {
    _setConnext(_connext);
  }

  /**
   * @notice Sets default origin domain gas token to this domain gas token rate.
   * @param _originDomain The origin domain
   * @param _rate The default rate
   */
  function setRate(uint32 _originDomain, Rate calldata _rate) external onlyOwner {
    if (_originDomain == 0) revert SponsorVault__setRate_invalidOriginDomain();

    emit RateUpdated(_originDomain, rates[_originDomain], _rate, msg.sender);

    rates[_originDomain] = _rate;
  }

  /**
   * @notice Sets the maximum sponsored relayer fee amount.
   * @param _relayerFeeCap The new relayerFeeCap
   */
  function setRelayerFeeCap(uint256 _relayerFeeCap) external onlyOwner {
    emit RelayerFeeCapUpdated(relayerFeeCap, _relayerFeeCap, msg.sender);
    relayerFeeCap = _relayerFeeCap;
  }

  /**
   * @notice Sets of an oracle that provides origin domain gas token to this domain gas token rates.
   * @param _gasTokenOracle The oracle address
   */
  function setGasTokenOracle(address _gasTokenOracle) external onlyOwner {
    emit GasTokenOracleUpdated(address(gasTokenOracle), _gasTokenOracle, msg.sender);
    gasTokenOracle = IGasTokenOracle(_gasTokenOracle);
  }

  /**
   * @notice Sets the address of an exchange used for swapping this domain gas token for a given token.
   * @param _token The address of the token
   * @param _tokenExchange The oracle of the exchange
   */
  function setTokenExchange(address _token, address payable _tokenExchange) external onlyOwner {
    if (_token == address(0)) revert SponsorVault__setTokenExchange_invalidAdopted();

    emit TokenExchangeUpdated(_token, address(tokenExchanges[_token]), _tokenExchange, msg.sender);
    tokenExchanges[_token] = ITokenExchange(_tokenExchange);
  }

  // ============ External functions ============

  receive() external payable {}

  /**
   * @notice Performs liquidity fee reimbursement.
   * @dev Uses the token exchange or liquidity deposited in this contract.
   * @param _token The address of the token
   * @param _liquidityFee The liquidity fee amount
   * @return Sponsored liquidity fee amount
   */
  function reimburseLiquidityFees(address _token, uint256 _liquidityFee) external override onlyConnext returns (uint256) {
    uint256 sponsoredFee;

    if (address(tokenExchanges[_token]) != address(0)) {
      ITokenExchange tokenExchange = tokenExchanges[_token];
      uint256 amountIn = tokenExchange.getInGivenExactOut(_token, _liquidityFee);

      // TODO: should it swap in the leftover and sponsor some of the liquidity fee?
      sponsoredFee = _liquidityFee;
      if (address(this).balance < amountIn) return 0;

      tokenExchange.swapExactOut{value: amountIn}(_token, _liquidityFee, msg.sender);

    } else {
      uint256 balance = IERC20(_token).balanceOf(address(this));
      sponsoredFee = balance < _liquidityFee ? balance : _liquidityFee;

      // some ERC20 do not allow to transfer 0 amount
      if (sponsoredFee > 0) {
        IERC20(_token).safeTransfer(msg.sender, sponsoredFee);
      }
    }

    return sponsoredFee;
  }

  /**
   * @notice Performs relayer fee reimbursement sending the corresponding amount of this domain gas token to `_to`.
   * @dev Uses the configured oracle or default rate otherwise.
   * @param _originDomain The origin domain id
   * @param _to The fee recipient
   * @param _originRelayerFee The relayer fee amount in origin domain gas token
   */
  function reimburseRelayerFees(uint32 _originDomain, address payable _to, uint256 _originRelayerFee) external override onlyConnext {
    uint256 sponsoredFee;
    if (address(gasTokenOracle) != address(0)) {
      (uint256 num, uint256 den) = gasTokenOracle.getRate(_originDomain);

      sponsoredFee = _originRelayerFee * num / den;
    } else if (rates[_originDomain].den != 0) {
      sponsoredFee = _originRelayerFee * rates[_originDomain].num / rates[_originDomain].den;
    }

    // calculated or max
    sponsoredFee = sponsoredFee > relayerFeeCap ? relayerFeeCap : sponsoredFee;
    // calculated or leftover
    sponsoredFee = sponsoredFee > address(this).balance ? address(this).balance : sponsoredFee;

    Address.sendValue(_to, sponsoredFee);
  }

  // ============ Internal functions ============

  function _setConnext(address _connext) internal {
    if (_connext == address(0)) revert SponsorVault__setConnext_invalidConnext();

    emit ConnextUpdated(connext, _connext, msg.sender);

    connext = _connext;
  }

}
