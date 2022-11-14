/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpgradeBeaconController,
  UpgradeBeaconControllerInterface,
} from "../../../../contracts/shared/upgrade/UpgradeBeaconController";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
        internalType: "address",
        name: "_beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61007e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6105f78061008d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806399a88ec41161006657806399a88ec4146100e7578063b1f8100d146100fa578063c5b350df1461010d578063d1851c9214610115578063d232c2201461012657600080fd5b80633cf52ffb146100985780636a42b8f8146100af578063715018a6146100b85780638da5cb5b146100c2575b600080fd5b6002545b6040519081526020015b60405180910390f35b62093a8061009c565b6100c0610142565b005b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100a6565b6100c06100f5366004610516565b610201565b6100c0610108366004610549565b61034a565b6100c06103f2565b6001546001600160a01b03166100cf565b6000546040516001600160a01b039091161581526020016100a6565b6000546001600160a01b0316331461016d576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361019057604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426101a2919061056b565b116101c0576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156101ea576040516323295ef960e01b815260040160405180910390fd5b6001546101ff906001600160a01b031661044d565b565b6000546001600160a01b0316331461022c576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b0382163b61027a5760405162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b604482015260640160405180910390fd5b604080516001600160a01b038381166020830152600092908516910160408051601f19818403018152908290526102b091610592565b6000604051808303816000865af19150503d80600081146102ed576040519150601f19603f3d011682016040523d82523d6000602084013e6102f2565b606091505b5050905080610305573d6000803e3d6000fd5b6040516001600160a01b0383811682528416907fc945ae30494f6ee00b9e4bf1fec5653ced7244b559666f44f9a88ea732e957b09060200160405180910390a2505050565b6000546001600160a01b03163314610375576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561039a57506001600160a01b03811615155b156103b8576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036103e657604051634a2fb73f60e11b815260040160405180910390fd5b6103ef816104ac565b50565b6001546001600160a01b0316331461041d576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261042f919061056b565b116101ea5760405163d39c12bb60e01b815260040160405180910390fd5b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b80356001600160a01b038116811461051157600080fd5b919050565b6000806040838503121561052957600080fd5b610532836104fa565b9150610540602084016104fa565b90509250929050565b60006020828403121561055b57600080fd5b610564826104fa565b9392505050565b8181038181111561058c57634e487b7160e01b600052601160045260246000fd5b92915050565b6000825160005b818110156105b35760208186018101518583015201610599565b50600092019182525091905056fea264697066735822122070f73d52d38c15215c65f16a6d1c8c1ff2ea7beda941642db8730581b2e9548b64736f6c63430008110033";

type UpgradeBeaconControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeBeaconControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeBeaconController__factory extends ContractFactory {
  constructor(...args: UpgradeBeaconControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeBeaconController> {
    return super.deploy(overrides || {}) as Promise<UpgradeBeaconController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradeBeaconController {
    return super.attach(address) as UpgradeBeaconController;
  }
  override connect(signer: Signer): UpgradeBeaconController__factory {
    return super.connect(signer) as UpgradeBeaconController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconControllerInterface {
    return new utils.Interface(_abi) as UpgradeBeaconControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradeBeaconController;
  }
}
