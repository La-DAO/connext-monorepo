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
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
  "0x608060405234801561001057600080fd5b50611f21806100206000396000f3fe60806040526004361061007b5760003560e01c8063a03e4bc31161004e578063a03e4bc314610115578063b3f62fcb1461014b578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e25780636a39b95d14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611982565b60009081526023602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db3660046119b7565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611982565b610237565b6100e06101103660046119eb565b6102c1565b34801561012157600080fd5b5060215461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561015757600080fd5b506100e0610166366004611a39565b61037b565b34801561017757600080fd5b506100ad610186366004611982565b60009081526024602052604090205490565b3480156101a457600080fd5b506022546100ad565b336101b66104a2565b6001600160a01b0316141580156101f157506003336000908152601b602052604090205460ff1660038111156101ee576101ee611a8d565b14155b1561020f57604051637b32c26b60e01b815260040160405180910390fd5b602180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102406104a2565b6001600160a01b03161415801561027b57506003336000908152601b602052604090205460ff16600381111561027857610278611a8d565b14155b1561029957604051637b32c26b60e01b815260040160405180910390fd5b6127108111156102bc5760405163f48157d160e01b815260040160405180910390fd5b602255565b601d54600119016102e557604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55600061031261030d6101808601356103086060880160408901611ab7565b6104be565b610501565b9050600061032761032286611bbb565b610537565b905060006103358486611cc7565b905080600003610358576040516330d5e3e360e11b815260040160405180910390fd5b6103628382610567565b61036e838686856106ac565b50506001601d5550505050565b601d546001190161039f57604051637ce54e2d60e11b815260040160405180910390fd5b6002601d5560006103bf6101808601356103086060880160408901611ab7565b905060006103e2826101808801356103dd60608a0160408b01611ab7565b610801565b336000908152600f602090815260408083206001600160a01b03851684529091529020549091508381101561042a5760405163badaeb5960e01b815260040160405180910390fd5b600061043861032289611bbb565b9050600080610452868661044c8b8d611cc7565b8a610818565b90925090506104618285611cda565b336000908152600f602090815260408083206001600160a01b038a168452909152902055610491818a8a866106ac565b50506001601d555050505050505050565b60006104ac610868565b600401546001600160a01b0316919050565b600082826040516020016104e292919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000818152600b60205260408120546001600160a01b0316806104fb57604051634cdfde3760e11b815260040160405180910390fd5b60008160405160200161054a9190611d3d565b604051602081830303815290604052805190602001209050919050565b80600003610573575050565b6001600160a01b03821661059a57604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190611e37565b905061061383333085610896565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa15801561065b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067f9190611e37565b6106899190611cda565b146106a757604051630e40773560e21b815260040160405180910390fd5b505050565b600081815260236020526040812080548592906106ca908490611cda565b9091555050600081815260246020526040812080548492906106ed908490611cda565b909155505060215461071090859061010090046001600160a01b03166000610907565b60215461073690859061010090046001600160a01b03166107318587611cc7565b610a21565b60215460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b15801561079157600080fd5b505af11580156107a5573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b60006108108484846000610ad3565b949350505050565b6000848152600b6020526040812054819081906001600160a01b03908116908716810361084b57859350915061085f9050565b6108588888838989610b11565b9350935050505b94509492505050565b6000806104fb60017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c611cda565b6040516001600160a01b03808516602483015283166044820152606481018290526109019085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c59565b50505050565b8015806109815750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097f9190611e37565b155b6109f15760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b0383166024820152604481018290526106a790849063095ea7b360e01b906064016108ca565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610a72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a969190611e37565b610aa09190611cc7565b6040516001600160a01b03851660248201526044810182905290915061090190859063095ea7b360e01b906064016108ca565b600481015460009063ffffffff90811690841603610af2575082610810565b506000938452600c01602052505060409020546001600160a01b031690565b6000858152601f6020526040812060088101548291829115610b5a57610b4e610b3a8a8a610d2b565b610b448b8a610d2b565b8391908989610da9565b87935093505050610c4f565b60008981526005830160205260408120546001600160a01b031690610b82908a908390610907565b610b8d898288610a21565b60006001600160a01b038216635428c117898c8c8b610bae42610e10611cc7565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610c0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c339190611e37565b9050610c418a836000610907565b9450879350610c4f92505050565b9550959350505050565b6000610cae826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661106c9092919063ffffffff16565b8051909150156106a75780806020019051810190610ccc9190611e50565b6106a75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109e8565b6000828152602080805260408083206001600160a01b03851680855290835281842054868552601f9093529083206008018054849360ff1692919083908110610d7657610d76611e6d565b6000918252602090912001546001600160a01b0316146108105760405163054e442960e41b815260040160405180910390fd5b600085600a018460ff1681548110610dc357610dc3611e6d565b9060005260206000200154831115610e165760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b60448201526064016109e8565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610e6957602002820191906000526020600020905b815481526020019060010190808311610e55575b50505050509050610e7d898989898561107b565b909350915084831115610ebf5760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b60448201526064016109e8565b6000896009018960ff1681548110610ed957610ed9611e6d565b90600052602060002001546402540be4008b6006015485610efa9190611e83565b610f049190611e9a565b610f0e9190611e9a565b90508084838b60ff1681518110610f2757610f27611e6d565b6020026020010151610f399190611cc7565b610f439190611cda565b8a600a018a60ff1681548110610f5b57610f5b611e6d565b906000526020600020018190555086828960ff1681518110610f7f57610f7f611e6d565b6020026020010151610f919190611cda565b8a600a018960ff1681548110610fa957610fa9611e6d565b600091825260209091200155801561100e57808a600b018a60ff1681548110610fd457610fd4611e6d565b9060005260206000200154610fe99190611cc7565b8a600b018a60ff168154811061100157611001611e6d565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b606061081084846000856112c6565b6000808460ff168660ff16036110d35760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c6600000000000000000060448201526064016109e8565b60008760090180548060200260200160405190810160405280929190818152602001828054801561112357602002820191906000526020600020905b81548152602001906001019080831161110f575b50505050509050600061113685836113a1565b905080518860ff1610801561114e575080518760ff16105b61118f5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016109e8565b600061119a8a6114ac565b905060006111a883836114b7565b9050838960ff16815181106111bf576111bf611e6d565b6020026020010151886111d29190611e83565b838a60ff16815181106111e7576111e7611e6d565b60200260200101516111f99190611cda565b838a60ff168151811061120e5761120e611e6d565b6020026020010181815250506000611228838c8685611664565b9050838b60ff168151811061123f5761123f611e6d565b60200260200101518160016112549190611cc7565b61125e9190611cda565b96506402540be4008c60050154886112769190611e83565b6112809190611e9a565b9550848b60ff168151811061129757611297611e6d565b602002602001015186886112ab9190611cc7565b6112b59190611e9a565b965050505050509550959350505050565b6060824710156113275760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016109e8565b600080866001600160a01b031685876040516113439190611ebc565b60006040518083038185875af1925050503d8060008114611380576040519150601f19603f3d011682016040523d82523d6000602084013e611385565b606091505b509150915061139687838387611853565b979650505050505050565b815181516060919081146113ee5760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b60448201526064016109e8565b60008167ffffffffffffffff81111561140957611409611ad2565b604051908082528060200260200182016040528015611432578160200160208202803683370190505b50905060005b828110156114a35784818151811061145257611452611e6d565b602002602001015186828151811061146c5761146c611e6d565b602002602001015161147e9190611e83565b82828151811061149057611490611e6d565b6020908102919091010152600101611438565b50949350505050565b60006104fb826118cc565b815160009081805b828110156114f6578581815181106114d9576114d9611e6d565b6020026020010151826114ec9190611cc7565b91506001016114bf565b508060000361150a576000925050506104fb565b600081816115188588611e83565b905060005b610100811015611625578260005b8781101561157657878b828151811061154657611546611e6d565b60200260200101516115589190611e83565b6115628684611e83565b61156c9190611e9a565b915060010161152b565b50839450808760016115889190611cc7565b6115929190611e83565b60648561159f8287611cda565b6115a99190611e83565b6115b39190611e9a565b6115bd9190611cc7565b846115c88984611e83565b60646115d48a88611e83565b6115de9190611e9a565b6115e89190611cc7565b6115f29190611e83565b6115fc9190611e9a565b93506116088486611915565b1561161c57839750505050505050506104fb565b5060010161151d565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b60448201526064016109e8565b815160009060ff851681116116ad5760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b60448201526064016109e8565b826000806116bb848a611e83565b905060005b8481101561173d578860ff168114611735578781815181106116e4576116e4611e6d565b6020026020010151836116f79190611cc7565b92508488828151811061170c5761170c611e6d565b602002602001015161171e9190611e83565b6117288886611e83565b6117329190611e9a565b93505b6001016116c0565b506117488482611e83565b60646117548886611e83565b61175e9190611e83565b6117689190611e9a565b9250600081611778606489611e83565b6117829190611e9a565b61178c9084611cc7565b9050600087815b61010081101561180a5781925089848360026117af9190611e83565b6117b99190611cc7565b6117c39190611cda565b876117ce8480611e83565b6117d89190611cc7565b6117e29190611e9a565b91506117ee8284611915565b156118025750965061081095505050505050565b600101611793565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e7665726765000060448201526064016109e8565b606083156118c25782516000036118bb576001600160a01b0385163b6118bb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109e8565b5081610810565b610810838361192c565b6004810154600282015460018301549091908083148015906118ed57508142105b1561190e576000846003015490508083038142038502428503840201049350505b5050919050565b600060016119238484611956565b11159392505050565b81511561193c5781518083602001fd5b8060405162461bcd60e51b81526004016109e89190611ed8565b6000818311156119715761196a8284611cda565b90506104fb565b61197b8383611cda565b9392505050565b60006020828403121561199457600080fd5b5035919050565b80356001600160a01b03811681146119b257600080fd5b919050565b6000602082840312156119c957600080fd5b61197b8261199b565b60006101a082840312156119e557600080fd5b50919050565b600080600060608486031215611a0057600080fd5b833567ffffffffffffffff811115611a1757600080fd5b611a23868287016119d2565b9660208601359650604090950135949350505050565b60008060008060808587031215611a4f57600080fd5b843567ffffffffffffffff811115611a6657600080fd5b611a72878288016119d2565b97602087013597506040870135966060013595509350505050565b634e487b7160e01b600052602160045260246000fd5b803563ffffffff811681146119b257600080fd5b600060208284031215611ac957600080fd5b61197b82611aa3565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611b0c57611b0c611ad2565b60405290565b8015158114611b2057600080fd5b50565b80356119b281611b12565b600082601f830112611b3f57600080fd5b813567ffffffffffffffff80821115611b5a57611b5a611ad2565b604051601f8301601f19908116603f01168101908282118183101715611b8257611b82611ad2565b81604052838152866020858801011115611b9b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006101a08236031215611bce57600080fd5b611bd6611ae8565b611bdf83611aa3565b8152611bed60208401611aa3565b6020820152611bfe60408401611aa3565b6040820152611c0f6060840161199b565b6060820152611c206080840161199b565b6080820152611c3160a08401611b23565b60a082015260c083013567ffffffffffffffff811115611c5057600080fd5b611c5c36828601611b2e565b60c08301525060e083013560e0820152610100611c7a81850161199b565b9082015261012083810135908201526101408084013590820152610160808401359082015261018092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b808201808211156104fb576104fb611cb1565b818103818111156104fb576104fb611cb1565b60005b83811015611d08578181015183820152602001611cf0565b50506000910152565b60008151808452611d29816020860160208601611ced565b601f01601f19169290920160200192915050565b60208152611d5460208201835163ffffffff169052565b60006020830151611d6d604084018263ffffffff169052565b50604083015163ffffffff811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a083015180151560c08401525060c08301516101a08060e0850152611dd46101c0850183611d11565b60e086015161010086810191909152860151909250610120611e00818701836001600160a01b03169052565b8601516101408681019190915286015161016080870191909152860151610180808701919091529095015193019290925250919050565b600060208284031215611e4957600080fd5b5051919050565b600060208284031215611e6257600080fd5b815161197b81611b12565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176104fb576104fb611cb1565b600082611eb757634e487b7160e01b600052601260045260246000fd5b500490565b60008251611ece818460208701611ced565b9190910192915050565b60208152600061197b6020830184611d1156fea2646970667358221220c0e1f3d9ed8cc917f3c2f9303afcadd1c54e9013f15752dffdcc7116d795583e64736f6c63430008110033";

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
