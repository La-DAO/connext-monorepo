import { Type, Static } from "@sinclair/typebox";
import Broker from "foo-foo-mq";
import rabbit from "foo-foo-mq";
import ConfigurationOptions from "foo-foo-mq";
import { TAddress, SubgraphReaderChainConfigSchema } from "@connext/nxtp-utils";

export const TChainConfig = Type.Object({
  subgraph: SubgraphReaderChainConfigSchema, // Subgraph configuration for this chain.
  providers: Type.Array(Type.String()),
  confirmations: Type.Integer({ minimum: 1 }), // What we consider the "safe confirmations" number for this chain.
  deployments: Type.Object({
    connext: TAddress,
  }),
});

export const TMQConnectionConfig = Type.Object({
  uri: Type.Optional(Type.String()),
  name: Type.Optional(Type.String()),
  host: Type.Optional(Type.String()),
  user: Type.String(),
  pass: Type.String(),
  server: Type.Union([Type.String(), Type.Array(Type.String())]),
  port: Type.Integer({ minimum: 1, maximum: 65535 }),
  timeout: Type.Integer(),
  heartbeat: Type.Optional(Type.Integer()),
  vhost: Type.Optional(Type.String()),
  publishTimeout: Type.Integer(),
  replyTimeout: Type.Optional(Type.Integer()),
  failAfter: Type.Optional(Type.Integer()),
  retryLimit: Type.Optional(Type.Integer()),
  waitMin: Type.Optional(Type.Integer()),
  waitIncrement: Type.Optional(Type.Integer()),
  keyPath: Type.Optional(Type.String()),
  passphrase: Type.Optional(Type.String()),
  replyQueue: Type.Optional(Type.Union([Type.Boolean(), Type.String()])),
});

export const TMQExchangeConfig = Type.Object({
  name: Type.String(),
  type: Type.Union([Type.Literal("fanout"), Type.Literal("topic"), Type.Literal("direct")]),
  publishTimeout: Type.Integer(),
  persistent: Type.Boolean(),
  durable: Type.Boolean(),
});

export const TMQQueueConfig = Type.Object({
  name: Type.String(),
  prefetch: Type.Integer(),
  queueLimit: Type.Integer(),
  deadLetter: Type.Optional(Type.String()),
  subscribe: Type.Boolean(),
});

export const TMQBindingConfig = Type.Object({
  exchange: Type.String(),
  target: Type.String(),
  keys: Type.Union([Type.String(), Type.Array(Type.String())]),
});

export const TMessageQueueConfig = Type.Object({
  connection: TMQConnectionConfig,
  exchanges: Type.Array(TMQExchangeConfig),
  queues: Type.Array(TMQQueueConfig),
  bindings: Type.Array(TMQBindingConfig),
  executerTimeout: Type.Integer(),
  publisher: Type.String(),
  subscriber: Type.String(),
});

export type ChainConfig = Static<typeof TChainConfig>;
export type ExchangeType = "fanout" | "topic" | "direct";

export const TServerConfig = Type.Object({
  port: Type.Integer({ minimum: 1, maximum: 65535 }),
  host: Type.String({ format: "ipv4" }),
  adminToken: Type.String(),
});

export const TRedisConfig = Type.Object({
  port: Type.Optional(Type.Integer({ minimum: 1, maximum: 65535 })),
  host: Type.Optional(Type.String()),
});

export const TModeConfig = Type.Object({
  cleanup: Type.Boolean(),
});

export const SequencerConfigSchema = Type.Object({
  chains: Type.Record(Type.String(), TChainConfig),
  logLevel: Type.Union([
    Type.Literal("fatal"),
    Type.Literal("error"),
    Type.Literal("warn"),
    Type.Literal("info"),
    Type.Literal("debug"),
    Type.Literal("trace"),
    Type.Literal("silent"),
  ]),
  network: Type.Union([Type.Literal("testnet"), Type.Literal("mainnet"), Type.Literal("local")]),
  redis: TRedisConfig,
  server: TServerConfig,
  mode: TModeConfig,
  auctionWaitTime: Type.Number({ minimum: 1000, maximum: 500_000 }),
  supportedBidVersion: Type.Optional(Type.String()),
  relayerUrl: Type.Optional(Type.String()),
  subgraphPrefix: Type.Optional(Type.String()),
  auctionRoundDepth: Type.Number(),
  environment: Type.Union([Type.Literal("staging"), Type.Literal("production")]),
  messageQueue: TMessageQueueConfig,
});

export type SequencerConfig = Static<typeof SequencerConfigSchema>;
