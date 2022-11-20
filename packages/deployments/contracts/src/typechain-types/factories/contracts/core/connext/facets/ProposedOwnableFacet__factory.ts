/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ProposedOwnableFacet,
  ProposedOwnableFacetInterface,
} from "../../../../../contracts/core/connext/facets/ProposedOwnableFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
    name: "ProposedOwnableFacet__acceptProposedOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleAdmin_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleRouter_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleWatcher_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__delayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeAssetAllowlistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeRouterAllowlistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetAllowlist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetAllowlist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterAllowlist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterAllowlist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__revokeRole_invalidInput",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssetAllowlistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "AssetAllowlistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AssignRoleAdmin",
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
    ],
    name: "AssignRoleRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "AssignRoleWatcher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "revokedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Role",
        name: "revokedRole",
        type: "uint8",
      },
    ],
    name: "RevokeRole",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RouterAllowlistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "RouterAllowlistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetAllowlistRemoved",
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
    inputs: [],
    name: "assetAllowlistTimestamp",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "assignRoleAdmin",
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
    name: "assignRoleRouterAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "assignRoleWatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeAssetAllowlistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeRouterAllowlistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    inputs: [],
    name: "proposedTimestamp",
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
        name: "_role",
        type: "address",
      },
    ],
    name: "queryRole",
    outputs: [
      {
        internalType: "enum Role",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeAssetAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeRouterAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_revoke",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerAllowlistRemoved",
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
    inputs: [],
    name: "routerAllowlistTimestamp",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fd8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638da5cb5b116100b8578063c24250c91161007c578063c24250c914610223578063c56ce3581461022b578063c5b350df14610233578063c91cb56a1461023b578063d1851c9214610274578063e7ef6c6b1461028557600080fd5b80638da5cb5b146101c2578063a9943b1b146101e2578063b1f8100d146101f5578063b49c204714610208578063bb271a271461021057600080fd5b80633f4ba83a116100ff5780633f4ba83a146101805780636a42b8f8146101885780636be557851461019057806380e52e3f146101a75780638456cb59146101ba57600080fd5b8063122329371461013c57806323986f7d146101535780632547fdb31461015d5780632ec0c002146101655780633cf52ffb14610178575b600080fd5b6018545b6040519081526020015b60405180910390f35b61015b610290565b005b61015b610379565b61015b610173366004610ee8565b61045f565b601654610140565b61015b61057b565b610140610615565b60175460ff165b604051901515815260200161014a565b61015b6101b5366004610ee8565b610644565b61015b610764565b6101ca610804565b6040516001600160a01b03909116815260200161014a565b61015b6101f0366004610ee8565b61080e565b61015b610203366004610ee8565b610923565b61015b6109d6565b61015b61021e366004610ee8565b610a65565b601a54610140565b61015b610b79565b61015b610c07565b610267610249366004610ee8565b6001600160a01b03166000908152601b602052604090205460ff1690565b60405161014a9190610f50565b6015546001600160a01b03166101ca565b60195460ff16610197565b33610299610cb5565b6001600160a01b0316141580156102d457506003336000908152601b602052604090205460ff1660038111156102d1576102d1610f18565b14155b156102f257604051637b32c26b60e01b815260040160405180910390fd5b6018546102fd610615565b6103078242610f64565b1161032557604051637f0369a960e11b815260040160405180910390fd5b60175460ff161561034957604051634b4da55560e01b815260040160405180910390fd5b60185460000361036c576040516368ad12e160e11b815260040160405180910390fd5b6103766001610ce3565b50565b33610382610cb5565b6001600160a01b0316141580156103bd57506003336000908152601b602052604090205460ff1660038111156103ba576103ba610f18565b14155b156103db57604051637b32c26b60e01b815260040160405180910390fd5b601a546103e6610615565b6103f08242610f64565b1161040e57604051637f0369a960e11b815260040160405180910390fd5b60195460ff16156104325760405163c1b5b1ab60e01b815260040160405180910390fd5b601a546000036104555760405163299edfe760e21b815260040160405180910390fd5b6103766001610d29565b33610468610cb5565b6001600160a01b0316141580156104a357506003336000908152601b602052604090205460ff1660038111156104a0576104a0610f18565b14155b156104c157604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff1660038111156104ee576104ee610f18565b14158061050257506001600160a01b038116155b15610520576040516319f546ad60e11b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600117905590519182527ff294e68c632d2c26e3d36129816c9a3e54bfa0ebada89d07d08e15e87a8e240391015b60405180910390a150565b33610584610cb5565b6001600160a01b0316141580156105bf57506003336000908152601b602052604090205460ff1660038111156105bc576105bc610f18565b14155b156105dd57604051637b32c26b60e01b815260040160405180910390fd5b6021805460ff60a01b191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a1565b600061063f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13225490565b905090565b3361064d610cb5565b6001600160a01b03161415801561068857506003336000908152601b602052604090205460ff16600381111561068557610685610f18565b14155b156106a657604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff16908160038111156106d5576106d5610f18565b14806106e857506001600160a01b038216155b1561070657604051630e15d72960e31b815260040160405180910390fd5b6001600160a01b0382166000908152601b602052604090819020805460ff19169055517fdc6f53b47a9dfbea7a15fceef0cd84711d3d79ccc0952111866167af5e59e264906107589084908490610f85565b60405180910390a15050565b3361076d610cb5565b6001600160a01b0316141580156107a857506002336000908152601b602052604090205460ff1660038111156107a5576107a5610f18565b14155b156107c65760405163bae4c01f60e01b815260040160405180910390fd5b6021805460ff60a01b1916600160a01b1790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b600061063f610cb5565b33610817610cb5565b6001600160a01b03161415801561085257506003336000908152601b602052604090205460ff16600381111561084f5761084f610f18565b14155b1561087057604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff16600381111561089d5761089d610f18565b1415806108b157506001600160a01b038116155b156108cf57604051630bceab9d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600217905590519182527ffaac289281b8fc57dff30d0ff38b071d28bb5f24cd5ed1bd2379d6fb27f714dd9101610570565b3361092c610cb5565b6001600160a01b031614610953576040516314e74a2560e21b815260040160405180910390fd5b6015546001600160a01b038281169116148061097657506001600160a01b038116155b1561099457604051630274ac4360e21b815260040160405180910390fd5b806001600160a01b03166109a6610804565b6001600160a01b0316036109cd57604051631f677f5160e01b815260040160405180910390fd5b61037681610d6f565b336109df610cb5565b6001600160a01b031614158015610a1a57506003336000908152601b602052604090205460ff166003811115610a1757610a17610f18565b14155b15610a3857604051637b32c26b60e01b815260040160405180910390fd5b60195460ff1615610a5b576040516246817d60e11b815260040160405180910390fd5b610a63610dbd565b565b33610a6e610cb5565b6001600160a01b031614158015610aa957506003336000908152601b602052604090205460ff166003811115610aa657610aa6610f18565b14155b15610ac757604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff166003811115610af457610af4610f18565b141580610b0857506001600160a01b038116155b15610b2657604051631600e74560e31b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600317905590519182527e0a317382a4189d8763d4a024ec833785cebd3580a084ff0f887f156b822cb19101610570565b33610b82610cb5565b6001600160a01b031614158015610bbd57506003336000908152601b602052604090205460ff166003811115610bba57610bba610f18565b14155b15610bdb57604051637b32c26b60e01b815260040160405180910390fd5b60175460ff1615610bff576040516333bfb93f60e11b815260040160405180910390fd5b610a63610df9565b6015546001600160a01b03163314610c3257604051631b54eee360e11b815260040160405180910390fd5b601654610c3d610615565b610c478242610f64565b11610c6557604051637f0369a960e11b815260040160405180910390fd5b6015546001600160a01b0316610c79610804565b6001600160a01b031603610ca0576040516355cc507960e01b815260040160405180910390fd5b601554610376906001600160a01b0316610e2f565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6017805460ff191682151590811790915560006018556040519081527f7c21a455b42ac52b1f1cc1103db5afe532e817479e9503a97a734720271c5a7490602001610570565b6019805460ff19168215159081179091556000601a556040519081527fb15a6e8fba0442d4fe86da1ed901f375a5d3504f9e00fb8bba2e8c81a76a5ffb90602001610570565b42601655601580546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b42601a8190556040519081527f39f638522d497359ab159778e14870ccbb9f7166917d9f6829990deb1b7d2b20906020015b60405180910390a1565b4260188190556040519081527feb0f48d74c7254e5b55ef91a3f6e496e6a4a8676b6dae07f3d6fb0805b9fac9390602001610def565b60006016819055601580546001600160a01b03191690557fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546040516103769284927fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c926001600160a01b03808616939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610efa57600080fd5b81356001600160a01b0381168114610f1157600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b60048110610f4c57634e487b7160e01b600052602160045260246000fd5b9052565b60208101610f5e8284610f2e565b92915050565b81810381811115610f5e57634e487b7160e01b600052601160045260246000fd5b6001600160a01b038316815260408101610f116020830184610f2e56fea2646970667358221220a0e978c0fc05af15aaf184c4968c6b88516ab84b4dc8aa4005ee93968bc2cc3c64736f6c63430008110033";

type ProposedOwnableFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposedOwnableFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposedOwnableFacet__factory extends ContractFactory {
  constructor(...args: ProposedOwnableFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProposedOwnableFacet> {
    return super.deploy(overrides || {}) as Promise<ProposedOwnableFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProposedOwnableFacet {
    return super.attach(address) as ProposedOwnableFacet;
  }
  override connect(signer: Signer): ProposedOwnableFacet__factory {
    return super.connect(signer) as ProposedOwnableFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposedOwnableFacetInterface {
    return new utils.Interface(_abi) as ProposedOwnableFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProposedOwnableFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProposedOwnableFacet;
  }
}
