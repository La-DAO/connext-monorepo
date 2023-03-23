/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AssetLogic,
  AssetLogicInterface,
} from "../../../../../contracts/core/connext/libraries/AssetLogic";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getConfig_notRegistered",
    type: "error",
  },
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
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__swapAsset_externalStableSwapPoolDoesNotExist",
    type: "error",
  },
] as const;

export class AssetLogic__factory {
  static readonly abi = _abi;
  static createInterface(): AssetLogicInterface {
    return new utils.Interface(_abi) as AssetLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetLogic {
    return new Contract(address, _abi, signerOrProvider) as AssetLogic;
  }
}
