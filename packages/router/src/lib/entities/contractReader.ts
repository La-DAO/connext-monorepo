import { CrosschainTransaction, TransactionData } from "@connext/nxtp-utils";

import { TransactionStatus as SdkTransactionStatus } from "../../adapters/subgraph/graphqlsdk";

export const CrosschainTransactionStatus = {
  SenderPrepared: "SenderPrepared",
  SenderFulfilled: "SenderFulfilled",
  SenderCancelled: "SenderCancelled",
  ReceiverPrepared: "ReceiverPrepared",
  ReceiverFulfilled: "ReceiverFulfilled",
  ReceiverCancelled: "ReceiverCancelled",
} as const;
export type TCrosschainTransactionStatus = typeof CrosschainTransactionStatus[keyof typeof CrosschainTransactionStatus];

export type PreparePayload = {
  encryptedCallData: string;
  encodedBid: string;
  bidSignature: string;
};

export type CancelPayload = {};

export type FulfillPayload = CancelPayload & {
  signature: string;
  relayerFee: string;
  callData: string;
};

export type CrosschainTransactionPayload = {
  [CrosschainTransactionStatus.SenderPrepared]: PreparePayload;
  [CrosschainTransactionStatus.SenderFulfilled]: FulfillPayload;
  [CrosschainTransactionStatus.SenderCancelled]: CancelPayload;
  [CrosschainTransactionStatus.ReceiverPrepared]: PreparePayload;
  [CrosschainTransactionStatus.ReceiverFulfilled]: FulfillPayload;
  [CrosschainTransactionStatus.ReceiverCancelled]: CancelPayload;
};

export type ActiveTransaction<T extends TCrosschainTransactionStatus> = {
  status: T;
  crosschainTx: CrosschainTransaction;
  payload: CrosschainTransactionPayload[T];
};

export type SingleChainTransaction = {
  status: SdkTransactionStatus;
  txData: TransactionData;
  encryptedCallData: string;
  encodedBid: string;
  bidSignature: string;
  signature?: string; // only there when fulfilled or cancelled
  relayerFee?: string; // only there when fulfilled or cancelled
};
