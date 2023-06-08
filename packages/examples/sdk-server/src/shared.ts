import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import {
  ChainDeployments,
  SdkShared,
  SdkGetConversionRateParamsSchema,
  SdkGetConversionRateParams,
  SdkGetProviderParamsSchema,
  SdkGetProviderParams,
  SdkGetDeploymentAddressParamsSchema,
  SdkGetDeploymentAddressParams,
  SdkGetConnextParamsSchema,
  SdkGetConnextParams,
  SdkGetERC20ParamsSchema,
  SdkGetERC20Params,
  SdkGetChainIdParamsSchema,
  SdkGetChainIdParams,
  SdkDomainToChainNameParamsSchema,
  SdkDomainToChainNameParams,
  SdkChainIdToDomainParamsSchema,
  SdkChainIdToDomainParams,
  SdkDomainToChainIdParamsSchema,
  SdkDomainToChainIdParams,
  SdkGetBlockNumberFromUnixTimestampParamsSchema,
  SdkGetBlockNumberFromUnixTimestampParams,
  SdkApproveIfNeededParamsSchema,
  SdkApproveIfNeededParams,
  SdkGetActiveLiquidityParamsSchema,
  SdkGetActiveLiquidityParams,
  SdkGetAssetsDataByDomainAndAddressParamsSchema,
  SdkGetAssetsDataByDomainAndAddressParams,
  SdkGetAssetsWithSameCanonicalParamsSchema,
  SdkGetAssetsWithSameCanonicalParams,
  SdkGetAssetsDataByDomainAndKeyParamsSchema,
  SdkGetAssetsDataByDomainAndKeyParams,
  SdkIsNextAssetParamsSchema,
  SdkIsNextAssetParams,
  SdkChangeSignerAddressParamsSchema,
  SdkChangeSignerAddressParams,
  SdkParseConnextTransactionReceiptParamsSchema,
  SdkParseConnextTransactionReceiptParams,
  SdkCalculateCanonicalKeyParamsSchema,
  SdkCalculateCanonicalKeyParams,
  SdkGetCanonicalTokenIdParamsSchema,
  SdkGetCanonicalTokenIdParams,
} from "@connext/sdk-core";
import { BigNumber, providers } from "ethers";

export const sharedRoutes = async (server: FastifyInstance, sdkSharedInstance: SdkShared): Promise<any> => {
  const s = server.withTypeProvider<TypeBoxTypeProvider>();

  s.get<{ Params: SdkGetConversionRateParams }>(
    "/getConversionRate/:chainId",
    {
      schema: {
        params: SdkGetConversionRateParamsSchema,
      },
    },
    async (request, reply) => {
      const { chainId } = request.params;
      const res = await sdkSharedInstance.getConversionRate(chainId);
      reply.status(200).send(res);
    },
  );

  s.get<{ Params: SdkGetProviderParams }>(
    "/getProvider/:domainId",
    {
      schema: {
        params: SdkGetProviderParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId } = request.params;
      const txReq = await sdkSharedInstance.getProvider(domainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetDeploymentAddressParams }>(
    "/getDeploymentAddress/:domainId/:deploymentName",
    {
      schema: {
        params: SdkGetDeploymentAddressParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, deploymentName } = request.params;
      const txReq = await sdkSharedInstance.getDeploymentAddress(domainId, deploymentName as keyof ChainDeployments);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetConnextParams }>(
    "/getConnext/:domainId",
    {
      schema: {
        params: SdkGetConnextParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId } = request.params;
      const txReq = await sdkSharedInstance.getConnext(domainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetERC20Params }>(
    "/getERC20/:domainId/:tokenAddress",
    {
      schema: {
        params: SdkGetERC20ParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const txReq = await sdkSharedInstance.getERC20(domainId, tokenAddress);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetChainIdParams }>(
    "/getChainId/:domainId",
    {
      schema: {
        params: SdkGetChainIdParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId } = request.params;
      const txReq = await sdkSharedInstance.getChainId(domainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkDomainToChainNameParams }>(
    "/domainToChainName/:domainId",
    {
      schema: {
        params: SdkDomainToChainNameParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId } = request.params;
      const txReq = SdkShared.domainToChainName(domainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkChainIdToDomainParams }>(
    "/chainIdToDomain/:chainId",
    {
      schema: {
        params: SdkChainIdToDomainParamsSchema,
      },
    },
    async (request, reply) => {
      const { chainId } = request.params;
      const txReq = SdkShared.chainIdToDomain(chainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkDomainToChainIdParams }>(
    "/domainToChainId/:domainId",
    {
      schema: {
        params: SdkDomainToChainIdParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId } = request.params;
      const txReq = SdkShared.domainToChainId(domainId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetBlockNumberFromUnixTimestampParams }>(
    "/getBlockNumberFromUnixTimestamp/:domainId/:unixTimestamp",
    {
      schema: {
        params: SdkGetBlockNumberFromUnixTimestampParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, unixTimestamp } = request.params;
      const txReq = await SdkShared.getBlockNumberFromUnixTimestamp(domainId, unixTimestamp);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkApproveIfNeededParams }>(
    "/approveIfNeeded/:domainId/:assetId/:amount/:infiniteApprove",
    {
      schema: {
        params: SdkApproveIfNeededParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, assetId, amount, infiniteApprove } = request.params;
      const txReq = await sdkSharedInstance.approveIfNeeded(domainId, assetId, amount, infiniteApprove);
      reply.status(200).send(txReq);
    },
  );

  s.get("/getAssetsData", async (request, reply) => {
    const txReq = await sdkSharedInstance.getAssetsData();
    reply.status(200).send(txReq);
  });

  s.get<{ Params: SdkGetConversionRateParams }>(
    "/getActiveLiquidity",
    {
      schema: {
        querystring: SdkGetActiveLiquidityParamsSchema,
      },
    },
    async (request, reply) => {
      const { domain, local } = request.query as SdkGetActiveLiquidityParams;
      const result = await sdkSharedInstance.getActiveLiquidity(domain, local);
      reply.status(200).send(result);
    },
  );

  s.get("/getSupported", async (request, reply) => {
    const txReq = await sdkSharedInstance.getSupported();
    reply.status(200).send(txReq);
  });

  s.get<{ Params: SdkGetAssetsDataByDomainAndAddressParams }>(
    "/getAssetsDataByDomainAndAddress/:domainId/:tokenAddress",
    {
      schema: {
        params: SdkGetAssetsDataByDomainAndAddressParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const txReq = await sdkSharedInstance.getAssetsDataByDomainAndAddress(domainId, tokenAddress);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetAssetsWithSameCanonicalParams }>(
    "/getAssetsWithSameCanonical/:domainId/:tokenAddress",
    {
      schema: {
        params: SdkGetAssetsWithSameCanonicalParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const txReq = await sdkSharedInstance.getAssetsDataByDomainAndAddress(domainId, tokenAddress);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetAssetsDataByDomainAndKeyParams }>(
    "/getAssetsDataByDomainAndKey/:domainId/:key",
    {
      schema: {
        params: SdkGetAssetsDataByDomainAndKeyParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, key } = request.params;
      const txReq = await sdkSharedInstance.getAssetsDataByDomainAndKey(domainId, key);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkIsNextAssetParams }>(
    "/isNextAsset/:domainId/:tokenAddress",
    {
      schema: {
        params: SdkIsNextAssetParamsSchema,
      },
    },
    async (request, reply) => {
      const { tokenAddress } = request.params;
      const txReq = await sdkSharedInstance.isNextAsset(tokenAddress);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkChangeSignerAddressParams }>(
    "/changeSignerAddress/:signerAddress",
    {
      schema: {
        params: SdkChangeSignerAddressParamsSchema,
      },
    },
    async (request, reply) => {
      const { signerAddress } = request.params;
      const txReq = await sdkSharedInstance.changeSignerAddress(signerAddress);
      reply.status(200).send(txReq);
    },
  );

  s.post<{ Body: SdkParseConnextTransactionReceiptParams }>(
    "/parseConnextTransactionReceipt",
    {
      schema: {
        body: SdkParseConnextTransactionReceiptParamsSchema,
      },
    },
    async (request, reply) => {
      const requestBody = request.body;

      // create a new object with the correct types
      const transactionReceipt: providers.TransactionReceipt = {
        ...requestBody,
        gasUsed: BigNumber.from(requestBody.gasUsed),
        cumulativeGasUsed: BigNumber.from(requestBody.cumulativeGasUsed),
        effectiveGasPrice: BigNumber.from(requestBody.effectiveGasPrice),
        logs: requestBody.logs,
      };

      const result = await sdkSharedInstance.parseConnextTransactionReceipt(transactionReceipt);
      reply.status(200).send(result);
    },
  );

  s.get<{ Params: SdkCalculateCanonicalKeyParams }>(
    "/calculateCanonicalKey/:domainId/:canonicalId",
    {
      schema: {
        params: SdkCalculateCanonicalKeyParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, canonicalId } = request.params;
      const txReq = sdkSharedInstance.calculateCanonicalKey(domainId, canonicalId);
      reply.status(200).send(txReq);
    },
  );

  s.get<{ Params: SdkGetCanonicalTokenIdParams }>(
    "/getCanonicalTokenId/:domainId/:tokenAddress",
    {
      schema: {
        params: SdkGetCanonicalTokenIdParamsSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const txReq = await sdkSharedInstance.getCanonicalTokenId(domainId, tokenAddress);
      reply.status(200).send(txReq);
    },
  );
};
