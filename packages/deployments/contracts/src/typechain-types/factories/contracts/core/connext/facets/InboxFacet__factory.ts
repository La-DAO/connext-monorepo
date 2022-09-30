/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  InboxFacet,
  InboxFacetInterface,
} from "../../../../../contracts/core/connext/facets/InboxFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
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
    name: "InboxFacet__handle_notTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyRemoteRouter_notRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyReplica_notReplica",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_notConnext",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113cb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e3660046110e3565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff191661046f565b8c8484610484565b5050505050505050505050565b602a54604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab91906111bf565b92915050565b63ffffffff8216600090815260146020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610724565b95945050505050565b60006101ab61020d8361076b565b62ffffff191661079d565b600081600261022f815b62ffffff198416906107fd565b5061024562ffffff1985166000602460016108d6565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b031661120d565b9050600061028386610946565b60ff16905061029b62ffffff198716602484846108d6565b9695505050505050565b60006101ab82600361095b565b600080806102c562ffffff1986166109ba565b905060006102d862ffffff1987166109dc565b905060006102f06102e984846109fe565b8484610a40565b9050600061030362ffffff198816610a4f565b90508060000361038657306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a450935060009250610466915050565b61038f82610a64565b6103f4576040516340c10f1960e01b8152306004820152602481018290526001600160a01b038316906340c10f1990604401600060405180830381600087803b1580156103db57600080fd5b505af11580156103ef573d6000803e3d6000fd5b505050505b306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4909450925050505b94509492505050565b60006101ab62ffffff19831660216020610a71565b6000848152600b602052604090205460ff16156104b457604051638f6bc06f60e01b815260040160405180910390fd5b6000848152600b60209081526040808320805460ff19166001179055600c82528083208054825181850281018501909352808352919290919083018282801561052657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610508575b505050600088815260286020908152604080832054602790925282205494955090936105559350909150611224565b8251909150811580159061056a575080600114155b156105885760405163d3bd901560e01b815260040160405180910390fd5b80156106ce57600061059a8286611252565b905060005b6105aa60018461120d565b81101561063257816000600d0160008784815181106105cb576105cb611266565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002060008282546106259190611224565b909155505060010161059f565b50600061063f838761127c565b6106499083611224565b905080600d60008761065c60018861120d565b8151811061066c5761066c611266565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002060008282546106c69190611224565b909155505050505b846001600160a01b03168663ffffffff16887f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a086883360405161071393929190611290565b60405180910390a450505050505050565b6000806107318385611224565b9050604051811115610741575060005b806000036107565762ffffff199150506101d4565b5050606092831b9190911790911b1760181b90565b600061077682610bcd565b15610793576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b60006107a882610bf0565b6107f95760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064015b60405180910390fd5b5090565b60006108098383610c2d565b6108cf57600061082861081c8560d81c90565b64ffffffffff16610c50565b915050600061083d8464ffffffffff16610c50565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b81526004016107f091906112f4565b5090919050565b6000806108ec8660781c6001600160601b031690565b6001600160601b0316905061090086610cfe565b8461090b8784611224565b6109159190611224565b11156109285762ffffff19915050610245565b6109328582611224565b905061029b8364ffffffffff168286610724565b60006101ab62ffffff19831660246001610d37565b600081600381111561096f5761096f6111e1565b60ff1661097b84610d67565b60ff161480156101d45750816003811115610998576109986111e1565b6109a184610d7b565b60038111156109b2576109b26111e1565b149392505050565b60008160016109c881610222565b5061024562ffffff19851660046020610a71565b60008160016109ea81610222565b5061024562ffffff19851660006004610d37565b60008282604051602001610a2292919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006102458484846000610d96565b60006101ab62ffffff19831660016020610d37565b60006101ab826000610dd5565b60008160ff16600003610a86575060006101d4565b610a998460181c6001600160601b031690565b6001600160601b0316610aaf60ff841685611224565b1115610b1357610afa610acb8560781c6001600160601b031690565b6001600160601b0316610ae78660181c6001600160601b031690565b6001600160601b0316858560ff16610e0b565b60405162461bcd60e51b81526004016107f091906112f4565b60208260ff161115610b8d5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e20333220627974657300000000000060648201526084016107f0565b600882026000610ba68660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000601882901c6001600160601b0316610be960416024611224565b1492915050565b6000610bfc8260d81c90565b64ffffffffff1664ffffffffff03610c1657506000919050565b6000610c2183610cfe565b60405110199392505050565b60008164ffffffffff16610c418460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff161115610ca5576000610c6f826008611349565b60ff1685901c9050610c8081610f35565b61ffff16841793508160ff16601014610c9b57601084901b93505b5060001901610c56565b50600f5b60ff8160ff161015610cf8576000610cc2826008611349565b60ff1685901c9050610cd381610f35565b61ffff16831792508160ff16600014610cee57601083901b92505b5060001901610ca9565b50915091565b6000610d138260181c6001600160601b031690565b610d268360781c6001600160601b031690565b016001600160601b03169050919050565b6000610d44826020611372565b610d4f906008611349565b60ff16610d5d858585610a71565b901c949350505050565b60006101ab62ffffff198316826001610d37565b600060d882901c60ff1660038111156101ab576101ab6111e1565b600481015460009063ffffffff90811690841603610db5575082610245565b506000848152600a820160205260409020546001600160a01b0316610245565b6001600160a01b038216600090815260088201602052604081205463ffffffff1615610e03575060006101ab565b50503b151590565b60606000610e1886610c50565b9150506000610e2686610c50565b9150506000610e3486610c50565b9150506000610e4286610c50565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b6000610f4760048360ff16901c610f67565b60ff1661ffff919091161760081b610f5e82610f67565b60ff1617919050565b600060f08083179060ff82169003610f825750603092915050565b8060ff1660f103610f965750603192915050565b8060ff1660f203610faa5750603292915050565b8060ff1660f303610fbe5750603392915050565b8060ff1660f403610fd25750603492915050565b8060ff1660f503610fe65750603592915050565b8060ff1660f603610ffa5750603692915050565b8060ff1660f70361100e5750603792915050565b8060ff1660f8036110225750603892915050565b8060ff1660f9036110365750603992915050565b8060ff1660fa0361104a5750606192915050565b8060ff1660fb0361105e5750606292915050565b8060ff1660fc036110725750606392915050565b8060ff1660fd036110865750606492915050565b8060ff1660fe0361109a5750606592915050565b8060ff1660ff036110ae5750606692915050565b50919050565b803563ffffffff811681146110c857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156110f957600080fd5b611102856110b4565b9350611110602086016110b4565b925060408501359150606085013567ffffffffffffffff8082111561113457600080fd5b818701915087601f83011261114857600080fd5b81358181111561115a5761115a6110cd565b604051601f8201601f19908116603f01168101908382118183101715611182576111826110cd565b816040528281528a602084870101111561119b57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000602082840312156111d157600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561121f5761121f6111f7565b500390565b60008219821115611237576112376111f7565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826112615761126161123c565b500490565b634e487b7160e01b600052603260045260246000fd5b60008261128b5761128b61123c565b500690565b606080825284519082018190526000906020906080840190828801845b828110156112d25781516001600160a01b0316845292840192908401906001016112ad565b50505090830194909452506001600160a01b0391909116604090910152919050565b600060208083528351808285015260005b8181101561132157858101830151858201604001528201611305565b81811115611333576000604083870101525b50601f01601f1916929092016040019392505050565b600060ff821660ff84168160ff048111821515161561136a5761136a6111f7565b029392505050565b600060ff821660ff84168082101561138c5761138c6111f7565b9003939250505056fea2646970667358221220600df21d54a189fd43a7035b55cbb813117de41d7ca2f9964a5dfe634cdc5df964736f6c634300080f0033";

type InboxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxFacet__factory extends ContractFactory {
  constructor(...args: InboxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxFacet> {
    return super.deploy(overrides || {}) as Promise<InboxFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxFacet {
    return super.attach(address) as InboxFacet;
  }
  override connect(signer: Signer): InboxFacet__factory {
    return super.connect(signer) as InboxFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxFacetInterface {
    return new utils.Interface(_abi) as InboxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxFacet {
    return new Contract(address, _abi, signerOrProvider) as InboxFacet;
  }
}
