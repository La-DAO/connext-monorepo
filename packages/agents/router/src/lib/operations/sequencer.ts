import { createLoggingContext, SignedBid, NxtpError, formatUrl } from "@connext/nxtp-utils";
import { getContext } from "../../router";
import axios, { AxiosResponse } from "axios";

export const sendBid = async (bid: SignedBid): Promise<any> => {
  const { requestContext, methodContext } = createLoggingContext(sendBid.name);
  const { logger, config } = getContext();

  /// TODO don't send the signature in logs, edit bid during logging
  logger.info("Method start", requestContext, methodContext, { bid });

  let response: AxiosResponse<string> = await axios.post(formatUrl(config.sequencerUrl, "bid"), {
    bid,
  });
  
  if (!response) {
    throw new NxtpError("error sendBid", { response });
  } else {
    return response.data;
  }
};