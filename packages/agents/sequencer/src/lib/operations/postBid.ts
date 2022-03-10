import axios from "axios";
import {
  gelatoSend,
  isChainSupportedByGelato,
  SignedBid,
  RequestContext,
  createLoggingContext,
  formatUrl,
  gelatoRelayEndpoint,
} from "@connext/nxtp-utils";

import { AppContext } from "../../context";

export const postBid = async (
  context: AppContext,
  signedBid: SignedBid,
  encodedData: string,
  _requestContext: RequestContext,
): Promise<any> => {
  const {
    logger,
    chainData,
    adapters: { chainreader },
    config,
  } = context;
  const { requestContext, methodContext } = createLoggingContext(postBid.name, _requestContext);
  logger.info(`Method start: ${postBid.name}`, requestContext, methodContext, { signedBid });

  const { bid } = signedBid;
  const destinationChainId = chainData.get(bid.data.params.destinationDomain)!.chainId;

  // const encodedData = getTxManagerInterface().encodeFunctionData("fulfill", [bid.data]);
  const destinationTransactionManagerAddress =
    config.chains[bid.data.params.destinationDomain].deployments.transactionManager;

  // // Validate the bid's fulfill call will succeed on chain.
  // const gas = await chainreader.getGasEstimate(Number(bid.data.params.destinationDomain), {
  //   chainId: destinationChainId,
  //   to: destinationTransactionManagerAddress,
  //   data: encodedData,
  // });

  // logger.info("Estimated gas", requestContext, methodContext, {
  //   gas: gas.toString(),
  // });

  if (!isChainSupportedByGelato(destinationChainId)) {
    throw new Error("Chain not supported by gelato.");
  }

  logger.info("Sending to Gelato network", requestContext, methodContext, {
    encodedData,
    destinationTransactionManagerAddress,
    domain: bid.data.params.destinationDomain,
  });

  // TODO: In the future, this should update the cache with the bid, and we should be sending with gelato in a separate handler!
  const result = await gelatoSend(
    destinationChainId,
    destinationTransactionManagerAddress,
    encodedData,
    bid.data.local,
    bid.data.feePercentage,
  );
  const response = await axios.get(formatUrl(gelatoRelayEndpoint, "tasks", result.taskId));

  logger.info("Sent to Gelato network", requestContext, methodContext, {
    result,
    response: response.data,
  });
};
