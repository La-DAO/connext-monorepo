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
      {
        internalType: "address",
        name: "lpTokenTargetAddress",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50611c3d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631963e4261461006757806343be5eaf1461007c57806347555ef61461008f57806372a30e08146100a25780639c8eab97146100b5578063a1a23c29146100c8575b600080fd5b61007a6100753660046114ea565b6100db565b005b61007a61008a366004611516565b61019d565b61007a61009d366004611715565b610256565b61007a6100b03660046117fa565b6108d0565b61007a6100c3366004611516565b610981565b61007a6100d63660046117fa565b610a32565b336100e4610b12565b6001600160a01b03161415801561011f575060033360009081526019602052604090205460ff16600381111561011c5761011c611813565b14155b1561013d57604051637b32c26b60e01b815260040160405180910390fd5b6000838152601c60205260409020610156908383610b40565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b336101a6610b12565b6001600160a01b0316141580156101e1575060033360009081526019602052604090205460ff1660038111156101de576101de611813565b14155b156101ff57604051637b32c26b60e01b815260040160405180910390fd5b6000828152601c602052604090206102179082610dcd565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb317691015b60405180910390a25050565b3361025f610b12565b6001600160a01b03161415801561029a575060033360009081526019602052604090205460ff16600381111561029757610297611813565b14155b156102b857604051637b32c26b60e01b815260040160405180910390fd5b6000898152601c6020526040902060080154156102e8576040516376a1368960e11b815260040160405180910390fd5b600188511115806102fa575060208851115b156103185760405163502ef3af60e01b815260040160405180910390fd5b87518751811461033b5760405163d6e48e5d60e01b815260040160405180910390fd5b6000885167ffffffffffffffff81111561035757610357611538565b604051908082528060200260200182016040528015610380578160200160208202803683370190505b50905060005b8281101561059657801561044f5760008c8152601d602052604081208c519091908d90849081106103b9576103b9611829565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615158061043157508a81815181106103fa576103fa611829565b60200260200101516001600160a01b03168b60008151811061041e5761041e611829565b60200260200101516001600160a01b0316145b1561044f57604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168b828151811061046c5761046c611829565b60200260200101516001600160a01b03160361049b57604051634ce187ad60e11b815260040160405180910390fd5b601260ff168a82815181106104b2576104b2611829565b602002602001015160ff1611156104dc57604051637d4ada4560e11b815260040160405180910390fd5b8981815181106104ee576104ee611829565b602002602001015160126105029190611855565b6105109060ff16600a611958565b82828151811061052257610522611829565b602002602001018181525050806000601d0160008e815260200190815260200160002060008d848151811061055957610559611829565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff92909216919091179055600101610386565b50620f424086106105ba576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e10085106105de57604051634fc2217d60e11b815260040160405180910390fd5b6402540be4008410610603576040516384b9a37f60e01b815260040160405180910390fd5b600061060e84610e45565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b769061063f908c908c906004016119b4565b6020604051808303816000875af115801561065e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068291906119e2565b61069f5760405163276cd8b960e01b815260040160405180910390fd5b60006040518061018001604052808e815260200160648a6106c09190611a04565b81526020016106d060648b611a04565b81526020016000815260200160008152602001888152602001878152602001836001600160a01b031681526020018d81526020018481526020018d5167ffffffffffffffff81111561072457610724611538565b60405190808252806020026020018201604052801561074d578160200160208202803683370190505b5081526020018d5167ffffffffffffffff81111561076d5761076d611538565b604051908082528060200260200182016040528015610796578160200160208202803683370190505b50905260008e8152601c602090815260409182902083518155838201516001820155918301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e08301516007830180546001600160a01b0319166001600160a01b039092169190911790556101008301518051939450849361082c9260088501920190611435565b50610120820151805161084991600984019160209091019061149a565b50610140820151805161086691600a84019160209091019061149a565b50610160820151805161088391600b84019160209091019061149a565b509050508c7f4c5d883e86afc82dc0f918cfc013e437aa458ec41475884857ba8daec50d24cb82336040516108b9929190611a8f565b60405180910390a250505050505050505050505050565b336108d9610b12565b6001600160a01b031614158015610914575060033360009081526019602052604090205460ff16600381111561091157610911611813565b14155b1561093257604051637b32c26b60e01b815260040160405180910390fd5b6000818152601c6020526040902061094990610edf565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b3361098a610b12565b6001600160a01b0316141580156109c5575060033360009081526019602052604090205460ff1660038111156109c2576109c2611813565b14155b156109e357604051637b32c26b60e01b815260040160405180910390fd5b6000828152601c602052604090206109fb9082610fa0565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e0463910161024a565b33610a3b610b12565b6001600160a01b031614158015610a76575060033360009081526019602052604090205460ff166003811115610a7357610a73611813565b14155b15610a9457604051637b32c26b60e01b815260040160405180910390fd5b601b5460011901610ab857604051637ce54e2d60e11b815260040160405180910390fd5b6002601b556000818152601c60205260409020610ad59033611019565b60405133815281907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d9060200160405180910390a2506001601b55565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6003830154610b529062015180611b90565b421015610ba65760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b610bb36212750042611b90565b811015610bfb5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401610b9d565b8115801590610c0c5750620f424082105b610c585760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401610b9d565b6000610c63846110cb565b90506000610c72606485611a04565b9050808203610cb15760405162461bcd60e51b815260206004820152600b60248201526a02176616c69642072616d760ac1b6044820152606401610b9d565b81811015610d105781610cc5600283611a04565b1015610d0b5760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401610b9d565b610d62565b610d1b600283611a04565b811115610d625760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401610b9d565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6305f5e100811115610e0c5760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610b9d565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b19060200161024a565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b038116610eda5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610b9d565b919050565b42816004015411610f325760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401610b9d565b6000610f3d826110cb565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc20193891610f9491848252602082015260400190565b60405180910390a15050565b6402540be400811115610fe05760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610b9d565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a6169060200161024a565b600882015460005b818110156110c557600084600801828154811061104057611040611829565b6000918252602082200154600b870180546001600160a01b039092169350908490811061106f5761106f611829565b90600052602060002001549050806000146110bb57600086600b01848154811061109b5761109b611829565b6000918252602090912001556110bb6001600160a01b038316868361117c565b5050600101611021565b50505050565b600481015460028201546000919042821115611175576003840154600185015480831115611139576110fd8285611ba3565b6111078342611ba3565b6111118386611ba3565b61111b9190611a04565b6111259190611bb6565b61112f9082611b90565b9695505050505050565b6111438285611ba3565b61114d8342611ba3565b6111578584611ba3565b6111619190611a04565b61116b9190611bb6565b61112f9082611ba3565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111ce9084906111d3565b505050565b6000611228826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112a59092919063ffffffff16565b8051909150156111ce578080602001905181019061124691906119e2565b6111ce5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610b9d565b60606112b484846000856112bc565b949350505050565b60608247101561131d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610b9d565b600080866001600160a01b031685876040516113399190611bd8565b60006040518083038185875af1925050503d8060008114611376576040519150601f19603f3d011682016040523d82523d6000602084013e61137b565b606091505b509150915061138c87838387611397565b979650505050505050565b606083156114065782516000036113ff576001600160a01b0385163b6113ff5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b9d565b50816112b4565b6112b4838381511561141b5781518083602001fd5b8060405162461bcd60e51b8152600401610b9d9190611bf4565b82805482825590600052602060002090810192821561148a579160200282015b8281111561148a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611455565b506114969291506114d5565b5090565b82805482825590600052602060002090810192821561148a579160200282015b8281111561148a5782518255916020019190600101906114ba565b5b8082111561149657600081556001016114d6565b6000806000606084860312156114ff57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561152957600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561157757611577611538565b604052919050565b600067ffffffffffffffff82111561159957611599611538565b5060051b60200190565b6001600160a01b03811681146115b857600080fd5b50565b600082601f8301126115cc57600080fd5b813560206115e16115dc8361157f565b61154e565b82815260059290921b8401810191818101908684111561160057600080fd5b8286015b84811015611624578035611617816115a3565b8352918301918301611604565b509695505050505050565b600082601f83011261164057600080fd5b813560206116506115dc8361157f565b82815260059290921b8401810191818101908684111561166f57600080fd5b8286015b8481101561162457803560ff8116811461168d5760008081fd5b8352918301918301611673565b600082601f8301126116ab57600080fd5b813567ffffffffffffffff8111156116c5576116c5611538565b6116d8601f8201601f191660200161154e565b8181528460208386010111156116ed57600080fd5b816020850160208301376000918101602001919091529392505050565b8035610eda816115a3565b60008060008060008060008060006101208a8c03121561173457600080fd5b8935985060208a013567ffffffffffffffff8082111561175357600080fd5b61175f8d838e016115bb565b995060408c013591508082111561177557600080fd5b6117818d838e0161162f565b985060608c013591508082111561179757600080fd5b6117a38d838e0161169a565b975060808c01359150808211156117b957600080fd5b506117c68c828d0161169a565b95505060a08a0135935060c08a0135925060e08a013591506117eb6101008b0161170a565b90509295985092959850929598565b60006020828403121561180c57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111561186e5761186e61183f565b92915050565b600181815b808511156118af5781600019048211156118955761189561183f565b808516156118a257918102915b93841c9390800290611879565b509250929050565b6000826118c65750600161186e565b816118d35750600061186e565b81600181146118e957600281146118f35761190f565b600191505061186e565b60ff8411156119045761190461183f565b50506001821b61186e565b5060208310610133831016604e8410600b8410161715611932575081810a61186e565b61193c8383611874565b80600019048211156119505761195061183f565b029392505050565b600061117583836118b7565b60005b8381101561197f578181015183820152602001611967565b50506000910152565b600081518084526119a0816020860160208601611964565b601f01601f19169290920160200192915050565b6040815260006119c76040830185611988565b82810360208401526119d98185611988565b95945050505050565b6000602082840312156119f457600080fd5b8151801515811461117557600080fd5b808202811582820484141761186e5761186e61183f565b600081518084526020808501945080840160005b83811015611a545781516001600160a01b031687529582019590820190600101611a2f565b509495945050505050565b600081518084526020808501945080840160005b83811015611a5457815187529582019590820190600101611a73565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e08601519150610120611af9818601846001600160a01b03169052565b81870151925061018091506101408281870152611b1a6101c0870185611a1b565b9350818801519150603f19610160818887030181890152611b3b8685611a5f565b9550828a01519350818887030185890152611b568685611a5f565b9550808a015194505080878603016101a0880152505050611b778282611a5f565b9250505061117560208301846001600160a01b03169052565b8082018082111561186e5761186e61183f565b8181038181111561186e5761186e61183f565b600082611bd357634e487b7160e01b600052601260045260246000fd5b500490565b60008251611bea818460208701611964565b9190910192915050565b602081526000611175602083018461198856fea2646970667358221220ce1e749c30964e6057ce76f714660705e794de4deec99a56c995f227b52ab21f64736f6c63430008110033";

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
