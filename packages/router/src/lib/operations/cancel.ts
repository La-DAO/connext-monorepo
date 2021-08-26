import {
  ajv,
  getUuid,
  InvariantTransactionData,
  InvariantTransactionDataSchema,
  RequestContext,
} from "@connext/nxtp-utils";
import { providers } from "ethers";

import { getContext } from "../../router";
import { ParamsInvalid } from "../errors";
import { CancelInput, CancelInputSchema } from "../entities";

export const cancel = async (
  invariantData: InvariantTransactionData,
  input: CancelInput,
  requestContext: RequestContext,
): Promise<providers.TransactionReceipt | undefined> => {
  const method = "cancel";
  const methodId = getUuid();

  const { logger, contractWriter } = getContext();
  logger.info({ method, methodId, requestContext, invariantData, input }, "Method start");

  // Validate InvariantData schema
  const validateInvariantData = ajv.compile(InvariantTransactionDataSchema);
  const validInvariantData = validateInvariantData(invariantData);
  if (!validInvariantData) {
    const error = validateInvariantData.errors?.map((err: any) => `${err.instancePath} - ${err.message}`).join(",");
    logger.error(
      { method, methodId, error: validateInvariantData.errors, invariantData },
      "Invalid invariantData params",
    );
    throw new ParamsInvalid({
      method,
      methodId,
      paramsError: error,
      requestContext,
    });
  }

  // Validate Prepare Input schema
  const validateInput = ajv.compile(CancelInputSchema);
  const validInput = validateInput(input);
  if (!validInput) {
    const error = validateInput.errors?.map((err: any) => `${err.instancePath} - ${err.message}`).join(",");
    logger.error({ method, methodId, error: validateInput.errors, input }, "Invalid input params");
    throw new ParamsInvalid({
      method,
      methodId,
      paramsError: error,
      requestContext,
    });
  }

  const { side, amount, preparedBlockNumber, expiry } = input;

  let cancelChain: number;
  if (side === "sender") {
    cancelChain = invariantData.sendingChainId;
  } else {
    cancelChain = invariantData.receivingChainId;
  }

  // Send to tx service
  logger.info(
    { method, methodId, requestContext, transactionId: invariantData.transactionId, side },
    "Sending cancel tx",
  );

  const receipt = await contractWriter.cancel(
    cancelChain,
    {
      txData: { ...invariantData, amount, preparedBlockNumber, expiry },
      signature: "0x",
    },
    requestContext,
  );
  logger.info({ method, methodId, requestContext, transactionHash: receipt.transactionHash }, "Method complete");
  return receipt;
};
