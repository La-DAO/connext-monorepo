/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620017ee380380620017ee8339810160408190526200003491620002ba565b60128282604051806040016040528060018152602001603160f81b8152508260039081620000639190620003b2565b506004620000728382620003b2565b506005805460ff191660ff9590951694909417909355508051602091820120825192820192909220600883905560c0818152466080818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801528082019790975260608701949094528501523060a0808601829052835180870382018152959092019092528351939092019290922060075552620001223369d3c21bcecceda10000006200012a565b5050620004a6565b6001600160a01b038216620001855760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200019991906200047e565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021d57600080fd5b81516001600160401b03808211156200023a576200023a620001f5565b604051601f8301601f19908116603f01168101908282118183101715620002655762000265620001f5565b816040528381526020925086838588010111156200028257600080fd5b600091505b83821015620002a6578582018301518183018401529082019062000287565b600093810190920192909252949350505050565b60008060408385031215620002ce57600080fd5b82516001600160401b0380821115620002e657600080fd5b620002f4868387016200020b565b935060208501519150808211156200030b57600080fd5b506200031a858286016200020b565b9150509250929050565b600181811c908216806200033957607f821691505b6020821081036200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001f057600081815260208120601f850160051c81016020861015620003895750805b601f850160051c820191505b81811015620003aa5782815560010162000395565b505050505050565b81516001600160401b03811115620003ce57620003ce620001f5565b620003e681620003df845462000324565b8462000360565b602080601f8311600181146200041e5760008415620004055750858301515b600019600386901b1c1916600185901b178555620003aa565b600085815260208120601f198616915b828110156200044f578886015182559484019460019091019084016200042e565b50858210156200046e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004a057634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c051611318620004d66000396000610a0c01526000610979015260006109a301526113186000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a457c2d711610071578063a457c2d714610201578063a9059cbb14610214578063b7b090ee14610227578063d505accf1461023a578063dd62ed3e1461024d57600080fd5b806370a08231146101c05780637ecebe00146101d357806395d89b41146101e65780639dc29fac146101ee57600080fd5b8063313ce567116100de578063313ce567146101765780633644e51514610190578063395093511461019857806340c10f19146101ab57600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015157806323b872dd14610163575b600080fd5b610118610260565b6040516101259190610f06565b60405180910390f35b61014161013c366004610f70565b61026f565b6040519015158152602001610125565b6002545b604051908152602001610125565b610141610171366004610f9a565b610286565b61017e6102a8565b60405160ff9091168152602001610125565b6101556102b6565b6101416101a6366004610f70565b6102c0565b6101be6101b9366004610f70565b6102fc565b005b6101556101ce366004610fd6565b61030a565b6101556101e1366004610fd6565b610328565b610118610346565b6101be6101fc366004610f70565b610350565b61014161020f366004610f70565b61035a565b610141610222366004610f70565b6103d9565b6101be610235366004611041565b6103e6565b6101be6102483660046110ad565b610408565b61015561025b366004611120565b61056c565b606061026a610597565b905090565b600061027c338484610629565b5060015b92915050565b600061029384338461074e565b61029e8484846107c8565b5060019392505050565b600061026a60055460ff1690565b600061026a61096c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161027c9185906102f7908690611153565b610629565b6103068282610a5a565b5050565b6001600160a01b038116600090815260208190526040812054610280565b6001600160a01b038116600090815260066020526040812054610280565b606061026a610b19565b6103068282610b28565b600080610367338561056c565b9050828110156103cc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61029e3385858403610629565b600061027c3384846107c8565b60036103f384868361120c565b50600461040182848361120c565b5050505050565b834211156104585760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016103c3565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104878c610c57565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006104e282610c7f565b905060006104f282878787610ccd565b9050896001600160a01b0316816001600160a01b0316146105555760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016103c3565b6105608a8a8a610629565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546105a69061118a565b80601f01602080910402602001604051908101604052809291908181526020018280546105d29061118a565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b5050505050905090565b6001600160a01b03831661068b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103c3565b6001600160a01b0382166106ec5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103c3565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061075a848461056c565b905060001981146107c257818110156107b55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103c3565b6107c28484848403610629565b50505050565b6001600160a01b03831661082c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103c3565b6001600160a01b03821661088e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103c3565b6001600160a01b038316600090815260208190526040902054818110156109065760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103c3565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36107c2565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156109c557507f000000000000000000000000000000000000000000000000000000000000000046145b156109d1575060075490565b50600854604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f602080830191909152818301939093527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a0808301919091528251808303909101815260c0909101909152805191012090565b6001600160a01b038216610ab05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103c3565b8060026000828254610ac29190611153565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6060600480546105a69061118a565b6001600160a01b038216610b885760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103c3565b6001600160a01b03821660009081526020819052604090205481811015610bfc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103c3565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610741565b505050565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b6000610280610c8c61096c565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610cde87878787610cf5565b91509150610ceb81610db9565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610d2c5750600090506003610db0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610d80573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610da957600060019250925050610db0565b9150600090505b94509492505050565b6000816004811115610dcd57610dcd6112cc565b03610dd55750565b6001816004811115610de957610de96112cc565b03610e365760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103c3565b6002816004811115610e4a57610e4a6112cc565b03610e975760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103c3565b6003816004811115610eab57610eab6112cc565b03610f035760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103c3565b50565b600060208083528351808285015260005b81811015610f3357858101830151858201604001528201610f17565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610f6b57600080fd5b919050565b60008060408385031215610f8357600080fd5b610f8c83610f54565b946020939093013593505050565b600080600060608486031215610faf57600080fd5b610fb884610f54565b9250610fc660208501610f54565b9150604084013590509250925092565b600060208284031215610fe857600080fd5b610ff182610f54565b9392505050565b60008083601f84011261100a57600080fd5b50813567ffffffffffffffff81111561102257600080fd5b60208301915083602082850101111561103a57600080fd5b9250929050565b6000806000806040858703121561105757600080fd5b843567ffffffffffffffff8082111561106f57600080fd5b61107b88838901610ff8565b9096509450602087013591508082111561109457600080fd5b506110a187828801610ff8565b95989497509550505050565b600080600080600080600060e0888a0312156110c857600080fd5b6110d188610f54565b96506110df60208901610f54565b95506040880135945060608801359350608088013560ff8116811461110357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561113357600080fd5b61113c83610f54565b915061114a60208401610f54565b90509250929050565b8082018082111561028057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061119e57607f821691505b602082108103610c7957634e487b7160e01b600052602260045260246000fd5b601f821115610c5257600081815260208120601f850160051c810160208610156111e55750805b601f850160051c820191505b81811015611204578281556001016111f1565b505050505050565b67ffffffffffffffff83111561122457611224611174565b61123883611232835461118a565b836111be565b6000601f84116001811461126c57600085156112545750838201355b600019600387901b1c1916600186901b178355610401565b600083815260209020601f19861690835b8281101561129d578685013582556020948501946001909201910161127d565b50868210156112ba5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220fc9fa7104ced2bd0804bef90105fb24ffacb00742d1be2d37a77174cd20fba2564736f6c63430008110033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
