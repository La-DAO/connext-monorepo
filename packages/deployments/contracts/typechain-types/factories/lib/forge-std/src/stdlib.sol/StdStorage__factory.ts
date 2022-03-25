/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StdStorage,
  StdStorageInterface,
} from "../../../../../lib/forge-std/src/stdlib.sol/StdStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "fsig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "keysHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "SlotFound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "WARNING_UninitedSlot",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "b",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "bytesToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61024361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063535849391461003a575b600080fd5b61004d6100483660046100da565b61005f565b60405190815260200160405180910390f35b60008060005b60208110156100bc576100798160086101a5565b8561008483876101c4565b81518110610094576100946101dc565b01602001516001600160f81b031916901c9190911790806100b4816101f2565b915050610065565b509392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156100ed57600080fd5b823567ffffffffffffffff8082111561010557600080fd5b818501915085601f83011261011957600080fd5b81358181111561012b5761012b6100c4565b604051601f8201601f19908116603f01168101908382118183101715610153576101536100c4565b8160405282815288602084870101111561016c57600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156101bf576101bf61018f565b500290565b600082198211156101d7576101d761018f565b500190565b634e487b7160e01b600052603260045260246000fd5b60006000198214156102065761020661018f565b506001019056fea26469706673582212208b69d88372b2629bc561768dfbdf083b6aa3041cdd9ddef80d641b006606b23f64736f6c634300080b0033";

type StdStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdStorage__factory extends ContractFactory {
  constructor(...args: StdStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StdStorage> {
    return super.deploy(overrides || {}) as Promise<StdStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdStorage {
    return super.attach(address) as StdStorage;
  }
  override connect(signer: Signer): StdStorage__factory {
    return super.connect(signer) as StdStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdStorageInterface {
    return new utils.Interface(_abi) as StdStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdStorage {
    return new Contract(address, _abi, signerOrProvider) as StdStorage;
  }
}
