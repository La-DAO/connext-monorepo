/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpdaterManager,
  UpdaterManagerInterface,
} from "../UpdaterManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "FakeSlashed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "home",
        type: "address",
      },
    ],
    name: "NewHome",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_reporter",
        type: "address",
      },
    ],
    name: "slashUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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
];

const _bytecode =
  "0x60806040526040516105a03803806105a0833981016040819052610022916100a0565b61002b33610050565b600280546001600160a01b0319166001600160a01b03929092169190911790556100d0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b6104c1806100df6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100b25780639d54f419146100db578063df034cd0146100ee578063f2fde38b146100ff57600080fd5b80635b3c2cbf146100825780636ef0f37f14610097578063715018a6146100aa575b600080fd5b610095610090366004610432565b610112565b005b6100956100a5366004610432565b610199565b610095610259565b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100956100e9366004610432565b61028f565b6002546001600160a01b03166100bf565b61009561010d366004610432565b610332565b6001546001600160a01b031633146101595760405162461bcd60e51b815260206004820152600560248201526421686f6d6560d81b60448201526064015b60405180910390fd5b6040516001600160a01b03821681527f4180932f5f5f11458bcd408e42c54626987799e7c4c89f40f484fefdfdfff14f906020015b60405180910390a150565b6000546001600160a01b031633146101c35760405162461bcd60e51b815260040161015090610456565b6001600160a01b0381163b61020b5760405162461bcd60e51b815260206004820152600e60248201526d21636f6e747261637420686f6d6560901b6044820152606401610150565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fa6c230e5615262e310dcb42eaf014e813e5d8580abf5b00d2186ca8e9833de219060200161018e565b6000546001600160a01b031633146102835760405162461bcd60e51b815260040161015090610456565b61028d60006103cd565b565b6000546001600160a01b031633146102b95760405162461bcd60e51b815260040161015090610456565b600280546001600160a01b0319166001600160a01b03838116918217909255600154604051639d54f41960e01b8152600481019290925290911690639d54f41990602401600060405180830381600087803b15801561031757600080fd5b505af115801561032b573d6000803e3d6000fd5b5050505050565b6000546001600160a01b0316331461035c5760405162461bcd60e51b815260040161015090610456565b6001600160a01b0381166103c15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610150565b6103ca816103cd565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146103ca57600080fd5b60006020828403121561044457600080fd5b813561044f8161041d565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220384df1dbc295f29f2e25aa3efdc8a001bf2484d03239d3665e01445b5f77c83e64736f6c634300080b0033";

type UpdaterManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpdaterManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpdaterManager__factory extends ContractFactory {
  constructor(...args: UpdaterManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UpdaterManager";
  }

  deploy(
    _updaterAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpdaterManager> {
    return super.deploy(
      _updaterAddress,
      overrides || {}
    ) as Promise<UpdaterManager>;
  }
  getDeployTransaction(
    _updaterAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_updaterAddress, overrides || {});
  }
  attach(address: string): UpdaterManager {
    return super.attach(address) as UpdaterManager;
  }
  connect(signer: Signer): UpdaterManager__factory {
    return super.connect(signer) as UpdaterManager__factory;
  }
  static readonly contractName: "UpdaterManager";
  public readonly contractName: "UpdaterManager";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpdaterManagerInterface {
    return new utils.Interface(_abi) as UpdaterManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdaterManager {
    return new Contract(address, _abi, signerOrProvider) as UpdaterManager;
  }
}
