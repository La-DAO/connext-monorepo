/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RoutersFacet,
  RoutersFacetInterface,
} from "../../../../../contracts/core/connext/facets/RoutersFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__acceptProposedRouterOwner_badCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__acceptProposedRouterOwner_notElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_capReached",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__initializeRouter_configNotEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_notNewOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidityFor_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_recipientEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setMaxRoutersPerTransfer_invalidMaxRoutersPerTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterOwner_noChange",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityFeeNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LiquidityFeeNumeratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRoutersPerTransfer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MaxRoutersPerTransferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterApprovedForPortal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "RouterInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "RouterOwnerAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevProposed",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newProposed",
        type: "address",
      },
    ],
    name: "RouterOwnerProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevRecipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RouterRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterUnapprovedForPortal",
    type: "event",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_NUMERATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "acceptProposedRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    name: "addRouterLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "addRouterLiquidityFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwnerTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApprovalForPortal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "initializeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRoutersPerTransfer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposed",
        type: "address",
      },
    ],
    name: "proposeRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "removeRouterLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "removeRouterLiquidityFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "routerBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numerator",
        type: "uint256",
      },
    ],
    name: "setLiquidityFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxRouters",
        type: "uint256",
      },
    ],
    name: "setMaxRoutersPerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRouterRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120e6806100206000396000f3fe60806040526004361061014b5760003560e01c8063582c78d2116100b6578063b214c9011161006f578063b214c901146103fa578063c6bf691d1461041a578063da3a892f14610456578063e9160f3e14610476578063f259cd27146104b5578063ffaf3f1a146104d557600080fd5b8063582c78d21461032757806382904716146103475780638770e68214610367578063899962a1146103a5578063911b8ee2146103c55780639bf6d875146103e557600080fd5b806322a3c0071161010857806322a3c007146102585780632d3f9ef6146102785780633b688da61461028b57806341258b5c146102df5780634b72c5da146102ff578063540645941461031457600080fd5b806304376ff4146101505780630951d6d81461017257806309935b8f1461019657806312d57170146101b65780631407093b146101ef578063197c139d14610238575b600080fd5b34801561015c57600080fd5b5061017061016b366004611e4e565b6104f5565b005b34801561017e57600080fd5b506001545b6040519081526020015b60405180910390f35b3480156101a257600080fd5b506101706101b1366004611e4e565b6105f2565b3480156101c257600080fd5b506101836101d1366004611e4e565b6001600160a01b03166000908152601a602052604090206003015490565b3480156101fb57600080fd5b5061022861020a366004611e4e565b6001600160a01b03166000908152601a602052604090205460ff1690565b604051901515815260200161018d565b34801561024457600080fd5b50610170610253366004611e6b565b610752565b34801561026457600080fd5b50610170610273366004611ebe565b610815565b610170610286366004611ef7565b610994565b34801561029757600080fd5b506102c76102a6366004611e4e565b6001600160a01b039081166000908152601a60205260409020600201541690565b6040516001600160a01b03909116815260200161018d565b3480156102eb57600080fd5b506101836102fa366004611ebe565b6109f6565b34801561030b57600080fd5b50612710610183565b610170610322366004611f39565b610a23565b34801561033357600080fd5b50610170610342366004611f5e565b610a84565b34801561035357600080fd5b50610170610362366004611f5e565b610b83565b34801561037357600080fd5b50610228610382366004611e4e565b6001600160a01b03166000908152601a6020526040902054610100900460ff1690565b3480156103b157600080fd5b506101706103c0366004611ef7565b610c4e565b3480156103d157600080fd5b506101706103e0366004611e4e565b610ca7565b3480156103f157600080fd5b50601054610183565b34801561040657600080fd5b50610170610415366004611ebe565b610e1c565b34801561042657600080fd5b506102c7610435366004611e4e565b6001600160a01b039081166000908152601a60205260409020600101541690565b34801561046257600080fd5b50610170610471366004611e4e565b610f50565b34801561048257600080fd5b506102c7610491366004611e4e565b6001600160a01b039081166000908152601a60205260409020546201000090041690565b3480156104c157600080fd5b506101706104d0366004611e4e565b6110d3565b3480156104e157600080fd5b506101706104f0366004611ebe565b6111f0565b336104fe611263565b6001600160a01b031614158015610539575060033360009081526019602052604090205460ff16600381111561053657610536611f77565b14155b1561055757604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601a6020526040902054610100900460ff1661059557604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601a6020908152604091829020805461ff0019169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad910160405180910390a150565b6001600160a01b038082166000908152601a6020908152604091829020825160c081018452815460ff8082161515835261010082041615159382019390935262010000909204841692820192909252600182015483166060820152600282015490921660808301526003015460a0820181905262093a80906106749042611fa3565b11610692576040516376b2ad0760e01b815260040160405180910390fd5b60808101516000906001600160a01b0316156106b25781608001516106b8565b81604001515b9050336001600160a01b038216146106e357604051633253a7bd60e01b815260040160405180910390fd5b6106f68383608001518460400151611291565b60808201516001600160a01b031615610733576001600160a01b0383166000908152601a6020526040902060020180546001600160a01b03191690555b50506001600160a01b03166000908152601a6020526040812060030155565b601b546001190161077657604051637ce54e2d60e11b815260040160405180910390fd5b6002601b55601e5460ff161561079f57604051633ee5b89360e01b815260040160405180910390fd5b6001600160a01b038082166000908152601a60205260408120546201000090049091169081156107cf57816107d1565b825b9050336001600160a01b038216146107fc5760405163f3dc2d1960e01b815260040160405180910390fd5b6108088686868661132c565b50506001601b5550505050565b6001600160a01b038083166000908152601a60205260409020548391620100009091041633146108585760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038084166000908152601a6020908152604091829020825160c081018452815460ff808216151583526101008204161515938201939093526201000090920484169282018390526001810154841660608301526002810154841660808301526003015460a082015291841690036108e957604051630e49614b60e31b815260040160405180910390fd5b826001600160a01b031681608001516001600160a01b03160361091f57604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b038481166000818152601a60205260408082206002810180546001600160a01b031916898716908117909155426003909201919091556080860151915190949190911692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a450505050565b601b54600119016109b857604051637ce54e2d60e11b815260040160405180910390fd5b6002601b55601e5460ff16156109e157604051633ee5b89360e01b815260040160405180910390fd5b6109ec8383836114a9565b50506001601b5550565b6001600160a01b038083166000908152600e60209081526040808320938516835292905220545b92915050565b601b5460011901610a4757604051637ce54e2d60e11b815260040160405180910390fd5b6002601b55601e5460ff1615610a7057604051633ee5b89360e01b815260040160405180910390fd5b610a7b8282336114a9565b50506001601b55565b33610a8d611263565b6001600160a01b031614158015610ac8575060033360009081526019602052604090205460ff166003811115610ac557610ac5611f77565b14155b15610ae657604051637b32c26b60e01b815260040160405180910390fd5b6127106064610af682605f611fb6565b610b009190611fcd565b821015610b205760405163b74bfc8360e01b815260040160405180910390fd5b80821115610b4157604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae91015b60405180910390a15050565b33610b8c611263565b6001600160a01b031614158015610bc7575060033360009081526019602052604090205460ff166003811115610bc457610bc4611f77565b14155b15610be557604051637b32c26b60e01b815260040160405180910390fd5b801580610bf3575060105481145b15610c1157604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1601055565b601b5460011901610c7257604051637ce54e2d60e11b815260040160405180910390fd5b6002601b55601e5460ff1615610c9b57604051633ee5b89360e01b815260040160405180910390fd5b6109ec8383833361132c565b33610cb0611263565b6001600160a01b031614158015610ceb575060013360009081526019602052604090205460ff166003811115610ce857610ce8611f77565b14155b15610d09576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038116610d305760405163128df0bf60e21b815260040160405180910390fd5b6001600160a01b038082166000908152601a6020908152604091829020825160c081018452815460ff808216151580845261010083049091161515948301949094526201000090048516938101939093526001810154841660608401526002810154909316608083015260039092015460a082015290610dc357604051633fb36f5d60e01b815260040160405180910390fd5b6001600160a01b0382166000818152601a6020908152604091829020805461ffff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a25050565b336000908152601a6020908152604091829020825160c081018452815460ff80821615158352610100820416151593820193909352620100009092046001600160a01b0390811693830184905260018201548116606084015260028201541660808301526003015460a082015290151580610ea3575060608101516001600160a01b031615155b80610eba575060808101516001600160a01b031615155b80610ec9575060008160a00151115b15610ee757604051630efdad3160e11b815260040160405180910390fd5b6001600160a01b038316610ef9573392505b610f0533846000611291565b6001600160a01b03821615610f2057610f20338360006116bb565b60405133907f2622745e83f97f2d871ef785497c1eeba6f9bb94c7dd486cf28228e814d929e490600090a2505050565b33610f59611263565b6001600160a01b031614158015610f94575060033360009081526019602052604090205460ff166003811115610f9157610f91611f77565b14155b15610fb257604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b038082166000908152601a6020908152604091829020825160c081018452815460ff808216158015808552610100840490921615159584019590955262010000909104861694820194909452600182015485166060820152600282015490941660808501526003015460a084015290611037575061103561174f565b155b15611055576040516375befccb60e01b815260040160405180910390fd5b8060200151156110785760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0382166000818152601a6020908152604091829020805461ff001916610100179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c9101610b77565b336110dc611263565b6001600160a01b031614158015611117575060013360009081526019602052604090205460ff16600381111561111457611114611f77565b14155b15611135576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b03811661115c5760405163e05f2dcd60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff1615611196576040516333869b9d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601a6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a250565b6001600160a01b038083166000908152601a60205260409020548391620100009091041633146112335760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038084166000908152601a602052604090206001015461125e9185918591166116bb565b505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b816001600160a01b0316816001600160a01b0316036112c3576040516309a3ec2160e11b815260040160405180910390fd5b6001600160a01b038381166000818152601a6020526040808220805462010000600160b01b031916620100008887169081029190911790915590519093851692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a4505050565b6001600160a01b038181166000908152601a60205260409020600101541680156113565780611358565b825b90506001600160a01b0381166113815760405163516101e760e11b815260040160405180910390fd5b846000036113a25760405163606ab7a160e11b815260040160405180910390fd5b60006113ad85611776565b905060006113c382602001518360000151611795565b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220549091508781101561140d57604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220888203905561144287858a6117d7565b604080516001600160a01b0386811682528981166020830152918101849052606081018a9052336080820152908616907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a25050505050505050565b6001600160a01b0381166114d0576040516339773cbf60e21b815260040160405180910390fd5b826000036114f157604051632a24141960e01b815260040160405180910390fd5b6000806114fd84611816565b9150915061150961174f565b15801561152f57506001600160a01b0383166000908152601a602052604090205460ff16155b1561154d57604051631464c65f60e31b815260040160405180910390fd5b815160045463ffffffff918216911603611619576040516370a0823160e01b815230600482015260009086906001600160a01b038716906370a0823190602401602060405180830381865afa1580156115aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ce9190611fef565b6115d89190612008565b60008381526007602052604090205490915080158015906115f857508082115b1561161657604051638ada373160e01b815260040160405180910390fd5b50505b611623848661189a565b6001600160a01b038084166000908152600e602090815260408083209388168352929052908120805487929061165a908490612008565b9091555050604080516001600160a01b03868116825260208201849052918101879052336060820152908416907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a25050505050565b816001600160a01b0316816001600160a01b0316036116ed57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038381166000818152601a602052604080822060010180546001600160a01b03191687861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a4505050565b60008061175a611263565b6001600160a01b03161480611771575060155460ff165b905090565b6040805180820190915260008082526020820152610a1d8260006119da565b600082826040516020016117b992919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b806000036117e457505050565b6001600160a01b03831661180b57604051633a48ca7b60e11b815260040160405180910390fd5b61125e838383611ad3565b604080518082019091526000808252602082015260008061183684611776565b9050600061184c82602001518360000151611795565b9050611856611b36565b158015611872575060008181526006602052604090205460ff16155b156118905760405163d7ad34f160e01b815260040160405180910390fd5b9094909350915050565b806000036118a6575050565b6001600160a01b0382166118cd57604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015611914573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119389190611fef565b905061194683333085611b5b565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa15801561198e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b29190611fef565b6119bc9190611fa3565b1461125e57604051630e40773560e21b815260040160405180910390fd5b604080518082019091526000808252602082015260408051808201909152600080825260208201526001600160a01b038416611a17579050610a1d565b506001600160a01b03831660009081526008830160209081526040918290208251808401909352805463ffffffff168084526001909101549183019190915215611a62579050610a1d565b611a6c8484611b99565b15611a9257600483015463ffffffff1681526001600160a01b0384166020820152611acc565b506001600160a01b03831660009081526009830160209081526040918290208251808401909352805463ffffffff16835260010154908201525b9392505050565b6040516001600160a01b03831660248201526044810182905261125e90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611bcf565b600080611b41611263565b6001600160a01b0316148061177157505060175460ff1690565b6040516001600160a01b0380851660248301528316604482015260648101829052611b939085906323b872dd60e01b90608401611aff565b50505050565b6001600160a01b038216600090815260098201602052604081205463ffffffff1615611bc757506000610a1d565b50503b151590565b6000611c24826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ca69092919063ffffffff16565b80519091501561125e5780806020019051810190611c42919061201b565b61125e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060611cb58484600085611cbd565b949350505050565b606082471015611d1e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611c9d565b600080866001600160a01b03168587604051611d3a9190612061565b60006040518083038185875af1925050503d8060008114611d77576040519150601f19603f3d011682016040523d82523d6000602084013e611d7c565b606091505b5091509150611d8d87838387611d98565b979650505050505050565b60608315611e07578251600003611e00576001600160a01b0385163b611e005760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611c9d565b5081611cb5565b611cb58383815115611e1c5781518083602001fd5b8060405162461bcd60e51b8152600401611c9d919061207d565b6001600160a01b0381168114611e4b57600080fd5b50565b600060208284031215611e6057600080fd5b8135611acc81611e36565b60008060008060808587031215611e8157600080fd5b843593506020850135611e9381611e36565b92506040850135611ea381611e36565b91506060850135611eb381611e36565b939692955090935050565b60008060408385031215611ed157600080fd5b8235611edc81611e36565b91506020830135611eec81611e36565b809150509250929050565b600080600060608486031215611f0c57600080fd5b833592506020840135611f1e81611e36565b91506040840135611f2e81611e36565b809150509250925092565b60008060408385031215611f4c57600080fd5b823591506020830135611eec81611e36565b600060208284031215611f7057600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610a1d57610a1d611f8d565b8082028115828204841417610a1d57610a1d611f8d565b600082611fea57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561200157600080fd5b5051919050565b80820180821115610a1d57610a1d611f8d565b60006020828403121561202d57600080fd5b81518015158114611acc57600080fd5b60005b83811015612058578181015183820152602001612040565b50506000910152565b6000825161207381846020870161203d565b9190910192915050565b602081526000825180602084015261209c81604085016020870161203d565b601f01601f1916919091016040019291505056fea264697066735822122036fb92f3498067f0525c217fd762a359cf97fdb44664162ccfddac1ba9d0582264736f6c63430008110033";

type RoutersFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoutersFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoutersFacet__factory extends ContractFactory {
  constructor(...args: RoutersFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoutersFacet> {
    return super.deploy(overrides || {}) as Promise<RoutersFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoutersFacet {
    return super.attach(address) as RoutersFacet;
  }
  override connect(signer: Signer): RoutersFacet__factory {
    return super.connect(signer) as RoutersFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoutersFacetInterface {
    return new utils.Interface(_abi) as RoutersFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoutersFacet {
    return new Contract(address, _abi, signerOrProvider) as RoutersFacet;
  }
}
