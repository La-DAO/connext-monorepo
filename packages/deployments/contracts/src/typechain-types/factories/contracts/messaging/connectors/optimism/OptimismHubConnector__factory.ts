/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  OptimismHubConnector,
  OptimismHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/optimism/OptimismHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_optimismPortal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2OutputOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
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
    inputs: [],
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "L2_ORACLE",
    outputs: [
      {
        internalType: "contract IL2OutputOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPTIMISM_PORTAL",
    outputs: [
      {
        internalType: "contract IOptimismPortal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    name: "acceptProposedOwner",
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
    name: "mirrorConnector",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Types.WithdrawalTransaction",
        name: "_tx",
        type: "tuple",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processed",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162001b0338038062001b038339810160408190526200003591620002f2565b8080898989898984848484846200004c33620001b1565b8463ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011b576200011b8162000216565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a3505050505050505050506200018e816200027f60201b60201c565b5050506001600160a01b0391821661010052166101205250620003919350505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620002d557600080fd5b919050565b80516001600160a01b0381168114620002d557600080fd5b600080600080600080600080610100898b0312156200031057600080fd5b6200031b89620002c0565b97506200032b60208a01620002c0565b96506200033b60408a01620002da565b95506200034b60608a01620002da565b94506200035b60808a01620002da565b93506200036b60a08a01620002da565b92506200037b60c08a01620002da565b915060e089015190509295985092959890939650565b60805160a05160c05160e05161010051610120516116e3620004206000396000818161015601528181610a760152610b6701526000818161033701526109c00152600081816101a70152610ea40152600081816102b8015281816106070152610edf01526000818161045b015281816106b701528181610d2901526110a30152600061026401526116e36000f3fe6080604052600436106101385760003560e01c80637850b020116100ab578063c5b350df1161006f578063c5b350df146103d7578063cc394283146103ec578063d1851c921461040c578063d232c2201461042a578063d69f9d6114610449578063db1b76591461047d57600080fd5b80637850b0201461030557806385734ee1146103255780638da5cb5b14610359578063b1f8100d14610377578063c1f0808a1461039757600080fd5b80634ff746f6116100fd5780634ff746f61461023257806352a9674b146102525780635bd11efc146102865780635f61e3ec146102a65780636a42b8f8146102da578063715018a6146102f057600080fd5b80621c2ff61461014457806314168416146101955780633a8ed289146101de5780633cf52ffb1461020057806348e6fa231461021f57600080fd5b3661013f57005b600080fd5b34801561015057600080fd5b506101787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101a157600080fd5b506101c97f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff909116815260200161018c565b3480156101ea57600080fd5b506101fe6101f93660046112b7565b61049d565b005b34801561020c57600080fd5b506002545b60405190815260200161018c565b6101fe61022d36600461136a565b6105fc565b34801561023e57600080fd5b506101fe61024d3660046113ce565b6106ac565b34801561025e57600080fd5b506101c97f000000000000000000000000000000000000000000000000000000000000000081565b34801561029257600080fd5b506101fe6102a136600461140b565b610752565b3480156102b257600080fd5b506101787f000000000000000000000000000000000000000000000000000000000000000081565b3480156102e657600080fd5b5062093a80610211565b3480156102fc57600080fd5b506101fe610789565b34801561031157600080fd5b506101fe61032036600461142f565b61083d565b34801561033157600080fd5b506101787f000000000000000000000000000000000000000000000000000000000000000081565b34801561036557600080fd5b506000546001600160a01b0316610178565b34801561038357600080fd5b506101fe61039236600461140b565b610871565b3480156103a357600080fd5b506103c76103b236600461142f565b60056020526000908152604090205460ff1681565b604051901515815260200161018c565b3480156103e357600080fd5b506101fe61090f565b3480156103f857600080fd5b50600354610178906001600160a01b031681565b34801561041857600080fd5b506001546001600160a01b0316610178565b34801561043657600080fd5b506000546001600160a01b0316156103c7565b34801561045557600080fd5b506101787f000000000000000000000000000000000000000000000000000000000000000081565b34801561048957600080fd5b506103c761049836600461140b565b61097f565b60208101516001600160a01b03166007602160991b01146104f15760405162461bcd60e51b815260206004820152600960248201526810b61939b2b73232b960b91b60448201526064015b60405180910390fd5b60408101516001600160a01b031630146105355760405162461bcd60e51b8152602060048201526005602482015264217468697360d81b60448201526064016104e8565b61053e81610990565b6105735760405162461bcd60e51b815260206004820152600660248201526510b83937b7b360d11b60448201526064016104e8565b60006105918260400151836080015184606001518560a00151610c27565b9050801580156105a15750326001145b156105f85760405162461bcd60e51b815260206004820152602160248201527f4f7074696d69736d506f7274616c3a207769746864726177616c206661696c656044820152601960fa1b60648201526084016104e8565b5050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106635760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064016104e8565b61066d8282610c81565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e93550778282336040516106a09392919061148e565b60405180910390a15050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461070d5760405162461bcd60e51b81526004016104e89060208082526004908201526310a0a6a160e11b604082015260600190565b61071681610d98565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516107479291906114cc565b60405180910390a150565b6000546001600160a01b0316331461077d576040516311a8a1bb60e31b815260040160405180910390fd5b61078681610f3f565b50565b6000546001600160a01b031633146107b4576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426107c691906114f6565b116107e4576040516324e0285f60e21b815260040160405180910390fd5b60025460000361080757604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610831576040516323295ef960e01b815260040160405180910390fd5b61083b6000610fa8565b565b6000546001600160a01b03163314610868576040516311a8a1bb60e31b815260040160405180910390fd5b6107868161100d565b6000546001600160a01b0316331461089c576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156108ba575060025415155b156108d8576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361090657604051634a2fb73f60e11b815260040160405180910390fd5b6107868161104e565b6001546001600160a01b0316331461093a576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261094c91906114f6565b1161096a576040516324e0285f60e21b815260040160405180910390fd5b60015461083b906001600160a01b0316610fa8565b600061098a8261109c565b92915050565b60008061099c836110c8565b604051633a59421360e21b8152600481018290529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e965084c90602401606060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b919061159b565b905080602001516001600160801b0316600003610a745760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b60448201526064016104e8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663887862726040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af691906115b7565b81602001516001600160801b03161015610b405760405162461bcd60e51b815260206004820152600b60248201526a7072652d626564726f636b60a81b60448201526064016104e8565b604081810151905163a25ae55760e01b81526001600160801b0390911660048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a25ae55790602401606060405180830381865afa158015610bb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bda919061159b565b8251815191925014610c1c5760405162461bcd60e51b815260206004820152600b60248201526a085bdd5d1c1d5d149bdbdd60aa1b60448201526064016104e8565b506001949350505050565b600080603f60c88601604002045a1015610c6a576308c379a06000526020805278185361666543616c6c3a204e6f7420656e6f756768206761736058526064601cfd5b600080845160208601878a5af19695505050505050565b8151602014610cbc5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016104e8565b6000634ff746f660e01b83604051602401610cd791906115d0565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252600354600480549351633dbb202b60e01b81529294506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811694633dbb202b94610d6194909216928792016115e3565b600060405180830381600087803b158015610d7b57600080fd5b505af1158015610d8f573d6000803e3d6000fd5b50505050505050565b600354610dad906001600160a01b031661109c565b610de85760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b60448201526064016104e8565b8051602014610e235760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016104e8565b6000610e2e8261161d565b60008181526005602052604090205490915060ff1615610e7c5760405162461bcd60e51b81526020600482015260096024820152681c1c9bd8d95cdcd95960ba1b60448201526064016104e8565b60008181526005602052604090819020805460ff191660011790555163473ec9fd60e11b81527f000000000000000000000000000000000000000000000000000000000000000063ffffffff166004820152602481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e7d93fa90604401600060405180830381600087803b158015610f2357600080fd5b505af1158015610f37573d6000803e3d6000fd5b505050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600061098a7f000000000000000000000000000000000000000000000000000000000000000083611115565b80516020808301516040808501516060860151608087015160a088015193516000976110f8979096959101611644565b604051602081830303815290604052805190602001209050919050565b6000336001600160a01b038416146111595760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b60448201526064016104e8565b816001600160a01b0316836001600160a01b0316636e296e456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c59190611690565b6001600160a01b0316149392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561120f5761120f6111d6565b60405290565b6001600160a01b038116811461078657600080fd5b600082601f83011261123b57600080fd5b813567ffffffffffffffff80821115611256576112566111d6565b604051601f8301601f19908116603f0116810190828211818310171561127e5761127e6111d6565b8160405283815286602085880101111561129757600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156112c957600080fd5b813567ffffffffffffffff808211156112e157600080fd5b9083019060c082860312156112f557600080fd5b6112fd6111ec565b82358152602083013561130f81611215565b6020820152604083013561132281611215565b80604083015250606083013560608201526080830135608082015260a08301358281111561134f57600080fd5b61135b8782860161122a565b60a08301525095945050505050565b6000806040838503121561137d57600080fd5b823567ffffffffffffffff8082111561139557600080fd5b6113a18683870161122a565b935060208501359150808211156113b757600080fd5b506113c48582860161122a565b9150509250929050565b6000602082840312156113e057600080fd5b813567ffffffffffffffff8111156113f757600080fd5b6114038482850161122a565b949350505050565b60006020828403121561141d57600080fd5b813561142881611215565b9392505050565b60006020828403121561144157600080fd5b5035919050565b6000815180845260005b8181101561146e57602081850181015186830182015201611452565b506000602082860101526020601f19601f83011685010191505092915050565b6060815260006114a16060830186611448565b82810360208401526114b38186611448565b91505060018060a01b0383166040830152949350505050565b6040815260006114df6040830185611448565b905060018060a01b03831660208301529392505050565b8181038181111561098a57634e487b7160e01b600052601160045260246000fd5b80516001600160801b038116811461152e57600080fd5b919050565b60006060828403121561154557600080fd5b6040516060810181811067ffffffffffffffff82111715611568576115686111d6565b6040528251815290508061157e60208401611517565b602082015261158f60408401611517565b60408201525092915050565b6000606082840312156115ad57600080fd5b6114288383611533565b6000602082840312156115c957600080fd5b5051919050565b6020815260006114286020830184611448565b6001600160a01b038416815260606020820181905260009061160790830185611448565b905063ffffffff83166040830152949350505050565b8051602080830151919081101561163e576000198160200360031b1b821691505b50919050565b8681526001600160a01b03868116602083015285166040820152606081018490526080810183905260c060a0820181905260009061168490830184611448565b98975050505050505050565b6000602082840312156116a257600080fd5b81516114288161121556fea2646970667358221220eb6b021fac46b15363ce8d4248ccf09ec01905732ff4a3985ffd7faa09f8db2b64736f6c63430008110033";

type OptimismHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OptimismHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OptimismHubConnector__factory extends ContractFactory {
  constructor(...args: OptimismHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _optimismPortal: PromiseOrValue<string>,
    _l2OutputOracle: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OptimismHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _optimismPortal,
      _l2OutputOracle,
      _gasCap,
      overrides || {}
    ) as Promise<OptimismHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _optimismPortal: PromiseOrValue<string>,
    _l2OutputOracle: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _optimismPortal,
      _l2OutputOracle,
      _gasCap,
      overrides || {}
    );
  }
  override attach(address: string): OptimismHubConnector {
    return super.attach(address) as OptimismHubConnector;
  }
  override connect(signer: Signer): OptimismHubConnector__factory {
    return super.connect(signer) as OptimismHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimismHubConnectorInterface {
    return new utils.Interface(_abi) as OptimismHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimismHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OptimismHubConnector;
  }
}
