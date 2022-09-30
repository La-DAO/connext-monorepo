/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TokenFacet,
  TokenFacetInterface,
} from "../../../../../contracts/core/connext/facets/TokenFacet";

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
    name: "TokenFacet__addAssetId_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__addAssetId_nativeAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__removeAssetId_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__updateDetails_localNotFound",
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
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "adoptedAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "localAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetAdded",
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
    name: "AssetRemoved",
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
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "swapPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "StableSwapAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "representation",
        type: "address",
      },
    ],
    name: "TokenDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "addStableSwapPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
    ],
    name: "adoptedToCanonical",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "approvedAssets",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "approvedAssets",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "canonicalToAdopted",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "canonicalToAdopted",
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
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "canonicalToRepresentation",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "canonicalToRepresentation",
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
        name: "_id",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "getLocalAndAdoptedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
    ],
    name: "removeAssetId",
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
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
    ],
    name: "representationToCanonical",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "uint8",
        name: "_canonicalDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_representationName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_representationSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "setupAsset",
    outputs: [
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "setupAssetWithDeployedRepresentation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "updateDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061181a806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620001215760003560e01c8063a1b1930111620000af578063bd8671a7116200007a578063bd8671a7146200036b578063c40584291462000382578063d3654b801462000399578063e1cb395814620003b0578063e9a25ab414620003c757600080fd5b8063a1b1930114620002fa578063ad4c77711462000311578063ae8bc0de1462000328578063bd7e1e2e146200033f57600080fd5b80632c1999d011620000f05780632c1999d0146200023157806357bd0a3214620002485780635a2164e5146200027f57806360062091146200029657600080fd5b806303e418c2146200012657806307a38d7b14620001b05780631506e46314620001e85780631ecf6f9f1462000201575b600080fd5b6200018a6200013736600462000da6565b6040805180820190915260008082526020820152506040805180820182526001600160a01b03909216600081815260086020818152938220805463ffffffff168652929091528252600101549082015290565b60408051825163ffffffff16815260209283015192810192909252015b60405180910390f35b620001c7620001c136600462000de0565b620003de565b604080516001600160a01b03938416815292909116602083015201620001a7565b620001ff620001f936600462000e28565b62000404565b005b620002186200021236600462000e58565b6200046a565b6040516001600160a01b039091168152602001620001a7565b620002186200024236600462000e58565b62000489565b6200026e6200025936600462000e58565b60009081526006602052604090205460ff1690565b6040519015158152602001620001a7565b620001ff6200029036600462000e72565b62000496565b6200018a620002a736600462000da6565b6040805180820190915260008082526020820152506040805180820182526001600160a01b03909216600081815260076020818152938220805463ffffffff168652929091528252600101549082015290565b620001ff6200030b36600462000ebd565b620004f7565b620002186200032236600462000ef5565b62000537565b6200026e6200033936600462000ef5565b6200056f565b620002186200035036600462000e58565b6000908152600560205260409020546001600160a01b031690565b620002186200037c36600462000ef5565b6200058c565b620001ff6200039336600462000fbf565b620005af565b62000218620003aa3660046200103d565b620006a0565b62000218620003c1366004620010f9565b62000741565b62000218620003d836600462000ef5565b62000791565b600080620003f9620003f18585620007ae565b8585620007f1565b915091509250929050565b336200040f62000822565b6001600160a01b03161462000437576040516314e74a2560e21b815260040160405180910390fd5b6000620004566020840180359062000450908662001157565b620007ae565b90506200046583838362000850565b505050565b6000818152600a60205260408120546001600160a01b03165b92915050565b60006200048382620008e8565b33620004a162000822565b6001600160a01b031614620004c9576040516314e74a2560e21b815260040160405180910390fd5b6000620004e26020850180359062000450908762001157565b9050620004f18184846200091f565b50505050565b336200050262000822565b6001600160a01b0316146200052a576040516314e74a2560e21b815260040160405180910390fd5b620004658383836200091f565b600062000483620005546020840180359062000450908662001157565b6000908152600a60205260409020546001600160a01b031690565b600062000483620002596020840180359062000450908662001157565b600062000483620005a96020840180359062000450908662001157565b620008e8565b33620005ba62000822565b6001600160a01b031614620005e2576040516314e74a2560e21b815260040160405180910390fd5b6000620005fb6020850180359062000450908762001157565b6000818152600a60205260409020549091506001600160a01b0316806200063557604051639db40a2560e01b815260040160405180910390fd5b604051635bd8487760e11b81526001600160a01b0382169063b7b090ee90620006659087908790600401620011c5565b600060405180830381600087803b1580156200068057600080fd5b505af115801562000695573d6000803e3d6000fd5b505050505050505050565b600033620006ad62000822565b6001600160a01b031614620006d5576040516314e74a2560e21b815260040160405180910390fd5b60045463ffffffff16620006ed602089018962001157565b63ffffffff16146200072157620007196020880180359062000710908a62001157565b88888862000a17565b905062000728565b5060208601355b620007368382848a62000b2a565b509695505050505050565b6000336200074e62000822565b6001600160a01b03161462000776576040516314e74a2560e21b815260040160405180910390fd5b620007848385848862000b2a565b508390505b949350505050565b600062000483620003506020840180359062000450908662001157565b60008282604051602001620007d392919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b600080600062000805868686600062000d39565b905060006200081487620008e8565b919791965090945050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b600081815260056020908152604090912080546001600160a01b0319166001600160a01b038516179055620008889084018462001157565b63ffffffff168360200135827f16285b1cf634d546d51fefe55f6e63e5edf970d2a3d2bd50b55a8cfad25e8b568533604051620008db9291906001600160a01b0392831681529116602082015260400190565b60405180910390a4505050565b6000818152600960205260408120546001600160a01b0316806200048357604051634cdfde3760e11b815260040160405180910390fd5b60008381526006602052604090205460ff166200094f57604051631c999e7d60e11b815260040160405180910390fd5b6000838152600660209081526040808320805460ff191690556005825280832080546001600160a01b03199081169091556001600160a01b03868116855260078452828520805463ffffffff1990811682556001918201879055918716865260088552838620805490921682550184905586845260098352818420805482169055600a8352928190208054909316909255905133815284917f9d181adb70e733f5235f839c1eed929407ea8526e41d01f49b9fef703e78dddf910160405180910390a2505050565b60045460405160009164010000000090046001600160a01b03169062000a3d9062000d7b565b6001600160a01b039091168152604060208201819052600090820152606001604051809103906000f08015801562000a79573d6000803e3d6000fd5b5060405163188c392760e11b81529091506001600160a01b03821690633118724e9062000aaf90879087908790600401620011f7565b600060405180830381600087803b15801562000aca57600080fd5b505af115801562000adf573d6000803e3d6000fd5b50505050806001600160a01b0316868663ffffffff167f84d5e3618bf276f3d29a931646fdd996b398a3efa3cf6bceefc1fe7f0304059f60405160405180910390a495945050505050565b600062000b436020830180359062000450908562001157565b905060006001600160a01b0386161562000b5e578562000b60565b845b60008381526006602052604090205490915060ff161562000b945760405163bfa2bf9b60e01b815260040160405180910390fd5b6000828152600660209081526040909120805460ff1916600117905562000bbe9084018462001157565b6001600160a01b0382166000818152600760209081526040808320805463ffffffff191663ffffffff9690961695909517855587820180356001909601959095558683526009909152902080546001600160a01b031916909117905562000c26908462001157565b60045463ffffffff90811691161462000cbb5762000c48602084018462001157565b6001600160a01b038681166000818152600860209081526040808320805463ffffffff191663ffffffff9790971696909617865588820135600190960195909555868252600a90529290922080546001600160a01b03191690921790915584161562000cbb5762000cbb83858462000850565b62000cca602084018462001157565b63ffffffff168360200135837f0c58c78506e2d526f5ccdba28119c9ca3b5ce48e1462e0e19bc39232db11c63284893360405162000d28939291906001600160a01b0393841681529183166020830152909116604082015260600190565b60405180910390a450949350505050565b600481015460009063ffffffff9081169084160362000d5a57508262000789565b506000848152600a820160205260409020546001600160a01b031662000789565b6105b1806200123483390190565b80356001600160a01b038116811462000da157600080fd5b919050565b60006020828403121562000db957600080fd5b62000dc48262000d89565b9392505050565b803563ffffffff8116811462000da157600080fd5b6000806040838503121562000df457600080fd5b8235915062000e066020840162000dcb565b90509250929050565b60006040828403121562000e2257600080fd5b50919050565b6000806060838503121562000e3c57600080fd5b62000e48848462000e0f565b915062000e066040840162000d89565b60006020828403121562000e6b57600080fd5b5035919050565b60008060006080848603121562000e8857600080fd5b62000e94858562000e0f565b925062000ea46040850162000d89565b915062000eb46060850162000d89565b90509250925092565b60008060006060848603121562000ed357600080fd5b8335925062000ee56020850162000d89565b915062000eb46040850162000d89565b60006040828403121562000f0857600080fd5b62000dc4838362000e0f565b634e487b7160e01b600052604160045260246000fd5b600082601f83011262000f3c57600080fd5b813567ffffffffffffffff8082111562000f5a5762000f5a62000f14565b604051601f8301601f19908116603f0116810190828211818310171562000f855762000f8562000f14565b8160405283815286602085880101111562000f9f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006080848603121562000fd557600080fd5b62000fe1858562000e0f565b9250604084013567ffffffffffffffff8082111562000fff57600080fd5b6200100d8783880162000f2a565b935060608601359150808211156200102457600080fd5b50620010338682870162000f2a565b9150509250925092565b60008060008060008060e087890312156200105757600080fd5b62001063888862000e0f565b9550604087013560ff811681146200107a57600080fd5b9450606087013567ffffffffffffffff808211156200109857600080fd5b620010a68a838b0162000f2a565b95506080890135915080821115620010bd57600080fd5b50620010cc89828a0162000f2a565b935050620010dd60a0880162000d89565b9150620010ed60c0880162000d89565b90509295509295509295565b60008060008060a085870312156200111057600080fd5b6200111c868662000e0f565b93506200112c6040860162000d89565b92506200113c6060860162000d89565b91506200114c6080860162000d89565b905092959194509250565b6000602082840312156200116a57600080fd5b62000dc48262000dcb565b6000815180845260005b818110156200119d576020818501810151868301820152016200117f565b81811115620011b0576000602083870101525b50601f01601f19169290920160200192915050565b604081526000620011da604083018562001175565b8281036020840152620011ee818562001175565b95945050505050565b60ff8416815260606020820152600062001215606083018562001175565b828103604084015262001229818562001175565b969550505050505056fe60a06040526040516105b13803806105b18339810160408190526100229161027e565b6100358261010b60201b6100291760201c565b6100795760405162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b60448201526064015b60405180910390fd5b6001600160a01b03821660805260006100918361011a565b90506100a68161010b60201b6100291760201c565b6100f25760405162461bcd60e51b815260206004820152601f60248201527f626561636f6e20696d706c656d656e746174696f6e2021636f6e7472616374006044820152606401610070565b8151156101035761010381836101ae565b5050506103b3565b6001600160a01b03163b151590565b6000806000836001600160a01b0316604051600060405180830381855afa9150503d8060008114610167576040519150601f19603f3d011682016040523d82523d6000602084013e61016c565b606091505b50915091508181906101915760405162461bcd60e51b81526004016100709190610340565b50808060200190518101906101a69190610373565b949350505050565b6000826001600160a01b0316826040516101c89190610397565b600060405180830381855af49150503d8060008114610203576040519150601f19603f3d011682016040523d82523d6000602084013e610208565b606091505b505090508061021b573d6000803e3d6000fd5b505050565b6001600160a01b038116811461023557600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610269578181015183820152602001610251565b83811115610278576000848401525b50505050565b6000806040838503121561029157600080fd5b825161029c81610220565b60208401519092506001600160401b03808211156102b957600080fd5b818501915085601f8301126102cd57600080fd5b8151818111156102df576102df610238565b604051601f8201601f19908116603f0116810190838211818310171561030757610307610238565b8160405282815288602084870101111561032057600080fd5b61033183602083016020880161024e565b80955050505050509250929050565b602081526000825180602084015261035f81604085016020870161024e565b601f01601f19169190910160400192915050565b60006020828403121561038557600080fd5b815161039081610220565b9392505050565b600082516103a981846020870161024e565b9190910192915050565b6080516101e46103cd6000396000603f01526101e46000f3fe60806040523661001357610011610017565b005b6100115b610027610022610038565b610068565b565b6001600160a01b03163b151590565b60006100637f000000000000000000000000000000000000000000000000000000000000000061008c565b905090565b3660008037600080366000845af43d6000803e808015610087573d6000f35b3d6000fd5b6000806000836001600160a01b0316604051600060405180830381855afa9150503d80600081146100d9576040519150601f19603f3d011682016040523d82523d6000602084013e6100de565b606091505b509150915081819061010c5760405162461bcd60e51b81526004016101039190610129565b60405180910390fd5b5080806020019051810190610121919061017e565b949350505050565b600060208083528351808285015260005b818110156101565785810183015185820160400152820161013a565b81811115610168576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561019057600080fd5b81516001600160a01b03811681146101a757600080fd5b939250505056fea264697066735822122042436bafcc10b7d3b87b009f58b439277eb8f5d3a0eca073976612d5e2f4901264736f6c634300080f0033a264697066735822122090e7868a3c7bbd310e9217ab301c015ea64aff9423a81491374015466562162d64736f6c634300080f0033";

type TokenFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenFacet__factory extends ContractFactory {
  constructor(...args: TokenFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenFacet> {
    return super.deploy(overrides || {}) as Promise<TokenFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenFacet {
    return super.attach(address) as TokenFacet;
  }
  override connect(signer: Signer): TokenFacet__factory {
    return super.connect(signer) as TokenFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFacetInterface {
    return new utils.Interface(_abi) as TokenFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFacet {
    return new Contract(address, _abi, signerOrProvider) as TokenFacet;
  }
}
