/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SwapAdminFacet,
  SwapAdminFacetInterface,
} from "../../../../../contracts/core/connext/facets/SwapAdminFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
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
    name: "SwapAdminFacet__disableSwap_alreadyDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__disableSwap_notInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_aExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_adminFeeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_decimalsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_duplicateTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_failedInitLpTokenClone",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_feeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_invalidPooledTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_tokenDecimalsExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_zeroTokenAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_notDisabledPool",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_notInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__updateLpTokenTarget_invalidNewAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminFeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LPTokenTargetUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RampAStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RampAStopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "initialA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adminFee",
            type: "uint256",
          },
          {
            internalType: "contract LPToken",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "pooledTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenPrecisionMultipliers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "balances",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "adminFees",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "removeTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SwapUtils.Swap",
        name: "swap",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "disableSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20[]",
        name: "_pooledTokens",
        type: "address[]",
      },
      {
        internalType: "uint8[]",
        name: "decimals",
        type: "uint8[]",
      },
      {
        internalType: "string",
        name: "lpTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lpTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFee",
        type: "uint256",
      },
    ],
    name: "initializeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "isDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpTokenTargetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "rampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "removeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "setSwapAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "stopRampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateLpTokenTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "withdrawSwapAdminFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061225f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806372a30e081161007157806372a30e081461013f5780638dc51484146101525780639c8eab9714610165578063a1a23c2914610178578063e5f6220f1461018b578063ea027c2f1461019e57600080fd5b80631963e426146100ae5780632bf63bcc146100c35780633e74aea0146100e357806343be5eaf146100f65780634b141bb414610109575b600080fd5b6100c16100bc366004611b16565b6101b1565b005b6021546040516001600160a01b0390911681526020015b60405180910390f35b6100c16100f1366004611b42565b610273565b6100c1610104366004611b5b565b610544565b61012f610117366004611b42565b6000908152601f60205260409020600c015460ff1690565b60405190151581526020016100da565b6100c161014d366004611b42565b6105f5565b6100c1610160366004611b92565b6106a6565b6100c1610173366004611b5b565b61079e565b6100c1610186366004611b42565b61084f565b6100c1610199366004611d69565b6108ec565b6100c16101ac366004611b42565b610fa0565b336101ba6110d8565b6001600160a01b0316141580156101f557506003336000908152601b602052604090205460ff1660038111156101f2576101f2611e3b565b14155b1561021357604051637b32c26b60e01b815260040160405180910390fd5b6000838152601f6020526040902061022c9083836110f4565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b3361027c6110d8565b6001600160a01b0316141580156102b757506003336000908152601b602052604090205460ff1660038111156102b4576102b4611e3b565b14155b156102d557604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f60205260408120600801549081900361030857604051635e98c38d60e11b815260040160405180910390fd5b6000828152601f60205260409020600c015460ff1661033a57604051637baf490160e11b815260040160405180910390fd5b6000828152601f60205260409020600d015442101561036c576040516302aba83160e51b815260040160405180910390fd5b60005b81811015610465576000838152601f6020526040812060080180548390811061039a5761039a611e51565b6000918252602080832090910154868352601f90915260408220600a0180546001600160a01b03909216935090849081106103d7576103d7611e51565b90600052602060002001541115610435576000848152601f60205260409020600a0180546104359133918590811061041157610411611e51565b9060005260206000200154836001600160a01b03166113829092919063ffffffff16565b6000848152602080805260408083206001600160a01b03909416835292905220805460ff1916905560010161036f565b5061047082336113d9565b6000828152601f602052604081208181556001810182905560028101829055600381018290556004810182905560058101829055600681018290556007810180546001600160a01b0319169055906104cb6008830182611a40565b6104d9600983016000611a40565b6104e7600a83016000611a40565b6104f5600b83016000611a40565b50600c8101805460ff191690556000600d9091015560405133815282907fb729dde7e954c83f790a153521f9d2e12779b36305ed42c8bf86ac4cf7ce6915906020015b60405180910390a25050565b3361054d6110d8565b6001600160a01b03161415801561058857506003336000908152601b602052604090205460ff16600381111561058557610585611e3b565b14155b156105a657604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f602052604090206105be908261142c565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb31769101610538565b336105fe6110d8565b6001600160a01b03161415801561063957506003336000908152601b602052604090205460ff16600381111561063657610636611e3b565b14155b1561065757604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f6020526040902061066e906114a4565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b336106af6110d8565b6001600160a01b0316141580156106ea57506003336000908152601b602052604090205460ff1660038111156106e7576106e7611e3b565b14155b1561070857604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381163b61073057604051630db340a960e21b815260040160405180910390fd5b602154604080516001600160a01b03928316815291831660208301523382820152517f98bc4f3f4ec7b43d0c86b6136979bfbe279b2d54a930505d34ec02d72dfb1c409181900360600190a1602180546001600160a01b0319166001600160a01b0392909216919091179055565b336107a76110d8565b6001600160a01b0316141580156107e257506003336000908152601b602052604090205460ff1660038111156107df576107df611e3b565b14155b1561080057604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f602052604090206108189082611565565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e04639101610538565b336108586110d8565b6001600160a01b03161415801561089357506003336000908152601b602052604090205460ff16600381111561089057610890611e3b565b14155b156108b157604051637b32c26b60e01b815260040160405180910390fd5b601d54600119016108d557604051637ce54e2d60e11b815260040160405180910390fd5b6002601d556108e481336113d9565b506001601d55565b336108f56110d8565b6001600160a01b03161415801561093057506003336000908152601b602052604090205460ff16600381111561092d5761092d611e3b565b14155b1561094e57604051637b32c26b60e01b815260040160405180910390fd5b6000888152601f60205260409020600801541561097e576040516376a1368960e11b815260040160405180910390fd5b60028751108061098f575060108751115b156109ad5760405163502ef3af60e01b815260040160405180910390fd5b8651865181146109d05760405163d6e48e5d60e01b815260040160405180910390fd5b6000875167ffffffffffffffff8111156109ec576109ec611baf565b604051908082528060200260200182016040528015610a15578160200160208202803683370190505b50905060005b82811015610c2a578015610ae35760008b815260208052604081208b519091908c9084908110610a4d57610a4d611e51565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff16151580610ac55750898181518110610a8e57610a8e611e51565b60200260200101516001600160a01b03168a600081518110610ab257610ab2611e51565b60200260200101516001600160a01b0316145b15610ae357604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168a8281518110610b0057610b00611e51565b60200260200101516001600160a01b031603610b2f57604051634ce187ad60e11b815260040160405180910390fd5b601260ff16898281518110610b4657610b46611e51565b602002602001015160ff161115610b7057604051637d4ada4560e11b815260040160405180910390fd5b888181518110610b8257610b82611e51565b60200260200101516012610b969190611e7d565b610ba49060ff16600a611f7a565b828281518110610bb657610bb6611e51565b60200260200101818152505080600060200160008d815260200190815260200160002060008c8481518110610bed57610bed611e51565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff92909216919091179055600101610a1b565b50620f42408510610c4e576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e1008410610c7257604051634fc2217d60e11b815260040160405180910390fd5b6402540be4008310610c97576040516384b9a37f60e01b815260040160405180910390fd5b602154600090610caf906001600160a01b03166115de565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b7690610ce0908b908b90600401611fd6565b6020604051808303816000875af1158015610cff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d239190612004565b610d405760405163276cd8b960e01b815260040160405180910390fd5b6000604051806101c001604052808d8152602001606489610d619190612026565b8152602001610d7160648a612026565b81526020016000815260200160008152602001878152602001868152602001836001600160a01b031681526020018c81526020018481526020018c5167ffffffffffffffff811115610dc557610dc5611baf565b604051908082528060200260200182016040528015610dee578160200160208202803683370190505b5081526020018c5167ffffffffffffffff811115610e0e57610e0e611baf565b604051908082528060200260200182016040528015610e37578160200160208202803683370190505b5081526000602080830182905260409283018290528f8252601f81529082902083518155838201516001820155918301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e08301516007830180546001600160a01b0319166001600160a01b0390921691909117905561010083015180519394508493610ed89260088501920190611a61565b506101208201518051610ef5916009840191602090910190611ac6565b506101408201518051610f1291600a840191602090910190611ac6565b506101608201518051610f2f91600b840191602090910190611ac6565b50610180820151600c8201805460ff19169115159190911790556101a090910151600d909101556040518c907f17624207b3ada0ecb82d25bef7eb308a62e614001936961428b08af45651c3f190610f8a90849033906120b1565b60405180910390a2505050505050505050505050565b33610fa96110d8565b6001600160a01b031614158015610fe457506003336000908152601b602052604090205460ff166003811115610fe157610fe1611e3b565b14155b1561100257604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f602052604081206008015490819003611035576040516303bb6f8760e61b815260040160405180910390fd5b6000828152601f60205260409020600c015460ff1615611068576040516380cd476f60e01b815260040160405180910390fd5b6000828152601f60205260409020600c01805460ff1916600117905561109162093a80426121d4565b6000838152601f6020908152604091829020600d01929092555133815283917f436f3434791c806271347887826cd8df45595907e6cfdc188dd8c9b468d8521e9101610538565b60006110e2611678565b600401546001600160a01b0316919050565b62015180836003015461110791906121d4565b42101561115b5760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b61116862127500426121d4565b8110156111b05760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401611152565b81158015906111c15750620f424082105b61120d5760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401611152565b6000611218846116ac565b90506000611227606485612026565b90508082036112665760405162461bcd60e51b815260206004820152600b60248201526a02176616c69642072616d760ac1b6044820152606401611152565b818110156112c5578161127a600283612026565b10156112c05760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401611152565b611317565b6112d0600283612026565b8111156113175760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401611152565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526113d49084906116f5565b505050565b6000828152601f602052604090206113f190826117c7565b6040516001600160a01b038216815282907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d90602001610538565b6305f5e10081111561146b5760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401611152565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b190602001610538565b428160040154116114f75760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401611152565b6000611502826116ac565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc2019389161155991848252602082015260400190565b60405180910390a15050565b6402540be4008111156115a55760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401611152565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a61690602001610538565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b0381166116735760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401611152565b919050565b6000806116a660017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6121e7565b92915050565b6004810154600282015460018301549091908083148015906116cd57508142105b156116ee576000846003015490508083038142038502428503840201049350505b5050919050565b600061174a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661186d9092919063ffffffff16565b8051909150156113d457808060200190518101906117689190612004565b6113d45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401611152565b600882015460005b818110156118675760008460080182815481106117ee576117ee611e51565b6000918252602082200154600b870180546001600160a01b039092169350908490811061181d5761181d611e51565b906000526020600020015490508060001461185d5785600b01838154811061184757611847611e51565b600091825260208220015561185d828683611886565b50506001016117cf565b50505050565b606061187c84846000856118c5565b90505b9392505050565b8060000361189357505050565b6001600160a01b0383166118ba57604051633a48ca7b60e11b815260040160405180910390fd5b6113d4838383611382565b6060824710156119265760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611152565b600080866001600160a01b0316858760405161194291906121fa565b60006040518083038185875af1925050503d806000811461197f576040519150601f19603f3d011682016040523d82523d6000602084013e611984565b606091505b5091509150611995878383876119a2565b925050505b949350505050565b60608315611a11578251600003611a0a576001600160a01b0385163b611a0a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611152565b508161199a565b61199a8383815115611a265781518083602001fd5b8060405162461bcd60e51b81526004016111529190612216565b5080546000825590600052602060002090810190611a5e9190611b01565b50565b828054828255906000526020600020908101928215611ab6579160200282015b82811115611ab657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611a81565b50611ac2929150611b01565b5090565b828054828255906000526020600020908101928215611ab6579160200282015b82811115611ab6578251825591602001919060010190611ae6565b5b80821115611ac25760008155600101611b02565b600080600060608486031215611b2b57600080fd5b505081359360208301359350604090920135919050565b600060208284031215611b5457600080fd5b5035919050565b60008060408385031215611b6e57600080fd5b50508035926020909101359150565b6001600160a01b0381168114611a5e57600080fd5b600060208284031215611ba457600080fd5b813561187f81611b7d565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611bee57611bee611baf565b604052919050565b600067ffffffffffffffff821115611c1057611c10611baf565b5060051b60200190565b600082601f830112611c2b57600080fd5b81356020611c40611c3b83611bf6565b611bc5565b82815260059290921b84018101918181019086841115611c5f57600080fd5b8286015b84811015611c83578035611c7681611b7d565b8352918301918301611c63565b509695505050505050565b600082601f830112611c9f57600080fd5b81356020611caf611c3b83611bf6565b82815260059290921b84018101918181019086841115611cce57600080fd5b8286015b84811015611c8357803560ff81168114611cec5760008081fd5b8352918301918301611cd2565b600082601f830112611d0a57600080fd5b813567ffffffffffffffff811115611d2457611d24611baf565b611d37601f8201601f1916602001611bc5565b818152846020838601011115611d4c57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600080610100898b031215611d8657600080fd5b88359750602089013567ffffffffffffffff80821115611da557600080fd5b611db18c838d01611c1a565b985060408b0135915080821115611dc757600080fd5b611dd38c838d01611c8e565b975060608b0135915080821115611de957600080fd5b611df58c838d01611cf9565b965060808b0135915080821115611e0b57600080fd5b50611e188b828c01611cf9565b989b979a50959894979660a0860135965060c08601359560e00135945092505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60ff82811682821603908111156116a6576116a6611e67565b600181815b80851115611ed1578160001904821115611eb757611eb7611e67565b80851615611ec457918102915b93841c9390800290611e9b565b509250929050565b600082611ee8575060016116a6565b81611ef5575060006116a6565b8160018114611f0b5760028114611f1557611f31565b60019150506116a6565b60ff841115611f2657611f26611e67565b50506001821b6116a6565b5060208310610133831016604e8410600b8410161715611f54575081810a6116a6565b611f5e8383611e96565b8060001904821115611f7257611f72611e67565b029392505050565b600061187f8383611ed9565b60005b83811015611fa1578181015183820152602001611f89565b50506000910152565b60008151808452611fc2816020860160208601611f86565b601f01601f19169290920160200192915050565b604081526000611fe96040830185611faa565b8281036020840152611ffb8185611faa565b95945050505050565b60006020828403121561201657600080fd5b8151801515811461187f57600080fd5b80820281158282048414176116a6576116a6611e67565b600081518084526020808501945080840160005b838110156120765781516001600160a01b031687529582019590820190600101612051565b509495945050505050565b600081518084526020808501945080840160005b8381101561207657815187529582019590820190600101612095565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e0860151915061012061211b818601846001600160a01b03169052565b8187015192506101c09150610140828187015261213c61020087018561203d565b9350818801519150603f1961016081888703018189015261215d8685612081565b9550828a01519350610180925081888703018389015261217d8685612081565b9550808a01519350506101a081888703018189015261219c8685612081565b9550828a015193506121b18589018515159052565b8901516101e08801525050506001600160a01b038516602085015250905061187f565b808201808211156116a6576116a6611e67565b818103818111156116a6576116a6611e67565b6000825161220c818460208701611f86565b9190910192915050565b60208152600061187f6020830184611faa56fea2646970667358221220976c428e5c03cb4e0c3f60b92b479e54349c28742acf8d359e7492634e44833264736f6c63430008110033";

type SwapAdminFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapAdminFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapAdminFacet__factory extends ContractFactory {
  constructor(...args: SwapAdminFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapAdminFacet> {
    return super.deploy(overrides || {}) as Promise<SwapAdminFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapAdminFacet {
    return super.attach(address) as SwapAdminFacet;
  }
  override connect(signer: Signer): SwapAdminFacet__factory {
    return super.connect(signer) as SwapAdminFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapAdminFacetInterface {
    return new utils.Interface(_abi) as SwapAdminFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapAdminFacet {
    return new Contract(address, _abi, signerOrProvider) as SwapAdminFacet;
  }
}
