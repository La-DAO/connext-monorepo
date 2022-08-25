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

export declare namespace SwapUtils {
  export type SwapStruct = {
    key: PromiseOrValue<BytesLike>;
    initialA: PromiseOrValue<BigNumberish>;
    futureA: PromiseOrValue<BigNumberish>;
    initialATime: PromiseOrValue<BigNumberish>;
    futureATime: PromiseOrValue<BigNumberish>;
    swapFee: PromiseOrValue<BigNumberish>;
    adminFee: PromiseOrValue<BigNumberish>;
    lpToken: PromiseOrValue<string>;
    pooledTokens: PromiseOrValue<string>[];
    tokenPrecisionMultipliers: PromiseOrValue<BigNumberish>[];
    balances: PromiseOrValue<BigNumberish>[];
    adminFees: PromiseOrValue<BigNumberish>[];
  };

  export type SwapStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[]
  ] & {
    key: string;
    initialA: BigNumber;
    futureA: BigNumber;
    initialATime: BigNumber;
    futureATime: BigNumber;
    swapFee: BigNumber;
    adminFee: BigNumber;
    lpToken: string;
    pooledTokens: string[];
    tokenPrecisionMultipliers: BigNumber[];
    balances: BigNumber[];
    adminFees: BigNumber[];
  };
}

export interface SwapAdminFacetInterface extends utils.Interface {
  functions: {
    "initializeSwap(bytes32,address[],uint8[],string,string,uint256,uint256,uint256,address)": FunctionFragment;
    "rampA(bytes32,uint256,uint256)": FunctionFragment;
    "setSwapAdminFee(bytes32,uint256)": FunctionFragment;
    "setSwapFee(bytes32,uint256)": FunctionFragment;
    "stopRampA(bytes32)": FunctionFragment;
    "withdrawSwapAdminFees(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initializeSwap"
      | "rampA"
      | "setSwapAdminFee"
      | "setSwapFee"
      | "stopRampA"
      | "withdrawSwapAdminFees"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initializeSwap",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rampA",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapAdminFee",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapFee",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stopRampA",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSwapAdminFees",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "initializeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rampA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSwapAdminFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSwapFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopRampA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSwapAdminFees",
    data: BytesLike
  ): Result;

  events: {
    "AdminFeesSet(bytes32,uint256,address)": EventFragment;
    "AdminFeesWithdrawn(bytes32,address)": EventFragment;
    "RampAStarted(bytes32,uint256,uint256,address)": EventFragment;
    "RampAStopped(bytes32,address)": EventFragment;
    "SwapFeesSet(bytes32,uint256,address)": EventFragment;
    "SwapInitialized(bytes32,tuple,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminFeesSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminFeesWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RampAStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RampAStopped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapFeesSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapInitialized"): EventFragment;
}

export interface AdminFeesSetEventObject {
  key: string;
  newAdminFee: BigNumber;
  caller: string;
}
export type AdminFeesSetEvent = TypedEvent<
  [string, BigNumber, string],
  AdminFeesSetEventObject
>;

export type AdminFeesSetEventFilter = TypedEventFilter<AdminFeesSetEvent>;

export interface AdminFeesWithdrawnEventObject {
  key: string;
  caller: string;
}
export type AdminFeesWithdrawnEvent = TypedEvent<
  [string, string],
  AdminFeesWithdrawnEventObject
>;

export type AdminFeesWithdrawnEventFilter =
  TypedEventFilter<AdminFeesWithdrawnEvent>;

export interface RampAStartedEventObject {
  key: string;
  futureA: BigNumber;
  futureTime: BigNumber;
  caller: string;
}
export type RampAStartedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  RampAStartedEventObject
>;

export type RampAStartedEventFilter = TypedEventFilter<RampAStartedEvent>;

export interface RampAStoppedEventObject {
  key: string;
  caller: string;
}
export type RampAStoppedEvent = TypedEvent<
  [string, string],
  RampAStoppedEventObject
>;

export type RampAStoppedEventFilter = TypedEventFilter<RampAStoppedEvent>;

export interface SwapFeesSetEventObject {
  key: string;
  newSwapFee: BigNumber;
  caller: string;
}
export type SwapFeesSetEvent = TypedEvent<
  [string, BigNumber, string],
  SwapFeesSetEventObject
>;

export type SwapFeesSetEventFilter = TypedEventFilter<SwapFeesSetEvent>;

export interface SwapInitializedEventObject {
  key: string;
  swap: SwapUtils.SwapStructOutput;
  caller: string;
}
export type SwapInitializedEvent = TypedEvent<
  [string, SwapUtils.SwapStructOutput, string],
  SwapInitializedEventObject
>;

export type SwapInitializedEventFilter = TypedEventFilter<SwapInitializedEvent>;

export interface SwapAdminFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapAdminFacetInterface;

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
    initializeSwap(
      _key: PromiseOrValue<BytesLike>,
      _pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      _a: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _adminFee: PromiseOrValue<BigNumberish>,
      lpTokenTargetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rampA(
      key: PromiseOrValue<BytesLike>,
      futureA: PromiseOrValue<BigNumberish>,
      futureTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapAdminFee(
      key: PromiseOrValue<BytesLike>,
      newAdminFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapFee(
      key: PromiseOrValue<BytesLike>,
      newSwapFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stopRampA(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawSwapAdminFees(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  initializeSwap(
    _key: PromiseOrValue<BytesLike>,
    _pooledTokens: PromiseOrValue<string>[],
    decimals: PromiseOrValue<BigNumberish>[],
    lpTokenName: PromiseOrValue<string>,
    lpTokenSymbol: PromiseOrValue<string>,
    _a: PromiseOrValue<BigNumberish>,
    _fee: PromiseOrValue<BigNumberish>,
    _adminFee: PromiseOrValue<BigNumberish>,
    lpTokenTargetAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rampA(
    key: PromiseOrValue<BytesLike>,
    futureA: PromiseOrValue<BigNumberish>,
    futureTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapAdminFee(
    key: PromiseOrValue<BytesLike>,
    newAdminFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapFee(
    key: PromiseOrValue<BytesLike>,
    newSwapFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stopRampA(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawSwapAdminFees(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initializeSwap(
      _key: PromiseOrValue<BytesLike>,
      _pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      _a: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _adminFee: PromiseOrValue<BigNumberish>,
      lpTokenTargetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    rampA(
      key: PromiseOrValue<BytesLike>,
      futureA: PromiseOrValue<BigNumberish>,
      futureTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapAdminFee(
      key: PromiseOrValue<BytesLike>,
      newAdminFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapFee(
      key: PromiseOrValue<BytesLike>,
      newSwapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stopRampA(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawSwapAdminFees(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminFeesSet(bytes32,uint256,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      newAdminFee?: null,
      caller?: null
    ): AdminFeesSetEventFilter;
    AdminFeesSet(
      key?: PromiseOrValue<BytesLike> | null,
      newAdminFee?: null,
      caller?: null
    ): AdminFeesSetEventFilter;

    "AdminFeesWithdrawn(bytes32,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      caller?: null
    ): AdminFeesWithdrawnEventFilter;
    AdminFeesWithdrawn(
      key?: PromiseOrValue<BytesLike> | null,
      caller?: null
    ): AdminFeesWithdrawnEventFilter;

    "RampAStarted(bytes32,uint256,uint256,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      futureA?: null,
      futureTime?: null,
      caller?: null
    ): RampAStartedEventFilter;
    RampAStarted(
      key?: PromiseOrValue<BytesLike> | null,
      futureA?: null,
      futureTime?: null,
      caller?: null
    ): RampAStartedEventFilter;

    "RampAStopped(bytes32,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      caller?: null
    ): RampAStoppedEventFilter;
    RampAStopped(
      key?: PromiseOrValue<BytesLike> | null,
      caller?: null
    ): RampAStoppedEventFilter;

    "SwapFeesSet(bytes32,uint256,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      newSwapFee?: null,
      caller?: null
    ): SwapFeesSetEventFilter;
    SwapFeesSet(
      key?: PromiseOrValue<BytesLike> | null,
      newSwapFee?: null,
      caller?: null
    ): SwapFeesSetEventFilter;

    "SwapInitialized(bytes32,tuple,address)"(
      key?: PromiseOrValue<BytesLike> | null,
      swap?: null,
      caller?: null
    ): SwapInitializedEventFilter;
    SwapInitialized(
      key?: PromiseOrValue<BytesLike> | null,
      swap?: null,
      caller?: null
    ): SwapInitializedEventFilter;
  };

  estimateGas: {
    initializeSwap(
      _key: PromiseOrValue<BytesLike>,
      _pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      _a: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _adminFee: PromiseOrValue<BigNumberish>,
      lpTokenTargetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rampA(
      key: PromiseOrValue<BytesLike>,
      futureA: PromiseOrValue<BigNumberish>,
      futureTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapAdminFee(
      key: PromiseOrValue<BytesLike>,
      newAdminFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapFee(
      key: PromiseOrValue<BytesLike>,
      newSwapFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stopRampA(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawSwapAdminFees(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializeSwap(
      _key: PromiseOrValue<BytesLike>,
      _pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      _a: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _adminFee: PromiseOrValue<BigNumberish>,
      lpTokenTargetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rampA(
      key: PromiseOrValue<BytesLike>,
      futureA: PromiseOrValue<BigNumberish>,
      futureTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapAdminFee(
      key: PromiseOrValue<BytesLike>,
      newAdminFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapFee(
      key: PromiseOrValue<BytesLike>,
      newSwapFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stopRampA(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawSwapAdminFees(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
