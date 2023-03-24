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
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
      {
        internalType: "address",
        name: "_autonolas",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_autonolasPriority",
        type: "uint8",
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
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__addRelayer_relayerAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "RelayerProxy__definedAddress_empty",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__isWorkableBySender_notWorkable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__onlyRelayer_notRelayer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__removeRelayer_relayerNotAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__validateAndPayWithCredits_notKeep3r",
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
    name: "AutonolasChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "updated",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "previous",
        type: "uint8",
      },
    ],
    name: "AutonolasPriorityChanged",
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
    name: "Keep3rChanged",
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
    name: "autonolas",
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
    name: "autonolasPriority",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "keep3r",
    outputs: [
      {
        internalType: "contract IKeep3rV2",
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
        name: "",
        type: "address",
      },
    ],
    name: "priorityKeepers",
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
        name: "_autonolas",
        type: "address",
      },
    ],
    name: "setAutonolas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_autonolasPriority",
        type: "uint8",
      },
    ],
    name: "setAutonolasPriority",
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
        name: "_keep3r",
        type: "address",
      },
    ],
    name: "setKeep3r",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200217b3803806200217b8339810160408190526200003491620004ae565b60016003556200004433620000a9565b6200004f876200010e565b6200005a8662000177565b6200006585620001e0565b620000708462000249565b6200007b83620002b2565b62000086826200031b565b620000918162000384565b6200009c85620003ed565b505050505050506200054c565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600954604080516001600160a01b03808516825290921660208301527f17da78d98886c3b8819430ab0693a44c32dfa6426a4db4601ce45bc4bc2385ec910160405180910390a1600980546001600160a01b0319166001600160a01b0392909216919091179055565b6009546040805160ff8085168252600160a01b90930490921660208301527f65b4d060a802296de931fb313ab2ca65155e7a26b0ea83e41044f3036d5ac3f3910160405180910390a16009805460ff909216600160a01b0260ff60a01b19909216919091179055565b6001600160a01b0381166000908152600a602052604090205460ff16156200043757604051633d85ded560e11b81526001600160a01b038216600482015260240160405180910390fd5b6001600160a01b0381166000818152600a6020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5910160405180910390a150565b80516001600160a01b0381168114620004a957600080fd5b919050565b600080600080600080600060e0888a031215620004ca57600080fd5b620004d58862000491565b9650620004e56020890162000491565b9550620004f56040890162000491565b9450620005056060890162000491565b9350620005156080890162000491565b92506200052560a0890162000491565b915060c088015160ff811681146200053c57600080fd5b8091505092959891949750929550565b611c1f806200055c6000396000f3fe6080604052600436106101d15760003560e01c80639cadce00116100f7578063d1851c9211610095578063dd39f00d11610064578063dd39f00d14610573578063de4b054814610593578063e79457f1146105b3578063f9aa7645146105d357600080fd5b8063d1851c92146104f6578063d232c22014610514578063d9ef0bee14610533578063dad837a81461055357600080fd5b8063b1f8100d116100d1578063b1f8100d14610471578063ba6fef6114610491578063c415b95c146104c1578063c5b350df146104e157600080fd5b80639cadce00146104115780639f645a0314610431578063a42dce801461045157600080fd5b8063634c7bb51161016f578063890997171161013e57806389099717146103935780638da5cb5b146103b35780638efed127146103d15780639c166c0b146103f157600080fd5b8063634c7bb5146103105780636a42b8f8146103485780636eba787f1461035e578063715018a61461037e57600080fd5b80634cc18e57116101ab5780634cc18e57146102905780634d6f2013146102b05780635e21966a146102d057806360f0a5ac146102f057600080fd5b80632f55b98d146102155780633ccfd60b1461025a5780633cf52ffb1461027157600080fd5b3661021057604080513481524760208201527f063d07ee72a7483b8e07ca09054bb686775c5c030f945dde3823a5257a0a93eb910160405180910390a1005b600080fd5b34801561022157600080fd5b506102456102303660046114fe565b600a6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561026657600080fd5b5061026f610606565b005b34801561027d57600080fd5b506002545b604051908152602001610251565b34801561029c57600080fd5b5061026f6102ab3660046114fe565b610689565b3480156102bc57600080fd5b5061026f6102cb3660046114fe565b6106f9565b3480156102dc57600080fd5b5061026f6102eb3660046114fe565b610760565b3480156102fc57600080fd5b5061026f61030b3660046114fe565b6107c7565b34801561031c57600080fd5b50600654610330906001600160a01b031681565b6040516001600160a01b039091168152602001610251565b34801561035457600080fd5b5062093a80610282565b34801561036a57600080fd5b50600454610330906001600160a01b031681565b34801561038a57600080fd5b5061026f61082e565b34801561039f57600080fd5b5061026f6103ae3660046114fe565b6108e0565b3480156103bf57600080fd5b506000546001600160a01b0316610330565b3480156103dd57600080fd5b506102826103ec366004611520565b610947565b3480156103fd57600080fd5b50600954610330906001600160a01b031681565b34801561041d57600080fd5b50600854610330906001600160a01b031681565b34801561043d57600080fd5b5061026f61044c3660046114fe565b610a0f565b34801561045d57600080fd5b5061026f61046c3660046114fe565b610a76565b34801561047d57600080fd5b5061026f61048c3660046114fe565b610add565b34801561049d57600080fd5b506102456104ac3660046114fe565b600b6020526000908152604090205460ff1681565b3480156104cd57600080fd5b50600554610330906001600160a01b031681565b3480156104ed57600080fd5b5061026f610b7e565b34801561050257600080fd5b506001546001600160a01b0316610330565b34801561052057600080fd5b506000546001600160a01b031615610245565b34801561053f57600080fd5b5061026f61054e366004611580565b610bee565b34801561055f57600080fd5b5061026f61056e366004611644565b610ce3565b34801561057f57600080fd5b5061026f61058e3660046114fe565b610d17565b34801561059f57600080fd5b50600754610330906001600160a01b031681565b3480156105bf57600080fd5b5061026f6105ce366004611679565b610d7e565b3480156105df57600080fd5b506009546105f490600160a01b900460ff1681565b60405160ff9091168152602001610251565b6000546001600160a01b03163314610631576040516311a8a1bb60e31b815260040160405180910390fd5b610639610e3d565b476106443382610e96565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b18910160405180910390a1506106876001600355565b565b6000546001600160a01b031633146106b4576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166106ec57604051633a930fdf60e01b81526001600160a01b03821660048201526024015b60405180910390fd5b6106f582610faf565b5050565b6000546001600160a01b03163314610724576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661075757604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f582611018565b6000546001600160a01b0316331461078b576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166107be57604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f582611081565b6000546001600160a01b031633146107f2576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661082557604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f5826110ea565b6000546001600160a01b03163314610859576040516311a8a1bb60e31b815260040160405180910390fd5b62093a806002544261086b919061171b565b11610889576040516324e0285f60e21b815260040160405180910390fd5b6002546000036108ac57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b0316156108d6576040516323295ef960e01b815260040160405180910390fd5b6106876000611186565b6000546001600160a01b0316331461090b576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661093e57604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f5826111eb565b336000908152600a602052604081205460ff1661097957604051630981f7d560e21b81523360048201526024016106e3565b610981610e3d565b6007546040516331f1f3e960e11b81526001600160a01b03909116906363e3e7d2906109b19086906004016118c3565b6020604051808303816000875af11580156109d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f49190611ab6565b90506109ff82611254565b610a096001600355565b92915050565b6000546001600160a01b03163314610a3a576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610a6d57604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f5826112c0565b6000546001600160a01b03163314610aa1576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610ad457604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f582611329565b6000546001600160a01b03163314610b08576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610b26575060025415155b15610b44576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610b7257604051634a2fb73f60e11b815260040160405180910390fd5b610b7b81611392565b50565b6001546001600160a01b03163314610ba9576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610bbb919061171b565b11610bd9576040516324e0285f60e21b815260040160405180910390fd5b600154610687906001600160a01b0316611186565b336000908152600a602052604090205460ff16610c2057604051630981f7d560e21b81523360048201526024016106e3565b610c28610e3d565b600854604051630aec6b9f60e21b81526001600160a01b0390911690632bb1ae7c908490610c5a908790600401611acf565b6000604051808303818588803b158015610c7357600080fd5b505af1158015610c87573d6000803e3d6000fd5b5050604080518681524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189450019150610cc39050565b60405180910390a1610cd481611254565b610cde6001600355565b505050565b6000546001600160a01b03163314610d0e576040516311a8a1bb60e31b815260040160405180910390fd5b610b7b816113e0565b6000546001600160a01b03163314610d42576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610d7557604051633a930fdf60e01b81526001600160a01b03821660048201526024016106e3565b6106f582611449565b336000908152600a602052604090205460ff16610db057604051630981f7d560e21b81523360048201526024016106e3565b610db8610e3d565b60085460405163508a109b60e01b81526001600160a01b039091169063508a109b90610df09089908990899089908990600401611b27565b600060405180830381600087803b158015610e0a57600080fd5b505af1158015610e1e573d6000803e3d6000fd5b50505050610e2b81611254565b610e356001600355565b505050505050565b600260035403610e8f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106e3565b6002600355565b80471015610ee65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016106e3565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f33576040519150601f19603f3d011682016040523d82523d6000602084013e610f38565b606091505b5050905080610cde5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016106e3565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600a602052604090205460ff1661112e576040516309fbf0f560e31b81526001600160a01b03821660048201526024016106e3565b6001600160a01b0381166000818152600a6020908152604091829020805460ff1916905590519182527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b91015b60405180910390a150565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600954604080516001600160a01b03808516825290921660208301527f17da78d98886c3b8819430ab0693a44c32dfa6426a4db4601ce45bc4bc2385ec910160405180910390a1600980546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b031633036112815760055461127c906001600160a01b031682610e96565b61128b565b61128b3382610e96565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b18910161117b565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6009546040805160ff8085168252600160a01b90930490921660208301527f65b4d060a802296de931fb313ab2ca65155e7a26b0ea83e41044f3036d5ac3f3910160405180910390a16009805460ff909216600160a01b0260ff60a01b19909216919091179055565b6001600160a01b0381166000908152600a602052604090205460ff161561148e57604051633d85ded560e11b81526001600160a01b03821660048201526024016106e3565b6001600160a01b0381166000818152600a6020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5910161117b565b80356001600160a01b03811681146114f957600080fd5b919050565b60006020828403121561151057600080fd5b611519826114e2565b9392505050565b6000806040838503121561153357600080fd5b823567ffffffffffffffff81111561154a57600080fd5b830160a0818603121561155c57600080fd5b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561159557600080fd5b833567ffffffffffffffff808211156115ad57600080fd5b818601915086601f8301126115c157600080fd5b8135818111156115d3576115d361156a565b604051601f8201601f19908116603f011681019083821181831017156115fb576115fb61156a565b8160405282815289602084870101111561161457600080fd5b82602086016020830137600060208483010152809750505050505060208401359150604084013590509250925092565b60006020828403121561165657600080fd5b813560ff8116811461151957600080fd5b806104008101831015610a0957600080fd5b600080600080600080610480878903121561169357600080fd5b863567ffffffffffffffff808211156116ab57600080fd5b818901915089601f8301126116bf57600080fd5b8135818111156116ce57600080fd5b8a60208260051b85010111156116e357600080fd5b6020928301985096505087013593506116ff8860408901611667565b9250610440870135915061046087013590509295509295509295565b81810381811115610a0957634e487b7160e01b600052601160045260246000fd5b803563ffffffff811681146114f957600080fd5b803580151581146114f957600080fd5b6000808335601e1984360301811261177757600080fd5b830160208101925035905067ffffffffffffffff81111561179757600080fd5b8036038213156117a657600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000808335601e198436030181126117ed57600080fd5b830160208101925035905067ffffffffffffffff81111561180d57600080fd5b8060051b36038213156117a657600080fd5b8183526000602080850194508260005b8581101561185b576001600160a01b03611848836114e2565b168752958201959082019060010161182f565b509495945050505050565b81835260006020808501808196508560051b810191508460005b878110156118b65782840389526118978288611760565b6118a28682846117ad565b9a87019a9550505090840190600101611880565b5091979650505050505050565b602081526000823561019e198436030181126118de57600080fd5b60a06020840152830161190160c084016118f78361173c565b63ffffffff169052565b61190d6020820161173c565b63ffffffff1660e08401526119246040820161173c565b6101006119388186018363ffffffff169052565b611944606084016114e2565b915061012061195d818701846001600160a01b03169052565b611969608085016114e2565b9250610140611982818801856001600160a01b03169052565b61198e60a08601611750565b93506101606119a08189018615159052565b6119ad60c0870187611760565b95506101a061018081818c01526119c96102608c0189856117ad565b975060e0890135828c01526119df878a016114e2565b6001600160a01b03166101c08c0152948801356101e08b015250509085013561020088015284013561022087015283013561024086015250611a2460208601866117d6565b9250601f1980868403016040870152611a3e83858461181f565b9350611a4d60408801886117d6565b9350915080868503016060870152611a66848484611866565b9350611a74606088016114e2565b6001600160a01b03811660808801529250611a926080880188611760565b93509150808685030160a087015250611aac8383836117ad565b9695505050505050565b600060208284031215611ac857600080fd5b5051919050565b600060208083528351808285015260005b81811015611afc57858101830151858201604001528201611ae0565b506000604082860101526040601f19601f8301168501019250505092915050565b6104008183375050565b6104608082528101859052600061048080830190600588901b8401018883805b8a811015611bbd5786840361047f190185528235368d900361043e19018112611b6e578283fd5b8c01610440611b7d8280611760565b828852611b8d83890182846117ad565b92505050602061040081840182890137610420928301359690920195909552948501949290920191600101611b47565b5050508092505050846020830152611bd86040830185611b1d565b82610440830152969550505050505056fea26469706673582212208ea2b5bbae201931a7f54bdcd040df448ce8e607513415bb220e9c8dd4b8588564736f6c63430008110033";

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
    _keep3r: PromiseOrValue<string>,
    _autonolas: PromiseOrValue<string>,
    _autonolasPriority: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerProxy> {
    return super.deploy(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      _autonolas,
      _autonolasPriority,
      overrides || {}
    ) as Promise<RelayerProxy>;
  }
  override getDeployTransaction(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    _keep3r: PromiseOrValue<string>,
    _autonolas: PromiseOrValue<string>,
    _autonolasPriority: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      _autonolas,
      _autonolasPriority,
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
