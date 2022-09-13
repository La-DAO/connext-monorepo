// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@graphql-mesh/utils";

import type { GetMeshOptions } from "@graphql-mesh/runtime";
import type { YamlConfig } from "@graphql-mesh/types";
import { PubSub } from "@graphql-mesh/utils";
import { DefaultLogger } from "@graphql-mesh/utils";
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from "@whatwg-node/fetch";

import GraphqlHandler from "@graphql-mesh/graphql";
import PrefixTransform from "@graphql-mesh/transform-prefix";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from "@graphql-mesh/utils";
import { createMeshHTTPHandler } from "@graphql-mesh/http";
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from "@graphql-mesh/runtime";
import { MeshStore, FsStoreStorageAdapter } from "@graphql-mesh/store";
import { path as pathModule } from "@graphql-mesh/cross-helpers";
import type { ConnextRinkebyContext } from "./sources/Connext_Rinkeby/types";
import type { ConnextGoerliContext } from "./sources/Connext_Goerli/types";
import type { ConnextLocal1338Context } from "./sources/Connext_Local1338/types";
import type { ConnextLocal1337Context } from "./sources/Connext_Local1337/types";
import type { ConnextTestGoerliContext } from "./sources/Connext_Test_Goerli/types";
import type { ConnextTestOptimismGoerliContext } from "./sources/Connext_Test_OptimismGoerli/types";
import type { ConnextOptimismGoerliContext } from "./sources/Connext_OptimismGoerli/types";
import type { ConnextStagingGoerliContext } from "./sources/Connext_Staging_Goerli/types";
import type { ConnextStagingOptimismGoerliContext } from "./sources/Connext_Staging_OptimismGoerli/types";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  rinkeby_BigDecimal: any;
  BigInt: bigint;
  rinkeby_Bytes: any;
  goerli_BigDecimal: any;
  goerli_Bytes: any;
  local1338_BigDecimal: any;
  local1338_Bytes: any;
  optimismgoerli_BigDecimal: any;
  optimismgoerli_Bytes: any;
  stagingoptimismgoerli_BigDecimal: any;
  stagingoptimismgoerli_Bytes: any;
  testoptimismgoerli_BigDecimal: any;
  testoptimismgoerli_Bytes: any;
  local1337_BigDecimal: any;
  local1337_Bytes: any;
  testgoerli_BigDecimal: any;
  testgoerli_Bytes: any;
  staginggoerli_BigDecimal: any;
  staginggoerli_Bytes: any;
};

export type Query = {
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  goerli_originMessage?: Maybe<goerli_OriginMessage>;
  goerli_originMessages: Array<goerli_OriginMessage>;
  goerli_destinationMessage?: Maybe<goerli_DestinationMessage>;
  goerli_destinationMessages: Array<goerli_DestinationMessage>;
  goerli_aggregateRoot?: Maybe<goerli_AggregateRoot>;
  goerli_aggregateRoots: Array<goerli_AggregateRoot>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
  local1338_asset?: Maybe<local1338_Asset>;
  local1338_assets: Array<local1338_Asset>;
  local1338_assetBalance?: Maybe<local1338_AssetBalance>;
  local1338_assetBalances: Array<local1338_AssetBalance>;
  local1338_router?: Maybe<local1338_Router>;
  local1338_routers: Array<local1338_Router>;
  local1338_setting?: Maybe<local1338_Setting>;
  local1338_settings: Array<local1338_Setting>;
  local1338_relayer?: Maybe<local1338_Relayer>;
  local1338_relayers: Array<local1338_Relayer>;
  local1338_stableSwap?: Maybe<local1338_StableSwap>;
  local1338_stableSwaps: Array<local1338_StableSwap>;
  local1338_sponsorVault?: Maybe<local1338_SponsorVault>;
  local1338_sponsorVaults: Array<local1338_SponsorVault>;
  local1338_originTransfer?: Maybe<local1338_OriginTransfer>;
  local1338_originTransfers: Array<local1338_OriginTransfer>;
  local1338_destinationTransfer?: Maybe<local1338_DestinationTransfer>;
  local1338_destinationTransfers: Array<local1338_DestinationTransfer>;
  /** Access to subgraph metadata */
  local1338__meta?: Maybe<local1338__Meta_>;
  optimismgoerli_asset?: Maybe<optimismgoerli_Asset>;
  optimismgoerli_assets: Array<optimismgoerli_Asset>;
  optimismgoerli_assetBalance?: Maybe<optimismgoerli_AssetBalance>;
  optimismgoerli_assetBalances: Array<optimismgoerli_AssetBalance>;
  optimismgoerli_router?: Maybe<optimismgoerli_Router>;
  optimismgoerli_routers: Array<optimismgoerli_Router>;
  optimismgoerli_setting?: Maybe<optimismgoerli_Setting>;
  optimismgoerli_settings: Array<optimismgoerli_Setting>;
  optimismgoerli_relayer?: Maybe<optimismgoerli_Relayer>;
  optimismgoerli_relayers: Array<optimismgoerli_Relayer>;
  optimismgoerli_stableSwap?: Maybe<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwaps: Array<optimismgoerli_StableSwap>;
  optimismgoerli_sponsorVault?: Maybe<optimismgoerli_SponsorVault>;
  optimismgoerli_sponsorVaults: Array<optimismgoerli_SponsorVault>;
  optimismgoerli_originTransfer?: Maybe<optimismgoerli_OriginTransfer>;
  optimismgoerli_originTransfers: Array<optimismgoerli_OriginTransfer>;
  optimismgoerli_destinationTransfer?: Maybe<optimismgoerli_DestinationTransfer>;
  optimismgoerli_destinationTransfers: Array<optimismgoerli_DestinationTransfer>;
  optimismgoerli_originMessage?: Maybe<optimismgoerli_OriginMessage>;
  optimismgoerli_originMessages: Array<optimismgoerli_OriginMessage>;
  optimismgoerli_destinationMessage?: Maybe<optimismgoerli_DestinationMessage>;
  optimismgoerli_destinationMessages: Array<optimismgoerli_DestinationMessage>;
  optimismgoerli_aggregateRoot?: Maybe<optimismgoerli_AggregateRoot>;
  optimismgoerli_aggregateRoots: Array<optimismgoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  optimismgoerli__meta?: Maybe<optimismgoerli__Meta_>;
  stagingoptimismgoerli_asset?: Maybe<stagingoptimismgoerli_Asset>;
  stagingoptimismgoerli_assets: Array<stagingoptimismgoerli_Asset>;
  stagingoptimismgoerli_assetBalance?: Maybe<stagingoptimismgoerli_AssetBalance>;
  stagingoptimismgoerli_assetBalances: Array<stagingoptimismgoerli_AssetBalance>;
  stagingoptimismgoerli_router?: Maybe<stagingoptimismgoerli_Router>;
  stagingoptimismgoerli_routers: Array<stagingoptimismgoerli_Router>;
  stagingoptimismgoerli_setting?: Maybe<stagingoptimismgoerli_Setting>;
  stagingoptimismgoerli_settings: Array<stagingoptimismgoerli_Setting>;
  stagingoptimismgoerli_relayer?: Maybe<stagingoptimismgoerli_Relayer>;
  stagingoptimismgoerli_relayers: Array<stagingoptimismgoerli_Relayer>;
  stagingoptimismgoerli_stableSwap?: Maybe<stagingoptimismgoerli_StableSwap>;
  stagingoptimismgoerli_stableSwaps: Array<stagingoptimismgoerli_StableSwap>;
  stagingoptimismgoerli_sponsorVault?: Maybe<stagingoptimismgoerli_SponsorVault>;
  stagingoptimismgoerli_sponsorVaults: Array<stagingoptimismgoerli_SponsorVault>;
  stagingoptimismgoerli_originTransfer?: Maybe<stagingoptimismgoerli_OriginTransfer>;
  stagingoptimismgoerli_originTransfers: Array<stagingoptimismgoerli_OriginTransfer>;
  stagingoptimismgoerli_destinationTransfer?: Maybe<stagingoptimismgoerli_DestinationTransfer>;
  stagingoptimismgoerli_destinationTransfers: Array<stagingoptimismgoerli_DestinationTransfer>;
  stagingoptimismgoerli_originMessage?: Maybe<stagingoptimismgoerli_OriginMessage>;
  stagingoptimismgoerli_originMessages: Array<stagingoptimismgoerli_OriginMessage>;
  stagingoptimismgoerli_destinationMessage?: Maybe<stagingoptimismgoerli_DestinationMessage>;
  stagingoptimismgoerli_destinationMessages: Array<stagingoptimismgoerli_DestinationMessage>;
  stagingoptimismgoerli_aggregateRoot?: Maybe<stagingoptimismgoerli_AggregateRoot>;
  stagingoptimismgoerli_aggregateRoots: Array<stagingoptimismgoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  stagingoptimismgoerli__meta?: Maybe<stagingoptimismgoerli__Meta_>;
  testoptimismgoerli_asset?: Maybe<testoptimismgoerli_Asset>;
  testoptimismgoerli_assets: Array<testoptimismgoerli_Asset>;
  testoptimismgoerli_assetBalance?: Maybe<testoptimismgoerli_AssetBalance>;
  testoptimismgoerli_assetBalances: Array<testoptimismgoerli_AssetBalance>;
  testoptimismgoerli_router?: Maybe<testoptimismgoerli_Router>;
  testoptimismgoerli_routers: Array<testoptimismgoerli_Router>;
  testoptimismgoerli_setting?: Maybe<testoptimismgoerli_Setting>;
  testoptimismgoerli_settings: Array<testoptimismgoerli_Setting>;
  testoptimismgoerli_relayer?: Maybe<testoptimismgoerli_Relayer>;
  testoptimismgoerli_relayers: Array<testoptimismgoerli_Relayer>;
  testoptimismgoerli_stableSwap?: Maybe<testoptimismgoerli_StableSwap>;
  testoptimismgoerli_stableSwaps: Array<testoptimismgoerli_StableSwap>;
  testoptimismgoerli_sponsorVault?: Maybe<testoptimismgoerli_SponsorVault>;
  testoptimismgoerli_sponsorVaults: Array<testoptimismgoerli_SponsorVault>;
  testoptimismgoerli_originTransfer?: Maybe<testoptimismgoerli_OriginTransfer>;
  testoptimismgoerli_originTransfers: Array<testoptimismgoerli_OriginTransfer>;
  testoptimismgoerli_destinationTransfer?: Maybe<testoptimismgoerli_DestinationTransfer>;
  testoptimismgoerli_destinationTransfers: Array<testoptimismgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testoptimismgoerli__meta?: Maybe<testoptimismgoerli__Meta_>;
  local1337_asset?: Maybe<local1337_Asset>;
  local1337_assets: Array<local1337_Asset>;
  local1337_assetBalance?: Maybe<local1337_AssetBalance>;
  local1337_assetBalances: Array<local1337_AssetBalance>;
  local1337_router?: Maybe<local1337_Router>;
  local1337_routers: Array<local1337_Router>;
  local1337_setting?: Maybe<local1337_Setting>;
  local1337_settings: Array<local1337_Setting>;
  local1337_relayer?: Maybe<local1337_Relayer>;
  local1337_relayers: Array<local1337_Relayer>;
  local1337_stableSwap?: Maybe<local1337_StableSwap>;
  local1337_stableSwaps: Array<local1337_StableSwap>;
  local1337_sponsorVault?: Maybe<local1337_SponsorVault>;
  local1337_sponsorVaults: Array<local1337_SponsorVault>;
  local1337_originTransfer?: Maybe<local1337_OriginTransfer>;
  local1337_originTransfers: Array<local1337_OriginTransfer>;
  local1337_destinationTransfer?: Maybe<local1337_DestinationTransfer>;
  local1337_destinationTransfers: Array<local1337_DestinationTransfer>;
  /** Access to subgraph metadata */
  local1337__meta?: Maybe<local1337__Meta_>;
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_destinationMessage?: Maybe<staginggoerli_DestinationMessage>;
  staginggoerli_destinationMessages: Array<staginggoerli_DestinationMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};

export type Queryrinkeby_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};

export type Querygoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_Asset_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Asset_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_Setting_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Setting_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Relayer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_StableSwap_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_SponsorVault_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AggregateRoot_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
};

export type Querylocal1338_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Asset_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Asset_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_AssetBalance_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Router_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Router_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Setting_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Setting_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Relayer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Relayer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_StableSwap_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_StableSwap_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_SponsorVault_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_OriginTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_DestinationTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338__metaArgs = {
  block?: InputMaybe<local1338_Block_height>;
};

export type Queryoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AggregateRoot_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querygoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
};

export type Querystaginggoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_OriginMessage_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_DestinationMessage_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_AggregateRoot_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Queryoptimismgoerli__metaArgs = {
  block?: InputMaybe<optimismgoerli_Block_height>;
};

export type Querystagingoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Setting_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Setting_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Relayer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Relayer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_StableSwap_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_StableSwap_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_SponsorVault_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_OriginTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_DestinationTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_OriginMessage_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_DestinationMessage_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1338_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_AggregateRoot_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_OriginMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_DestinationMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_AggregateRoot_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystagingoptimismgoerli__metaArgs = {
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
};

export type Querytestoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Asset_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_AssetBalance_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Router_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Setting_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Relayer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_StableSwap_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_SponsorVault_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestoptimismgoerli__metaArgs = {
  block?: InputMaybe<testoptimismgoerli_Block_height>;
};

export type Querylocal1337_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Asset_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Asset_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AssetBalance_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Router_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Router_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Setting_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Setting_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Relayer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Relayer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_StableSwap_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_StableSwap_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_SponsorVault_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_OriginTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_DestinationTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querylocal1337__metaArgs = {
  block?: InputMaybe<local1337_Block_height>;
};

export type Querytestgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_OriginTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_DestinationTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_OriginMessage_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_DestinationMessage_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AggregateRoot_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querytestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};

export type Querystaginggoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Querystaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type Subscription = {
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  goerli_originMessage?: Maybe<goerli_OriginMessage>;
  goerli_originMessages: Array<goerli_OriginMessage>;
  goerli_destinationMessage?: Maybe<goerli_DestinationMessage>;
  goerli_destinationMessages: Array<goerli_DestinationMessage>;
  goerli_aggregateRoot?: Maybe<goerli_AggregateRoot>;
  goerli_aggregateRoots: Array<goerli_AggregateRoot>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
  local1338_asset?: Maybe<local1338_Asset>;
  local1338_assets: Array<local1338_Asset>;
  local1338_assetBalance?: Maybe<local1338_AssetBalance>;
  local1338_assetBalances: Array<local1338_AssetBalance>;
  local1338_router?: Maybe<local1338_Router>;
  local1338_routers: Array<local1338_Router>;
  local1338_setting?: Maybe<local1338_Setting>;
  local1338_settings: Array<local1338_Setting>;
  local1338_relayer?: Maybe<local1338_Relayer>;
  local1338_relayers: Array<local1338_Relayer>;
  local1338_stableSwap?: Maybe<local1338_StableSwap>;
  local1338_stableSwaps: Array<local1338_StableSwap>;
  local1338_sponsorVault?: Maybe<local1338_SponsorVault>;
  local1338_sponsorVaults: Array<local1338_SponsorVault>;
  local1338_originTransfer?: Maybe<local1338_OriginTransfer>;
  local1338_originTransfers: Array<local1338_OriginTransfer>;
  local1338_destinationTransfer?: Maybe<local1338_DestinationTransfer>;
  local1338_destinationTransfers: Array<local1338_DestinationTransfer>;
  /** Access to subgraph metadata */
  local1338__meta?: Maybe<local1338__Meta_>;
  optimismgoerli_asset?: Maybe<optimismgoerli_Asset>;
  optimismgoerli_assets: Array<optimismgoerli_Asset>;
  optimismgoerli_assetBalance?: Maybe<optimismgoerli_AssetBalance>;
  optimismgoerli_assetBalances: Array<optimismgoerli_AssetBalance>;
  optimismgoerli_router?: Maybe<optimismgoerli_Router>;
  optimismgoerli_routers: Array<optimismgoerli_Router>;
  optimismgoerli_setting?: Maybe<optimismgoerli_Setting>;
  optimismgoerli_settings: Array<optimismgoerli_Setting>;
  optimismgoerli_relayer?: Maybe<optimismgoerli_Relayer>;
  optimismgoerli_relayers: Array<optimismgoerli_Relayer>;
  optimismgoerli_stableSwap?: Maybe<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwaps: Array<optimismgoerli_StableSwap>;
  optimismgoerli_sponsorVault?: Maybe<optimismgoerli_SponsorVault>;
  optimismgoerli_sponsorVaults: Array<optimismgoerli_SponsorVault>;
  optimismgoerli_originTransfer?: Maybe<optimismgoerli_OriginTransfer>;
  optimismgoerli_originTransfers: Array<optimismgoerli_OriginTransfer>;
  optimismgoerli_destinationTransfer?: Maybe<optimismgoerli_DestinationTransfer>;
  optimismgoerli_destinationTransfers: Array<optimismgoerli_DestinationTransfer>;
  optimismgoerli_originMessage?: Maybe<optimismgoerli_OriginMessage>;
  optimismgoerli_originMessages: Array<optimismgoerli_OriginMessage>;
  optimismgoerli_destinationMessage?: Maybe<optimismgoerli_DestinationMessage>;
  optimismgoerli_destinationMessages: Array<optimismgoerli_DestinationMessage>;
  optimismgoerli_aggregateRoot?: Maybe<optimismgoerli_AggregateRoot>;
  optimismgoerli_aggregateRoots: Array<optimismgoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  optimismgoerli__meta?: Maybe<optimismgoerli__Meta_>;
  stagingoptimismgoerli_asset?: Maybe<stagingoptimismgoerli_Asset>;
  stagingoptimismgoerli_assets: Array<stagingoptimismgoerli_Asset>;
  stagingoptimismgoerli_assetBalance?: Maybe<stagingoptimismgoerli_AssetBalance>;
  stagingoptimismgoerli_assetBalances: Array<stagingoptimismgoerli_AssetBalance>;
  stagingoptimismgoerli_router?: Maybe<stagingoptimismgoerli_Router>;
  stagingoptimismgoerli_routers: Array<stagingoptimismgoerli_Router>;
  stagingoptimismgoerli_setting?: Maybe<stagingoptimismgoerli_Setting>;
  stagingoptimismgoerli_settings: Array<stagingoptimismgoerli_Setting>;
  stagingoptimismgoerli_relayer?: Maybe<stagingoptimismgoerli_Relayer>;
  stagingoptimismgoerli_relayers: Array<stagingoptimismgoerli_Relayer>;
  stagingoptimismgoerli_stableSwap?: Maybe<stagingoptimismgoerli_StableSwap>;
  stagingoptimismgoerli_stableSwaps: Array<stagingoptimismgoerli_StableSwap>;
  stagingoptimismgoerli_sponsorVault?: Maybe<stagingoptimismgoerli_SponsorVault>;
  stagingoptimismgoerli_sponsorVaults: Array<stagingoptimismgoerli_SponsorVault>;
  stagingoptimismgoerli_originTransfer?: Maybe<stagingoptimismgoerli_OriginTransfer>;
  stagingoptimismgoerli_originTransfers: Array<stagingoptimismgoerli_OriginTransfer>;
  stagingoptimismgoerli_destinationTransfer?: Maybe<stagingoptimismgoerli_DestinationTransfer>;
  stagingoptimismgoerli_destinationTransfers: Array<stagingoptimismgoerli_DestinationTransfer>;
  stagingoptimismgoerli_originMessage?: Maybe<stagingoptimismgoerli_OriginMessage>;
  stagingoptimismgoerli_originMessages: Array<stagingoptimismgoerli_OriginMessage>;
  stagingoptimismgoerli_destinationMessage?: Maybe<stagingoptimismgoerli_DestinationMessage>;
  stagingoptimismgoerli_destinationMessages: Array<stagingoptimismgoerli_DestinationMessage>;
  stagingoptimismgoerli_aggregateRoot?: Maybe<stagingoptimismgoerli_AggregateRoot>;
  stagingoptimismgoerli_aggregateRoots: Array<stagingoptimismgoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  stagingoptimismgoerli__meta?: Maybe<stagingoptimismgoerli__Meta_>;
  testoptimismgoerli_asset?: Maybe<testoptimismgoerli_Asset>;
  testoptimismgoerli_assets: Array<testoptimismgoerli_Asset>;
  testoptimismgoerli_assetBalance?: Maybe<testoptimismgoerli_AssetBalance>;
  testoptimismgoerli_assetBalances: Array<testoptimismgoerli_AssetBalance>;
  testoptimismgoerli_router?: Maybe<testoptimismgoerli_Router>;
  testoptimismgoerli_routers: Array<testoptimismgoerli_Router>;
  testoptimismgoerli_setting?: Maybe<testoptimismgoerli_Setting>;
  testoptimismgoerli_settings: Array<testoptimismgoerli_Setting>;
  testoptimismgoerli_relayer?: Maybe<testoptimismgoerli_Relayer>;
  testoptimismgoerli_relayers: Array<testoptimismgoerli_Relayer>;
  testoptimismgoerli_stableSwap?: Maybe<testoptimismgoerli_StableSwap>;
  testoptimismgoerli_stableSwaps: Array<testoptimismgoerli_StableSwap>;
  testoptimismgoerli_sponsorVault?: Maybe<testoptimismgoerli_SponsorVault>;
  testoptimismgoerli_sponsorVaults: Array<testoptimismgoerli_SponsorVault>;
  testoptimismgoerli_originTransfer?: Maybe<testoptimismgoerli_OriginTransfer>;
  testoptimismgoerli_originTransfers: Array<testoptimismgoerli_OriginTransfer>;
  testoptimismgoerli_destinationTransfer?: Maybe<testoptimismgoerli_DestinationTransfer>;
  testoptimismgoerli_destinationTransfers: Array<testoptimismgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testoptimismgoerli__meta?: Maybe<testoptimismgoerli__Meta_>;
  local1337_asset?: Maybe<local1337_Asset>;
  local1337_assets: Array<local1337_Asset>;
  local1337_assetBalance?: Maybe<local1337_AssetBalance>;
  local1337_assetBalances: Array<local1337_AssetBalance>;
  local1337_router?: Maybe<local1337_Router>;
  local1337_routers: Array<local1337_Router>;
  local1337_setting?: Maybe<local1337_Setting>;
  local1337_settings: Array<local1337_Setting>;
  local1337_relayer?: Maybe<local1337_Relayer>;
  local1337_relayers: Array<local1337_Relayer>;
  local1337_stableSwap?: Maybe<local1337_StableSwap>;
  local1337_stableSwaps: Array<local1337_StableSwap>;
  local1337_sponsorVault?: Maybe<local1337_SponsorVault>;
  local1337_sponsorVaults: Array<local1337_SponsorVault>;
  local1337_originTransfer?: Maybe<local1337_OriginTransfer>;
  local1337_originTransfers: Array<local1337_OriginTransfer>;
  local1337_destinationTransfer?: Maybe<local1337_DestinationTransfer>;
  local1337_destinationTransfers: Array<local1337_DestinationTransfer>;
  /** Access to subgraph metadata */
  local1337__meta?: Maybe<local1337__Meta_>;
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_destinationMessage?: Maybe<staginggoerli_DestinationMessage>;
  staginggoerli_destinationMessages: Array<staginggoerli_DestinationMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};

export type Subscriptionrinkeby_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};

export type Subscriptionstaginggoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationMessage_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AggregateRoot_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiongoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
};

export type Subscriptionlocal1338_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Asset_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Asset_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_AssetBalance_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Router_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Router_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Setting_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Setting_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Relayer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Relayer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_StableSwap_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_StableSwap_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_SponsorVault_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_OriginTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_DestinationTransfer_filter>;
  block?: InputMaybe<local1338_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1338__metaArgs = {
  block?: InputMaybe<local1338_Block_height>;
};

export type Subscriptionoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_Asset_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_AssetBalance_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_Router_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_Setting_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_Relayer_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwap_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SponsorVault_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_OriginTransfer_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_OriginMessage_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_DestinationMessage_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<optimismgoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_AggregateRoot_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionoptimismgoerli__metaArgs = {
  block?: InputMaybe<optimismgoerli_Block_height>;
};

export type Subscriptionstagingoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_OriginTransfer_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_OriginMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_DestinationMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_AggregateRoot_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli__metaArgs = {
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
};

export type Subscriptionlocal1337_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Asset_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Asset_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AssetBalance_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Router_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Router_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Setting_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Setting_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_OriginMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_DestinationMessage_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_AggregateRoot_filter>;
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstagingoptimismgoerli__metaArgs = {
  block?: InputMaybe<stagingoptimismgoerli_Block_height>;
};

export type Subscriptiontestoptimismgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Asset_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_AssetBalance_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Router_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Setting_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Relayer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_StableSwap_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_SponsorVault_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testoptimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestoptimismgoerli__metaArgs = {
  block?: InputMaybe<testoptimismgoerli_Block_height>;
};

export type Subscriptionlocal1337_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Asset_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Asset_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AssetBalance_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Router_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Router_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Setting_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Setting_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Relayer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Relayer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_StableSwap_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_StableSwap_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_SponsorVault_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_OriginTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_DestinationTransfer_filter>;
  block?: InputMaybe<local1337_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionlocal1337__metaArgs = {
  block?: InputMaybe<local1337_Block_height>;
};

export type Subscriptiontestgoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Asset_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Setting_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Relayer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptiontestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};

export type Subscriptionstaginggoerli_assetArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetBalanceArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_routerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_settingArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_relayerArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_stableSwapArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_sponsorVaultArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationTransferArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationMessageArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_aggregateRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscriptionstaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type rinkeby_Asset = {
  id: Scalars["ID"];
  local: Scalars["rinkeby_Bytes"];
  adoptedAsset: Scalars["rinkeby_Bytes"];
  canonicalId: Scalars["rinkeby_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type rinkeby_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: rinkeby_Router;
  asset: rinkeby_Asset;
};

export type rinkeby_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<rinkeby_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<rinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type rinkeby_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  local?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  local_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Asset_orderBy = "id" | "local" | "adoptedAsset" | "canonicalId" | "canonicalDomain" | "blockNumber";

export type rinkeby_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type rinkeby_Block_height = {
  hash?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type rinkeby_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["rinkeby_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["rinkeby_Bytes"]>;
  callData?: Maybe<Scalars["rinkeby_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["rinkeby_Bytes"]>;
  recovery?: Maybe<Scalars["rinkeby_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["rinkeby_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  slippageTol?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<rinkeby_TransferStatus>;
  routers?: Maybe<Array<rinkeby_Router>>;
  originSender?: Maybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset?: Maybe<Scalars["rinkeby_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["rinkeby_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["rinkeby_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["rinkeby_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["rinkeby_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["rinkeby_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type rinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
};

export type rinkeby_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  slippageTol?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_not?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_gt?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_lt?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_gte?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_lte?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<rinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "slippageTol"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type rinkeby_OrderDirection = "asc" | "desc";

export type rinkeby_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["rinkeby_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["rinkeby_Bytes"]>;
  callData?: Maybe<Scalars["rinkeby_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["rinkeby_Bytes"]>;
  recovery?: Maybe<Scalars["rinkeby_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["rinkeby_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  slippageTol?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<rinkeby_TransferStatus>;
  message?: Maybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset?: Maybe<Scalars["rinkeby_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["rinkeby_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  caller?: Maybe<Scalars["rinkeby_Bytes"]>;
  transactionHash?: Maybe<Scalars["rinkeby_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type rinkeby_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  slippageTol?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_not?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_gt?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_lt?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_gte?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_lte?: InputMaybe<Scalars["BigInt"]>;
  slippageTol_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  message_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  message_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  message_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  message_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  message_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "slippageTol"
  | "status"
  | "message"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type rinkeby_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["rinkeby_Bytes"]>;
};

export type rinkeby_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Relayer_orderBy = "id" | "isActive" | "relayer";

export type rinkeby_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["rinkeby_Bytes"]>;
  recipient?: Maybe<Scalars["rinkeby_Bytes"]>;
  proposedOwner?: Maybe<Scalars["rinkeby_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<rinkeby_AssetBalance>;
};

export type rinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
};

export type rinkeby_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  owner_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recipient?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<rinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type rinkeby_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["rinkeby_Bytes"];
};

export type rinkeby_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type rinkeby_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["rinkeby_Bytes"];
};

export type rinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_SponsorVault_orderBy = "id" | "sponsorVault";

export type rinkeby_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["rinkeby_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["rinkeby_Bytes"];
};

export type rinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["rinkeby_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["rinkeby_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type rinkeby_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type rinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["rinkeby_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type rinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: rinkeby__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | "allow"
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | "deny";

export type goerli_AggregateRoot = {
  id: Scalars["ID"];
  root: Scalars["goerli_Bytes"];
};

export type goerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  root?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_AggregateRoot_orderBy = "id" | "root";

export type goerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["goerli_Bytes"]>;
  local: Scalars["goerli_Bytes"];
  adoptedAsset: Scalars["goerli_Bytes"];
  canonicalId: Scalars["goerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type goerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: goerli_Router;
  asset: goerli_Asset;
};

export type goerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<goerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<goerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type goerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["goerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  local?: InputMaybe<Scalars["goerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["goerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type goerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type goerli_Block_height = {
  hash?: InputMaybe<Scalars["goerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type goerli_DestinationMessage = {
  id: Scalars["ID"];
  leaf?: Maybe<Scalars["goerli_Bytes"]>;
  processed?: Maybe<Scalars["Boolean"]>;
  returnData?: Maybe<Scalars["goerli_Bytes"]>;
};

export type goerli_DestinationMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  leaf?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  processed?: InputMaybe<Scalars["Boolean"]>;
  processed_not?: InputMaybe<Scalars["Boolean"]>;
  processed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  processed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  returnData?: InputMaybe<Scalars["goerli_Bytes"]>;
  returnData_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  returnData_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  returnData_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  returnData_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  returnData_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_DestinationMessage_orderBy = "id" | "leaf" | "processed" | "returnData";

export type goerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["goerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["goerli_Bytes"]>;
  callData?: Maybe<Scalars["goerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["goerli_Bytes"]>;
  recovery?: Maybe<Scalars["goerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["goerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<goerli_TransferStatus>;
  routers?: Maybe<Array<goerli_Router>>;
  originSender?: Maybe<Scalars["goerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["goerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["goerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["goerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["goerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["goerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["goerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type goerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
};

export type goerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<goerli_Router_filter>;
  originSender?: InputMaybe<Scalars["goerli_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["goerli_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type goerli_OrderDirection = "asc" | "desc";

export type goerli_OriginMessage = {
  id: Scalars["ID"];
  transferId?: Maybe<Scalars["goerli_Bytes"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  leaf?: Maybe<Scalars["goerli_Bytes"]>;
  index?: Maybe<Scalars["BigInt"]>;
  root?: Maybe<Scalars["goerli_Bytes"]>;
  message?: Maybe<Scalars["goerli_Bytes"]>;
};

export type goerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transferId?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  leaf?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  root?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  message?: InputMaybe<Scalars["goerli_Bytes"]>;
  message_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  message_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  message_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  message_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  message_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_OriginMessage_orderBy =
  | "id"
  | "transferId"
  | "destinationDomain"
  | "leaf"
  | "index"
  | "root"
  | "message";

export type goerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["goerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["goerli_Bytes"]>;
  callData?: Maybe<Scalars["goerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["goerli_Bytes"]>;
  recovery?: Maybe<Scalars["goerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["goerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<goerli_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["goerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["goerli_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  message?: Maybe<goerli_OriginMessage>;
  caller?: Maybe<Scalars["goerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["goerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type goerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["goerli_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  message?: InputMaybe<Scalars["String"]>;
  message_not?: InputMaybe<Scalars["String"]>;
  message_gt?: InputMaybe<Scalars["String"]>;
  message_lt?: InputMaybe<Scalars["String"]>;
  message_gte?: InputMaybe<Scalars["String"]>;
  message_lte?: InputMaybe<Scalars["String"]>;
  message_in?: InputMaybe<Array<Scalars["String"]>>;
  message_not_in?: InputMaybe<Array<Scalars["String"]>>;
  message_contains?: InputMaybe<Scalars["String"]>;
  message_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_not_contains?: InputMaybe<Scalars["String"]>;
  message_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_starts_with?: InputMaybe<Scalars["String"]>;
  message_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_starts_with?: InputMaybe<Scalars["String"]>;
  message_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_ends_with?: InputMaybe<Scalars["String"]>;
  message_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_ends_with?: InputMaybe<Scalars["String"]>;
  message_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_?: InputMaybe<goerli_OriginMessage_filter>;
  caller?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "message"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type goerli_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["goerli_Bytes"]>;
};

export type goerli_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["goerli_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Relayer_orderBy = "id" | "isActive" | "relayer";

export type goerli_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["goerli_Bytes"]>;
  recipient?: Maybe<Scalars["goerli_Bytes"]>;
  proposedOwner?: Maybe<Scalars["goerli_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<goerli_AssetBalance>;
};

export type goerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
};

export type goerli_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["goerli_Bytes"]>;
  owner_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recipient?: InputMaybe<Scalars["goerli_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["goerli_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<goerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type goerli_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["goerli_Bytes"];
};

export type goerli_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type goerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["goerli_Bytes"];
};

export type goerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["goerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type goerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["goerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["goerli_Bytes"];
};

export type goerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["goerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["goerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["goerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["goerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type goerli_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type goerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["goerli_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type goerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: goerli__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type local1338_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["local1338_Bytes"]>;
  local: Scalars["local1338_Bytes"];
  adoptedAsset: Scalars["local1338_Bytes"];
  canonicalId: Scalars["local1338_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type local1338_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: local1338_Router;
  asset: local1338_Asset;
};

export type local1338_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<local1338_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<local1338_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type local1338_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["local1338_Bytes"]>;
  key_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  local?: InputMaybe<Scalars["local1338_Bytes"]>;
  local_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["local1338_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type local1338_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type local1338_Block_height = {
  hash?: InputMaybe<Scalars["local1338_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type local1338_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["local1338_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["local1338_Bytes"]>;
  callData?: Maybe<Scalars["local1338_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["local1338_Bytes"]>;
  recovery?: Maybe<Scalars["local1338_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["local1338_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<local1338_TransferStatus>;
  routers?: Maybe<Array<local1338_Router>>;
  originSender?: Maybe<Scalars["local1338_Bytes"]>;
  transactingAsset?: Maybe<Scalars["local1338_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["local1338_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["local1338_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["local1338_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["local1338_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["local1338_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1338_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_Router_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_Router_filter>;
};

export type local1338_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1338_TransferStatus>;
  status_not?: InputMaybe<local1338_TransferStatus>;
  status_in?: InputMaybe<Array<local1338_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1338_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<local1338_Router_filter>;
  originSender?: InputMaybe<Scalars["local1338_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["local1338_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type local1338_OrderDirection = "asc" | "desc";

export type local1338_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["local1338_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["local1338_Bytes"]>;
  callData?: Maybe<Scalars["local1338_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["local1338_Bytes"]>;
  recovery?: Maybe<Scalars["local1338_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["local1338_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<local1338_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["local1338_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["local1338_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  caller?: Maybe<Scalars["local1338_Bytes"]>;
  transactionHash?: Maybe<Scalars["local1338_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1338_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1338_TransferStatus>;
  status_not?: InputMaybe<local1338_TransferStatus>;
  status_in?: InputMaybe<Array<local1338_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1338_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["local1338_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type local1338_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["local1338_Bytes"]>;
};

export type local1338_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["local1338_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_Relayer_orderBy = "id" | "isActive" | "relayer";

export type local1338_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["local1338_Bytes"]>;
  recipient?: Maybe<Scalars["local1338_Bytes"]>;
  proposedOwner?: Maybe<Scalars["local1338_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<local1338_AssetBalance>;
};

export type local1338_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1338_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1338_OrderDirection>;
  where?: InputMaybe<local1338_AssetBalance_filter>;
};

export type local1338_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["local1338_Bytes"]>;
  owner_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recipient?: InputMaybe<Scalars["local1338_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["local1338_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<local1338_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type local1338_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["local1338_Bytes"];
};

export type local1338_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type local1338_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["local1338_Bytes"];
};

export type local1338_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["local1338_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_SponsorVault_orderBy = "id" | "sponsorVault";

export type local1338_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["local1338_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["local1338_Bytes"];
};

export type local1338_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["local1338_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["local1338_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["local1338_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["local1338_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1338_BlockChangedFilter>;
};

export type local1338_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type local1338_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type local1338__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["local1338_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type local1338__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: local1338__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type optimismgoerli_AggregateRoot = {
  id: Scalars["ID"];
  root: Scalars["optimismgoerli_Bytes"];
};

export type optimismgoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  root?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_AggregateRoot_orderBy = "id" | "root";

export type optimismgoerli_Asset = {
  id: Scalars["ID"];
  root: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  root?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AggregateRoot_orderBy = "id" | "root";

export type staginggoerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["staginggoerli_Bytes"]>;
  local: Scalars["staginggoerli_Bytes"];
  adoptedAsset: Scalars["staginggoerli_Bytes"];
  canonicalId: Scalars["staginggoerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type staginggoerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: staginggoerli_Router;
  asset: staginggoerli_Asset;
};

export type staginggoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<staginggoerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type staginggoerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type optimismgoerli_DestinationMessage = {
  id: Scalars["ID"];
  leaf?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  processed?: Maybe<Scalars["Boolean"]>;
  returnData?: Maybe<Scalars["optimismgoerli_Bytes"]>;
};

export type optimismgoerli_DestinationMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  leaf?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  processed?: InputMaybe<Scalars["Boolean"]>;
  processed_not?: InputMaybe<Scalars["Boolean"]>;
  processed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  processed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  returnData?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  returnData_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  returnData_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  returnData_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  returnData_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  returnData_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_DestinationMessage_orderBy = "id" | "leaf" | "processed" | "returnData";

export type optimismgoerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["staginggoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callData?: Maybe<Scalars["staginggoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["staginggoerli_Bytes"]>;
  recovery?: Maybe<Scalars["staginggoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originSender?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type staginggoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
};

export type staginggoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<staginggoerli_Router_filter>;
  originSender?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type staginggoerli_OrderDirection = "asc" | "desc";

export type optimismgoerli_OriginMessage = {
  id: Scalars["ID"];
  transferId?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  leaf?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  index?: Maybe<Scalars["BigInt"]>;
  root?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  message?: Maybe<Scalars["optimismgoerli_Bytes"]>;
};

export type optimismgoerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transferId?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  leaf?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  root?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  message?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  message_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  message_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  message_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  message_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  message_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_OriginMessage_orderBy =
  | "id"
  | "transferId"
  | "destinationDomain"
  | "leaf"
  | "index"
  | "root"
  | "message";

export type optimismgoerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["staginggoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callData?: Maybe<Scalars["staginggoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["staginggoerli_Bytes"]>;
  recovery?: Maybe<Scalars["staginggoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<staginggoerli_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  message?: Maybe<optimismgoerli_OriginMessage>;
  caller?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["optimismgoerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type staginggoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  message?: InputMaybe<Scalars["String"]>;
  message_not?: InputMaybe<Scalars["String"]>;
  message_gt?: InputMaybe<Scalars["String"]>;
  message_lt?: InputMaybe<Scalars["String"]>;
  message_gte?: InputMaybe<Scalars["String"]>;
  message_lte?: InputMaybe<Scalars["String"]>;
  message_in?: InputMaybe<Array<Scalars["String"]>>;
  message_not_in?: InputMaybe<Array<Scalars["String"]>>;
  message_contains?: InputMaybe<Scalars["String"]>;
  message_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_not_contains?: InputMaybe<Scalars["String"]>;
  message_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_starts_with?: InputMaybe<Scalars["String"]>;
  message_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_starts_with?: InputMaybe<Scalars["String"]>;
  message_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_ends_with?: InputMaybe<Scalars["String"]>;
  message_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_ends_with?: InputMaybe<Scalars["String"]>;
  message_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_?: InputMaybe<optimismgoerli_OriginMessage_filter>;
  caller?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["optimismgoerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["optimismgoerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "message"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type staginggoerli_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["staginggoerli_Bytes"]>;
};

export type staginggoerli_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Relayer_orderBy = "id" | "isActive" | "relayer";

export type staginggoerli_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["staginggoerli_Bytes"]>;
  recipient?: Maybe<Scalars["staginggoerli_Bytes"]>;
  proposedOwner?: Maybe<Scalars["staginggoerli_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<staginggoerli_AssetBalance>;
};

export type staginggoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
};

export type staginggoerli_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  owner_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recipient?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<staginggoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type staginggoerli_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type staginggoerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type staginggoerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["staginggoerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type staginggoerli_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type staginggoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type staginggoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: staginggoerli__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type stagingoptimismgoerli_AggregateRoot = {
  id: Scalars["ID"];
  root: Scalars["stagingoptimismgoerli_Bytes"];
};

export type stagingoptimismgoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  root?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_AggregateRoot_orderBy = "id" | "root";

export type stagingoptimismgoerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  local: Scalars["stagingoptimismgoerli_Bytes"];
  adoptedAsset: Scalars["stagingoptimismgoerli_Bytes"];
  canonicalId: Scalars["stagingoptimismgoerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type stagingoptimismgoerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: stagingoptimismgoerli_Router;
  asset: stagingoptimismgoerli_Asset;
};

export type stagingoptimismgoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<stagingoptimismgoerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<stagingoptimismgoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type stagingoptimismgoerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  local?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type stagingoptimismgoerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type stagingoptimismgoerli_Block_height = {
  hash?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type stagingoptimismgoerli_DestinationMessage = {
  id: Scalars["ID"];
  leaf?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  processed?: Maybe<Scalars["Boolean"]>;
  returnData?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
};

export type stagingoptimismgoerli_DestinationMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  leaf?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  processed?: InputMaybe<Scalars["Boolean"]>;
  processed_not?: InputMaybe<Scalars["Boolean"]>;
  processed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  processed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  returnData?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  returnData_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  returnData_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  returnData_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  returnData_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  returnData_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_DestinationMessage_orderBy = "id" | "leaf" | "processed" | "returnData";

export type stagingoptimismgoerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<stagingoptimismgoerli_TransferStatus>;
  routers?: Maybe<Array<stagingoptimismgoerli_Router>>;
  originSender?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type stagingoptimismgoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_Router_filter>;
};

export type stagingoptimismgoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<stagingoptimismgoerli_TransferStatus>;
  status_not?: InputMaybe<stagingoptimismgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<stagingoptimismgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingoptimismgoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<stagingoptimismgoerli_Router_filter>;
  originSender?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type stagingoptimismgoerli_OrderDirection = "asc" | "desc";

export type stagingoptimismgoerli_OriginMessage = {
  id: Scalars["ID"];
  transferId?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  leaf?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  index?: Maybe<Scalars["BigInt"]>;
  root?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  message?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
};

export type stagingoptimismgoerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transferId?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  leaf?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  root?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  message?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  message_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  message_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  message_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  message_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  message_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_OriginMessage_orderBy =
  | "id"
  | "transferId"
  | "destinationDomain"
  | "leaf"
  | "index"
  | "root"
  | "message";

export type stagingoptimismgoerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<stagingoptimismgoerli_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  message?: Maybe<stagingoptimismgoerli_OriginMessage>;
  caller?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type stagingoptimismgoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<stagingoptimismgoerli_TransferStatus>;
  status_not?: InputMaybe<stagingoptimismgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<stagingoptimismgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingoptimismgoerli_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  message?: InputMaybe<Scalars["String"]>;
  message_not?: InputMaybe<Scalars["String"]>;
  message_gt?: InputMaybe<Scalars["String"]>;
  message_lt?: InputMaybe<Scalars["String"]>;
  message_gte?: InputMaybe<Scalars["String"]>;
  message_lte?: InputMaybe<Scalars["String"]>;
  message_in?: InputMaybe<Array<Scalars["String"]>>;
  message_not_in?: InputMaybe<Array<Scalars["String"]>>;
  message_contains?: InputMaybe<Scalars["String"]>;
  message_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_not_contains?: InputMaybe<Scalars["String"]>;
  message_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_starts_with?: InputMaybe<Scalars["String"]>;
  message_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_starts_with?: InputMaybe<Scalars["String"]>;
  message_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_ends_with?: InputMaybe<Scalars["String"]>;
  message_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_ends_with?: InputMaybe<Scalars["String"]>;
  message_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_?: InputMaybe<stagingoptimismgoerli_OriginMessage_filter>;
  caller?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "message"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type stagingoptimismgoerli_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
};

export type stagingoptimismgoerli_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_Relayer_orderBy = "id" | "isActive" | "relayer";

export type stagingoptimismgoerli_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recipient?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedOwner?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<stagingoptimismgoerli_AssetBalance>;
};

export type stagingoptimismgoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<stagingoptimismgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingoptimismgoerli_OrderDirection>;
  where?: InputMaybe<stagingoptimismgoerli_AssetBalance_filter>;
};

export type stagingoptimismgoerli_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  owner_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recipient?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<stagingoptimismgoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type stagingoptimismgoerli_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["stagingoptimismgoerli_Bytes"];
};

export type stagingoptimismgoerli_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type stagingoptimismgoerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["stagingoptimismgoerli_Bytes"];
};

export type stagingoptimismgoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type stagingoptimismgoerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["stagingoptimismgoerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["stagingoptimismgoerli_Bytes"];
};

export type stagingoptimismgoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["stagingoptimismgoerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingoptimismgoerli_BlockChangedFilter>;
};

export type stagingoptimismgoerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type stagingoptimismgoerli_TransferStatus =
  | "XCalled"
  | "Executed"
  | "Reconciled"
  | "CompletedSlow"
  | "CompletedFast";

export type stagingoptimismgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["stagingoptimismgoerli_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type stagingoptimismgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: stagingoptimismgoerli__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type testoptimismgoerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  local: Scalars["testoptimismgoerli_Bytes"];
  adoptedAsset: Scalars["testoptimismgoerli_Bytes"];
  canonicalId: Scalars["testoptimismgoerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type testoptimismgoerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: testoptimismgoerli_Router;
  asset: testoptimismgoerli_Asset;
};

export type testoptimismgoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<testoptimismgoerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<testoptimismgoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type testoptimismgoerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  local?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type testoptimismgoerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type testoptimismgoerli_Block_height = {
  hash?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type testoptimismgoerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<testoptimismgoerli_TransferStatus>;
  routers?: Maybe<Array<testoptimismgoerli_Router>>;
  originSender?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type testoptimismgoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_Router_filter>;
};

export type testoptimismgoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<testoptimismgoerli_TransferStatus>;
  status_not?: InputMaybe<testoptimismgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testoptimismgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testoptimismgoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<testoptimismgoerli_Router_filter>;
  originSender?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type testoptimismgoerli_OrderDirection = "asc" | "desc";

export type testoptimismgoerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<testoptimismgoerli_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  caller?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type testoptimismgoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<testoptimismgoerli_TransferStatus>;
  status_not?: InputMaybe<testoptimismgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testoptimismgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testoptimismgoerli_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "messageHash"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type testoptimismgoerli_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
};

export type testoptimismgoerli_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_Relayer_orderBy = "id" | "isActive" | "relayer";

export type testoptimismgoerli_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  recipient?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedOwner?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<testoptimismgoerli_AssetBalance>;
};

export type testoptimismgoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testoptimismgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testoptimismgoerli_OrderDirection>;
  where?: InputMaybe<testoptimismgoerli_AssetBalance_filter>;
};

export type testoptimismgoerli_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  owner_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recipient?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<testoptimismgoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type testoptimismgoerli_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["testoptimismgoerli_Bytes"];
};

export type testoptimismgoerli_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type testoptimismgoerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["testoptimismgoerli_Bytes"];
};

export type testoptimismgoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type testoptimismgoerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["testoptimismgoerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["testoptimismgoerli_Bytes"];
};

export type testoptimismgoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["testoptimismgoerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["testoptimismgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testoptimismgoerli_BlockChangedFilter>;
};

export type testoptimismgoerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type testoptimismgoerli_TransferStatus =
  | "XCalled"
  | "Executed"
  | "Reconciled"
  | "CompletedSlow"
  | "CompletedFast";

export type testoptimismgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["testoptimismgoerli_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type testoptimismgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testoptimismgoerli__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type local1337_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["local1337_Bytes"]>;
  local: Scalars["local1337_Bytes"];
  adoptedAsset: Scalars["local1337_Bytes"];
  canonicalId: Scalars["local1337_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type local1337_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: local1337_Router;
  asset: local1337_Asset;
};

export type local1337_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<local1337_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<local1337_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type local1337_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["local1337_Bytes"]>;
  key_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  local?: InputMaybe<Scalars["local1337_Bytes"]>;
  local_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type local1337_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type local1337_Block_height = {
  hash?: InputMaybe<Scalars["local1337_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type local1337_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["local1337_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["local1337_Bytes"]>;
  callData?: Maybe<Scalars["local1337_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["local1337_Bytes"]>;
  recovery?: Maybe<Scalars["local1337_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["local1337_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<local1337_TransferStatus>;
  routers?: Maybe<Array<local1337_Router>>;
  originSender?: Maybe<Scalars["local1337_Bytes"]>;
  transactingAsset?: Maybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["local1337_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["local1337_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["local1337_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1337_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Router_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Router_filter>;
};

export type local1337_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1337_TransferStatus>;
  status_not?: InputMaybe<local1337_TransferStatus>;
  status_in?: InputMaybe<Array<local1337_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1337_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<local1337_Router_filter>;
  originSender?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type local1337_OrderDirection = "asc" | "desc";

export type local1337_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["local1337_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["local1337_Bytes"]>;
  callData?: Maybe<Scalars["local1337_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["local1337_Bytes"]>;
  recovery?: Maybe<Scalars["local1337_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["local1337_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<local1337_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["local1337_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  caller?: Maybe<Scalars["local1337_Bytes"]>;
  transactionHash?: Maybe<Scalars["local1337_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1337_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1337_TransferStatus>;
  status_not?: InputMaybe<local1337_TransferStatus>;
  status_in?: InputMaybe<Array<local1337_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1337_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "messageHash"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type local1337_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["local1337_Bytes"]>;
};

export type local1337_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Relayer_orderBy = "id" | "isActive" | "relayer";

export type local1337_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["local1337_Bytes"]>;
  recipient?: Maybe<Scalars["local1337_Bytes"]>;
  proposedOwner?: Maybe<Scalars["local1337_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<local1337_AssetBalance>;
};

export type local1337_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AssetBalance_filter>;
};

export type local1337_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<local1337_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type local1337_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["local1337_Bytes"];
};

export type local1337_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type local1337_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["local1337_Bytes"];
};

export type local1337_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["local1337_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_SponsorVault_orderBy = "id" | "sponsorVault";

export type local1337_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["local1337_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["local1337_Bytes"];
};

export type local1337_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["local1337_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type local1337_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type local1337__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["local1337_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type local1337__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: local1337__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type testgoerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["testgoerli_Bytes"]>;
  local: Scalars["testgoerli_Bytes"];
  adoptedAsset: Scalars["testgoerli_Bytes"];
  canonicalId: Scalars["testgoerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type testgoerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: testgoerli_Router;
  asset: testgoerli_Asset;
};

export type testgoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<testgoerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<testgoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type testgoerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  local?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type testgoerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type testgoerli_Block_height = {
  hash?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type testgoerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["testgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["testgoerli_Bytes"]>;
  callData?: Maybe<Scalars["testgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["testgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["testgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["testgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<testgoerli_TransferStatus>;
  routers?: Maybe<Array<testgoerli_Router>>;
  originSender?: Maybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["testgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["testgoerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["testgoerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["testgoerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["testgoerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["testgoerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type testgoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
};

export type testgoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<testgoerli_Router_filter>;
  originSender?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type testgoerli_OrderDirection = "asc" | "desc";

export type testgoerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["testgoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["testgoerli_Bytes"]>;
  callData?: Maybe<Scalars["testgoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["testgoerli_Bytes"]>;
  recovery?: Maybe<Scalars["testgoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["testgoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<testgoerli_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["testgoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["testgoerli_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  caller?: Maybe<Scalars["testgoerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["testgoerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type testgoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type testgoerli_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["testgoerli_Bytes"]>;
};

export type testgoerli_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Relayer_orderBy = "id" | "isActive" | "relayer";

export type testgoerli_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["testgoerli_Bytes"]>;
  recipient?: Maybe<Scalars["testgoerli_Bytes"]>;
  proposedOwner?: Maybe<Scalars["testgoerli_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<testgoerli_AssetBalance>;
};

export type testgoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
};

export type testgoerli_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  owner_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recipient?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<testgoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type testgoerli_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["testgoerli_Bytes"];
};

export type testgoerli_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type testgoerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["testgoerli_Bytes"];
};

export type testgoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type testgoerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["testgoerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["testgoerli_Bytes"];
};

export type testgoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["testgoerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["testgoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type testgoerli_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type testgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["testgoerli_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type testgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testgoerli__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type staginggoerli_AggregateRoot = {
  id: Scalars["ID"];
  root: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  root?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AggregateRoot_orderBy = "id" | "root";

export type staginggoerli_Asset = {
  id: Scalars["ID"];
  key?: Maybe<Scalars["staginggoerli_Bytes"]>;
  local: Scalars["staginggoerli_Bytes"];
  adoptedAsset: Scalars["staginggoerli_Bytes"];
  canonicalId: Scalars["staginggoerli_Bytes"];
  canonicalDomain: Scalars["BigInt"];
  blockNumber: Scalars["BigInt"];
};

export type staginggoerli_AssetBalance = {
  id: Scalars["ID"];
  amount: Scalars["BigInt"];
  router: staginggoerli_Router;
  asset: staginggoerli_Asset;
};

export type staginggoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  router?: InputMaybe<Scalars["String"]>;
  router_not?: InputMaybe<Scalars["String"]>;
  router_gt?: InputMaybe<Scalars["String"]>;
  router_lt?: InputMaybe<Scalars["String"]>;
  router_gte?: InputMaybe<Scalars["String"]>;
  router_lte?: InputMaybe<Scalars["String"]>;
  router_in?: InputMaybe<Array<Scalars["String"]>>;
  router_not_in?: InputMaybe<Array<Scalars["String"]>>;
  router_contains?: InputMaybe<Scalars["String"]>;
  router_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_not_contains?: InputMaybe<Scalars["String"]>;
  router_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  router_starts_with?: InputMaybe<Scalars["String"]>;
  router_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_starts_with?: InputMaybe<Scalars["String"]>;
  router_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  router_ends_with?: InputMaybe<Scalars["String"]>;
  router_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_not_ends_with?: InputMaybe<Scalars["String"]>;
  router_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  router_?: InputMaybe<staginggoerli_Router_filter>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AssetBalance_orderBy = "id" | "amount" | "router" | "asset";

export type staginggoerli_Asset_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  key?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  key_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  key_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  key_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  local_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  local_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  local_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  adoptedAsset_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  adoptedAsset_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalDomain?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_not?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  canonicalDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Asset_orderBy =
  | "id"
  | "key"
  | "local"
  | "adoptedAsset"
  | "canonicalId"
  | "canonicalDomain"
  | "blockNumber";

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type staginggoerli_DestinationMessage = {
  id: Scalars["ID"];
  leaf?: Maybe<Scalars["staginggoerli_Bytes"]>;
  processed?: Maybe<Scalars["Boolean"]>;
  returnData?: Maybe<Scalars["staginggoerli_Bytes"]>;
};

export type staginggoerli_DestinationMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  leaf?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  processed?: InputMaybe<Scalars["Boolean"]>;
  processed_not?: InputMaybe<Scalars["Boolean"]>;
  processed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  processed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  returnData?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  returnData_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  returnData_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  returnData_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  returnData_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  returnData_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_DestinationMessage_orderBy = "id" | "leaf" | "processed" | "returnData";

export type staginggoerli_DestinationTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["staginggoerli_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callData?: Maybe<Scalars["staginggoerli_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["staginggoerli_Bytes"]>;
  recovery?: Maybe<Scalars["staginggoerli_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["staginggoerli_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originSender?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactingAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  localAsset?: Maybe<Scalars["staginggoerli_Bytes"]>;
  localAmount?: Maybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee?: Maybe<Scalars["BigInt"]>;
  executedCaller?: Maybe<Scalars["staginggoerli_Bytes"]>;
  executedTransactionHash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  executedTimestamp?: Maybe<Scalars["BigInt"]>;
  executedGasPrice?: Maybe<Scalars["BigInt"]>;
  executedGasLimit?: Maybe<Scalars["BigInt"]>;
  executedBlockNumber?: Maybe<Scalars["BigInt"]>;
  reconciledCaller?: Maybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTransactionHash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  reconciledTimestamp?: Maybe<Scalars["BigInt"]>;
  reconciledGasPrice?: Maybe<Scalars["BigInt"]>;
  reconciledGasLimit?: Maybe<Scalars["BigInt"]>;
  reconciledBlockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1337_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_Router_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_Router_filter>;
};

export type local1337_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1337_TransferStatus>;
  status_not?: InputMaybe<local1337_TransferStatus>;
  status_in?: InputMaybe<Array<local1337_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1337_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars["String"]>>;
  routers_not?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  routers_?: InputMaybe<local1337_Router_filter>;
  originSender?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  originSender_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  originSender_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originSender_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  localAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  localAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  localAmount?: InputMaybe<Scalars["BigInt"]>;
  localAmount_not?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  localAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  localAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  localAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedCaller?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedCaller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedCaller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  executedTransactionHash_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  executedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  executedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  executedGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledCaller?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledCaller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledCaller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  reconciledTimestamp?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_DestinationTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "routers"
  | "originSender"
  | "transactingAsset"
  | "transactingAmount"
  | "localAsset"
  | "localAmount"
  | "sponsorVaultRelayerFee"
  | "executedCaller"
  | "executedTransactionHash"
  | "executedTimestamp"
  | "executedGasPrice"
  | "executedGasLimit"
  | "executedBlockNumber"
  | "reconciledCaller"
  | "reconciledTransactionHash"
  | "reconciledTimestamp"
  | "reconciledGasPrice"
  | "reconciledGasLimit"
  | "reconciledBlockNumber";

/** Defines the order direction, either ascending or descending */
export type local1337_OrderDirection = "asc" | "desc";

export type staginggoerli_OriginMessage = {
  id: Scalars["ID"];
  transferId?: Maybe<Scalars["staginggoerli_Bytes"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  leaf?: Maybe<Scalars["staginggoerli_Bytes"]>;
  index?: Maybe<Scalars["BigInt"]>;
  root?: Maybe<Scalars["staginggoerli_Bytes"]>;
  message?: Maybe<Scalars["staginggoerli_Bytes"]>;
};

export type staginggoerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transferId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  leaf?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  leaf_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  leaf_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  leaf_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  root?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  root_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  root_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  message?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  message_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  message_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  message_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  message_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  message_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_OriginMessage_orderBy =
  | "id"
  | "transferId"
  | "destinationDomain"
  | "leaf"
  | "index"
  | "root"
  | "message";

export type staginggoerli_OriginTransfer = {
  id: Scalars["ID"];
  chainId?: Maybe<Scalars["BigInt"]>;
  transferId?: Maybe<Scalars["local1337_Bytes"]>;
  nonce?: Maybe<Scalars["BigInt"]>;
  to?: Maybe<Scalars["local1337_Bytes"]>;
  callData?: Maybe<Scalars["local1337_Bytes"]>;
  originDomain?: Maybe<Scalars["BigInt"]>;
  destinationDomain?: Maybe<Scalars["BigInt"]>;
  agent?: Maybe<Scalars["local1337_Bytes"]>;
  recovery?: Maybe<Scalars["local1337_Bytes"]>;
  forceSlow?: Maybe<Scalars["Boolean"]>;
  receiveLocal?: Maybe<Scalars["Boolean"]>;
  callback?: Maybe<Scalars["local1337_Bytes"]>;
  callbackFee?: Maybe<Scalars["BigInt"]>;
  relayerFee?: Maybe<Scalars["BigInt"]>;
  destinationMinOut?: Maybe<Scalars["BigInt"]>;
  status?: Maybe<local1337_TransferStatus>;
  originMinOut?: Maybe<Scalars["BigInt"]>;
  transactingAsset?: Maybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: Maybe<Scalars["BigInt"]>;
  bridgedAsset?: Maybe<Scalars["local1337_Bytes"]>;
  bridgedAmount?: Maybe<Scalars["BigInt"]>;
  message?: Maybe<staginggoerli_OriginMessage>;
  caller?: Maybe<Scalars["staginggoerli_Bytes"]>;
  transactionHash?: Maybe<Scalars["staginggoerli_Bytes"]>;
  timestamp?: Maybe<Scalars["BigInt"]>;
  gasPrice?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  blockNumber?: Maybe<Scalars["BigInt"]>;
};

export type local1337_OriginTransfer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  chainId?: InputMaybe<Scalars["BigInt"]>;
  chainId_not?: InputMaybe<Scalars["BigInt"]>;
  chainId_gt?: InputMaybe<Scalars["BigInt"]>;
  chainId_lt?: InputMaybe<Scalars["BigInt"]>;
  chainId_gte?: InputMaybe<Scalars["BigInt"]>;
  chainId_lte?: InputMaybe<Scalars["BigInt"]>;
  chainId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transferId?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transferId_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transferId_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  to_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callData_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callData_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  originDomain?: InputMaybe<Scalars["BigInt"]>;
  originDomain_not?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  originDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  originDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_not?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationDomain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  agent?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  agent_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  agent_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recovery_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recovery_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  forceSlow?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_not?: InputMaybe<Scalars["Boolean"]>;
  forceSlow_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_not?: InputMaybe<Scalars["Boolean"]>;
  receiveLocal_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  callback?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  callback_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callback_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  callbackFee?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_not?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lt?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_gte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_lte?: InputMaybe<Scalars["BigInt"]>;
  callbackFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_not?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lt?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_gte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_lte?: InputMaybe<Scalars["BigInt"]>;
  relayerFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  destinationMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  destinationMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  status?: InputMaybe<local1337_TransferStatus>;
  status_not?: InputMaybe<local1337_TransferStatus>;
  status_in?: InputMaybe<Array<local1337_TransferStatus>>;
  status_not_in?: InputMaybe<Array<local1337_TransferStatus>>;
  originMinOut?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_not?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lt?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_gte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_lte?: InputMaybe<Scalars["BigInt"]>;
  originMinOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  originMinOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  transactingAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  transactingAmount?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  transactingAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAsset?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  bridgedAsset_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAsset_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  bridgedAmount?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bridgedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  message?: InputMaybe<Scalars["String"]>;
  message_not?: InputMaybe<Scalars["String"]>;
  message_gt?: InputMaybe<Scalars["String"]>;
  message_lt?: InputMaybe<Scalars["String"]>;
  message_gte?: InputMaybe<Scalars["String"]>;
  message_lte?: InputMaybe<Scalars["String"]>;
  message_in?: InputMaybe<Array<Scalars["String"]>>;
  message_not_in?: InputMaybe<Array<Scalars["String"]>>;
  message_contains?: InputMaybe<Scalars["String"]>;
  message_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_not_contains?: InputMaybe<Scalars["String"]>;
  message_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_starts_with?: InputMaybe<Scalars["String"]>;
  message_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_starts_with?: InputMaybe<Scalars["String"]>;
  message_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_ends_with?: InputMaybe<Scalars["String"]>;
  message_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_ends_with?: InputMaybe<Scalars["String"]>;
  message_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_?: InputMaybe<staginggoerli_OriginMessage_filter>;
  caller?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactionHash?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_OriginTransfer_orderBy =
  | "id"
  | "chainId"
  | "transferId"
  | "nonce"
  | "to"
  | "callData"
  | "originDomain"
  | "destinationDomain"
  | "agent"
  | "recovery"
  | "forceSlow"
  | "receiveLocal"
  | "callback"
  | "callbackFee"
  | "relayerFee"
  | "destinationMinOut"
  | "status"
  | "originMinOut"
  | "transactingAsset"
  | "transactingAmount"
  | "bridgedAsset"
  | "bridgedAmount"
  | "message"
  | "caller"
  | "transactionHash"
  | "timestamp"
  | "gasPrice"
  | "gasLimit"
  | "blockNumber";

export type local1337_Relayer = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  relayer?: Maybe<Scalars["local1337_Bytes"]>;
};

export type local1337_Relayer_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relayer?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  relayer_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  relayer_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  relayer_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Relayer_orderBy = "id" | "isActive" | "relayer";

export type local1337_Router = {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  owner?: Maybe<Scalars["local1337_Bytes"]>;
  recipient?: Maybe<Scalars["local1337_Bytes"]>;
  proposedOwner?: Maybe<Scalars["local1337_Bytes"]>;
  proposedTimestamp?: Maybe<Scalars["BigInt"]>;
  assetBalances: Array<local1337_AssetBalance>;
};

export type local1337_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<local1337_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<local1337_OrderDirection>;
  where?: InputMaybe<local1337_AssetBalance_filter>;
};

export type local1337_Router_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recipient_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  recipient_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  recipient_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  proposedOwner_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedOwner_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  proposedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assetBalances_?: InputMaybe<local1337_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Router_orderBy =
  | "id"
  | "isActive"
  | "owner"
  | "recipient"
  | "proposedOwner"
  | "proposedTimestamp"
  | "assetBalances";

export type local1337_Setting = {
  id: Scalars["ID"];
  maxRoutersPerTransfer: Scalars["BigInt"];
  caller: Scalars["local1337_Bytes"];
};

export type local1337_Setting_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars["BigInt"]>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_not_in?: InputMaybe<Array<Scalars["local1337_Bytes"]>>;
  caller_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["local1337_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<local1337_BlockChangedFilter>;
};

export type local1337_Setting_orderBy = "id" | "maxRoutersPerTransfer" | "caller";

export type staginggoerli_SponsorVault = {
  id: Scalars["ID"];
  sponsorVault: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sponsorVault?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  sponsorVault_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  sponsorVault_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_SponsorVault_orderBy = "id" | "sponsorVault";

export type staginggoerli_StableSwap = {
  id: Scalars["ID"];
  canonicalId: Scalars["staginggoerli_Bytes"];
  domain?: Maybe<Scalars["BigInt"]>;
  swapPool: Scalars["staginggoerli_Bytes"];
};

export type staginggoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  canonicalId?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  canonicalId_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  canonicalId_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  domain?: InputMaybe<Scalars["BigInt"]>;
  domain_not?: InputMaybe<Scalars["BigInt"]>;
  domain_gt?: InputMaybe<Scalars["BigInt"]>;
  domain_lt?: InputMaybe<Scalars["BigInt"]>;
  domain_gte?: InputMaybe<Scalars["BigInt"]>;
  domain_lte?: InputMaybe<Scalars["BigInt"]>;
  domain_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  domain_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapPool?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_not?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  swapPool_not_in?: InputMaybe<Array<Scalars["staginggoerli_Bytes"]>>;
  swapPool_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  swapPool_not_contains?: InputMaybe<Scalars["staginggoerli_Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_StableSwap_orderBy = "id" | "canonicalId" | "domain" | "swapPool";

export type staginggoerli_TransferStatus = "XCalled" | "Executed" | "Reconciled" | "CompletedSlow" | "CompletedFast";

export type local1337__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["local1337_Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars["String"]>;
};

/** The type for the top-level _meta field */
export type local1337__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: local1337__Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  rinkeby_Asset: ResolverTypeWrapper<rinkeby_Asset>;
  rinkeby_AssetBalance: ResolverTypeWrapper<rinkeby_AssetBalance>;
  rinkeby_AssetBalance_filter: rinkeby_AssetBalance_filter;
  rinkeby_AssetBalance_orderBy: rinkeby_AssetBalance_orderBy;
  rinkeby_Asset_filter: rinkeby_Asset_filter;
  rinkeby_Asset_orderBy: rinkeby_Asset_orderBy;
  rinkeby_BigDecimal: ResolverTypeWrapper<Scalars["rinkeby_BigDecimal"]>;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  rinkeby_BlockChangedFilter: rinkeby_BlockChangedFilter;
  rinkeby_Block_height: rinkeby_Block_height;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  rinkeby_Bytes: ResolverTypeWrapper<Scalars["rinkeby_Bytes"]>;
  rinkeby_DestinationTransfer: ResolverTypeWrapper<rinkeby_DestinationTransfer>;
  rinkeby_DestinationTransfer_filter: rinkeby_DestinationTransfer_filter;
  rinkeby_DestinationTransfer_orderBy: rinkeby_DestinationTransfer_orderBy;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  rinkeby_OrderDirection: rinkeby_OrderDirection;
  rinkeby_OriginTransfer: ResolverTypeWrapper<rinkeby_OriginTransfer>;
  rinkeby_OriginTransfer_filter: rinkeby_OriginTransfer_filter;
  rinkeby_OriginTransfer_orderBy: rinkeby_OriginTransfer_orderBy;
  rinkeby_Relayer: ResolverTypeWrapper<rinkeby_Relayer>;
  rinkeby_Relayer_filter: rinkeby_Relayer_filter;
  rinkeby_Relayer_orderBy: rinkeby_Relayer_orderBy;
  rinkeby_Router: ResolverTypeWrapper<rinkeby_Router>;
  rinkeby_Router_filter: rinkeby_Router_filter;
  rinkeby_Router_orderBy: rinkeby_Router_orderBy;
  rinkeby_Setting: ResolverTypeWrapper<rinkeby_Setting>;
  rinkeby_Setting_filter: rinkeby_Setting_filter;
  rinkeby_Setting_orderBy: rinkeby_Setting_orderBy;
  rinkeby_SponsorVault: ResolverTypeWrapper<rinkeby_SponsorVault>;
  rinkeby_SponsorVault_filter: rinkeby_SponsorVault_filter;
  rinkeby_SponsorVault_orderBy: rinkeby_SponsorVault_orderBy;
  rinkeby_StableSwap: ResolverTypeWrapper<rinkeby_StableSwap>;
  rinkeby_StableSwap_filter: rinkeby_StableSwap_filter;
  rinkeby_StableSwap_orderBy: rinkeby_StableSwap_orderBy;
  String: ResolverTypeWrapper<Scalars["String"]>;
  rinkeby_TransferStatus: rinkeby_TransferStatus;
  rinkeby__Block_: ResolverTypeWrapper<rinkeby__Block_>;
  rinkeby__Meta_: ResolverTypeWrapper<rinkeby__Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  goerli_AggregateRoot: ResolverTypeWrapper<goerli_AggregateRoot>;
  goerli_AggregateRoot_filter: goerli_AggregateRoot_filter;
  goerli_AggregateRoot_orderBy: goerli_AggregateRoot_orderBy;
  goerli_Asset: ResolverTypeWrapper<goerli_Asset>;
  goerli_AssetBalance: ResolverTypeWrapper<goerli_AssetBalance>;
  goerli_AssetBalance_filter: goerli_AssetBalance_filter;
  goerli_AssetBalance_orderBy: goerli_AssetBalance_orderBy;
  goerli_Asset_filter: goerli_Asset_filter;
  goerli_Asset_orderBy: goerli_Asset_orderBy;
  goerli_BigDecimal: ResolverTypeWrapper<Scalars["goerli_BigDecimal"]>;
  goerli_BlockChangedFilter: goerli_BlockChangedFilter;
  goerli_Block_height: goerli_Block_height;
  goerli_Bytes: ResolverTypeWrapper<Scalars["goerli_Bytes"]>;
  goerli_DestinationMessage: ResolverTypeWrapper<goerli_DestinationMessage>;
  goerli_DestinationMessage_filter: goerli_DestinationMessage_filter;
  goerli_DestinationMessage_orderBy: goerli_DestinationMessage_orderBy;
  goerli_DestinationTransfer: ResolverTypeWrapper<goerli_DestinationTransfer>;
  goerli_DestinationTransfer_filter: goerli_DestinationTransfer_filter;
  goerli_DestinationTransfer_orderBy: goerli_DestinationTransfer_orderBy;
  goerli_OrderDirection: goerli_OrderDirection;
  goerli_OriginMessage: ResolverTypeWrapper<goerli_OriginMessage>;
  goerli_OriginMessage_filter: goerli_OriginMessage_filter;
  goerli_OriginMessage_orderBy: goerli_OriginMessage_orderBy;
  goerli_OriginTransfer: ResolverTypeWrapper<goerli_OriginTransfer>;
  goerli_OriginTransfer_filter: goerli_OriginTransfer_filter;
  goerli_OriginTransfer_orderBy: goerli_OriginTransfer_orderBy;
  goerli_Relayer: ResolverTypeWrapper<goerli_Relayer>;
  goerli_Relayer_filter: goerli_Relayer_filter;
  goerli_Relayer_orderBy: goerli_Relayer_orderBy;
  goerli_Router: ResolverTypeWrapper<goerli_Router>;
  goerli_Router_filter: goerli_Router_filter;
  goerli_Router_orderBy: goerli_Router_orderBy;
  goerli_Setting: ResolverTypeWrapper<goerli_Setting>;
  goerli_Setting_filter: goerli_Setting_filter;
  goerli_Setting_orderBy: goerli_Setting_orderBy;
  goerli_SponsorVault: ResolverTypeWrapper<goerli_SponsorVault>;
  goerli_SponsorVault_filter: goerli_SponsorVault_filter;
  goerli_SponsorVault_orderBy: goerli_SponsorVault_orderBy;
  goerli_StableSwap: ResolverTypeWrapper<goerli_StableSwap>;
  goerli_StableSwap_filter: goerli_StableSwap_filter;
  goerli_StableSwap_orderBy: goerli_StableSwap_orderBy;
  goerli_TransferStatus: goerli_TransferStatus;
  goerli__Block_: ResolverTypeWrapper<goerli__Block_>;
  goerli__Meta_: ResolverTypeWrapper<goerli__Meta_>;
  local1338_Asset: ResolverTypeWrapper<local1338_Asset>;
  local1338_AssetBalance: ResolverTypeWrapper<local1338_AssetBalance>;
  local1338_AssetBalance_filter: local1338_AssetBalance_filter;
  local1338_AssetBalance_orderBy: local1338_AssetBalance_orderBy;
  local1338_Asset_filter: local1338_Asset_filter;
  local1338_Asset_orderBy: local1338_Asset_orderBy;
  local1338_BigDecimal: ResolverTypeWrapper<Scalars["local1338_BigDecimal"]>;
  local1338_BlockChangedFilter: local1338_BlockChangedFilter;
  local1338_Block_height: local1338_Block_height;
  local1338_Bytes: ResolverTypeWrapper<Scalars["local1338_Bytes"]>;
  local1338_DestinationTransfer: ResolverTypeWrapper<local1338_DestinationTransfer>;
  local1338_DestinationTransfer_filter: local1338_DestinationTransfer_filter;
  local1338_DestinationTransfer_orderBy: local1338_DestinationTransfer_orderBy;
  local1338_OrderDirection: local1338_OrderDirection;
  local1338_OriginTransfer: ResolverTypeWrapper<local1338_OriginTransfer>;
  local1338_OriginTransfer_filter: local1338_OriginTransfer_filter;
  local1338_OriginTransfer_orderBy: local1338_OriginTransfer_orderBy;
  local1338_Relayer: ResolverTypeWrapper<local1338_Relayer>;
  local1338_Relayer_filter: local1338_Relayer_filter;
  local1338_Relayer_orderBy: local1338_Relayer_orderBy;
  local1338_Router: ResolverTypeWrapper<local1338_Router>;
  local1338_Router_filter: local1338_Router_filter;
  local1338_Router_orderBy: local1338_Router_orderBy;
  local1338_Setting: ResolverTypeWrapper<local1338_Setting>;
  local1338_Setting_filter: local1338_Setting_filter;
  local1338_Setting_orderBy: local1338_Setting_orderBy;
  local1338_SponsorVault: ResolverTypeWrapper<local1338_SponsorVault>;
  local1338_SponsorVault_filter: local1338_SponsorVault_filter;
  local1338_SponsorVault_orderBy: local1338_SponsorVault_orderBy;
  local1338_StableSwap: ResolverTypeWrapper<local1338_StableSwap>;
  local1338_StableSwap_filter: local1338_StableSwap_filter;
  local1338_StableSwap_orderBy: local1338_StableSwap_orderBy;
  local1338_TransferStatus: local1338_TransferStatus;
  local1338__Block_: ResolverTypeWrapper<local1338__Block_>;
  local1338__Meta_: ResolverTypeWrapper<local1338__Meta_>;
  optimismgoerli_AggregateRoot: ResolverTypeWrapper<optimismgoerli_AggregateRoot>;
  optimismgoerli_AggregateRoot_filter: optimismgoerli_AggregateRoot_filter;
  optimismgoerli_AggregateRoot_orderBy: optimismgoerli_AggregateRoot_orderBy;
  optimismgoerli_Asset: ResolverTypeWrapper<optimismgoerli_Asset>;
  optimismgoerli_AssetBalance: ResolverTypeWrapper<optimismgoerli_AssetBalance>;
  optimismgoerli_AssetBalance_filter: optimismgoerli_AssetBalance_filter;
  optimismgoerli_AssetBalance_orderBy: optimismgoerli_AssetBalance_orderBy;
  optimismgoerli_Asset_filter: optimismgoerli_Asset_filter;
  optimismgoerli_Asset_orderBy: optimismgoerli_Asset_orderBy;
  optimismgoerli_BigDecimal: ResolverTypeWrapper<Scalars["optimismgoerli_BigDecimal"]>;
  optimismgoerli_BlockChangedFilter: optimismgoerli_BlockChangedFilter;
  optimismgoerli_Block_height: optimismgoerli_Block_height;
  optimismgoerli_Bytes: ResolverTypeWrapper<Scalars["optimismgoerli_Bytes"]>;
  optimismgoerli_DestinationMessage: ResolverTypeWrapper<optimismgoerli_DestinationMessage>;
  optimismgoerli_DestinationMessage_filter: optimismgoerli_DestinationMessage_filter;
  optimismgoerli_DestinationMessage_orderBy: optimismgoerli_DestinationMessage_orderBy;
  optimismgoerli_DestinationTransfer: ResolverTypeWrapper<optimismgoerli_DestinationTransfer>;
  optimismgoerli_DestinationTransfer_filter: optimismgoerli_DestinationTransfer_filter;
  optimismgoerli_DestinationTransfer_orderBy: optimismgoerli_DestinationTransfer_orderBy;
  optimismgoerli_OrderDirection: optimismgoerli_OrderDirection;
  optimismgoerli_OriginMessage: ResolverTypeWrapper<optimismgoerli_OriginMessage>;
  optimismgoerli_OriginMessage_filter: optimismgoerli_OriginMessage_filter;
  optimismgoerli_OriginMessage_orderBy: optimismgoerli_OriginMessage_orderBy;
  optimismgoerli_OriginTransfer: ResolverTypeWrapper<optimismgoerli_OriginTransfer>;
  optimismgoerli_OriginTransfer_filter: optimismgoerli_OriginTransfer_filter;
  optimismgoerli_OriginTransfer_orderBy: optimismgoerli_OriginTransfer_orderBy;
  optimismgoerli_Relayer: ResolverTypeWrapper<optimismgoerli_Relayer>;
  optimismgoerli_Relayer_filter: optimismgoerli_Relayer_filter;
  optimismgoerli_Relayer_orderBy: optimismgoerli_Relayer_orderBy;
  optimismgoerli_Router: ResolverTypeWrapper<optimismgoerli_Router>;
  optimismgoerli_Router_filter: optimismgoerli_Router_filter;
  optimismgoerli_Router_orderBy: optimismgoerli_Router_orderBy;
  optimismgoerli_Setting: ResolverTypeWrapper<optimismgoerli_Setting>;
  optimismgoerli_Setting_filter: optimismgoerli_Setting_filter;
  optimismgoerli_Setting_orderBy: optimismgoerli_Setting_orderBy;
  optimismgoerli_SponsorVault: ResolverTypeWrapper<optimismgoerli_SponsorVault>;
  optimismgoerli_SponsorVault_filter: optimismgoerli_SponsorVault_filter;
  optimismgoerli_SponsorVault_orderBy: optimismgoerli_SponsorVault_orderBy;
  optimismgoerli_StableSwap: ResolverTypeWrapper<optimismgoerli_StableSwap>;
  optimismgoerli_StableSwap_filter: optimismgoerli_StableSwap_filter;
  optimismgoerli_StableSwap_orderBy: optimismgoerli_StableSwap_orderBy;
  optimismgoerli_TransferStatus: optimismgoerli_TransferStatus;
  optimismgoerli__Block_: ResolverTypeWrapper<optimismgoerli__Block_>;
  optimismgoerli__Meta_: ResolverTypeWrapper<optimismgoerli__Meta_>;
  stagingoptimismgoerli_AggregateRoot: ResolverTypeWrapper<stagingoptimismgoerli_AggregateRoot>;
  stagingoptimismgoerli_AggregateRoot_filter: stagingoptimismgoerli_AggregateRoot_filter;
  stagingoptimismgoerli_AggregateRoot_orderBy: stagingoptimismgoerli_AggregateRoot_orderBy;
  stagingoptimismgoerli_Asset: ResolverTypeWrapper<stagingoptimismgoerli_Asset>;
  stagingoptimismgoerli_AssetBalance: ResolverTypeWrapper<stagingoptimismgoerli_AssetBalance>;
  stagingoptimismgoerli_AssetBalance_filter: stagingoptimismgoerli_AssetBalance_filter;
  stagingoptimismgoerli_AssetBalance_orderBy: stagingoptimismgoerli_AssetBalance_orderBy;
  stagingoptimismgoerli_Asset_filter: stagingoptimismgoerli_Asset_filter;
  stagingoptimismgoerli_Asset_orderBy: stagingoptimismgoerli_Asset_orderBy;
  stagingoptimismgoerli_BigDecimal: ResolverTypeWrapper<Scalars["stagingoptimismgoerli_BigDecimal"]>;
  stagingoptimismgoerli_BlockChangedFilter: stagingoptimismgoerli_BlockChangedFilter;
  stagingoptimismgoerli_Block_height: stagingoptimismgoerli_Block_height;
  stagingoptimismgoerli_Bytes: ResolverTypeWrapper<Scalars["stagingoptimismgoerli_Bytes"]>;
  stagingoptimismgoerli_DestinationMessage: ResolverTypeWrapper<stagingoptimismgoerli_DestinationMessage>;
  stagingoptimismgoerli_DestinationMessage_filter: stagingoptimismgoerli_DestinationMessage_filter;
  stagingoptimismgoerli_DestinationMessage_orderBy: stagingoptimismgoerli_DestinationMessage_orderBy;
  stagingoptimismgoerli_DestinationTransfer: ResolverTypeWrapper<stagingoptimismgoerli_DestinationTransfer>;
  stagingoptimismgoerli_DestinationTransfer_filter: stagingoptimismgoerli_DestinationTransfer_filter;
  stagingoptimismgoerli_DestinationTransfer_orderBy: stagingoptimismgoerli_DestinationTransfer_orderBy;
  stagingoptimismgoerli_OrderDirection: stagingoptimismgoerli_OrderDirection;
  stagingoptimismgoerli_OriginMessage: ResolverTypeWrapper<stagingoptimismgoerli_OriginMessage>;
  stagingoptimismgoerli_OriginMessage_filter: stagingoptimismgoerli_OriginMessage_filter;
  stagingoptimismgoerli_OriginMessage_orderBy: stagingoptimismgoerli_OriginMessage_orderBy;
  stagingoptimismgoerli_OriginTransfer: ResolverTypeWrapper<stagingoptimismgoerli_OriginTransfer>;
  stagingoptimismgoerli_OriginTransfer_filter: stagingoptimismgoerli_OriginTransfer_filter;
  stagingoptimismgoerli_OriginTransfer_orderBy: stagingoptimismgoerli_OriginTransfer_orderBy;
  stagingoptimismgoerli_Relayer: ResolverTypeWrapper<stagingoptimismgoerli_Relayer>;
  stagingoptimismgoerli_Relayer_filter: stagingoptimismgoerli_Relayer_filter;
  stagingoptimismgoerli_Relayer_orderBy: stagingoptimismgoerli_Relayer_orderBy;
  stagingoptimismgoerli_Router: ResolverTypeWrapper<stagingoptimismgoerli_Router>;
  stagingoptimismgoerli_Router_filter: stagingoptimismgoerli_Router_filter;
  stagingoptimismgoerli_Router_orderBy: stagingoptimismgoerli_Router_orderBy;
  stagingoptimismgoerli_Setting: ResolverTypeWrapper<stagingoptimismgoerli_Setting>;
  stagingoptimismgoerli_Setting_filter: stagingoptimismgoerli_Setting_filter;
  stagingoptimismgoerli_Setting_orderBy: stagingoptimismgoerli_Setting_orderBy;
  stagingoptimismgoerli_SponsorVault: ResolverTypeWrapper<stagingoptimismgoerli_SponsorVault>;
  stagingoptimismgoerli_SponsorVault_filter: stagingoptimismgoerli_SponsorVault_filter;
  stagingoptimismgoerli_SponsorVault_orderBy: stagingoptimismgoerli_SponsorVault_orderBy;
  stagingoptimismgoerli_StableSwap: ResolverTypeWrapper<stagingoptimismgoerli_StableSwap>;
  stagingoptimismgoerli_StableSwap_filter: stagingoptimismgoerli_StableSwap_filter;
  stagingoptimismgoerli_StableSwap_orderBy: stagingoptimismgoerli_StableSwap_orderBy;
  stagingoptimismgoerli_TransferStatus: stagingoptimismgoerli_TransferStatus;
  stagingoptimismgoerli__Block_: ResolverTypeWrapper<stagingoptimismgoerli__Block_>;
  stagingoptimismgoerli__Meta_: ResolverTypeWrapper<stagingoptimismgoerli__Meta_>;
  testoptimismgoerli_Asset: ResolverTypeWrapper<testoptimismgoerli_Asset>;
  testoptimismgoerli_AssetBalance: ResolverTypeWrapper<testoptimismgoerli_AssetBalance>;
  testoptimismgoerli_AssetBalance_filter: testoptimismgoerli_AssetBalance_filter;
  testoptimismgoerli_AssetBalance_orderBy: testoptimismgoerli_AssetBalance_orderBy;
  testoptimismgoerli_Asset_filter: testoptimismgoerli_Asset_filter;
  testoptimismgoerli_Asset_orderBy: testoptimismgoerli_Asset_orderBy;
  testoptimismgoerli_BigDecimal: ResolverTypeWrapper<Scalars["testoptimismgoerli_BigDecimal"]>;
  testoptimismgoerli_BlockChangedFilter: testoptimismgoerli_BlockChangedFilter;
  testoptimismgoerli_Block_height: testoptimismgoerli_Block_height;
  testoptimismgoerli_Bytes: ResolverTypeWrapper<Scalars["testoptimismgoerli_Bytes"]>;
  testoptimismgoerli_DestinationTransfer: ResolverTypeWrapper<testoptimismgoerli_DestinationTransfer>;
  testoptimismgoerli_DestinationTransfer_filter: testoptimismgoerli_DestinationTransfer_filter;
  testoptimismgoerli_DestinationTransfer_orderBy: testoptimismgoerli_DestinationTransfer_orderBy;
  testoptimismgoerli_OrderDirection: testoptimismgoerli_OrderDirection;
  testoptimismgoerli_OriginTransfer: ResolverTypeWrapper<testoptimismgoerli_OriginTransfer>;
  testoptimismgoerli_OriginTransfer_filter: testoptimismgoerli_OriginTransfer_filter;
  testoptimismgoerli_OriginTransfer_orderBy: testoptimismgoerli_OriginTransfer_orderBy;
  testoptimismgoerli_Relayer: ResolverTypeWrapper<testoptimismgoerli_Relayer>;
  testoptimismgoerli_Relayer_filter: testoptimismgoerli_Relayer_filter;
  testoptimismgoerli_Relayer_orderBy: testoptimismgoerli_Relayer_orderBy;
  testoptimismgoerli_Router: ResolverTypeWrapper<testoptimismgoerli_Router>;
  testoptimismgoerli_Router_filter: testoptimismgoerli_Router_filter;
  testoptimismgoerli_Router_orderBy: testoptimismgoerli_Router_orderBy;
  testoptimismgoerli_Setting: ResolverTypeWrapper<testoptimismgoerli_Setting>;
  testoptimismgoerli_Setting_filter: testoptimismgoerli_Setting_filter;
  testoptimismgoerli_Setting_orderBy: testoptimismgoerli_Setting_orderBy;
  testoptimismgoerli_SponsorVault: ResolverTypeWrapper<testoptimismgoerli_SponsorVault>;
  testoptimismgoerli_SponsorVault_filter: testoptimismgoerli_SponsorVault_filter;
  testoptimismgoerli_SponsorVault_orderBy: testoptimismgoerli_SponsorVault_orderBy;
  testoptimismgoerli_StableSwap: ResolverTypeWrapper<testoptimismgoerli_StableSwap>;
  testoptimismgoerli_StableSwap_filter: testoptimismgoerli_StableSwap_filter;
  testoptimismgoerli_StableSwap_orderBy: testoptimismgoerli_StableSwap_orderBy;
  testoptimismgoerli_TransferStatus: testoptimismgoerli_TransferStatus;
  testoptimismgoerli__Block_: ResolverTypeWrapper<testoptimismgoerli__Block_>;
  testoptimismgoerli__Meta_: ResolverTypeWrapper<testoptimismgoerli__Meta_>;
  local1337_Asset: ResolverTypeWrapper<local1337_Asset>;
  local1337_AssetBalance: ResolverTypeWrapper<local1337_AssetBalance>;
  local1337_AssetBalance_filter: local1337_AssetBalance_filter;
  local1337_AssetBalance_orderBy: local1337_AssetBalance_orderBy;
  local1337_Asset_filter: local1337_Asset_filter;
  local1337_Asset_orderBy: local1337_Asset_orderBy;
  local1337_BigDecimal: ResolverTypeWrapper<Scalars["local1337_BigDecimal"]>;
  local1337_BlockChangedFilter: local1337_BlockChangedFilter;
  local1337_Block_height: local1337_Block_height;
  local1337_Bytes: ResolverTypeWrapper<Scalars["local1337_Bytes"]>;
  local1337_DestinationTransfer: ResolverTypeWrapper<local1337_DestinationTransfer>;
  local1337_DestinationTransfer_filter: local1337_DestinationTransfer_filter;
  local1337_DestinationTransfer_orderBy: local1337_DestinationTransfer_orderBy;
  local1337_OrderDirection: local1337_OrderDirection;
  local1337_OriginTransfer: ResolverTypeWrapper<local1337_OriginTransfer>;
  local1337_OriginTransfer_filter: local1337_OriginTransfer_filter;
  local1337_OriginTransfer_orderBy: local1337_OriginTransfer_orderBy;
  local1337_Relayer: ResolverTypeWrapper<local1337_Relayer>;
  local1337_Relayer_filter: local1337_Relayer_filter;
  local1337_Relayer_orderBy: local1337_Relayer_orderBy;
  local1337_Router: ResolverTypeWrapper<local1337_Router>;
  local1337_Router_filter: local1337_Router_filter;
  local1337_Router_orderBy: local1337_Router_orderBy;
  local1337_Setting: ResolverTypeWrapper<local1337_Setting>;
  local1337_Setting_filter: local1337_Setting_filter;
  local1337_Setting_orderBy: local1337_Setting_orderBy;
  local1337_SponsorVault: ResolverTypeWrapper<local1337_SponsorVault>;
  local1337_SponsorVault_filter: local1337_SponsorVault_filter;
  local1337_SponsorVault_orderBy: local1337_SponsorVault_orderBy;
  local1337_StableSwap: ResolverTypeWrapper<local1337_StableSwap>;
  local1337_StableSwap_filter: local1337_StableSwap_filter;
  local1337_StableSwap_orderBy: local1337_StableSwap_orderBy;
  local1337_TransferStatus: local1337_TransferStatus;
  local1337__Block_: ResolverTypeWrapper<local1337__Block_>;
  local1337__Meta_: ResolverTypeWrapper<local1337__Meta_>;
  testgoerli_Asset: ResolverTypeWrapper<testgoerli_Asset>;
  testgoerli_AssetBalance: ResolverTypeWrapper<testgoerli_AssetBalance>;
  testgoerli_AssetBalance_filter: testgoerli_AssetBalance_filter;
  testgoerli_AssetBalance_orderBy: testgoerli_AssetBalance_orderBy;
  testgoerli_Asset_filter: testgoerli_Asset_filter;
  testgoerli_Asset_orderBy: testgoerli_Asset_orderBy;
  testgoerli_BigDecimal: ResolverTypeWrapper<Scalars["testgoerli_BigDecimal"]>;
  testgoerli_BlockChangedFilter: testgoerli_BlockChangedFilter;
  testgoerli_Block_height: testgoerli_Block_height;
  testgoerli_Bytes: ResolverTypeWrapper<Scalars["testgoerli_Bytes"]>;
  testgoerli_DestinationTransfer: ResolverTypeWrapper<testgoerli_DestinationTransfer>;
  testgoerli_DestinationTransfer_filter: testgoerli_DestinationTransfer_filter;
  testgoerli_DestinationTransfer_orderBy: testgoerli_DestinationTransfer_orderBy;
  testgoerli_OrderDirection: testgoerli_OrderDirection;
  testgoerli_OriginTransfer: ResolverTypeWrapper<testgoerli_OriginTransfer>;
  testgoerli_OriginTransfer_filter: testgoerli_OriginTransfer_filter;
  testgoerli_OriginTransfer_orderBy: testgoerli_OriginTransfer_orderBy;
  testgoerli_Relayer: ResolverTypeWrapper<testgoerli_Relayer>;
  testgoerli_Relayer_filter: testgoerli_Relayer_filter;
  testgoerli_Relayer_orderBy: testgoerli_Relayer_orderBy;
  testgoerli_Router: ResolverTypeWrapper<testgoerli_Router>;
  testgoerli_Router_filter: testgoerli_Router_filter;
  testgoerli_Router_orderBy: testgoerli_Router_orderBy;
  testgoerli_Setting: ResolverTypeWrapper<testgoerli_Setting>;
  testgoerli_Setting_filter: testgoerli_Setting_filter;
  testgoerli_Setting_orderBy: testgoerli_Setting_orderBy;
  testgoerli_SponsorVault: ResolverTypeWrapper<testgoerli_SponsorVault>;
  testgoerli_SponsorVault_filter: testgoerli_SponsorVault_filter;
  testgoerli_SponsorVault_orderBy: testgoerli_SponsorVault_orderBy;
  testgoerli_StableSwap: ResolverTypeWrapper<testgoerli_StableSwap>;
  testgoerli_StableSwap_filter: testgoerli_StableSwap_filter;
  testgoerli_StableSwap_orderBy: testgoerli_StableSwap_orderBy;
  testgoerli_TransferStatus: testgoerli_TransferStatus;
  testgoerli__Block_: ResolverTypeWrapper<testgoerli__Block_>;
  testgoerli__Meta_: ResolverTypeWrapper<testgoerli__Meta_>;
  staginggoerli_AggregateRoot: ResolverTypeWrapper<staginggoerli_AggregateRoot>;
  staginggoerli_AggregateRoot_filter: staginggoerli_AggregateRoot_filter;
  staginggoerli_AggregateRoot_orderBy: staginggoerli_AggregateRoot_orderBy;
  staginggoerli_Asset: ResolverTypeWrapper<staginggoerli_Asset>;
  staginggoerli_AssetBalance: ResolverTypeWrapper<staginggoerli_AssetBalance>;
  staginggoerli_AssetBalance_filter: staginggoerli_AssetBalance_filter;
  staginggoerli_AssetBalance_orderBy: staginggoerli_AssetBalance_orderBy;
  staginggoerli_Asset_filter: staginggoerli_Asset_filter;
  staginggoerli_Asset_orderBy: staginggoerli_Asset_orderBy;
  staginggoerli_BigDecimal: ResolverTypeWrapper<Scalars["staginggoerli_BigDecimal"]>;
  staginggoerli_BlockChangedFilter: staginggoerli_BlockChangedFilter;
  staginggoerli_Block_height: staginggoerli_Block_height;
  staginggoerli_Bytes: ResolverTypeWrapper<Scalars["staginggoerli_Bytes"]>;
  staginggoerli_DestinationMessage: ResolverTypeWrapper<staginggoerli_DestinationMessage>;
  staginggoerli_DestinationMessage_filter: staginggoerli_DestinationMessage_filter;
  staginggoerli_DestinationMessage_orderBy: staginggoerli_DestinationMessage_orderBy;
  staginggoerli_DestinationTransfer: ResolverTypeWrapper<staginggoerli_DestinationTransfer>;
  staginggoerli_DestinationTransfer_filter: staginggoerli_DestinationTransfer_filter;
  staginggoerli_DestinationTransfer_orderBy: staginggoerli_DestinationTransfer_orderBy;
  staginggoerli_OrderDirection: staginggoerli_OrderDirection;
  staginggoerli_OriginMessage: ResolverTypeWrapper<staginggoerli_OriginMessage>;
  staginggoerli_OriginMessage_filter: staginggoerli_OriginMessage_filter;
  staginggoerli_OriginMessage_orderBy: staginggoerli_OriginMessage_orderBy;
  staginggoerli_OriginTransfer: ResolverTypeWrapper<staginggoerli_OriginTransfer>;
  staginggoerli_OriginTransfer_filter: staginggoerli_OriginTransfer_filter;
  staginggoerli_OriginTransfer_orderBy: staginggoerli_OriginTransfer_orderBy;
  staginggoerli_Relayer: ResolverTypeWrapper<staginggoerli_Relayer>;
  staginggoerli_Relayer_filter: staginggoerli_Relayer_filter;
  staginggoerli_Relayer_orderBy: staginggoerli_Relayer_orderBy;
  staginggoerli_Router: ResolverTypeWrapper<staginggoerli_Router>;
  staginggoerli_Router_filter: staginggoerli_Router_filter;
  staginggoerli_Router_orderBy: staginggoerli_Router_orderBy;
  staginggoerli_Setting: ResolverTypeWrapper<staginggoerli_Setting>;
  staginggoerli_Setting_filter: staginggoerli_Setting_filter;
  staginggoerli_Setting_orderBy: staginggoerli_Setting_orderBy;
  staginggoerli_SponsorVault: ResolverTypeWrapper<staginggoerli_SponsorVault>;
  staginggoerli_SponsorVault_filter: staginggoerli_SponsorVault_filter;
  staginggoerli_SponsorVault_orderBy: staginggoerli_SponsorVault_orderBy;
  staginggoerli_StableSwap: ResolverTypeWrapper<staginggoerli_StableSwap>;
  staginggoerli_StableSwap_filter: staginggoerli_StableSwap_filter;
  staginggoerli_StableSwap_orderBy: staginggoerli_StableSwap_orderBy;
  staginggoerli_TransferStatus: staginggoerli_TransferStatus;
  staginggoerli__Block_: ResolverTypeWrapper<staginggoerli__Block_>;
  staginggoerli__Meta_: ResolverTypeWrapper<staginggoerli__Meta_>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  rinkeby_Asset: rinkeby_Asset;
  rinkeby_AssetBalance: rinkeby_AssetBalance;
  rinkeby_AssetBalance_filter: rinkeby_AssetBalance_filter;
  rinkeby_Asset_filter: rinkeby_Asset_filter;
  rinkeby_BigDecimal: Scalars["rinkeby_BigDecimal"];
  BigInt: Scalars["BigInt"];
  rinkeby_BlockChangedFilter: rinkeby_BlockChangedFilter;
  rinkeby_Block_height: rinkeby_Block_height;
  Boolean: Scalars["Boolean"];
  rinkeby_Bytes: Scalars["rinkeby_Bytes"];
  rinkeby_DestinationTransfer: rinkeby_DestinationTransfer;
  rinkeby_DestinationTransfer_filter: rinkeby_DestinationTransfer_filter;
  Float: Scalars["Float"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  rinkeby_OriginTransfer: rinkeby_OriginTransfer;
  rinkeby_OriginTransfer_filter: rinkeby_OriginTransfer_filter;
  rinkeby_Relayer: rinkeby_Relayer;
  rinkeby_Relayer_filter: rinkeby_Relayer_filter;
  rinkeby_Router: rinkeby_Router;
  rinkeby_Router_filter: rinkeby_Router_filter;
  rinkeby_Setting: rinkeby_Setting;
  rinkeby_Setting_filter: rinkeby_Setting_filter;
  rinkeby_SponsorVault: rinkeby_SponsorVault;
  rinkeby_SponsorVault_filter: rinkeby_SponsorVault_filter;
  rinkeby_StableSwap: rinkeby_StableSwap;
  rinkeby_StableSwap_filter: rinkeby_StableSwap_filter;
  String: Scalars["String"];
  rinkeby__Block_: rinkeby__Block_;
  rinkeby__Meta_: rinkeby__Meta_;
  goerli_AggregateRoot: goerli_AggregateRoot;
  goerli_AggregateRoot_filter: goerli_AggregateRoot_filter;
  goerli_Asset: goerli_Asset;
  goerli_AssetBalance: goerli_AssetBalance;
  goerli_AssetBalance_filter: goerli_AssetBalance_filter;
  goerli_Asset_filter: goerli_Asset_filter;
  goerli_BigDecimal: Scalars["goerli_BigDecimal"];
  goerli_BlockChangedFilter: goerli_BlockChangedFilter;
  goerli_Block_height: goerli_Block_height;
  goerli_Bytes: Scalars["goerli_Bytes"];
  goerli_DestinationMessage: goerli_DestinationMessage;
  goerli_DestinationMessage_filter: goerli_DestinationMessage_filter;
  goerli_DestinationTransfer: goerli_DestinationTransfer;
  goerli_DestinationTransfer_filter: goerli_DestinationTransfer_filter;
  goerli_OriginMessage: goerli_OriginMessage;
  goerli_OriginMessage_filter: goerli_OriginMessage_filter;
  goerli_OriginTransfer: goerli_OriginTransfer;
  goerli_OriginTransfer_filter: goerli_OriginTransfer_filter;
  goerli_Relayer: goerli_Relayer;
  goerli_Relayer_filter: goerli_Relayer_filter;
  goerli_Router: goerli_Router;
  goerli_Router_filter: goerli_Router_filter;
  goerli_Setting: goerli_Setting;
  goerli_Setting_filter: goerli_Setting_filter;
  goerli_SponsorVault: goerli_SponsorVault;
  goerli_SponsorVault_filter: goerli_SponsorVault_filter;
  goerli_StableSwap: goerli_StableSwap;
  goerli_StableSwap_filter: goerli_StableSwap_filter;
  goerli__Block_: goerli__Block_;
  goerli__Meta_: goerli__Meta_;
  local1338_Asset: local1338_Asset;
  local1338_AssetBalance: local1338_AssetBalance;
  local1338_AssetBalance_filter: local1338_AssetBalance_filter;
  local1338_Asset_filter: local1338_Asset_filter;
  local1338_BigDecimal: Scalars["local1338_BigDecimal"];
  local1338_BlockChangedFilter: local1338_BlockChangedFilter;
  local1338_Block_height: local1338_Block_height;
  local1338_Bytes: Scalars["local1338_Bytes"];
  local1338_DestinationTransfer: local1338_DestinationTransfer;
  local1338_DestinationTransfer_filter: local1338_DestinationTransfer_filter;
  local1338_OriginTransfer: local1338_OriginTransfer;
  local1338_OriginTransfer_filter: local1338_OriginTransfer_filter;
  local1338_Relayer: local1338_Relayer;
  local1338_Relayer_filter: local1338_Relayer_filter;
  local1338_Router: local1338_Router;
  local1338_Router_filter: local1338_Router_filter;
  local1338_Setting: local1338_Setting;
  local1338_Setting_filter: local1338_Setting_filter;
  local1338_SponsorVault: local1338_SponsorVault;
  local1338_SponsorVault_filter: local1338_SponsorVault_filter;
  local1338_StableSwap: local1338_StableSwap;
  local1338_StableSwap_filter: local1338_StableSwap_filter;
  local1338__Block_: local1338__Block_;
  local1338__Meta_: local1338__Meta_;
  optimismgoerli_AggregateRoot: optimismgoerli_AggregateRoot;
  optimismgoerli_AggregateRoot_filter: optimismgoerli_AggregateRoot_filter;
  optimismgoerli_Asset: optimismgoerli_Asset;
  optimismgoerli_AssetBalance: optimismgoerli_AssetBalance;
  optimismgoerli_AssetBalance_filter: optimismgoerli_AssetBalance_filter;
  optimismgoerli_Asset_filter: optimismgoerli_Asset_filter;
  optimismgoerli_BigDecimal: Scalars["optimismgoerli_BigDecimal"];
  optimismgoerli_BlockChangedFilter: optimismgoerli_BlockChangedFilter;
  optimismgoerli_Block_height: optimismgoerli_Block_height;
  optimismgoerli_Bytes: Scalars["optimismgoerli_Bytes"];
  optimismgoerli_DestinationMessage: optimismgoerli_DestinationMessage;
  optimismgoerli_DestinationMessage_filter: optimismgoerli_DestinationMessage_filter;
  optimismgoerli_DestinationTransfer: optimismgoerli_DestinationTransfer;
  optimismgoerli_DestinationTransfer_filter: optimismgoerli_DestinationTransfer_filter;
  optimismgoerli_OriginMessage: optimismgoerli_OriginMessage;
  optimismgoerli_OriginMessage_filter: optimismgoerli_OriginMessage_filter;
  optimismgoerli_OriginTransfer: optimismgoerli_OriginTransfer;
  optimismgoerli_OriginTransfer_filter: optimismgoerli_OriginTransfer_filter;
  optimismgoerli_Relayer: optimismgoerli_Relayer;
  optimismgoerli_Relayer_filter: optimismgoerli_Relayer_filter;
  optimismgoerli_Router: optimismgoerli_Router;
  optimismgoerli_Router_filter: optimismgoerli_Router_filter;
  optimismgoerli_Setting: optimismgoerli_Setting;
  optimismgoerli_Setting_filter: optimismgoerli_Setting_filter;
  optimismgoerli_SponsorVault: optimismgoerli_SponsorVault;
  optimismgoerli_SponsorVault_filter: optimismgoerli_SponsorVault_filter;
  optimismgoerli_StableSwap: optimismgoerli_StableSwap;
  optimismgoerli_StableSwap_filter: optimismgoerli_StableSwap_filter;
  optimismgoerli__Block_: optimismgoerli__Block_;
  optimismgoerli__Meta_: optimismgoerli__Meta_;
  stagingoptimismgoerli_AggregateRoot: stagingoptimismgoerli_AggregateRoot;
  stagingoptimismgoerli_AggregateRoot_filter: stagingoptimismgoerli_AggregateRoot_filter;
  stagingoptimismgoerli_Asset: stagingoptimismgoerli_Asset;
  stagingoptimismgoerli_AssetBalance: stagingoptimismgoerli_AssetBalance;
  stagingoptimismgoerli_AssetBalance_filter: stagingoptimismgoerli_AssetBalance_filter;
  stagingoptimismgoerli_Asset_filter: stagingoptimismgoerli_Asset_filter;
  stagingoptimismgoerli_BigDecimal: Scalars["stagingoptimismgoerli_BigDecimal"];
  stagingoptimismgoerli_BlockChangedFilter: stagingoptimismgoerli_BlockChangedFilter;
  stagingoptimismgoerli_Block_height: stagingoptimismgoerli_Block_height;
  stagingoptimismgoerli_Bytes: Scalars["stagingoptimismgoerli_Bytes"];
  stagingoptimismgoerli_DestinationMessage: stagingoptimismgoerli_DestinationMessage;
  stagingoptimismgoerli_DestinationMessage_filter: stagingoptimismgoerli_DestinationMessage_filter;
  stagingoptimismgoerli_DestinationTransfer: stagingoptimismgoerli_DestinationTransfer;
  stagingoptimismgoerli_DestinationTransfer_filter: stagingoptimismgoerli_DestinationTransfer_filter;
  stagingoptimismgoerli_OriginMessage: stagingoptimismgoerli_OriginMessage;
  stagingoptimismgoerli_OriginMessage_filter: stagingoptimismgoerli_OriginMessage_filter;
  stagingoptimismgoerli_OriginTransfer: stagingoptimismgoerli_OriginTransfer;
  stagingoptimismgoerli_OriginTransfer_filter: stagingoptimismgoerli_OriginTransfer_filter;
  stagingoptimismgoerli_Relayer: stagingoptimismgoerli_Relayer;
  stagingoptimismgoerli_Relayer_filter: stagingoptimismgoerli_Relayer_filter;
  stagingoptimismgoerli_Router: stagingoptimismgoerli_Router;
  stagingoptimismgoerli_Router_filter: stagingoptimismgoerli_Router_filter;
  stagingoptimismgoerli_Setting: stagingoptimismgoerli_Setting;
  stagingoptimismgoerli_Setting_filter: stagingoptimismgoerli_Setting_filter;
  stagingoptimismgoerli_SponsorVault: stagingoptimismgoerli_SponsorVault;
  stagingoptimismgoerli_SponsorVault_filter: stagingoptimismgoerli_SponsorVault_filter;
  stagingoptimismgoerli_StableSwap: stagingoptimismgoerli_StableSwap;
  stagingoptimismgoerli_StableSwap_filter: stagingoptimismgoerli_StableSwap_filter;
  stagingoptimismgoerli__Block_: stagingoptimismgoerli__Block_;
  stagingoptimismgoerli__Meta_: stagingoptimismgoerli__Meta_;
  testoptimismgoerli_Asset: testoptimismgoerli_Asset;
  testoptimismgoerli_AssetBalance: testoptimismgoerli_AssetBalance;
  testoptimismgoerli_AssetBalance_filter: testoptimismgoerli_AssetBalance_filter;
  testoptimismgoerli_Asset_filter: testoptimismgoerli_Asset_filter;
  testoptimismgoerli_BigDecimal: Scalars["testoptimismgoerli_BigDecimal"];
  testoptimismgoerli_BlockChangedFilter: testoptimismgoerli_BlockChangedFilter;
  testoptimismgoerli_Block_height: testoptimismgoerli_Block_height;
  testoptimismgoerli_Bytes: Scalars["testoptimismgoerli_Bytes"];
  testoptimismgoerli_DestinationTransfer: testoptimismgoerli_DestinationTransfer;
  testoptimismgoerli_DestinationTransfer_filter: testoptimismgoerli_DestinationTransfer_filter;
  testoptimismgoerli_OriginTransfer: testoptimismgoerli_OriginTransfer;
  testoptimismgoerli_OriginTransfer_filter: testoptimismgoerli_OriginTransfer_filter;
  testoptimismgoerli_Relayer: testoptimismgoerli_Relayer;
  testoptimismgoerli_Relayer_filter: testoptimismgoerli_Relayer_filter;
  testoptimismgoerli_Router: testoptimismgoerli_Router;
  testoptimismgoerli_Router_filter: testoptimismgoerli_Router_filter;
  testoptimismgoerli_Setting: testoptimismgoerli_Setting;
  testoptimismgoerli_Setting_filter: testoptimismgoerli_Setting_filter;
  testoptimismgoerli_SponsorVault: testoptimismgoerli_SponsorVault;
  testoptimismgoerli_SponsorVault_filter: testoptimismgoerli_SponsorVault_filter;
  testoptimismgoerli_StableSwap: testoptimismgoerli_StableSwap;
  testoptimismgoerli_StableSwap_filter: testoptimismgoerli_StableSwap_filter;
  testoptimismgoerli__Block_: testoptimismgoerli__Block_;
  testoptimismgoerli__Meta_: testoptimismgoerli__Meta_;
  local1337_Asset: local1337_Asset;
  local1337_AssetBalance: local1337_AssetBalance;
  local1337_AssetBalance_filter: local1337_AssetBalance_filter;
  local1337_Asset_filter: local1337_Asset_filter;
  local1337_BigDecimal: Scalars["local1337_BigDecimal"];
  local1337_BlockChangedFilter: local1337_BlockChangedFilter;
  local1337_Block_height: local1337_Block_height;
  local1337_Bytes: Scalars["local1337_Bytes"];
  local1337_DestinationTransfer: local1337_DestinationTransfer;
  local1337_DestinationTransfer_filter: local1337_DestinationTransfer_filter;
  local1337_OriginTransfer: local1337_OriginTransfer;
  local1337_OriginTransfer_filter: local1337_OriginTransfer_filter;
  local1337_Relayer: local1337_Relayer;
  local1337_Relayer_filter: local1337_Relayer_filter;
  local1337_Router: local1337_Router;
  local1337_Router_filter: local1337_Router_filter;
  local1337_Setting: local1337_Setting;
  local1337_Setting_filter: local1337_Setting_filter;
  local1337_SponsorVault: local1337_SponsorVault;
  local1337_SponsorVault_filter: local1337_SponsorVault_filter;
  local1337_StableSwap: local1337_StableSwap;
  local1337_StableSwap_filter: local1337_StableSwap_filter;
  local1337__Block_: local1337__Block_;
  local1337__Meta_: local1337__Meta_;
  testgoerli_Asset: testgoerli_Asset;
  testgoerli_AssetBalance: testgoerli_AssetBalance;
  testgoerli_AssetBalance_filter: testgoerli_AssetBalance_filter;
  testgoerli_Asset_filter: testgoerli_Asset_filter;
  testgoerli_BigDecimal: Scalars["testgoerli_BigDecimal"];
  testgoerli_BlockChangedFilter: testgoerli_BlockChangedFilter;
  testgoerli_Block_height: testgoerli_Block_height;
  testgoerli_Bytes: Scalars["testgoerli_Bytes"];
  testgoerli_DestinationTransfer: testgoerli_DestinationTransfer;
  testgoerli_DestinationTransfer_filter: testgoerli_DestinationTransfer_filter;
  testgoerli_OriginTransfer: testgoerli_OriginTransfer;
  testgoerli_OriginTransfer_filter: testgoerli_OriginTransfer_filter;
  testgoerli_Relayer: testgoerli_Relayer;
  testgoerli_Relayer_filter: testgoerli_Relayer_filter;
  testgoerli_Router: testgoerli_Router;
  testgoerli_Router_filter: testgoerli_Router_filter;
  testgoerli_Setting: testgoerli_Setting;
  testgoerli_Setting_filter: testgoerli_Setting_filter;
  testgoerli_SponsorVault: testgoerli_SponsorVault;
  testgoerli_SponsorVault_filter: testgoerli_SponsorVault_filter;
  testgoerli_StableSwap: testgoerli_StableSwap;
  testgoerli_StableSwap_filter: testgoerli_StableSwap_filter;
  testgoerli__Block_: testgoerli__Block_;
  testgoerli__Meta_: testgoerli__Meta_;
  staginggoerli_AggregateRoot: staginggoerli_AggregateRoot;
  staginggoerli_AggregateRoot_filter: staginggoerli_AggregateRoot_filter;
  staginggoerli_Asset: staginggoerli_Asset;
  staginggoerli_AssetBalance: staginggoerli_AssetBalance;
  staginggoerli_AssetBalance_filter: staginggoerli_AssetBalance_filter;
  staginggoerli_Asset_filter: staginggoerli_Asset_filter;
  staginggoerli_BigDecimal: Scalars["staginggoerli_BigDecimal"];
  staginggoerli_BlockChangedFilter: staginggoerli_BlockChangedFilter;
  staginggoerli_Block_height: staginggoerli_Block_height;
  staginggoerli_Bytes: Scalars["staginggoerli_Bytes"];
  staginggoerli_DestinationMessage: staginggoerli_DestinationMessage;
  staginggoerli_DestinationMessage_filter: staginggoerli_DestinationMessage_filter;
  staginggoerli_DestinationTransfer: staginggoerli_DestinationTransfer;
  staginggoerli_DestinationTransfer_filter: staginggoerli_DestinationTransfer_filter;
  staginggoerli_OriginMessage: staginggoerli_OriginMessage;
  staginggoerli_OriginMessage_filter: staginggoerli_OriginMessage_filter;
  staginggoerli_OriginTransfer: staginggoerli_OriginTransfer;
  staginggoerli_OriginTransfer_filter: staginggoerli_OriginTransfer_filter;
  staginggoerli_Relayer: staginggoerli_Relayer;
  staginggoerli_Relayer_filter: staginggoerli_Relayer_filter;
  staginggoerli_Router: staginggoerli_Router;
  staginggoerli_Router_filter: staginggoerli_Router_filter;
  staginggoerli_Setting: staginggoerli_Setting;
  staginggoerli_Setting_filter: staginggoerli_Setting_filter;
  staginggoerli_SponsorVault: staginggoerli_SponsorVault;
  staginggoerli_SponsorVault_filter: staginggoerli_SponsorVault_filter;
  staginggoerli_StableSwap: staginggoerli_StableSwap;
  staginggoerli_StableSwap_filter: staginggoerli_StableSwap_filter;
  staginggoerli__Block_: staginggoerli__Block_;
  staginggoerli__Meta_: staginggoerli__Meta_;
}>;

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  rinkeby_asset?: Resolver<
    Maybe<ResolversTypes["rinkeby_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_assetArgs, "id" | "subgraphError">
  >;
  rinkeby_assets?: Resolver<
    Array<ResolversTypes["rinkeby_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_assetBalance?: Resolver<
    Maybe<ResolversTypes["rinkeby_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_assetBalanceArgs, "id" | "subgraphError">
  >;
  rinkeby_assetBalances?: Resolver<
    Array<ResolversTypes["rinkeby_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_router?: Resolver<
    Maybe<ResolversTypes["rinkeby_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_routerArgs, "id" | "subgraphError">
  >;
  rinkeby_routers?: Resolver<
    Array<ResolversTypes["rinkeby_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_routersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_setting?: Resolver<
    Maybe<ResolversTypes["rinkeby_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_settingArgs, "id" | "subgraphError">
  >;
  rinkeby_settings?: Resolver<
    Array<ResolversTypes["rinkeby_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_relayer?: Resolver<
    Maybe<ResolversTypes["rinkeby_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_relayerArgs, "id" | "subgraphError">
  >;
  rinkeby_relayers?: Resolver<
    Array<ResolversTypes["rinkeby_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_stableSwap?: Resolver<
    Maybe<ResolversTypes["rinkeby_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_stableSwapArgs, "id" | "subgraphError">
  >;
  rinkeby_stableSwaps?: Resolver<
    Array<ResolversTypes["rinkeby_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_sponsorVault?: Resolver<
    Maybe<ResolversTypes["rinkeby_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_sponsorVaultArgs, "id" | "subgraphError">
  >;
  rinkeby_sponsorVaults?: Resolver<
    Array<ResolversTypes["rinkeby_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_originTransfer?: Resolver<
    Maybe<ResolversTypes["rinkeby_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_originTransferArgs, "id" | "subgraphError">
  >;
  rinkeby_originTransfers?: Resolver<
    Array<ResolversTypes["rinkeby_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["rinkeby_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_destinationTransferArgs, "id" | "subgraphError">
  >;
  rinkeby_destinationTransfers?: Resolver<
    Array<ResolversTypes["rinkeby_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryrinkeby_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby__meta?: Resolver<
    Maybe<ResolversTypes["rinkeby__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Queryrinkeby__metaArgs>
  >;
  goerli_asset?: Resolver<
    Maybe<ResolversTypes["goerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_assetArgs, "id" | "subgraphError">
  >;
  goerli_assets?: Resolver<
    Array<ResolversTypes["goerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["goerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  goerli_assetBalances?: Resolver<
    Array<ResolversTypes["goerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_router?: Resolver<
    Maybe<ResolversTypes["goerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_routerArgs, "id" | "subgraphError">
  >;
  goerli_routers?: Resolver<
    Array<ResolversTypes["goerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_setting?: Resolver<
    Maybe<ResolversTypes["goerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_settingArgs, "id" | "subgraphError">
  >;
  goerli_settings?: Resolver<
    Array<ResolversTypes["goerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_relayer?: Resolver<
    Maybe<ResolversTypes["goerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_relayerArgs, "id" | "subgraphError">
  >;
  goerli_relayers?: Resolver<
    Array<ResolversTypes["goerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["goerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  goerli_stableSwaps?: Resolver<
    Array<ResolversTypes["goerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["goerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  goerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["goerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["goerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_originTransferArgs, "id" | "subgraphError">
  >;
  goerli_originTransfers?: Resolver<
    Array<ResolversTypes["goerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["goerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  goerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["goerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_originMessage?: Resolver<
    Maybe<ResolversTypes["goerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_originMessageArgs, "id" | "subgraphError">
  >;
  goerli_originMessages?: Resolver<
    Array<ResolversTypes["goerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_destinationMessage?: Resolver<
    Maybe<ResolversTypes["goerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  goerli_destinationMessages?: Resolver<
    Array<ResolversTypes["goerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_aggregateRoot?: Resolver<
    Maybe<ResolversTypes["goerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  goerli_aggregateRoots?: Resolver<
    Array<ResolversTypes["goerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querygoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli__meta?: Resolver<
    Maybe<ResolversTypes["goerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querygoerli__metaArgs>
  >;
  local1338_asset?: Resolver<
    Maybe<ResolversTypes["local1338_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_assetArgs, "id" | "subgraphError">
  >;
  local1338_assets?: Resolver<
    Array<ResolversTypes["local1338_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_assetBalance?: Resolver<
    Maybe<ResolversTypes["local1338_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_assetBalanceArgs, "id" | "subgraphError">
  >;
  local1338_assetBalances?: Resolver<
    Array<ResolversTypes["local1338_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_router?: Resolver<
    Maybe<ResolversTypes["local1338_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_routerArgs, "id" | "subgraphError">
  >;
  local1338_routers?: Resolver<
    Array<ResolversTypes["local1338_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_routersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_setting?: Resolver<
    Maybe<ResolversTypes["local1338_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_settingArgs, "id" | "subgraphError">
  >;
  local1338_settings?: Resolver<
    Array<ResolversTypes["local1338_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_relayer?: Resolver<
    Maybe<ResolversTypes["local1338_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_relayerArgs, "id" | "subgraphError">
  >;
  local1338_relayers?: Resolver<
    Array<ResolversTypes["local1338_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_stableSwap?: Resolver<
    Maybe<ResolversTypes["local1338_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_stableSwapArgs, "id" | "subgraphError">
  >;
  local1338_stableSwaps?: Resolver<
    Array<ResolversTypes["local1338_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_sponsorVault?: Resolver<
    Maybe<ResolversTypes["local1338_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_sponsorVaultArgs, "id" | "subgraphError">
  >;
  local1338_sponsorVaults?: Resolver<
    Array<ResolversTypes["local1338_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_originTransfer?: Resolver<
    Maybe<ResolversTypes["local1338_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_originTransferArgs, "id" | "subgraphError">
  >;
  local1338_originTransfers?: Resolver<
    Array<ResolversTypes["local1338_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["local1338_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_destinationTransferArgs, "id" | "subgraphError">
  >;
  local1338_destinationTransfers?: Resolver<
    Array<ResolversTypes["local1338_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1338_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338__meta?: Resolver<
    Maybe<ResolversTypes["local1338__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querylocal1338__metaArgs>
  >;
  optimismgoerli_asset?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  optimismgoerli_assets?: Resolver<
    Array<ResolversTypes["optimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  optimismgoerli_assetBalances?: Resolver<
    Array<ResolversTypes["optimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_router?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  optimismgoerli_routers?: Resolver<
    Array<ResolversTypes["optimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_setting?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  optimismgoerli_settings?: Resolver<
    Array<ResolversTypes["optimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_relayer?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  optimismgoerli_relayers?: Resolver<
    Array<ResolversTypes["optimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  optimismgoerli_stableSwaps?: Resolver<
    Array<ResolversTypes["optimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  optimismgoerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["optimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  optimismgoerli_originTransfers?: Resolver<
    Array<ResolversTypes["optimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  optimismgoerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["optimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_originMessage?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_originMessageArgs, "id" | "subgraphError">
  >;
  optimismgoerli_originMessages?: Resolver<
    Array<ResolversTypes["optimismgoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_destinationMessage?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  optimismgoerli_destinationMessages?: Resolver<
    Array<ResolversTypes["optimismgoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_aggregateRoot?: Resolver<
    Maybe<ResolversTypes["optimismgoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  optimismgoerli_aggregateRoots?: Resolver<
    Array<ResolversTypes["optimismgoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Queryoptimismgoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli__meta?: Resolver<
    Maybe<ResolversTypes["optimismgoerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Queryoptimismgoerli__metaArgs>
  >;
  stagingoptimismgoerli_asset?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_assets?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_assetBalances?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_router?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_routers?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_setting?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_settings?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_relayer?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_relayers?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_stableSwaps?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_originTransfers?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_originMessage?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_originMessageArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_originMessages?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationMessage?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationMessages?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_aggregateRoot?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_aggregateRoots?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querystagingoptimismgoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli__meta?: Resolver<
    Maybe<ResolversTypes["stagingoptimismgoerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querystagingoptimismgoerli__metaArgs>
  >;
  testoptimismgoerli_asset?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_assets?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_assetBalances?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_router?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_routers?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_setting?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_settings?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_relayer?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_relayers?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_stableSwaps?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_originTransfers?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli__meta?: Resolver<
    Maybe<ResolversTypes["testoptimismgoerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querytestoptimismgoerli__metaArgs>
  >;
  local1337_asset?: Resolver<
    Maybe<ResolversTypes["local1337_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_assetArgs, "id" | "subgraphError">
  >;
  local1337_assets?: Resolver<
    Array<ResolversTypes["local1337_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_assetBalance?: Resolver<
    Maybe<ResolversTypes["local1337_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_assetBalanceArgs, "id" | "subgraphError">
  >;
  local1337_assetBalances?: Resolver<
    Array<ResolversTypes["local1337_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_router?: Resolver<
    Maybe<ResolversTypes["local1337_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_routerArgs, "id" | "subgraphError">
  >;
  local1337_routers?: Resolver<
    Array<ResolversTypes["local1337_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_routersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_setting?: Resolver<
    Maybe<ResolversTypes["local1337_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_settingArgs, "id" | "subgraphError">
  >;
  local1337_settings?: Resolver<
    Array<ResolversTypes["local1337_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_relayer?: Resolver<
    Maybe<ResolversTypes["local1337_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_relayerArgs, "id" | "subgraphError">
  >;
  local1337_relayers?: Resolver<
    Array<ResolversTypes["local1337_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_stableSwap?: Resolver<
    Maybe<ResolversTypes["local1337_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_stableSwapArgs, "id" | "subgraphError">
  >;
  local1337_stableSwaps?: Resolver<
    Array<ResolversTypes["local1337_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_sponsorVault?: Resolver<
    Maybe<ResolversTypes["local1337_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_sponsorVaultArgs, "id" | "subgraphError">
  >;
  local1337_sponsorVaults?: Resolver<
    Array<ResolversTypes["local1337_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_originTransfer?: Resolver<
    Maybe<ResolversTypes["local1337_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_originTransferArgs, "id" | "subgraphError">
  >;
  local1337_originTransfers?: Resolver<
    Array<ResolversTypes["local1337_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["local1337_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_destinationTransferArgs, "id" | "subgraphError">
  >;
  local1337_destinationTransfers?: Resolver<
    Array<ResolversTypes["local1337_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querylocal1337_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337__meta?: Resolver<
    Maybe<ResolversTypes["local1337__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querylocal1337__metaArgs>
  >;
  testgoerli_asset?: Resolver<
    Maybe<ResolversTypes["testgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_assetArgs, "id" | "subgraphError">
  >;
  testgoerli_assets?: Resolver<
    Array<ResolversTypes["testgoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["testgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  testgoerli_assetBalances?: Resolver<
    Array<ResolversTypes["testgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_router?: Resolver<
    Maybe<ResolversTypes["testgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_routerArgs, "id" | "subgraphError">
  >;
  testgoerli_routers?: Resolver<
    Array<ResolversTypes["testgoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_setting?: Resolver<
    Maybe<ResolversTypes["testgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_settingArgs, "id" | "subgraphError">
  >;
  testgoerli_settings?: Resolver<
    Array<ResolversTypes["testgoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_relayer?: Resolver<
    Maybe<ResolversTypes["testgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_relayerArgs, "id" | "subgraphError">
  >;
  testgoerli_relayers?: Resolver<
    Array<ResolversTypes["testgoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["testgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  testgoerli_stableSwaps?: Resolver<
    Array<ResolversTypes["testgoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["testgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  testgoerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["testgoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["testgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  testgoerli_originTransfers?: Resolver<
    Array<ResolversTypes["testgoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["testgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  testgoerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["testgoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querytestgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli__meta?: Resolver<
    Maybe<ResolversTypes["testgoerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querytestgoerli__metaArgs>
  >;
  staginggoerli_asset?: Resolver<
    Maybe<ResolversTypes["staginggoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_assetArgs, "id" | "subgraphError">
  >;
  staginggoerli_assets?: Resolver<
    Array<ResolversTypes["staginggoerli_Asset"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_assetBalance?: Resolver<
    Maybe<ResolversTypes["staginggoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  staginggoerli_assetBalances?: Resolver<
    Array<ResolversTypes["staginggoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_router?: Resolver<
    Maybe<ResolversTypes["staginggoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_routerArgs, "id" | "subgraphError">
  >;
  staginggoerli_routers?: Resolver<
    Array<ResolversTypes["staginggoerli_Router"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_setting?: Resolver<
    Maybe<ResolversTypes["staginggoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_settingArgs, "id" | "subgraphError">
  >;
  staginggoerli_settings?: Resolver<
    Array<ResolversTypes["staginggoerli_Setting"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_relayer?: Resolver<
    Maybe<ResolversTypes["staginggoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_relayerArgs, "id" | "subgraphError">
  >;
  staginggoerli_relayers?: Resolver<
    Array<ResolversTypes["staginggoerli_Relayer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_stableSwap?: Resolver<
    Maybe<ResolversTypes["staginggoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  staginggoerli_stableSwaps?: Resolver<
    Array<ResolversTypes["staginggoerli_StableSwap"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_sponsorVault?: Resolver<
    Maybe<ResolversTypes["staginggoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  staginggoerli_sponsorVaults?: Resolver<
    Array<ResolversTypes["staginggoerli_SponsorVault"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_originTransfer?: Resolver<
    Maybe<ResolversTypes["staginggoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_originTransferArgs, "id" | "subgraphError">
  >;
  staginggoerli_originTransfers?: Resolver<
    Array<ResolversTypes["staginggoerli_OriginTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_destinationTransfer?: Resolver<
    Maybe<ResolversTypes["staginggoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  staginggoerli_destinationTransfers?: Resolver<
    Array<ResolversTypes["staginggoerli_DestinationTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_originMessage?: Resolver<
    Maybe<ResolversTypes["staginggoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_originMessageArgs, "id" | "subgraphError">
  >;
  staginggoerli_originMessages?: Resolver<
    Array<ResolversTypes["staginggoerli_OriginMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_destinationMessage?: Resolver<
    Maybe<ResolversTypes["staginggoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  staginggoerli_destinationMessages?: Resolver<
    Array<ResolversTypes["staginggoerli_DestinationMessage"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_aggregateRoot?: Resolver<
    Maybe<ResolversTypes["staginggoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  staginggoerli_aggregateRoots?: Resolver<
    Array<ResolversTypes["staginggoerli_AggregateRoot"]>,
    ParentType,
    ContextType,
    RequireFields<Querystaginggoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli__meta?: Resolver<
    Maybe<ResolversTypes["staginggoerli__Meta_"]>,
    ParentType,
    ContextType,
    Partial<Querystaginggoerli__metaArgs>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"],
> = ResolversObject<{
  rinkeby_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_Asset"]>,
    "rinkeby_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_assetArgs, "id" | "subgraphError">
  >;
  rinkeby_assets?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_Asset"]>,
    "rinkeby_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_AssetBalance"]>,
    "rinkeby_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_assetBalanceArgs, "id" | "subgraphError">
  >;
  rinkeby_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_AssetBalance"]>,
    "rinkeby_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_router?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_Router"]>,
    "rinkeby_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_routerArgs, "id" | "subgraphError">
  >;
  rinkeby_routers?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_Router"]>,
    "rinkeby_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_routersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_Setting"]>,
    "rinkeby_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_settingArgs, "id" | "subgraphError">
  >;
  rinkeby_settings?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_Setting"]>,
    "rinkeby_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_Relayer"]>,
    "rinkeby_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_relayerArgs, "id" | "subgraphError">
  >;
  rinkeby_relayers?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_Relayer"]>,
    "rinkeby_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_StableSwap"]>,
    "rinkeby_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_stableSwapArgs, "id" | "subgraphError">
  >;
  rinkeby_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_StableSwap"]>,
    "rinkeby_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_SponsorVault"]>,
    "rinkeby_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_sponsorVaultArgs, "id" | "subgraphError">
  >;
  rinkeby_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_SponsorVault"]>,
    "rinkeby_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_OriginTransfer"]>,
    "rinkeby_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_originTransferArgs, "id" | "subgraphError">
  >;
  rinkeby_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_OriginTransfer"]>,
    "rinkeby_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby_DestinationTransfer"]>,
    "rinkeby_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_destinationTransferArgs, "id" | "subgraphError">
  >;
  rinkeby_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["rinkeby_DestinationTransfer"]>,
    "rinkeby_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionrinkeby_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  rinkeby__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["rinkeby__Meta_"]>,
    "rinkeby__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionrinkeby__metaArgs>
  >;
  goerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_Asset"]>,
    "goerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_assetArgs, "id" | "subgraphError">
  >;
  goerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["goerli_Asset"]>,
    "goerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_AssetBalance"]>,
    "goerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  goerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["goerli_AssetBalance"]>,
    "goerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_Router"]>,
    "goerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_routerArgs, "id" | "subgraphError">
  >;
  goerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["goerli_Router"]>,
    "goerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_Setting"]>,
    "goerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_settingArgs, "id" | "subgraphError">
  >;
  goerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["goerli_Setting"]>,
    "goerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_Relayer"]>,
    "goerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_relayerArgs, "id" | "subgraphError">
  >;
  goerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["goerli_Relayer"]>,
    "goerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_StableSwap"]>,
    "goerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  goerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["goerli_StableSwap"]>,
    "goerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_SponsorVault"]>,
    "goerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  goerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["goerli_SponsorVault"]>,
    "goerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_OriginTransfer"]>,
    "goerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_originTransferArgs, "id" | "subgraphError">
  >;
  goerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["goerli_OriginTransfer"]>,
    "goerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_DestinationTransfer"]>,
    "goerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  goerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["goerli_DestinationTransfer"]>,
    "goerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_originMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_OriginMessage"]>,
    "goerli_originMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_originMessageArgs, "id" | "subgraphError">
  >;
  goerli_originMessages?: SubscriptionResolver<
    Array<ResolversTypes["goerli_OriginMessage"]>,
    "goerli_originMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_destinationMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_DestinationMessage"]>,
    "goerli_destinationMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  goerli_destinationMessages?: SubscriptionResolver<
    Array<ResolversTypes["goerli_DestinationMessage"]>,
    "goerli_destinationMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  goerli_aggregateRoot?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli_AggregateRoot"]>,
    "goerli_aggregateRoot",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  goerli_aggregateRoots?: SubscriptionResolver<
    Array<ResolversTypes["goerli_AggregateRoot"]>,
    "goerli_aggregateRoots",
    ParentType,
    ContextType,
    RequireFields<Subscriptiongoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  goerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["goerli__Meta_"]>,
    "goerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptiongoerli__metaArgs>
  >;
  local1338_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_Asset"]>,
    "local1338_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_assetArgs, "id" | "subgraphError">
  >;
  local1338_assets?: SubscriptionResolver<
    Array<ResolversTypes["local1338_Asset"]>,
    "local1338_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_AssetBalance"]>,
    "local1338_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_assetBalanceArgs, "id" | "subgraphError">
  >;
  local1338_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["local1338_AssetBalance"]>,
    "local1338_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_router?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_Router"]>,
    "local1338_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_routerArgs, "id" | "subgraphError">
  >;
  local1338_routers?: SubscriptionResolver<
    Array<ResolversTypes["local1338_Router"]>,
    "local1338_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_routersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_Setting"]>,
    "local1338_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_settingArgs, "id" | "subgraphError">
  >;
  local1338_settings?: SubscriptionResolver<
    Array<ResolversTypes["local1338_Setting"]>,
    "local1338_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_Relayer"]>,
    "local1338_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_relayerArgs, "id" | "subgraphError">
  >;
  local1338_relayers?: SubscriptionResolver<
    Array<ResolversTypes["local1338_Relayer"]>,
    "local1338_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_StableSwap"]>,
    "local1338_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_stableSwapArgs, "id" | "subgraphError">
  >;
  local1338_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["local1338_StableSwap"]>,
    "local1338_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_SponsorVault"]>,
    "local1338_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_sponsorVaultArgs, "id" | "subgraphError">
  >;
  local1338_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["local1338_SponsorVault"]>,
    "local1338_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_OriginTransfer"]>,
    "local1338_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_originTransferArgs, "id" | "subgraphError">
  >;
  local1338_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["local1338_OriginTransfer"]>,
    "local1338_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338_DestinationTransfer"]>,
    "local1338_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_destinationTransferArgs, "id" | "subgraphError">
  >;
  local1338_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["local1338_DestinationTransfer"]>,
    "local1338_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1338_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1338__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["local1338__Meta_"]>,
    "local1338__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionlocal1338__metaArgs>
  >;
  optimismgoerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_Asset"]>,
    "optimismgoerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  optimismgoerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_Asset"]>,
    "optimismgoerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_AssetBalance"]>,
    "optimismgoerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  optimismgoerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_AssetBalance"]>,
    "optimismgoerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_Router"]>,
    "optimismgoerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  optimismgoerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_Router"]>,
    "optimismgoerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_Setting"]>,
    "optimismgoerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  optimismgoerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_Setting"]>,
    "optimismgoerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_Relayer"]>,
    "optimismgoerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  optimismgoerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_Relayer"]>,
    "optimismgoerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_StableSwap"]>,
    "optimismgoerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  optimismgoerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_StableSwap"]>,
    "optimismgoerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_SponsorVault"]>,
    "optimismgoerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  optimismgoerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_SponsorVault"]>,
    "optimismgoerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_OriginTransfer"]>,
    "optimismgoerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  optimismgoerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_OriginTransfer"]>,
    "optimismgoerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_DestinationTransfer"]>,
    "optimismgoerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  optimismgoerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_DestinationTransfer"]>,
    "optimismgoerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_originMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_OriginMessage"]>,
    "optimismgoerli_originMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_originMessageArgs, "id" | "subgraphError">
  >;
  optimismgoerli_originMessages?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_OriginMessage"]>,
    "optimismgoerli_originMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_destinationMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_DestinationMessage"]>,
    "optimismgoerli_destinationMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  optimismgoerli_destinationMessages?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_DestinationMessage"]>,
    "optimismgoerli_destinationMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli_aggregateRoot?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli_AggregateRoot"]>,
    "optimismgoerli_aggregateRoot",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  optimismgoerli_aggregateRoots?: SubscriptionResolver<
    Array<ResolversTypes["optimismgoerli_AggregateRoot"]>,
    "optimismgoerli_aggregateRoots",
    ParentType,
    ContextType,
    RequireFields<Subscriptionoptimismgoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  optimismgoerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["optimismgoerli__Meta_"]>,
    "optimismgoerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionoptimismgoerli__metaArgs>
  >;
  stagingoptimismgoerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Asset"]>,
    "stagingoptimismgoerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_Asset"]>,
    "stagingoptimismgoerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_AssetBalance"]>,
    "stagingoptimismgoerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_AssetBalance"]>,
    "stagingoptimismgoerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Router"]>,
    "stagingoptimismgoerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_Router"]>,
    "stagingoptimismgoerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Setting"]>,
    "stagingoptimismgoerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_Setting"]>,
    "stagingoptimismgoerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_Relayer"]>,
    "stagingoptimismgoerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_Relayer"]>,
    "stagingoptimismgoerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_StableSwap"]>,
    "stagingoptimismgoerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_StableSwap"]>,
    "stagingoptimismgoerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_SponsorVault"]>,
    "stagingoptimismgoerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_SponsorVault"]>,
    "stagingoptimismgoerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_OriginTransfer"]>,
    "stagingoptimismgoerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_OriginTransfer"]>,
    "stagingoptimismgoerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_DestinationTransfer"]>,
    "stagingoptimismgoerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_DestinationTransfer"]>,
    "stagingoptimismgoerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_originMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_OriginMessage"]>,
    "stagingoptimismgoerli_originMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_originMessageArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_originMessages?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_OriginMessage"]>,
    "stagingoptimismgoerli_originMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_DestinationMessage"]>,
    "stagingoptimismgoerli_destinationMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_destinationMessages?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_DestinationMessage"]>,
    "stagingoptimismgoerli_destinationMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli_aggregateRoot?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli_AggregateRoot"]>,
    "stagingoptimismgoerli_aggregateRoot",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  stagingoptimismgoerli_aggregateRoots?: SubscriptionResolver<
    Array<ResolversTypes["stagingoptimismgoerli_AggregateRoot"]>,
    "stagingoptimismgoerli_aggregateRoots",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstagingoptimismgoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  stagingoptimismgoerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["stagingoptimismgoerli__Meta_"]>,
    "stagingoptimismgoerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionstagingoptimismgoerli__metaArgs>
  >;
  testoptimismgoerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_Asset"]>,
    "testoptimismgoerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_assetArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_Asset"]>,
    "testoptimismgoerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_AssetBalance"]>,
    "testoptimismgoerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_AssetBalance"]>,
    "testoptimismgoerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_Router"]>,
    "testoptimismgoerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_routerArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_Router"]>,
    "testoptimismgoerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_Setting"]>,
    "testoptimismgoerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_settingArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_Setting"]>,
    "testoptimismgoerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_Relayer"]>,
    "testoptimismgoerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_relayerArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_Relayer"]>,
    "testoptimismgoerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_StableSwap"]>,
    "testoptimismgoerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_StableSwap"]>,
    "testoptimismgoerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_SponsorVault"]>,
    "testoptimismgoerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_SponsorVault"]>,
    "testoptimismgoerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_OriginTransfer"]>,
    "testoptimismgoerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_OriginTransfer"]>,
    "testoptimismgoerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli_DestinationTransfer"]>,
    "testoptimismgoerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  testoptimismgoerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["testoptimismgoerli_DestinationTransfer"]>,
    "testoptimismgoerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestoptimismgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testoptimismgoerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["testoptimismgoerli__Meta_"]>,
    "testoptimismgoerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptiontestoptimismgoerli__metaArgs>
  >;
  local1337_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_Asset"]>,
    "local1337_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_assetArgs, "id" | "subgraphError">
  >;
  local1337_assets?: SubscriptionResolver<
    Array<ResolversTypes["local1337_Asset"]>,
    "local1337_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_AssetBalance"]>,
    "local1337_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_assetBalanceArgs, "id" | "subgraphError">
  >;
  local1337_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["local1337_AssetBalance"]>,
    "local1337_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_router?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_Router"]>,
    "local1337_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_routerArgs, "id" | "subgraphError">
  >;
  local1337_routers?: SubscriptionResolver<
    Array<ResolversTypes["local1337_Router"]>,
    "local1337_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_routersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_Setting"]>,
    "local1337_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_settingArgs, "id" | "subgraphError">
  >;
  local1337_settings?: SubscriptionResolver<
    Array<ResolversTypes["local1337_Setting"]>,
    "local1337_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_Relayer"]>,
    "local1337_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_relayerArgs, "id" | "subgraphError">
  >;
  local1337_relayers?: SubscriptionResolver<
    Array<ResolversTypes["local1337_Relayer"]>,
    "local1337_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_StableSwap"]>,
    "local1337_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_stableSwapArgs, "id" | "subgraphError">
  >;
  local1337_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["local1337_StableSwap"]>,
    "local1337_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_SponsorVault"]>,
    "local1337_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_sponsorVaultArgs, "id" | "subgraphError">
  >;
  local1337_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["local1337_SponsorVault"]>,
    "local1337_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_OriginTransfer"]>,
    "local1337_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_originTransferArgs, "id" | "subgraphError">
  >;
  local1337_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["local1337_OriginTransfer"]>,
    "local1337_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337_DestinationTransfer"]>,
    "local1337_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_destinationTransferArgs, "id" | "subgraphError">
  >;
  local1337_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["local1337_DestinationTransfer"]>,
    "local1337_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionlocal1337_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  local1337__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["local1337__Meta_"]>,
    "local1337__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionlocal1337__metaArgs>
  >;
  testgoerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_Asset"]>,
    "testgoerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_assetArgs, "id" | "subgraphError">
  >;
  testgoerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_Asset"]>,
    "testgoerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_AssetBalance"]>,
    "testgoerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  testgoerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_AssetBalance"]>,
    "testgoerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_Router"]>,
    "testgoerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_routerArgs, "id" | "subgraphError">
  >;
  testgoerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_Router"]>,
    "testgoerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_Setting"]>,
    "testgoerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_settingArgs, "id" | "subgraphError">
  >;
  testgoerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_Setting"]>,
    "testgoerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_Relayer"]>,
    "testgoerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_relayerArgs, "id" | "subgraphError">
  >;
  testgoerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_Relayer"]>,
    "testgoerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_StableSwap"]>,
    "testgoerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  testgoerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_StableSwap"]>,
    "testgoerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_SponsorVault"]>,
    "testgoerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  testgoerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_SponsorVault"]>,
    "testgoerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_OriginTransfer"]>,
    "testgoerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_originTransferArgs, "id" | "subgraphError">
  >;
  testgoerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_OriginTransfer"]>,
    "testgoerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli_DestinationTransfer"]>,
    "testgoerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  testgoerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["testgoerli_DestinationTransfer"]>,
    "testgoerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptiontestgoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  testgoerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["testgoerli__Meta_"]>,
    "testgoerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptiontestgoerli__metaArgs>
  >;
  staginggoerli_asset?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_Asset"]>,
    "staginggoerli_asset",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_assetArgs, "id" | "subgraphError">
  >;
  staginggoerli_assets?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_Asset"]>,
    "staginggoerli_assets",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_assetsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_assetBalance?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_AssetBalance"]>,
    "staginggoerli_assetBalance",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_assetBalanceArgs, "id" | "subgraphError">
  >;
  staginggoerli_assetBalances?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_AssetBalance"]>,
    "staginggoerli_assetBalances",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_assetBalancesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_router?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_Router"]>,
    "staginggoerli_router",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_routerArgs, "id" | "subgraphError">
  >;
  staginggoerli_routers?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_Router"]>,
    "staginggoerli_routers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_routersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_setting?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_Setting"]>,
    "staginggoerli_setting",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_settingArgs, "id" | "subgraphError">
  >;
  staginggoerli_settings?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_Setting"]>,
    "staginggoerli_settings",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_settingsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_relayer?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_Relayer"]>,
    "staginggoerli_relayer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_relayerArgs, "id" | "subgraphError">
  >;
  staginggoerli_relayers?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_Relayer"]>,
    "staginggoerli_relayers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_relayersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_stableSwap?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_StableSwap"]>,
    "staginggoerli_stableSwap",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_stableSwapArgs, "id" | "subgraphError">
  >;
  staginggoerli_stableSwaps?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_StableSwap"]>,
    "staginggoerli_stableSwaps",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_stableSwapsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_sponsorVault?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_SponsorVault"]>,
    "staginggoerli_sponsorVault",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_sponsorVaultArgs, "id" | "subgraphError">
  >;
  staginggoerli_sponsorVaults?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_SponsorVault"]>,
    "staginggoerli_sponsorVaults",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_sponsorVaultsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_originTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_OriginTransfer"]>,
    "staginggoerli_originTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_originTransferArgs, "id" | "subgraphError">
  >;
  staginggoerli_originTransfers?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_OriginTransfer"]>,
    "staginggoerli_originTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_originTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_destinationTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_DestinationTransfer"]>,
    "staginggoerli_destinationTransfer",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_destinationTransferArgs, "id" | "subgraphError">
  >;
  staginggoerli_destinationTransfers?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_DestinationTransfer"]>,
    "staginggoerli_destinationTransfers",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_destinationTransfersArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_originMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_OriginMessage"]>,
    "staginggoerli_originMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_originMessageArgs, "id" | "subgraphError">
  >;
  staginggoerli_originMessages?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_OriginMessage"]>,
    "staginggoerli_originMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_originMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_destinationMessage?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_DestinationMessage"]>,
    "staginggoerli_destinationMessage",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_destinationMessageArgs, "id" | "subgraphError">
  >;
  staginggoerli_destinationMessages?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_DestinationMessage"]>,
    "staginggoerli_destinationMessages",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_destinationMessagesArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli_aggregateRoot?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli_AggregateRoot"]>,
    "staginggoerli_aggregateRoot",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_aggregateRootArgs, "id" | "subgraphError">
  >;
  staginggoerli_aggregateRoots?: SubscriptionResolver<
    Array<ResolversTypes["staginggoerli_AggregateRoot"]>,
    "staginggoerli_aggregateRoots",
    ParentType,
    ContextType,
    RequireFields<Subscriptionstaginggoerli_aggregateRootsArgs, "skip" | "first" | "subgraphError">
  >;
  staginggoerli__meta?: SubscriptionResolver<
    Maybe<ResolversTypes["staginggoerli__Meta_"]>,
    "staginggoerli__meta",
    ParentType,
    ContextType,
    Partial<Subscriptionstaginggoerli__metaArgs>
  >;
}>;

export type rinkeby_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_Asset"] = ResolversParentTypes["rinkeby_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  local?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_AssetBalance"] = ResolversParentTypes["rinkeby_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["rinkeby_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["rinkeby_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface rinkeby_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["rinkeby_BigDecimal"], any> {
  name: "rinkeby_BigDecimal";
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export interface rinkeby_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["rinkeby_Bytes"], any> {
  name: "rinkeby_Bytes";
}

export type rinkeby_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_DestinationTransfer"] = ResolversParentTypes["rinkeby_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["rinkeby_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["rinkeby_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<rinkeby_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_OriginTransfer"] = ResolversParentTypes["rinkeby_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["rinkeby_TransferStatus"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_Relayer"] = ResolversParentTypes["rinkeby_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_Router"] = ResolversParentTypes["rinkeby_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["rinkeby_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<rinkeby_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_Setting"] = ResolversParentTypes["rinkeby_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_SponsorVault"] = ResolversParentTypes["rinkeby_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby_StableSwap"] = ResolversParentTypes["rinkeby_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["rinkeby_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby__Block_"] = ResolversParentTypes["rinkeby__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["rinkeby_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["rinkeby__Meta_"] = ResolversParentTypes["rinkeby__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["rinkeby__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_AggregateRootResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_AggregateRoot"] = ResolversParentTypes["goerli_AggregateRoot"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  root?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_Asset"] = ResolversParentTypes["goerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_AssetBalance"] = ResolversParentTypes["goerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["goerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["goerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface goerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["goerli_BigDecimal"], any> {
  name: "goerli_BigDecimal";
}

export interface goerli_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["goerli_Bytes"], any> {
  name: "goerli_Bytes";
}

export type goerli_DestinationMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_DestinationMessage"] = ResolversParentTypes["goerli_DestinationMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  returnData?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_DestinationTransfer"] = ResolversParentTypes["goerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["goerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["goerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<goerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_OriginMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_OriginMessage"] = ResolversParentTypes["goerli_OriginMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_OriginTransfer"] = ResolversParentTypes["goerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["goerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["goerli_OriginMessage"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_Relayer"] = ResolversParentTypes["goerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_Router"] = ResolversParentTypes["goerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["goerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<goerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_Setting"] = ResolversParentTypes["goerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_SponsorVault"] = ResolversParentTypes["goerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli_StableSwap"] = ResolversParentTypes["goerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["goerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli__Block_"] = ResolversParentTypes["goerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["goerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["goerli__Meta_"] = ResolversParentTypes["goerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["goerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_Asset"] = ResolversParentTypes["local1338_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_AssetBalance"] = ResolversParentTypes["local1338_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["local1338_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["local1338_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface local1338_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["local1338_BigDecimal"], any> {
  name: "local1338_BigDecimal";
}

export interface local1338_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["local1338_Bytes"], any> {
  name: "local1338_Bytes";
}

export type local1338_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_DestinationTransfer"] = ResolversParentTypes["local1338_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["local1338_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["local1338_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<local1338_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_OriginTransfer"] = ResolversParentTypes["local1338_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["local1338_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_Relayer"] = ResolversParentTypes["local1338_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_Router"] = ResolversParentTypes["local1338_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["local1338_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<local1338_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_Setting"] = ResolversParentTypes["local1338_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_SponsorVault"] = ResolversParentTypes["local1338_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338_StableSwap"] = ResolversParentTypes["local1338_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["local1338_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338__Block_"] = ResolversParentTypes["local1338__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["local1338_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1338__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1338__Meta_"] = ResolversParentTypes["local1338__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["local1338__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_AggregateRootResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_AggregateRoot"] = ResolversParentTypes["optimismgoerli_AggregateRoot"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  root?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_Asset"] = ResolversParentTypes["optimismgoerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_AssetBalance"] = ResolversParentTypes["optimismgoerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["optimismgoerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["optimismgoerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface optimismgoerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["optimismgoerli_BigDecimal"], any> {
  name: "optimismgoerli_BigDecimal";
}

export interface optimismgoerli_BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["optimismgoerli_Bytes"], any> {
  name: "optimismgoerli_Bytes";
}

export type optimismgoerli_DestinationMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_DestinationMessage"] = ResolversParentTypes["optimismgoerli_DestinationMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  returnData?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_DestinationTransfer"] = ResolversParentTypes["optimismgoerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["optimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["optimismgoerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<optimismgoerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_OriginMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_OriginMessage"] = ResolversParentTypes["optimismgoerli_OriginMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_OriginTransfer"] = ResolversParentTypes["optimismgoerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["optimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["optimismgoerli_OriginMessage"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_Relayer"] = ResolversParentTypes["optimismgoerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_Router"] = ResolversParentTypes["optimismgoerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["optimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<optimismgoerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_Setting"] = ResolversParentTypes["optimismgoerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_SponsorVault"] = ResolversParentTypes["optimismgoerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli_StableSwap"] = ResolversParentTypes["optimismgoerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["optimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli__Block_"] = ResolversParentTypes["optimismgoerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["optimismgoerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type optimismgoerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["optimismgoerli__Meta_"] = ResolversParentTypes["optimismgoerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["optimismgoerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_AggregateRootResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_AggregateRoot"] = ResolversParentTypes["stagingoptimismgoerli_AggregateRoot"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  root?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_Asset"] = ResolversParentTypes["stagingoptimismgoerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_AssetBalance"] = ResolversParentTypes["stagingoptimismgoerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["stagingoptimismgoerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["stagingoptimismgoerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface stagingoptimismgoerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["stagingoptimismgoerli_BigDecimal"], any> {
  name: "stagingoptimismgoerli_BigDecimal";
}

export interface stagingoptimismgoerli_BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["stagingoptimismgoerli_Bytes"], any> {
  name: "stagingoptimismgoerli_Bytes";
}

export type stagingoptimismgoerli_DestinationMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_DestinationMessage"] = ResolversParentTypes["stagingoptimismgoerli_DestinationMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  returnData?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_DestinationTransfer"] = ResolversParentTypes["stagingoptimismgoerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["stagingoptimismgoerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<stagingoptimismgoerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_OriginMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_OriginMessage"] = ResolversParentTypes["stagingoptimismgoerli_OriginMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_OriginTransfer"] = ResolversParentTypes["stagingoptimismgoerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_OriginMessage"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_Relayer"] = ResolversParentTypes["stagingoptimismgoerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_Router"] = ResolversParentTypes["stagingoptimismgoerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["stagingoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<stagingoptimismgoerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_Setting"] = ResolversParentTypes["stagingoptimismgoerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_SponsorVault"] = ResolversParentTypes["stagingoptimismgoerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli_StableSwap"] = ResolversParentTypes["stagingoptimismgoerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["stagingoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli__Block_"] = ResolversParentTypes["stagingoptimismgoerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["stagingoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingoptimismgoerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["stagingoptimismgoerli__Meta_"] = ResolversParentTypes["stagingoptimismgoerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["stagingoptimismgoerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_Asset"] = ResolversParentTypes["testoptimismgoerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_AssetBalance"] = ResolversParentTypes["testoptimismgoerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["testoptimismgoerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["testoptimismgoerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface testoptimismgoerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["testoptimismgoerli_BigDecimal"], any> {
  name: "testoptimismgoerli_BigDecimal";
}

export interface testoptimismgoerli_BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["testoptimismgoerli_Bytes"], any> {
  name: "testoptimismgoerli_Bytes";
}

export type testoptimismgoerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_DestinationTransfer"] = ResolversParentTypes["testoptimismgoerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["testoptimismgoerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<testoptimismgoerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_OriginTransfer"] = ResolversParentTypes["testoptimismgoerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_Relayer"] = ResolversParentTypes["testoptimismgoerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_Router"] = ResolversParentTypes["testoptimismgoerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["testoptimismgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<testoptimismgoerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_Setting"] = ResolversParentTypes["testoptimismgoerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_SponsorVault"] = ResolversParentTypes["testoptimismgoerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli_StableSwap"] = ResolversParentTypes["testoptimismgoerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["testoptimismgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli__Block_"] = ResolversParentTypes["testoptimismgoerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["testoptimismgoerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testoptimismgoerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testoptimismgoerli__Meta_"] = ResolversParentTypes["testoptimismgoerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["testoptimismgoerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_Asset"] = ResolversParentTypes["local1337_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_AssetBalance"] = ResolversParentTypes["local1337_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["local1337_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["local1337_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface local1337_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["local1337_BigDecimal"], any> {
  name: "local1337_BigDecimal";
}

export interface local1337_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["local1337_Bytes"], any> {
  name: "local1337_Bytes";
}

export type local1337_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_DestinationTransfer"] = ResolversParentTypes["local1337_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["local1337_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["local1337_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<local1337_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_OriginTransfer"] = ResolversParentTypes["local1337_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["local1337_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_Relayer"] = ResolversParentTypes["local1337_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_Router"] = ResolversParentTypes["local1337_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["local1337_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<local1337_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_Setting"] = ResolversParentTypes["local1337_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_SponsorVault"] = ResolversParentTypes["local1337_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337_StableSwap"] = ResolversParentTypes["local1337_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["local1337_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337__Block_"] = ResolversParentTypes["local1337__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["local1337_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type local1337__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["local1337__Meta_"] = ResolversParentTypes["local1337__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["local1337__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_Asset"] = ResolversParentTypes["testgoerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_AssetBalance"] = ResolversParentTypes["testgoerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["testgoerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["testgoerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface testgoerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["testgoerli_BigDecimal"], any> {
  name: "testgoerli_BigDecimal";
}

export interface testgoerli_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["testgoerli_Bytes"], any> {
  name: "testgoerli_Bytes";
}

export type testgoerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_DestinationTransfer"] = ResolversParentTypes["testgoerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["testgoerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["testgoerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<testgoerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_OriginTransfer"] = ResolversParentTypes["testgoerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["testgoerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_Relayer"] = ResolversParentTypes["testgoerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_Router"] = ResolversParentTypes["testgoerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["testgoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<testgoerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_Setting"] = ResolversParentTypes["testgoerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_SponsorVault"] = ResolversParentTypes["testgoerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli_StableSwap"] = ResolversParentTypes["testgoerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["testgoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli__Block_"] = ResolversParentTypes["testgoerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["testgoerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["testgoerli__Meta_"] = ResolversParentTypes["testgoerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["testgoerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_AggregateRootResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_AggregateRoot"] = ResolversParentTypes["staginggoerli_AggregateRoot"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  root?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_AssetResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_Asset"] = ResolversParentTypes["staginggoerli_Asset"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  local?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_AssetBalanceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_AssetBalance"] = ResolversParentTypes["staginggoerli_AssetBalance"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  router?: Resolver<ResolversTypes["staginggoerli_Router"], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes["staginggoerli_Asset"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface staginggoerli_BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["staginggoerli_BigDecimal"], any> {
  name: "staginggoerli_BigDecimal";
}

export interface staginggoerli_BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["staginggoerli_Bytes"], any> {
  name: "staginggoerli_Bytes";
}

export type staginggoerli_DestinationMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_DestinationMessage"] = ResolversParentTypes["staginggoerli_DestinationMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  processed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  returnData?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_DestinationTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_DestinationTransfer"] = ResolversParentTypes["staginggoerli_DestinationTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["staginggoerli_TransferStatus"]>, ParentType, ContextType>;
  routers?: Resolver<
    Maybe<Array<ResolversTypes["staginggoerli_Router"]>>,
    ParentType,
    ContextType,
    RequireFields<staginggoerli_DestinationTransferroutersArgs, "skip" | "first">
  >;
  originSender?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_OriginMessageResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_OriginMessage"] = ResolversParentTypes["staginggoerli_OriginMessage"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_OriginTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_OriginTransfer"] = ResolversParentTypes["staginggoerli_OriginTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  destinationMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["staginggoerli_TransferStatus"]>, ParentType, ContextType>;
  originMinOut?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["staginggoerli_OriginMessage"]>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_RelayerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_Relayer"] = ResolversParentTypes["staginggoerli_Relayer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_RouterResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_Router"] = ResolversParentTypes["staginggoerli_Router"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  assetBalances?: Resolver<
    Array<ResolversTypes["staginggoerli_AssetBalance"]>,
    ParentType,
    ContextType,
    RequireFields<staginggoerli_RouterassetBalancesArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_SettingResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_Setting"] = ResolversParentTypes["staginggoerli_Setting"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_SponsorVaultResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_SponsorVault"] = ResolversParentTypes["staginggoerli_SponsorVault"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_StableSwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli_StableSwap"] = ResolversParentTypes["staginggoerli_StableSwap"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes["staginggoerli_Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli__Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli__Block_"] = ResolversParentTypes["staginggoerli__Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["staginggoerli_Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli__Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["staginggoerli__Meta_"] = ResolversParentTypes["staginggoerli__Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["staginggoerli__Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  rinkeby_Asset?: rinkeby_AssetResolvers<ContextType>;
  rinkeby_AssetBalance?: rinkeby_AssetBalanceResolvers<ContextType>;
  rinkeby_BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  rinkeby_Bytes?: GraphQLScalarType;
  rinkeby_DestinationTransfer?: rinkeby_DestinationTransferResolvers<ContextType>;
  rinkeby_OriginTransfer?: rinkeby_OriginTransferResolvers<ContextType>;
  rinkeby_Relayer?: rinkeby_RelayerResolvers<ContextType>;
  rinkeby_Router?: rinkeby_RouterResolvers<ContextType>;
  rinkeby_Setting?: rinkeby_SettingResolvers<ContextType>;
  rinkeby_SponsorVault?: rinkeby_SponsorVaultResolvers<ContextType>;
  rinkeby_StableSwap?: rinkeby_StableSwapResolvers<ContextType>;
  rinkeby__Block_?: rinkeby__Block_Resolvers<ContextType>;
  rinkeby__Meta_?: rinkeby__Meta_Resolvers<ContextType>;
  goerli_AggregateRoot?: goerli_AggregateRootResolvers<ContextType>;
  goerli_Asset?: goerli_AssetResolvers<ContextType>;
  goerli_AssetBalance?: goerli_AssetBalanceResolvers<ContextType>;
  goerli_BigDecimal?: GraphQLScalarType;
  goerli_Bytes?: GraphQLScalarType;
  goerli_DestinationMessage?: goerli_DestinationMessageResolvers<ContextType>;
  goerli_DestinationTransfer?: goerli_DestinationTransferResolvers<ContextType>;
  goerli_OriginMessage?: goerli_OriginMessageResolvers<ContextType>;
  goerli_OriginTransfer?: goerli_OriginTransferResolvers<ContextType>;
  goerli_Relayer?: goerli_RelayerResolvers<ContextType>;
  goerli_Router?: goerli_RouterResolvers<ContextType>;
  goerli_Setting?: goerli_SettingResolvers<ContextType>;
  goerli_SponsorVault?: goerli_SponsorVaultResolvers<ContextType>;
  goerli_StableSwap?: goerli_StableSwapResolvers<ContextType>;
  goerli__Block_?: goerli__Block_Resolvers<ContextType>;
  goerli__Meta_?: goerli__Meta_Resolvers<ContextType>;
  local1338_Asset?: local1338_AssetResolvers<ContextType>;
  local1338_AssetBalance?: local1338_AssetBalanceResolvers<ContextType>;
  local1338_BigDecimal?: GraphQLScalarType;
  local1338_Bytes?: GraphQLScalarType;
  local1338_DestinationTransfer?: local1338_DestinationTransferResolvers<ContextType>;
  local1338_OriginTransfer?: local1338_OriginTransferResolvers<ContextType>;
  local1338_Relayer?: local1338_RelayerResolvers<ContextType>;
  local1338_Router?: local1338_RouterResolvers<ContextType>;
  local1338_Setting?: local1338_SettingResolvers<ContextType>;
  local1338_SponsorVault?: local1338_SponsorVaultResolvers<ContextType>;
  local1338_StableSwap?: local1338_StableSwapResolvers<ContextType>;
  local1338__Block_?: local1338__Block_Resolvers<ContextType>;
  local1338__Meta_?: local1338__Meta_Resolvers<ContextType>;
  optimismgoerli_AggregateRoot?: optimismgoerli_AggregateRootResolvers<ContextType>;
  optimismgoerli_Asset?: optimismgoerli_AssetResolvers<ContextType>;
  optimismgoerli_AssetBalance?: optimismgoerli_AssetBalanceResolvers<ContextType>;
  optimismgoerli_BigDecimal?: GraphQLScalarType;
  optimismgoerli_Bytes?: GraphQLScalarType;
  optimismgoerli_DestinationMessage?: optimismgoerli_DestinationMessageResolvers<ContextType>;
  optimismgoerli_DestinationTransfer?: optimismgoerli_DestinationTransferResolvers<ContextType>;
  optimismgoerli_OriginMessage?: optimismgoerli_OriginMessageResolvers<ContextType>;
  optimismgoerli_OriginTransfer?: optimismgoerli_OriginTransferResolvers<ContextType>;
  optimismgoerli_Relayer?: optimismgoerli_RelayerResolvers<ContextType>;
  optimismgoerli_Router?: optimismgoerli_RouterResolvers<ContextType>;
  optimismgoerli_Setting?: optimismgoerli_SettingResolvers<ContextType>;
  optimismgoerli_SponsorVault?: optimismgoerli_SponsorVaultResolvers<ContextType>;
  optimismgoerli_StableSwap?: optimismgoerli_StableSwapResolvers<ContextType>;
  optimismgoerli__Block_?: optimismgoerli__Block_Resolvers<ContextType>;
  optimismgoerli__Meta_?: optimismgoerli__Meta_Resolvers<ContextType>;
  stagingoptimismgoerli_AggregateRoot?: stagingoptimismgoerli_AggregateRootResolvers<ContextType>;
  stagingoptimismgoerli_Asset?: stagingoptimismgoerli_AssetResolvers<ContextType>;
  stagingoptimismgoerli_AssetBalance?: stagingoptimismgoerli_AssetBalanceResolvers<ContextType>;
  stagingoptimismgoerli_BigDecimal?: GraphQLScalarType;
  stagingoptimismgoerli_Bytes?: GraphQLScalarType;
  stagingoptimismgoerli_DestinationMessage?: stagingoptimismgoerli_DestinationMessageResolvers<ContextType>;
  stagingoptimismgoerli_DestinationTransfer?: stagingoptimismgoerli_DestinationTransferResolvers<ContextType>;
  stagingoptimismgoerli_OriginMessage?: stagingoptimismgoerli_OriginMessageResolvers<ContextType>;
  stagingoptimismgoerli_OriginTransfer?: stagingoptimismgoerli_OriginTransferResolvers<ContextType>;
  stagingoptimismgoerli_Relayer?: stagingoptimismgoerli_RelayerResolvers<ContextType>;
  stagingoptimismgoerli_Router?: stagingoptimismgoerli_RouterResolvers<ContextType>;
  stagingoptimismgoerli_Setting?: stagingoptimismgoerli_SettingResolvers<ContextType>;
  stagingoptimismgoerli_SponsorVault?: stagingoptimismgoerli_SponsorVaultResolvers<ContextType>;
  stagingoptimismgoerli_StableSwap?: stagingoptimismgoerli_StableSwapResolvers<ContextType>;
  stagingoptimismgoerli__Block_?: stagingoptimismgoerli__Block_Resolvers<ContextType>;
  stagingoptimismgoerli__Meta_?: stagingoptimismgoerli__Meta_Resolvers<ContextType>;
  testoptimismgoerli_Asset?: testoptimismgoerli_AssetResolvers<ContextType>;
  testoptimismgoerli_AssetBalance?: testoptimismgoerli_AssetBalanceResolvers<ContextType>;
  testoptimismgoerli_BigDecimal?: GraphQLScalarType;
  testoptimismgoerli_Bytes?: GraphQLScalarType;
  testoptimismgoerli_DestinationTransfer?: testoptimismgoerli_DestinationTransferResolvers<ContextType>;
  testoptimismgoerli_OriginTransfer?: testoptimismgoerli_OriginTransferResolvers<ContextType>;
  testoptimismgoerli_Relayer?: testoptimismgoerli_RelayerResolvers<ContextType>;
  testoptimismgoerli_Router?: testoptimismgoerli_RouterResolvers<ContextType>;
  testoptimismgoerli_Setting?: testoptimismgoerli_SettingResolvers<ContextType>;
  testoptimismgoerli_SponsorVault?: testoptimismgoerli_SponsorVaultResolvers<ContextType>;
  testoptimismgoerli_StableSwap?: testoptimismgoerli_StableSwapResolvers<ContextType>;
  testoptimismgoerli__Block_?: testoptimismgoerli__Block_Resolvers<ContextType>;
  testoptimismgoerli__Meta_?: testoptimismgoerli__Meta_Resolvers<ContextType>;
  local1337_Asset?: local1337_AssetResolvers<ContextType>;
  local1337_AssetBalance?: local1337_AssetBalanceResolvers<ContextType>;
  local1337_BigDecimal?: GraphQLScalarType;
  local1337_Bytes?: GraphQLScalarType;
  local1337_DestinationTransfer?: local1337_DestinationTransferResolvers<ContextType>;
  local1337_OriginTransfer?: local1337_OriginTransferResolvers<ContextType>;
  local1337_Relayer?: local1337_RelayerResolvers<ContextType>;
  local1337_Router?: local1337_RouterResolvers<ContextType>;
  local1337_Setting?: local1337_SettingResolvers<ContextType>;
  local1337_SponsorVault?: local1337_SponsorVaultResolvers<ContextType>;
  local1337_StableSwap?: local1337_StableSwapResolvers<ContextType>;
  local1337__Block_?: local1337__Block_Resolvers<ContextType>;
  local1337__Meta_?: local1337__Meta_Resolvers<ContextType>;
  testgoerli_Asset?: testgoerli_AssetResolvers<ContextType>;
  testgoerli_AssetBalance?: testgoerli_AssetBalanceResolvers<ContextType>;
  testgoerli_BigDecimal?: GraphQLScalarType;
  testgoerli_Bytes?: GraphQLScalarType;
  testgoerli_DestinationTransfer?: testgoerli_DestinationTransferResolvers<ContextType>;
  testgoerli_OriginTransfer?: testgoerli_OriginTransferResolvers<ContextType>;
  testgoerli_Relayer?: testgoerli_RelayerResolvers<ContextType>;
  testgoerli_Router?: testgoerli_RouterResolvers<ContextType>;
  testgoerli_Setting?: testgoerli_SettingResolvers<ContextType>;
  testgoerli_SponsorVault?: testgoerli_SponsorVaultResolvers<ContextType>;
  testgoerli_StableSwap?: testgoerli_StableSwapResolvers<ContextType>;
  testgoerli__Block_?: testgoerli__Block_Resolvers<ContextType>;
  testgoerli__Meta_?: testgoerli__Meta_Resolvers<ContextType>;
  staginggoerli_AggregateRoot?: staginggoerli_AggregateRootResolvers<ContextType>;
  staginggoerli_Asset?: staginggoerli_AssetResolvers<ContextType>;
  staginggoerli_AssetBalance?: staginggoerli_AssetBalanceResolvers<ContextType>;
  staginggoerli_BigDecimal?: GraphQLScalarType;
  staginggoerli_Bytes?: GraphQLScalarType;
  staginggoerli_DestinationMessage?: staginggoerli_DestinationMessageResolvers<ContextType>;
  staginggoerli_DestinationTransfer?: staginggoerli_DestinationTransferResolvers<ContextType>;
  staginggoerli_OriginMessage?: staginggoerli_OriginMessageResolvers<ContextType>;
  staginggoerli_OriginTransfer?: staginggoerli_OriginTransferResolvers<ContextType>;
  staginggoerli_Relayer?: staginggoerli_RelayerResolvers<ContextType>;
  staginggoerli_Router?: staginggoerli_RouterResolvers<ContextType>;
  staginggoerli_Setting?: staginggoerli_SettingResolvers<ContextType>;
  staginggoerli_SponsorVault?: staginggoerli_SponsorVaultResolvers<ContextType>;
  staginggoerli_StableSwap?: staginggoerli_StableSwapResolvers<ContextType>;
  staginggoerli__Block_?: staginggoerli__Block_Resolvers<ContextType>;
  staginggoerli__Meta_?: staginggoerli__Meta_Resolvers<ContextType>;
}>;

export type MeshContext = ConnextRinkebyContext &
  ConnextGoerliContext &
  ConnextLocal1338Context &
  ConnextOptimismGoerliContext &
  ConnextStagingOptimismGoerliContext &
  ConnextTestOptimismGoerliContext &
  ConnextLocal1337Context &
  ConnextTestGoerliContext &
  ConnextStagingGoerliContext &
  BaseMeshContext;

const baseDir = pathModule.join(typeof __dirname === "string" ? __dirname : "/", "..");

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId)
    .split("\\")
    .join("/")
    .replace(baseDir + "/", "");
  switch (relativeModuleId) {
    case ".graphclient/sources/Connext_Rinkeby/introspectionSchema":
      return import("./sources/Connext_Rinkeby/introspectionSchema");

    case ".graphclient/sources/Connext_Goerli/introspectionSchema":
      return import("./sources/Connext_Goerli/introspectionSchema");

    case ".graphclient/sources/Connext_Test_Goerli/introspectionSchema":
      return import("./sources/Connext_Test_Goerli/introspectionSchema");

    case ".graphclient/sources/Connext_OptimismGoerli/introspectionSchema":
      return import("./sources/Connext_OptimismGoerli/introspectionSchema");

    case ".graphclient/sources/Connext_Staging_OptimismGoerli/introspectionSchema":
      return import("./sources/Connext_Staging_OptimismGoerli/introspectionSchema");

    case ".graphclient/sources/Connext_Test_OptimismGoerli/introspectionSchema":
      return import("./sources/Connext_Test_OptimismGoerli/introspectionSchema");

    case ".graphclient/sources/Connext_Local1337/introspectionSchema":
      return import("./sources/Connext_Local1337/introspectionSchema");

    case ".graphclient/sources/Connext_Test_Goerli/introspectionSchema":
      return import("./sources/Connext_Test_Goerli/introspectionSchema");

    case ".graphclient/sources/Connext_Staging_Goerli/introspectionSchema":
      return import("./sources/Connext_Staging_Goerli/introspectionSchema");

    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore(
  ".graphclient",
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
  }),
  {
    readonly: true,
    validate: false,
  },
);

export const rawServeConfig: YamlConfig.Config["serve"] = undefined as any;
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub();
  const sourcesStore = rootStore.child("sources");
  const logger = new DefaultLogger("GraphClient");
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child("cache"),
    pubsub,
    logger,
  } as any);

  const sources = [];
  const transforms = [];
  const additionalEnvelopPlugins = [];
  const connextRinkebyTransforms = [];
  const connextGoerliTransforms = [];
  const connextStagingGoerliTransforms = [];
  const connextTestGoerliTransforms = [];
  const connextOptimismGoerliTransforms = [];
  const connextTestOptimismGoerliTransforms = [];
  const connextStagingOptimismGoerliTransforms = [];
  const connextLocal1337Transforms = [];
  const connextLocal1338Transforms = [];
  const additionalTypeDefs = [] as any[];
  const connextRinkebyHandler = new GraphqlHandler({
    name: "Connext_Rinkeby",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-v0-rinkeby",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Rinkeby"),
    logger: logger.child("Connext_Rinkeby"),
    importFn,
  });
  const connextGoerliHandler = new GraphqlHandler({
    name: "Connext_Goerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-v0-goerli",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Goerli"),
    logger: logger.child("Connext_Goerli"),
    importFn,
  });
  const connextStagingGoerliHandler = new GraphqlHandler({
    name: "Connext_Staging_Goerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-staging-goerli",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Staging_Goerli"),
    logger: logger.child("Connext_Staging_Goerli"),
    importFn,
  });
  const connextTestGoerliHandler = new GraphqlHandler({
    name: "Connext_Test_Goerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-test-goerli",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Test_Goerli"),
    logger: logger.child("Connext_Test_Goerli"),
    importFn,
  });
  const connextOptimismGoerliHandler = new GraphqlHandler({
    name: "Connext_OptimismGoerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/amarok-runtime-v0-opt-goerli",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_OptimismGoerli"),
    logger: logger.child("Connext_OptimismGoerli"),
    importFn,
  });
  const connextTestOptimismGoerliHandler = new GraphqlHandler({
    name: "Connext_Test_OptimismGoerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/runtime-v0-opt-goerli-test",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Test_OptimismGoerli"),
    logger: logger.child("Connext_Test_OptimismGoerli"),
    importFn,
  });
  const connextStagingOptimismGoerliHandler = new GraphqlHandler({
    name: "Connext_Staging_OptimismGoerli",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/connext/runtime-v0-opt-goerli-staging",
      retry: 5,
      timeout: 30000,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Staging_OptimismGoerli"),
    logger: logger.child("Connext_Staging_OptimismGoerli"),
    importFn,
  });
  const connextLocal1337Handler = new GraphqlHandler({
    name: "Connext_Local1337",
    config: { endpoint: "{env.GRAPH_1337_ENDPOINT}", retry: 5, timeout: 30000 },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Local1337"),
    logger: logger.child("Connext_Local1337"),
    importFn,
  });
  const connextLocal1338Handler = new GraphqlHandler({
    name: "Connext_Local1338",
    config: { endpoint: "{env.GRAPH_1338_ENDPOINT}", retry: 5, timeout: 30000 },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("Connext_Local1338"),
    logger: logger.child("Connext_Local1338"),
    importFn,
  });
  connextRinkebyTransforms[0] = new PrefixTransform({
    apiName: "Connext_Rinkeby",
    config: { value: "rinkeby_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_Goerli",
    config: { value: "goerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextStagingGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_Staging_Goerli",
    config: { value: "staginggoerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextTestGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_Test_Goerli",
    config: { value: "testgoerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextOptimismGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_OptimismGoerli",
    config: { value: "optimismgoerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextTestOptimismGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_Test_OptimismGoerli",
    config: { value: "testoptimismgoerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextStagingOptimismGoerliTransforms[0] = new PrefixTransform({
    apiName: "Connext_Staging_OptimismGoerli",
    config: { value: "stagingoptimismgoerli_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextLocal1337Transforms[0] = new PrefixTransform({
    apiName: "Connext_Local1337",
    config: { value: "local1337_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextLocal1338Transforms[0] = new PrefixTransform({
    apiName: "Connext_Local1338",
    config: { value: "local1338_", includeRootOperations: true, ignore: ["_SubgraphErrorPolicy_"] },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextRinkebyTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Rinkeby",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Goerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextStagingGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Staging_Goerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextTestGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Test_Goerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextOptimismGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_OptimismGoerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextTestOptimismGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Test_OptimismGoerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextStagingOptimismGoerliTransforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Staging_OptimismGoerli",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextLocal1337Transforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Local1337",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  connextLocal1338Transforms[1] = new AutoPaginationTransform({
    apiName: "Connext_Local1338",
    config: { validateSchema: true, limitOfRecords: 250 },
    baseDir,
    cache,
    pubsub,
    importFn,
  });
  sources[0] = {
    name: "Connext_Rinkeby",
    handler: connextRinkebyHandler,
    transforms: connextRinkebyTransforms,
  };
  sources[1] = {
    name: "Connext_Goerli",
    handler: connextGoerliHandler,
    transforms: connextGoerliTransforms,
  };
  sources[2] = {
    name: "Connext_Staging_Goerli",
    handler: connextStagingGoerliHandler,
    transforms: connextStagingGoerliTransforms,
  };
  sources[3] = {
    name: "Connext_Test_Goerli",
    handler: connextTestGoerliHandler,
    transforms: connextTestGoerliTransforms,
  };
  sources[4] = {
    name: "Connext_OptimismGoerli",
    handler: connextOptimismGoerliHandler,
    transforms: connextOptimismGoerliTransforms,
  };
  sources[5] = {
    name: "Connext_Test_OptimismGoerli",
    handler: connextTestOptimismGoerliHandler,
    transforms: connextTestOptimismGoerliTransforms,
  };
  sources[6] = {
    name: "Connext_Staging_OptimismGoerli",
    handler: connextStagingOptimismGoerliHandler,
    transforms: connextStagingOptimismGoerliTransforms,
  };
  sources[7] = {
    name: "Connext_Local1337",
    handler: connextLocal1337Handler,
    transforms: connextLocal1337Transforms,
  };
  sources[8] = {
    name: "Connext_Local1338",
    handler: connextLocal1338Handler,
    transforms: connextLocal1338Transforms,
  };
  const additionalResolvers = [] as any[];
  const merger = new (StitchingMerger as any)({
    cache,
    pubsub,
    logger: logger.child("stitchingMerger"),
    store: rootStore.child("stitchingMerger"),
  });

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: ExampleQueryDocument,
          get rawSDL() {
            return printWithCache(ExampleQueryDocument);
          },
          location: "ExampleQueryDocument.graphql",
        },
      ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler() {
  return createMeshHTTPHandler({
    baseDir,
    getBuiltMesh,
    rawServeConfig: undefined,
  });
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh<MeshContext>(meshOptions))
      .then((mesh) => {
        const id$ = mesh.pubsub.subscribe("destroy", () => {
          meshInstance$ = undefined;
          id$.then((id) => mesh.pubsub.unsubscribe(id)).catch((err) => console.error(err));
        });
        return mesh;
      });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then((sdkRequester) => sdkRequester(...args)));
}
export type ExampleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ExampleQueryQuery = {
  rinkeby_assets: Array<
    Pick<rinkeby_Asset, "id" | "local" | "adoptedAsset" | "canonicalId" | "canonicalDomain" | "blockNumber">
  >;
};

export const ExampleQueryDocument = gql`
  query ExampleQuery {
    rinkeby_assets(first: 1) {
      id
      local
      adoptedAsset
      canonicalId
      canonicalDomain
      blockNumber
    }
  }
` as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C,
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ExampleQuery(variables?: ExampleQueryQueryVariables, options?: C): Promise<ExampleQueryQuery> {
      return requester<ExampleQueryQuery, ExampleQueryQueryVariables>(
        ExampleQueryDocument,
        variables,
        options,
      ) as Promise<ExampleQueryQuery>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
