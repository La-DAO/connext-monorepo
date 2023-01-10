/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface UnwrapperInterface extends utils.Interface {
  functions: {
    "WRAPPER()": FunctionFragment;
    "getTargetWrapperContract()": FunctionFragment;
    "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "WRAPPER" | "getTargetWrapperContract" | "xReceive"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WRAPPER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTargetWrapperContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "xReceive",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WRAPPER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTargetWrapperContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;

  events: {
    "UnwrappingFailed(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UnwrappingFailed"): EventFragment;
}

export interface UnwrappingFailedEventObject {
  recipient: string;
  reason: string;
}
export type UnwrappingFailedEvent = TypedEvent<
  [string, string],
  UnwrappingFailedEventObject
>;

export type UnwrappingFailedEventFilter =
  TypedEventFilter<UnwrappingFailedEvent>;

export interface Unwrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UnwrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WRAPPER(overrides?: CallOverrides): Promise<[string]>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<[string]>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      arg3: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  WRAPPER(overrides?: CallOverrides): Promise<string>;

  getTargetWrapperContract(overrides?: CallOverrides): Promise<string>;

  xReceive(
    arg0: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    asset: PromiseOrValue<string>,
    arg3: PromiseOrValue<string>,
    arg4: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WRAPPER(overrides?: CallOverrides): Promise<string>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<string>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      arg3: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "UnwrappingFailed(address,bytes)"(
      recipient?: null,
      reason?: null
    ): UnwrappingFailedEventFilter;
    UnwrappingFailed(
      recipient?: null,
      reason?: null
    ): UnwrappingFailedEventFilter;
  };

  estimateGas: {
    WRAPPER(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<BigNumber>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      arg3: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WRAPPER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTargetWrapperContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      arg3: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
