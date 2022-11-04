/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  PortalFacet,
  PortalFacetInterface,
} from "../../../../../contracts/core/connext/facets/PortalFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getTokenIndexFromStableSwapPool_notExist",
    type: "error",
  },
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
    name: "PortalFacet__repayAavePortalFor_zeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_swapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__setAavePortalFee_invalidFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AavePortalRepayment",
    type: "event",
  },
  {
    inputs: [],
    name: "aavePool",
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
    name: "aavePortalFee",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalDebt",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalFeeDebt",
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
        components: [
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
        ],
        internalType: "struct TransferInfo",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIn",
        type: "uint256",
      },
    ],
    name: "repayAavePortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
        ],
        internalType: "struct TransferInfo",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    name: "repayAavePortalFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aavePool",
        type: "address",
      },
    ],
    name: "setAavePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aavePortalFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setAavePortalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120b8806100206000396000f3fe60806040526004361061007b5760003560e01c8063a03e4bc31161004e578063a03e4bc314610115578063b3f62fcb1461014b578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e25780636a39b95d14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611b00565b60009081526025602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b35565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611b00565b610260565b6100e0610110366004611b69565b610313565b34801561012157600080fd5b5060235461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561015757600080fd5b506100e0610166366004611bb7565b6103cd565b34801561017757600080fd5b506100ad610186366004611b00565b60009081526026602052604090205490565b3480156101a457600080fd5b506024546100ad565b336101df7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b03161415801561021a575060033360009081526019602052604090205460ff16600381111561021757610217611c0b565b14155b1561023857604051637b32c26b60e01b815260040160405180910390fd5b602380546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102927fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b0316141580156102cd575060033360009081526019602052604090205460ff1660038111156102ca576102ca611c0b565b14155b156102eb57604051637b32c26b60e01b815260040160405180910390fd5b61271081111561030e5760405163f48157d160e01b815260040160405180910390fd5b602455565b6020546001190161033757604051637ce54e2d60e11b815260040160405180910390fd5b6002602055600061036461035f61018086013561035a6060880160408901611c35565b61051e565b610561565b9050600061037961037486611d39565b610597565b905060006103878486611e45565b9050806000036103aa576040516330d5e3e360e11b815260040160405180910390fd5b6103b483826105c7565b6103c08386868561070c565b5050600160205550505050565b602054600119016103f157604051637ce54e2d60e11b815260040160405180910390fd5b6002602055600061041161018086013561035a6060880160408901611c35565b905060006104348261018088013561042f60608a0160408b01611c35565b610861565b336000908152600e602090815260408083206001600160a01b038516845290915290205490915083111561047b5760405163badaeb5960e01b815260040160405180910390fd5b600061048961037488611d39565b9050600080806104a4868661049e8b8d611e45565b8a61087a565b925092509250826104c8576040516379a3a9f160e01b815260040160405180910390fd5b336000908152600e602090815260408083206001600160a01b0389168452909152812080548492906104fb908490611e5d565b9091555061050d9050818a8a8761070c565b505060016020555050505050505050565b6000828260405160200161054292919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000818152600a60205260408120546001600160a01b03168061055b57604051634cdfde3760e11b815260040160405180910390fd5b6000816040516020016105aa9190611ecc565b604051602081830303815290604052805190602001209050919050565b806000036105d3575050565b6001600160a01b0382166105fa57604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190611fc6565b9050610673833330856108d4565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa1580156106bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106df9190611fc6565b6106e99190611e5d565b1461070757604051630e40773560e21b815260040160405180910390fd5b505050565b6000818152602560205260408120805485929061072a908490611e5d565b90915550506000818152602660205260408120805484929061074d908490611e5d565b909155505060235461077090859061010090046001600160a01b03166000610945565b60235461079690859061010090046001600160a01b03166107918587611e45565b610a5f565b60235460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b1580156107f157600080fd5b505af1158015610805573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b60006108708484846000610b11565b90505b9392505050565b6000848152600a60205260408120548190819081906001600160a01b0390811690881681036108b4576001878994509450945050506108ca565b6108c18989838a8a610b54565b94509450945050505b9450945094915050565b6040516001600160a01b038085166024830152831660448201526064810182905261093f9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d25565b50505050565b8015806109bf5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610999573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bd9190611fc6565b155b610a2f5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b03831660248201526044810182905261070790849063095ea7b360e01b90606401610908565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610ab0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad49190611fc6565b610ade9190611e45565b6040516001600160a01b03851660248201526044810182905290915061093f90859063095ea7b360e01b90606401610908565b600481015460009063ffffffff90811690841603610b30575082610b4c565b506000848152600b820160205260409020546001600160a01b03165b949350505050565b600085815260216020526040812060088101548291869183919015610bbc576000610b7f8b8b610df7565b90506000610b8d8c8b610df7565b9050610b9b8383838c610e77565b8810610bb55760019650610bb28383838c8c610ee2565b95505b5050610d18565b60008a815260058301602052604080822054905163f9a15fb960e01b81526001600160a01b038c811660048301528b81166024830152604482018b90529091169190829063f9a15fb990606401602060405180830381865afa158015610c26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4a9190611fc6565b9050878111610d155760019650610c638b836000610945565b610c6e8b8383610a5f565b6001600160a01b038216635428c1178a8d8d8c610c8d42610e10611e45565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610cee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d129190611fc6565b95505b50505b5050955095509592505050565b6000610d7a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111a59092919063ffffffff16565b8051909150156107075780806020019051810190610d989190611fdf565b6107075760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610a26565b60008281526022602090815260408083206001600160a01b0385168085529083528184205486855260219093529083206008018054849360ff1692919083908110610e4457610e44611ffc565b6000918252602090912001546001600160a01b031614610b4c5760405163054e442960e41b815260040160405180910390fd5b6000610ed88585858589600a01805480602002602001604051908101604052809291908181526020018280548015610ece57602002820191906000526020600020905b815481526020019060010190808311610eba575b50505050506111b4565b5095945050505050565b600085600a018460ff1681548110610efc57610efc611ffc565b9060005260206000200154831115610f4f5760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b6044820152606401610a26565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610fa257602002820191906000526020600020905b815481526020019060010190808311610f8e575b50505050509050610fb689898989856111b4565b909350915084831115610ff85760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b6044820152606401610a26565b6000896009018960ff168154811061101257611012611ffc565b90600052602060002001546402540be4008b60060154856110339190612012565b61103d9190612031565b6110479190612031565b90508084838b60ff168151811061106057611060611ffc565b60200260200101516110729190611e45565b61107c9190611e5d565b8a600a018a60ff168154811061109457611094611ffc565b906000526020600020018190555086828960ff16815181106110b8576110b8611ffc565b60200260200101516110ca9190611e5d565b8a600a018960ff16815481106110e2576110e2611ffc565b600091825260209091200155801561114757808a600b018a60ff168154811061110d5761110d611ffc565b90600052602060002001546111229190611e45565b8a600b018a60ff168154811061113a5761113a611ffc565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b606061087084846000856113fe565b6000808460ff168660ff160361120c5760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c660000000000000000006044820152606401610a26565b60008760090180548060200260200160405190810160405280929190818152602001828054801561125c57602002820191906000526020600020905b815481526020019060010190808311611248575b50505050509050600061126f858361152f565b905080518860ff16108015611287575080518760ff16105b6112c85760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b6044820152606401610a26565b60006112d38a61163a565b905060006112e18383611645565b9050838960ff16815181106112f8576112f8611ffc565b60200260200101518861130b9190612012565b838a60ff168151811061132057611320611ffc565b60200260200101516113329190611e5d565b838a60ff168151811061134757611347611ffc565b6020026020010181815250506000611361838c86856117f2565b9050838b60ff168151811061137857611378611ffc565b60200260200101518161138b9190611e5d565b611396906001611e45565b96506402540be4008c60050154886113ae9190612012565b6113b89190612031565b9550848b60ff16815181106113cf576113cf611ffc565b602002602001015186886113e39190611e45565b6113ed9190612031565b965050505050509550959350505050565b60608247101561145f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610a26565b6001600160a01b0385163b6114b65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a26565b600080866001600160a01b031685876040516114d29190612053565b60006040518083038185875af1925050503d806000811461150f576040519150601f19603f3d011682016040523d82523d6000602084013e611514565b606091505b50915091506115248282866119e1565b979650505050505050565b8151815160609190811461157c5760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b6044820152606401610a26565b60008167ffffffffffffffff81111561159757611597611c50565b6040519080825280602002602001820160405280156115c0578160200160208202803683370190505b50905060005b82811015611631578481815181106115e0576115e0611ffc565b60200260200101518682815181106115fa576115fa611ffc565b602002602001015161160c9190612012565b82828151811061161e5761161e611ffc565b60209081029190910101526001016115c6565b50949350505050565b600061055b82611a1a565b815160009081805b828110156116845785818151811061166757611667611ffc565b60200260200101518261167a9190611e45565b915060010161164d565b50806000036116985760009250505061055b565b600081816116a68588612012565b905060005b6101008110156117b3578260005b8781101561170457878b82815181106116d4576116d4611ffc565b60200260200101516116e69190612012565b6116f08684612012565b6116fa9190612031565b91506001016116b9565b50839450808760016117169190611e45565b6117209190612012565b60648561172d8287611e5d565b6117379190612012565b6117419190612031565b61174b9190611e45565b846117568984612012565b60646117628a88612012565b61176c9190612031565b6117769190611e45565b6117809190612012565b61178a9190612031565b93506117968486611ac4565b156117aa578397505050505050505061055b565b506001016116ab565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b6044820152606401610a26565b815160009060ff8516811161183b5760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b6044820152606401610a26565b82600080611849848a612012565b905060005b848110156118cb578860ff1681146118c35787818151811061187257611872611ffc565b6020026020010151836118859190611e45565b92508488828151811061189a5761189a611ffc565b60200260200101516118ac9190612012565b6118b68886612012565b6118c09190612031565b93505b60010161184e565b506118d68482612012565b60646118e28886612012565b6118ec9190612012565b6118f69190612031565b9250600081611906606489612012565b6119109190612031565b61191a9084611e45565b9050600087815b61010081101561199857819250898483600261193d9190612012565b6119479190611e45565b6119519190611e5d565b8761195c8480612012565b6119669190611e45565b6119709190612031565b915061197c8284611ac4565b1561199057509650610b4c95505050505050565b600101611921565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e766572676500006044820152606401610a26565b606083156119f0575081610873565b825115611a005782518084602001fd5b8160405162461bcd60e51b8152600401610a26919061206f565b600481015460028201546000919042821115610873576003840154600185015480831115611a8857611a4c8285611e5d565b611a568342611e5d565b611a608386611e5d565b611a6a9190612012565b611a749190612031565b611a7e9082611e45565b9695505050505050565b611a928285611e5d565b611a9c8342611e5d565b611aa68584611e5d565b611ab09190612012565b611aba9190612031565b611a7e9082611e5d565b60006001611ad28484611adb565b11159392505050565b600081831115611af657611aef8284611e5d565b905061055b565b6108738383611e5d565b600060208284031215611b1257600080fd5b5035919050565b80356001600160a01b0381168114611b3057600080fd5b919050565b600060208284031215611b4757600080fd5b61087382611b19565b60006101a08284031215611b6357600080fd5b50919050565b600080600060608486031215611b7e57600080fd5b833567ffffffffffffffff811115611b9557600080fd5b611ba186828701611b50565b9660208601359650604090950135949350505050565b60008060008060808587031215611bcd57600080fd5b843567ffffffffffffffff811115611be457600080fd5b611bf087828801611b50565b97602087013597506040870135966060013595509350505050565b634e487b7160e01b600052602160045260246000fd5b803563ffffffff81168114611b3057600080fd5b600060208284031215611c4757600080fd5b61087382611c21565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611c8a57611c8a611c50565b60405290565b8015158114611c9e57600080fd5b50565b8035611b3081611c90565b600082601f830112611cbd57600080fd5b813567ffffffffffffffff80821115611cd857611cd8611c50565b604051601f8301601f19908116603f01168101908282118183101715611d0057611d00611c50565b81604052838152866020858801011115611d1957600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006101a08236031215611d4c57600080fd5b611d54611c66565b611d5d83611c21565b8152611d6b60208401611c21565b6020820152611d7c60408401611c21565b6040820152611d8d60608401611b19565b6060820152611d9e60808401611b19565b6080820152611daf60a08401611ca1565b60a082015260c083013567ffffffffffffffff811115611dce57600080fd5b611dda36828601611cac565b60c08301525060e083013560e0820152610100611df8818501611b19565b9082015261012083810135908201526101408084013590820152610160808401359082015261018092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b60008219821115611e5857611e58611e2f565b500190565b600082821015611e6f57611e6f611e2f565b500390565b60005b83811015611e8f578181015183820152602001611e77565b8381111561093f5750506000910152565b60008151808452611eb8816020860160208601611e74565b601f01601f19169290920160200192915050565b60208152611ee360208201835163ffffffff169052565b60006020830151611efc604084018263ffffffff169052565b50604083015163ffffffff811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a083015180151560c08401525060c08301516101a08060e0850152611f636101c0850183611ea0565b60e086015161010086810191909152860151909250610120611f8f818701836001600160a01b03169052565b8601516101408681019190915286015161016080870191909152860151610180808701919091529095015193019290925250919050565b600060208284031215611fd857600080fd5b5051919050565b600060208284031215611ff157600080fd5b815161087381611c90565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561202c5761202c611e2f565b500290565b60008261204e57634e487b7160e01b600052601260045260246000fd5b500490565b60008251612065818460208701611e74565b9190910192915050565b6020815260006108736020830184611ea056fea2646970667358221220b76ce2e8a1fcf5821fedd94d8203c26c5cbb6487a32a3f3b7db2a7f0d2215c3664736f6c634300080f0033";

type PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PortalFacet__factory extends ContractFactory {
  constructor(...args: PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PortalFacet> {
    return super.deploy(overrides || {}) as Promise<PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PortalFacet {
    return super.attach(address) as PortalFacet;
  }
  override connect(signer: Signer): PortalFacet__factory {
    return super.connect(signer) as PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PortalFacetInterface {
    return new utils.Interface(_abi) as PortalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as PortalFacet;
  }
}
