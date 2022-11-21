/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondInit,
  DiamondInitInterface,
} from "../../../../../../contracts/core/connext/facets/upgrade-initializers/DiamondInit";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondInit__init_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondInit__init_domainsDontMatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptanceDelay",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610385806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639a7e155e14610030575b600080fd5b61004361003e3660046102bb565b610045565b005b60005460ff1615610069576040516318fc834360e21b815260040160405180910390fd5b6100716101ed565b60008390508463ffffffff16816001600160a01b0316638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100df919061030a565b63ffffffff161461010357604051631fdd17b360e11b815260040160405180910390fd5b6000805460ff19166001178155610118610256565b6301ffc9a760e01b6000908152600382016020526040808220805460ff199081166001908117909255636f5723a360e11b845282842080548216831790556348e2b09360e01b8452828420805482168317905563286b971b60e01b84529190922080549091168217905560069091019490945550601d839055601e8390556004805463ffffffff90961663ffffffff199096169590951790945561270b9091556005601155602780546001600160a01b039485166001600160a01b031991821617909155602180549290941691161790915550565b6101f5610256565b600401546001600160a01b031633146102545760405162461bcd60e51b815260206004820152601b60248201527f4c69624469616d6f6e643a2021636f6e7472616374206f776e65720000000000604482015260640160405180910390fd5b565b60008061028460017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c61032e565b92915050565b63ffffffff8116811461029c57600080fd5b50565b80356001600160a01b03811681146102b657600080fd5b919050565b600080600080608085870312156102d157600080fd5b84356102dc8161028a565b93506102ea6020860161029f565b9250604085013591506102ff6060860161029f565b905092959194509250565b60006020828403121561031c57600080fd5b81516103278161028a565b9392505050565b8181038181111561028457634e487b7160e01b600052601160045260246000fdfea264697066735822122029fbed958d763c70583e39ee72de9c40599889cc5a576b70122c3f35c64cdf2564736f6c63430008110033";

type DiamondInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondInit__factory extends ContractFactory {
  constructor(...args: DiamondInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondInit> {
    return super.deploy(overrides || {}) as Promise<DiamondInit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondInit {
    return super.attach(address) as DiamondInit;
  }
  override connect(signer: Signer): DiamondInit__factory {
    return super.connect(signer) as DiamondInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInitInterface {
    return new utils.Interface(_abi) as DiamondInitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondInit {
    return new Contract(address, _abi, signerOrProvider) as DiamondInit;
  }
}
