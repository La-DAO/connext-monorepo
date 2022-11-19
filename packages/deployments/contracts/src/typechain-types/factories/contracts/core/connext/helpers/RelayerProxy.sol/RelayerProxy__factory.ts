/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  RelayerProxy,
  RelayerProxyInterface,
} from "../../../../../../contracts/core/connext/helpers/RelayerProxy.sol/RelayerProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "ConnextChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "FeeCollectorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsDeducted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "GelatoRelayerChanged",
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
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "SpokeConnectorChanged",
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
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "addRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedRelayer",
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
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnext",
        name: "",
        type: "address",
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
    inputs: [
      {
        components: [
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
            name: "params",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "routers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "routerSignatures",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "sequencer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "sequencerSignature",
            type: "bytes",
          },
        ],
        internalType: "struct ExecuteArgs",
        name: "_args",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCollector",
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
    name: "gelatoRelayer",
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
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bytes32[32]",
            name: "path",
            type: "bytes32[32]",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct ISpokeConnector.Proof[]",
        name: "_proofs",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_aggregateRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_aggregatePath",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_aggregateIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "removeRelayer",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_encodedData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_messageFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
    ],
    name: "setFeeCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
    ],
    name: "setGelatoRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
    ],
    name: "setSpokeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spokeConnector",
    outputs: [
      {
        internalType: "contract ISpokeConnector",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c0438038062001c0483398101604081905262000034916200035b565b6001600355620000443362000085565b6200004f84620000ea565b6200005a8362000153565b6200006582620001bc565b620000708162000225565b6200007b826200028e565b50505050620003b8565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600654604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600754604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526008602052604090205460ff1615620002e45760405162461bcd60e51b8152602060048201526005602482015264185919195960da1b604482015260640160405180910390fd5b6001600160a01b038116600081815260086020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5910160405180910390a150565b80516001600160a01b03811681146200035657600080fd5b919050565b600080600080608085870312156200037257600080fd5b6200037d856200033e565b93506200038d602086016200033e565b92506200039d604086016200033e565b9150620003ad606086016200033e565b905092959194509250565b61183c80620003c86000396000f3fe6080604052600436106101445760003560e01c80639cadce00116100b6578063d1851c921161006f578063d1851c92146103b9578063d232c220146103d7578063d9ef0bee146103f6578063dd39f00d14610416578063de4b054814610436578063e79457f11461045657600080fd5b80639cadce00146103045780639f645a0314610324578063a42dce8014610344578063b1f8100d14610364578063c415b95c14610384578063c5b350df146103a457600080fd5b806360f0a5ac1161010857806360f0a5ac146102435780636a42b8f8146102635780636eba787f14610279578063715018a6146102b15780638da5cb5b146102c65780638efed127146102e457600080fd5b80632f55b98d146101885780633ccfd60b146101cd5780633cf52ffb146101e45780634d6f2013146102035780635e21966a1461022357600080fd5b3661018357604080513481524760208201527f063d07ee72a7483b8e07ca09054bb686775c5c030f945dde3823a5257a0a93eb910160405180910390a1005b600080fd5b34801561019457600080fd5b506101b86101a33660046110fd565b60086020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156101d957600080fd5b506101e2610476565b005b3480156101f057600080fd5b506002545b6040519081526020016101c4565b34801561020f57600080fd5b506101e261021e3660046110fd565b6104f9565b34801561022f57600080fd5b506101e261023e3660046110fd565b610561565b34801561024f57600080fd5b506101e261025e3660046110fd565b6105bc565b34801561026f57600080fd5b5062093a806101f5565b34801561028557600080fd5b50600454610299906001600160a01b031681565b6040516001600160a01b0390911681526020016101c4565b3480156102bd57600080fd5b506101e2610617565b3480156102d257600080fd5b506000546001600160a01b0316610299565b3480156102f057600080fd5b506101f56102ff36600461111f565b6106c9565b34801561031057600080fd5b50600754610299906001600160a01b031681565b34801561033057600080fd5b506101e261033f3660046110fd565b61078e565b34801561035057600080fd5b506101e261035f3660046110fd565b6107e9565b34801561037057600080fd5b506101e261037f3660046110fd565b610844565b34801561039057600080fd5b50600554610299906001600160a01b031681565b3480156103b057600080fd5b506101e26108e5565b3480156103c557600080fd5b506001546001600160a01b0316610299565b3480156103e357600080fd5b506000546001600160a01b0316156101b8565b34801561040257600080fd5b506101e261041136600461117f565b610955565b34801561042257600080fd5b506101e26104313660046110fd565b610a47565b34801561044257600080fd5b50600654610299906001600160a01b031681565b34801561046257600080fd5b506101e2610471366004611255565b610aa2565b6000546001600160a01b031633146104a1576040516311a8a1bb60e31b815260040160405180910390fd5b6104a9610b5e565b476104b43382610bb7565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b18910160405180910390a1506104f76001600355565b565b6000546001600160a01b03163314610524576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166105545760405162461bcd60e51b815260040161054b906112f7565b60405180910390fd5b61055d82610cd0565b5050565b6000546001600160a01b0316331461058c576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166105b35760405162461bcd60e51b815260040161054b906112f7565b61055d82610d39565b6000546001600160a01b031633146105e7576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661060e5760405162461bcd60e51b815260040161054b906112f7565b61055d82610da2565b6000546001600160a01b03163314610642576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426106549190611316565b11610672576040516324e0285f60e21b815260040160405180910390fd5b60025460000361069557604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b0316156106bf576040516323295ef960e01b815260040160405180910390fd5b6104f76000610e4b565b3360009081526008602052604081205460ff166106f85760405162461bcd60e51b815260040161054b90611337565b610700610b5e565b6006546040516331f1f3e960e11b81526001600160a01b03909116906363e3e7d2906107309086906004016114e0565b6020604051808303816000875af115801561074f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077391906116d3565b905061077e82610eb0565b6107886001600355565b92915050565b6000546001600160a01b031633146107b9576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166107e05760405162461bcd60e51b815260040161054b906112f7565b61055d82610f1c565b6000546001600160a01b03163314610814576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661083b5760405162461bcd60e51b815260040161054b906112f7565b61055d82610f85565b6000546001600160a01b0316331461086f576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561088d575060025415155b156108ab576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036108d957604051634a2fb73f60e11b815260040160405180910390fd5b6108e281610fee565b50565b6001546001600160a01b03163314610910576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426109229190611316565b11610940576040516324e0285f60e21b815260040160405180910390fd5b6001546104f7906001600160a01b0316610e4b565b3360009081526008602052604090205460ff166109845760405162461bcd60e51b815260040161054b90611337565b61098c610b5e565b600754604051630aec6b9f60e21b81526001600160a01b0390911690632bb1ae7c9084906109be9087906004016116ec565b6000604051808303818588803b1580156109d757600080fd5b505af11580156109eb573d6000803e3d6000fd5b5050604080518681524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189450019150610a279050565b60405180910390a1610a3881610eb0565b610a426001600355565b505050565b6000546001600160a01b03163314610a72576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610a995760405162461bcd60e51b815260040161054b906112f7565b61055d8261103c565b3360009081526008602052604090205460ff16610ad15760405162461bcd60e51b815260040161054b90611337565b610ad9610b5e565b60075460405163508a109b60e01b81526001600160a01b039091169063508a109b90610b119089908990899089908990600401611744565b600060405180830381600087803b158015610b2b57600080fd5b505af1158015610b3f573d6000803e3d6000fd5b50505050610b4c81610eb0565b610b566001600355565b505050505050565b600260035403610bb05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161054b565b6002600355565b80471015610c075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161054b565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610c54576040519150601f19603f3d011682016040523d82523d6000602084013e610c59565b606091505b5050905080610a425760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161054b565b600654604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526008602052604090205460ff16610df35760405162461bcd60e51b815260206004820152600660248201526508585919195960d21b604482015260640161054b565b6001600160a01b038116600081815260086020908152604091829020805460ff1916905590519182527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b91015b60405180910390a150565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b6004546001600160a01b03163303610edd57600554610ed8906001600160a01b031682610bb7565b610ee7565b610ee73382610bb7565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189101610e40565b600754604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6001600160a01b03811660009081526008602052604090205460ff161561108d5760405162461bcd60e51b8152602060048201526005602482015264185919195960da1b604482015260640161054b565b6001600160a01b038116600081815260086020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c59101610e40565b80356001600160a01b03811681146110f857600080fd5b919050565b60006020828403121561110f57600080fd5b611118826110e1565b9392505050565b6000806040838503121561113257600080fd5b823567ffffffffffffffff81111561114957600080fd5b830160a0818603121561115b57600080fd5b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561119457600080fd5b833567ffffffffffffffff808211156111ac57600080fd5b818601915086601f8301126111c057600080fd5b8135818111156111d2576111d2611169565b604051601f8201601f19908116603f011681019083821181831017156111fa576111fa611169565b8160405282815289602084870101111561121357600080fd5b82602086016020830137600060208483010152809750505050505060208401359150604084013590509250925092565b80610400810183101561078857600080fd5b600080600080600080610480878903121561126f57600080fd5b863567ffffffffffffffff8082111561128757600080fd5b818901915089601f83011261129b57600080fd5b8135818111156112aa57600080fd5b8a60208260051b85010111156112bf57600080fd5b6020928301985096505087013593506112db8860408901611243565b9250610440870135915061046087013590509295509295509295565b602080825260059082015264656d70747960d81b604082015260600190565b8181038181111561078857634e487b7160e01b600052601160045260246000fd5b60208082526008908201526710b932b630bcb2b960c11b604082015260600190565b803563ffffffff811681146110f857600080fd5b803580151581146110f857600080fd5b6000808335601e1984360301811261139457600080fd5b830160208101925035905067ffffffffffffffff8111156113b457600080fd5b8036038213156113c357600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000808335601e1984360301811261140a57600080fd5b830160208101925035905067ffffffffffffffff81111561142a57600080fd5b8060051b36038213156113c357600080fd5b8183526000602080850194508260005b85811015611478576001600160a01b03611465836110e1565b168752958201959082019060010161144c565b509495945050505050565b81835260006020808501808196508560051b810191508460005b878110156114d35782840389526114b4828861137d565b6114bf8682846113ca565b9a87019a955050509084019060010161149d565b5091979650505050505050565b602081526000823561019e198436030181126114fb57600080fd5b60a06020840152830161151e60c0840161151483611359565b63ffffffff169052565b61152a60208201611359565b63ffffffff1660e084015261154160408201611359565b6101006115558186018363ffffffff169052565b611561606084016110e1565b915061012061157a818701846001600160a01b03169052565b611586608085016110e1565b925061014061159f818801856001600160a01b03169052565b6115ab60a0860161136d565b93506101606115bd8189018615159052565b6115ca60c087018761137d565b95506101a061018081818c01526115e66102608c0189856113ca565b975060e0890135828c01526115fc878a016110e1565b6001600160a01b03166101c08c0152948801356101e08b01525050908501356102008801528401356102208701528301356102408601525061164160208601866113f3565b9250601f198086840301604087015261165b83858461143c565b935061166a60408801886113f3565b9350915080868503016060870152611683848484611483565b9350611691606088016110e1565b6001600160a01b038116608088015292506116af608088018861137d565b93509150808685030160a0870152506116c98383836113ca565b9695505050505050565b6000602082840312156116e557600080fd5b5051919050565b600060208083528351808285015260005b81811015611719578581018301518582016040015282016116fd565b506000604082860101526040601f19601f8301168501019250505092915050565b6104008183375050565b6104608082528101859052600061048080830190600588901b8401018883805b8a8110156117da5786840361047f190185528235368d900361043e1901811261178b578283fd5b8c0161044061179a828061137d565b8288526117aa83890182846113ca565b92505050602061040081840182890137610420928301359690920195909552948501949290920191600101611764565b50505080925050508460208301526117f5604083018561173a565b82610440830152969550505050505056fea2646970667358221220a7ce20eaed0beb7f174f5370882fd59e891195776c63e56d0f7215569df14f5f64736f6c63430008110033";

type RelayerProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerProxy__factory extends ContractFactory {
  constructor(...args: RelayerProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerProxy> {
    return super.deploy(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      overrides || {}
    ) as Promise<RelayerProxy>;
  }
  override getDeployTransaction(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      overrides || {}
    );
  }
  override attach(address: string): RelayerProxy {
    return super.attach(address) as RelayerProxy;
  }
  override connect(signer: Signer): RelayerProxy__factory {
    return super.connect(signer) as RelayerProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerProxyInterface {
    return new utils.Interface(_abi) as RelayerProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerProxy {
    return new Contract(address, _abi, signerOrProvider) as RelayerProxy;
  }
}
