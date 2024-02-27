/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MerkleLib,
  MerkleLibInterface,
} from "../../../../contracts/messaging/libraries/MerkleLib";

const _abi = [
  {
    inputs: [],
    name: "MerkleLib__insert_treeIsFull",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208f03b44d10acfd54ee50c9550572558998a89d47e47c8182c01f7c8b62bdb42364736f6c63430008110033";

type MerkleLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleLib__factory extends ContractFactory {
  constructor(...args: MerkleLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MerkleLib> {
    return super.deploy(overrides || {}) as Promise<MerkleLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MerkleLib {
    return super.attach(address) as MerkleLib;
  }
  override connect(signer: Signer): MerkleLib__factory {
    return super.connect(signer) as MerkleLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleLibInterface {
    return new utils.Interface(_abi) as MerkleLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleLib {
    return new Contract(address, _abi, signerOrProvider) as MerkleLib;
  }
}
