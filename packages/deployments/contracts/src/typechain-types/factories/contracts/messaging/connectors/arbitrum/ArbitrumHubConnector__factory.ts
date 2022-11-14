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
  ArbitrumHubConnector,
  ArbitrumHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/arbitrum/ArbitrumHubConnector";

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
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_defaultGasPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_outbox",
        type: "address",
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
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
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
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
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
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "DefaultGasPriceUpdated",
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
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "MirrorGasUpdated",
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
    name: "defaultGasPrice",
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
    name: "mirrorGas",
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
    name: "outbox",
    outputs: [
      {
        internalType: "contract IArbitrumOutbox",
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
        internalType: "uint64",
        name: "_nodeNum",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "_sendRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "l2Sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "l2Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l1Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l2Timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct L2Message",
        name: "_message",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [],
    name: "rollup",
    outputs: [
      {
        internalType: "contract IArbitrumRollup",
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
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_defaultGasPrice",
        type: "uint256",
      },
    ],
    name: "setDefaultGasPrice",
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
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    name: "setMirrorGas",
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
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200228338038062002283833981016040819052620000359162000383565b8787878787878585858585856200004c3362000248565b8563ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011b576200011b82620002a7565b80156200012d576200012d8162000310565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a350505060058b90555050600680546001600160a01b0319166001600160a01b038a169081179091556040805163cb23bcb560e01b8152905191985063cb23bcb597506004808201975060209650919450849003019150829050865afa158015620001f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000219919062000419565b600780546001600160a01b0319166001600160a01b0392909216919091179055506200043e9650505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff811681146200036657600080fd5b919050565b80516001600160a01b03811681146200036657600080fd5b600080600080600080600080610100898b031215620003a157600080fd5b620003ac8962000351565b9750620003bc60208a0162000351565b9650620003cc60408a016200036b565b9550620003dc60608a016200036b565b9450620003ec60808a016200036b565b935060a0890151925060c089015191506200040a60e08a016200036b565b90509295985092959890939650565b6000602082840312156200042c57600080fd5b62000437826200036b565b9392505050565b60805160a05160c05160e051611de1620004a2600039600081816101b5015261077b015260008181610252015281816105a101526107ac01526000818161037f015281816103c801528181610b400152611055015260006102180152611de16000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638da5cb5b116100de578063ce11e6ab11610097578063d232c22011610071578063d232c22014610368578063d69f9d611461037a578063db1b7659146103a1578063e7b4294c146103b457600080fd5b8063ce11e6ab1461033b578063cf796c751461034e578063d1851c921461035757600080fd5b80638da5cb5b146102d65780639d4373a4146102e7578063b1f8100d146102fa578063c5b350df1461030d578063cb23bcb514610315578063cc3942831461032857600080fd5b80635f61e3ec116101305780635f61e3ec1461024d5780636a42b8f81461028c5780636eb67a5114610295578063715018a6146102a857806382646a58146102b05780638b42a40a146102c357600080fd5b806305a79e061461017857806314168416146101b05780633cf52ffb146101ec5780634ff746f6146101fe57806352a9674b146102135780635bd11efc1461023a575b600080fd5b61019b61018636600461171f565b60086020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101d77f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101a7565b6002545b6040519081526020016101a7565b61021161020c366004611778565b6103bd565b005b6101d77f000000000000000000000000000000000000000000000000000000000000000081565b61021161024836600461183e565b61046c565b6102747f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101a7565b62093a806101f0565b6102116102a336600461171f565b6104a3565b6102116104d7565b6102116102be366004611778565b610596565b6102116102d136600461171f565b610637565b6000546001600160a01b0316610274565b6102116102f5366004611883565b6106a3565b61021161030836600461183e565b610862565b610211610907565b600754610274906001600160a01b031681565b600354610274906001600160a01b031681565b600654610274906001600160a01b031681565b6101f060045481565b6001546001600160a01b0316610274565b6000546001600160a01b03161561019b565b6102747f000000000000000000000000000000000000000000000000000000000000000081565b61019b6103af36600461183e565b610962565b6101f060055481565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104275760405162461bcd60e51b815260040161041e9060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b61043081610973565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610461929190611993565b60405180910390a150565b6000546001600160a01b03163314610497576040516311a8a1bb60e31b815260040160405180910390fd5b6104a08161098c565b50565b6000546001600160a01b031633146104ce576040516311a8a1bb60e31b815260040160405180910390fd5b6104a0816109f5565b6000546001600160a01b03163314610502576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361052557604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544261053791906119d3565b11610555576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561057f576040516323295ef960e01b815260040160405180910390fd5b600154610594906001600160a01b0316610a36565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105fd5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b604482015260640161041e565b61060681610a95565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc8133604051610461929190611993565b6000546001600160a01b03163314610662576040516311a8a1bb60e31b815260040160405180910390fd5b60055460408051918252602082018390527f577c2dd19d86f7555790e151b7455ad2b3897b5c6037646b19672da61a1a8734910160405180910390a1600555565b6106ae878787610bc4565b6106bb8685858585610d19565b6106c860c08201826119e6565b90506024146107035760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161041e565b60006107676004602061075a8461071d60c08801886119e6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610e7c9050565b62ffffff19169190610ea0565b60405163473ec9fd60e11b815263ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e7d93fa90604401600060405180830381600087803b1580156107f857600080fd5b505af115801561080c573d6000803e3d6000fd5b507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced925061084091505060c08401846119e6565b3360405161085093929190611a5d565b60405180910390a15050505050505050565b6000546001600160a01b0316331461088d576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156108b257506001600160a01b03811615155b156108d0576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036108fe57604051634a2fb73f60e11b815260040160405180910390fd5b6104a081611000565b6001546001600160a01b03163314610932576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261094491906119d3565b1161057f5760405163d39c12bb60e01b815260040160405180910390fd5b600061096d8261104e565b92915050565b6040516316c2fdb560e21b815260040160405180910390fd5b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051602014610ad05760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161041e565b6000634ff746f660e01b82604051602401610aeb9190611a89565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092526004805460055460035494516345318d5360e11b81529395506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811695638a631aa695610b7c959190921691600091899101611a9c565b6020604051808303816000875af1158015610b9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbf9190611ada565b505050565b604080516020808201849052818301859052825180830384018152606090920190925280519101206000906007546040516324b204d360e21b815267ffffffffffffffff871660048201529192506000916001600160a01b03909116906392c8134c9060240161018060405180830381865afa158015610c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6c9190611b03565b905081816040015114610cb05760405162461bcd60e51b815260206004820152600c60248201526b21636f6e6669726d4461746160a01b604482015260640161041e565b60008160c0015167ffffffffffffffff16118015610cdc575060008160e0015167ffffffffffffffff16115b610d125760405162461bcd60e51b8152602060048201526007602482015266085cdd185ad95960ca1b604482015260640161041e565b5050505050565b6003546001600160a01b0316610d32602083018361183e565b6001600160a01b031614610d7b5760405162461bcd60e51b815260206004820152601060248201526f10b6b4b93937b921b7b73732b1ba37b960811b604482015260640161041e565b6006546000906001600160a01b0316639f0c04bf610d9c602085018561183e565b610dac604086016020870161183e565b60408601356060870135608088013560a0890135610dcd60c08b018b6119e6565b6040518963ffffffff1660e01b8152600401610df0989796959493929190611bd5565b602060405180830381865afa158015610e0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e319190611ada565b9050610e748585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508792508591508a9050611094565b505050505050565b815160009060208401610e9764ffffffffff85168284611235565b95945050505050565b60008160ff16600003610eb557506000610ff9565b610ec88460181c6001600160601b031690565b6001600160601b0316610ede60ff841685611c27565b1115610f4257610f29610efa8560781c6001600160601b031690565b6001600160601b0316610f168660181c6001600160601b031690565b6001600160601b0316858560ff1661127c565b60405162461bcd60e51b815260040161041e9190611a89565b60208260ff161115610fbc5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161041e565b600882026000610fd58660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91860151909116925050505b9392505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006110797f00000000000000000000000000000000000000000000000000000000000000006113a6565b6001600160a01b0316826001600160a01b0316149050919050565b6101008451106110d55760405162461bcd60e51b815260206004820152600c60248201526b0e0e4dedecc40d8cadccee8d60a31b604482015260640161041e565b83516110e2906002611d1e565b83106111215760405162461bcd60e51b815260206004820152600e60248201526d10b6b4b734b6b0b610383937b7b360911b604482015260640161041e565b60008381526008602052604090205460ff16156111685760405162461bcd60e51b81526020600482015260056024820152641cdc195b9d60da1b604482015260640161041e565b600654604051627436d360e01b81526000916001600160a01b031690627436d39061119b90889088908890600401611d2a565b602060405180830381865afa1580156111b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111dc9190611ada565b90508181146112165760405162461bcd60e51b815260206004820152600660248201526510b83937b7b360d11b604482015260640161041e565b5050506000908152600860205260409020805460ff1916600117905550565b6000806112428385611c27565b9050604051811115611252575060005b806000036112675762ffffff19915050610ff9565b5050606092831b9190911790911b1760181b90565b6060600061128986611504565b915050600061129786611504565b91505060006112a586611504565b91505060006112b386611504565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b60006001600160a01b03821633146113d15760405163253a6fc960e11b815260040160405180910390fd5b6000826001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa158015611411573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114359190611d77565b6001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa158015611472573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114969190611d77565b90506001600160a01b03811661096d5760405162461bcd60e51b815260206004820152602d60248201527f4c6962417262697472756d4c313a2073797374656d206d65737361676573207760448201526c34ba3437baba1039b2b73232b960991b606482015260840161041e565b600080601f5b600f811115611550576000611520826008611d94565b85901c905061152e816115a0565b61ffff16841793508160101461154657601084901b93505b506000190161150a565b50600f5b60ff81101561159a57600061156a826008611d94565b85901c9050611578816115a0565b61ffff16831792508160001461159057601083901b92505b5060001901611554565b50915091565b60006115b260048360ff16901c6115d2565b60ff1661ffff919091161760081b6115c9826115d2565b60ff1617919050565b600060f08083179060ff821690036115ed5750603092915050565b8060ff1660f1036116015750603192915050565b8060ff1660f2036116155750603292915050565b8060ff1660f3036116295750603392915050565b8060ff1660f40361163d5750603492915050565b8060ff1660f5036116515750603592915050565b8060ff1660f6036116655750603692915050565b8060ff1660f7036116795750603792915050565b8060ff1660f80361168d5750603892915050565b8060ff1660f9036116a15750603992915050565b8060ff1660fa036116b55750606192915050565b8060ff1660fb036116c95750606292915050565b8060ff1660fc036116dd5750606392915050565b8060ff1660fd036116f15750606492915050565b8060ff1660fe036117055750606592915050565b8060ff1660ff036117195750606692915050565b50919050565b60006020828403121561173157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561177257611772611738565b60405290565b60006020828403121561178a57600080fd5b813567ffffffffffffffff808211156117a257600080fd5b818401915084601f8301126117b657600080fd5b8135818111156117c8576117c8611738565b604051601f8201601f19908116603f011681019083821181831017156117f0576117f0611738565b8160405282815287602084870101111561180957600080fd5b826020860160208301376000928101602001929092525095945050505050565b6001600160a01b03811681146104a057600080fd5b60006020828403121561185057600080fd5b8135610ff981611829565b67ffffffffffffffff811681146104a057600080fd5b600060e0828403121561171957600080fd5b600080600080600080600060c0888a03121561189e57600080fd5b87356118a98161185b565b96506020880135955060408801359450606088013567ffffffffffffffff808211156118d457600080fd5b818a0191508a601f8301126118e857600080fd5b8135818111156118f757600080fd5b8b60208260051b850101111561190c57600080fd5b6020830196508095505060808a0135935060a08a013591508082111561193157600080fd5b5061193e8a828b01611871565b91505092959891949750929550565b6000815180845260005b8181101561197357602081850181015186830182015201611957565b506000602082860101526020601f19601f83011685010191505092915050565b6040815260006119a6604083018561194d565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561096d5761096d6119bd565b6000808335601e198436030181126119fd57600080fd5b83018035915067ffffffffffffffff821115611a1857600080fd5b602001915036819003821315611a2d57600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000611a71604083018587611a34565b905060018060a01b0383166020830152949350505050565b602081526000610ff9602083018461194d565b85815284602082015260018060a01b038416604082015282606082015260a060808201526000611acf60a083018461194d565b979650505050505050565b600060208284031215611aec57600080fd5b5051919050565b8051611afe8161185b565b919050565b60006101808284031215611b1657600080fd5b611b1e61174e565b825181526020830151602082015260408301516040820152611b4260608401611af3565b6060820152611b5360808401611af3565b6080820152611b6460a08401611af3565b60a0820152611b7560c08401611af3565b60c0820152611b8660e08401611af3565b60e0820152610100611b99818501611af3565b90820152610120611bab848201611af3565b90820152610140611bbd848201611af3565b90820152610160928301519281019290925250919050565b600060018060a01b03808b168352808a166020840152508760408301528660608301528560808301528460a083015260e060c0830152611c1960e083018486611a34565b9a9950505050505050505050565b8082018082111561096d5761096d6119bd565b600181815b80851115611c75578160001904821115611c5b57611c5b6119bd565b80851615611c6857918102915b93841c9390800290611c3f565b509250929050565b600082611c8c5750600161096d565b81611c995750600061096d565b8160018114611caf5760028114611cb957611cd5565b600191505061096d565b60ff841115611cca57611cca6119bd565b50506001821b61096d565b5060208310610133831016604e8410600b8410161715611cf8575081810a61096d565b611d028383611c3a565b8060001904821115611d1657611d166119bd565b029392505050565b6000610ff98383611c7d565b606080825284519082018190526000906020906080840190828801845b82811015611d6357815184529284019290840190600101611d47565b505050908301949094525060400152919050565b600060208284031215611d8957600080fd5b8151610ff981611829565b808202811582820484141761096d5761096d6119bd56fea26469706673582212207914574ba7ea4b0b53c52ed6762185af9c767fb67efa4537252def6a8ccc79d264736f6c63430008110033";

type ArbitrumHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbitrumHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbitrumHubConnector__factory extends ContractFactory {
  constructor(...args: ArbitrumHubConnectorConstructorParams) {
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
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _defaultGasPrice: PromiseOrValue<BigNumberish>,
    _outbox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArbitrumHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _defaultGasPrice,
      _outbox,
      overrides || {}
    ) as Promise<ArbitrumHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _defaultGasPrice: PromiseOrValue<BigNumberish>,
    _outbox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _defaultGasPrice,
      _outbox,
      overrides || {}
    );
  }
  override attach(address: string): ArbitrumHubConnector {
    return super.attach(address) as ArbitrumHubConnector;
  }
  override connect(signer: Signer): ArbitrumHubConnector__factory {
    return super.connect(signer) as ArbitrumHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbitrumHubConnectorInterface {
    return new utils.Interface(_abi) as ArbitrumHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitrumHubConnector;
  }
}
