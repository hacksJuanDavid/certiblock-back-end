/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FLACertiblock,
  FLACertiblockInterface,
} from "../../contracts/FLACertiblock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "USER_ROLE",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
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
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAdmin",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isUser",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setActiveBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setInactiveBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "setStateInactive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b0e38038062002b0e833981016040819052620000349162000260565b338282600162000045838262000359565b50600262000054828262000359565b5062000066915060009050826200009c565b620000937f2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e966000620000ac565b50505062000425565b620000a88282620000f7565b5050565b600082815260076020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60008281526007602090815260408083206001600160a01b038516845290915290205460ff16620000a85760008281526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001573390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c357600080fd5b81516001600160401b0380821115620001e057620001e06200019b565b604051601f8301601f19908116603f011681019082821181831017156200020b576200020b6200019b565b816040528381526020925086838588010111156200022857600080fd5b600091505b838210156200024c57858201830151818301840152908201906200022d565b600093810190920192909252949350505050565b600080604083850312156200027457600080fd5b82516001600160401b03808211156200028c57600080fd5b6200029a86838701620001b1565b93506020850151915080821115620002b157600080fd5b50620002c085828601620001b1565b9150509250929050565b600181811c90821680620002df57607f821691505b6020821081036200030057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200035457600081815260208120601f850160051c810160208610156200032f5750805b601f850160051c820191505b8181101562000350578281556001016200033b565b5050505b505050565b81516001600160401b038111156200037557620003756200019b565b6200038d81620003868454620002ca565b8462000306565b602080601f831160018114620003c55760008415620003ac5750858301515b600019600386901b1c1916600185901b17855562000350565b600085815260208120601f198616915b82811015620003f657888601518255948401946001909101908401620003d5565b5085821015620004155787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6126d980620004356000396000f3fe6080604052600436106101ee5760003560e01c80634f6ccce71161010d5780639b96e66c116100a0578063b88d4fde1161006f578063b88d4fde1461058b578063c87b56dd146105ab578063d547741f146105cb578063e985e9c5146105eb578063f7342ab21461063457600080fd5b80639b96e66c14610516578063a217fddf14610536578063a22cb4651461054b578063a31b115f1461056b57600080fd5b80638bad0c0a116100dc5780638bad0c0a146104ac57806391d14854146104c157806395d89b41146104e157806398575188146104f657600080fd5b80634f6ccce71461042c5780636352211e1461044c578063704802751461046c57806370a082311461048c57600080fd5b806324d7806c1161018557806340c10f191161015457806340c10f19146103b95780634209fff1146103cc578063421b2d8b146103ec57806342842e0e1461040c57600080fd5b806324d7806c146103395780632f2ff15d146103595780632f745c591461037957806336568abe1461039957600080fd5b806313119161116101c157806313119161146102a457806318160ddd146102d457806323b872dd146102e9578063248a9ca31461030957600080fd5b806301ffc9a7146101f357806306fdde0314610228578063081812fc1461024a578063095ea7b314610282575b600080fd5b3480156101ff57600080fd5b5061021361020e366004611e36565b610654565b60405190151581526020015b60405180910390f35b34801561023457600080fd5b5061023d610665565b60405161021f9190611ea3565b34801561025657600080fd5b5061026a610265366004611eb6565b6106f7565b6040516001600160a01b03909116815260200161021f565b34801561028e57600080fd5b506102a261029d366004611eeb565b610789565b005b3480156102b057600080fd5b506102c660008051602061258483398151915281565b60405190815260200161021f565b3480156102e057600080fd5b506004546102c6565b3480156102f557600080fd5b506102a2610304366004611f15565b6108a0565b34801561031557600080fd5b506102c6610324366004611eb6565b60009081526007602052604090206001015490565b34801561034557600080fd5b50610213610354366004611f51565b6108d1565b34801561036557600080fd5b506102a2610374366004611f6c565b6108dd565b34801561038557600080fd5b506102c6610394366004611eeb565b610902565b3480156103a557600080fd5b506102a26103b4366004611f6c565b6109cc565b6102a26103c7366004611eeb565b610a4a565b3480156103d857600080fd5b506102136103e7366004611f51565b610af2565b3480156103f857600080fd5b506102a2610407366004611f51565b610b0c565b34801561041857600080fd5b506102a2610427366004611f15565b610b4c565b34801561043857600080fd5b506102c6610447366004611eb6565b610b67565b34801561045857600080fd5b5061026a610467366004611eb6565b610c21565b34801561047857600080fd5b506102a2610487366004611f51565b610c35565b34801561049857600080fd5b506102c66104a7366004611f51565b610c65565b3480156104b857600080fd5b506102a2610d35565b3480156104cd57600080fd5b506102136104dc366004611f6c565b610d42565b3480156104ed57600080fd5b5061023d610d6d565b34801561050257600080fd5b506102a2610511366004611f51565b610d7c565b34801561052257600080fd5b506102a2610531366004611eb6565b610db9565b34801561054257600080fd5b506102c6600081565b34801561055757600080fd5b506102a2610566366004611f98565b610e2e565b34801561057757600080fd5b506102a2610586366004612060565b610ef2565b34801561059757600080fd5b506102a26105a63660046120a9565b610f32565b3480156105b757600080fd5b5061023d6105c6366004611eb6565b610f6a565b3480156105d757600080fd5b506102a26105e6366004611f6c565b61107a565b3480156105f757600080fd5b50610213610606366004612125565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561064057600080fd5b506102a261064f366004612060565b61109f565b600061065f826110df565b92915050565b6060600180546106749061214f565b80601f01602080910402602001604051908101604052809291908181526020018280546106a09061214f565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b5050505050905090565b6000610704826004541190565b61076d5760405162461bcd60e51b815260206004820152602f60248201527f4552433732315073693a20617070726f76656420717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b600061079482610c21565b9050806001600160a01b0316836001600160a01b0316036108035760405162461bcd60e51b8152602060048201526024808201527f4552433732315073693a20617070726f76616c20746f2063757272656e74206f6044820152633bb732b960e11b6064820152608401610764565b336001600160a01b038216148061081f575061081f8133610606565b6108915760405162461bcd60e51b815260206004820152603b60248201527f4552433732315073693a20617070726f76652063616c6c6572206973206e6f7460448201527f206f776e6572206e6f7220617070726f76656420666f7220616c6c00000000006064820152608401610764565b61089b8383611104565b505050565b6108aa3382611172565b6108c65760405162461bcd60e51b815260040161076490612189565b61089b838383611261565b600061065f8183610d42565b6000828152600760205260409020600101546108f88161144e565b61089b8383611458565b60008060005b6004548110156109775761091d816004541190565b8015610942575061092d81610c21565b6001600160a01b0316856001600160a01b0316145b156109655783820361095757915061065f9050565b81610961816121f3565b9250505b8061096f816121f3565b915050610908565b5060405162461bcd60e51b8152602060048201526024808201527f4552433732315073693a206f776e657220696e646578206f7574206f6620626f604482015263756e647360e01b6064820152608401610764565b6001600160a01b0381163314610a3c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610764565b610a4682826114de565b5050565b610a53336108d1565b80610a625750610a6233610af2565b610a7e5760405162461bcd60e51b81526004016107649061220c565b610a888282611545565b60005b8181101561089b5760088054600181018255600091909152602081047ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301805460ff601f9093166101000a9283021916909117905580610aea816121f3565b915050610a8b565b600061065f60008051602061258483398151915283610d42565b610b15336108d1565b610b315760405162461bcd60e51b815260040161076490612243565b610b49600080516020612584833981519152826108dd565b50565b61089b83838360405180602001604052806000815250610f32565b6000610b7260045490565b8210610bce5760405162461bcd60e51b815260206004820152602560248201527f4552433732315073693a20676c6f62616c20696e646578206f7574206f6620626044820152646f756e647360d81b6064820152608401610764565b6000805b600454811015610c1a57610be7816004541190565b15610c0857838203610bfa579392505050565b81610c04816121f3565b9250505b80610c12816121f3565b915050610bd2565b5050919050565b600080610c2d8361155f565b509392505050565b610c3e336108d1565b610c5a5760405162461bcd60e51b815260040161076490612243565b610b496000826108dd565b60006001600160a01b038216610cd35760405162461bcd60e51b815260206004820152602d60248201527f4552433732315073693a2062616c616e636520717565727920666f722074686560448201526c207a65726f206164647265737360981b6064820152608401610764565b6000805b600454811015610d2e57610cec816004541190565b15610d1e57610cfa81610c21565b6001600160a01b0316846001600160a01b031603610d1e57610d1b826121f3565b91505b610d27816121f3565b9050610cd7565b5092915050565b610d406000336109cc565b565b60009182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600280546106749061214f565b610d85336108d1565b610da15760405162461bcd60e51b815260040161076490612243565b610b496000805160206125848339815191528261107a565b610dc2336108d1565b80610dd15750610dd133610af2565b610ded5760405162461bcd60e51b81526004016107649061220c565b600060088281548110610e0257610e02612272565b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555050565b336001600160a01b03831603610e865760405162461bcd60e51b815260206004820152601c60248201527f4552433732315073693a20617070726f766520746f2063616c6c6572000000006044820152606401610764565b3360008181526006602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610efb336108d1565b80610f0a5750610f0a33610af2565b610f265760405162461bcd60e51b81526004016107649061220c565b600a610a4682826122ce565b610f3c3383611172565b610f585760405162461bcd60e51b815260040161076490612189565b610f64848484846115f8565b50505050565b6060610f77826004541190565b610fd65760405162461bcd60e51b815260206004820152602a60248201527f4552433732315073693a2055524920717565727920666f72206e6f6e657869736044820152693a32b73a103a37b5b2b760b11b6064820152608401610764565b606060088381548110610feb57610feb612272565b90600052602060002090602091828204019190069054906101000a900460ff161561101f5761101861162d565b905061102a565b61102761163c565b90505b60008151116110485760405180602001604052806000815250611073565b806110528461164b565b60405160200161106392919061238e565b6040516020818303038152906040525b9392505050565b6000828152600760205260409020600101546110958161144e565b61089b83836114de565b6110a8336108d1565b806110b757506110b733610af2565b6110d35760405162461bcd60e51b81526004016107649061220c565b6009610a4682826122ce565b60006001600160e01b03198216637965db0b60e01b148061065f575061065f8261174c565b600081815260056020526040902080546001600160a01b0319166001600160a01b038416908117909155819061113982610c21565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061117f826004541190565b6111e35760405162461bcd60e51b815260206004820152602f60248201527f4552433732315073693a206f70657261746f7220717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610764565b60006111ee83610c21565b9050806001600160a01b0316846001600160a01b031614806112295750836001600160a01b031661121e846106f7565b6001600160a01b0316145b8061125957506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b60008061126d8361155f565b91509150846001600160a01b0316826001600160a01b0316146112e75760405162461bcd60e51b815260206004820152602c60248201527f4552433732315073693a207472616e73666572206f6620746f6b656e2074686160448201526b3a1034b9903737ba1037bbb760a11b6064820152608401610764565b6001600160a01b03841661134d5760405162461bcd60e51b815260206004820152602760248201527f4552433732315073693a207472616e7366657220746f20746865207a65726f206044820152666164647265737360c81b6064820152608401610764565b611358600084611104565b60006113658460016123cd565b600881901c600090815260208190526040902054909150600160ff1b60ff83161c16158015611395575060045481105b156113cb57600081815260036020526040812080546001600160a01b0319166001600160a01b0389161790556113cb90826117b7565b600084815260036020526040902080546001600160a01b0319166001600160a01b038716179055818414611404576114046000856117b7565b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050505050565b610b4981336117e3565b6114628282610d42565b610a465760008281526007602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561149a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6114e88282610d42565b15610a465760008281526007602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610a46828260405180602001604052806000815250611847565b60008061156d836004541190565b6115ce5760405162461bcd60e51b815260206004820152602c60248201527f4552433732315073693a206f776e657220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610764565b6115d783611862565b6000818152600360205260409020546001600160a01b031694909350915050565b611603848484611261565b61161184848460018561186e565b610f645760405162461bcd60e51b8152600401610764906123e0565b6060600980546106749061214f565b6060600a80546106749061214f565b6060816000036116725750506040805180820190915260018152600360fc1b602082015290565b8160005b811561169c5780611686816121f3565b91506116959050600a8361244b565b9150611676565b60008167ffffffffffffffff8111156116b7576116b7611fd4565b6040519080825280601f01601f1916602001820160405280156116e1576020820181803683370190505b5090505b8415611259576116f660018361245f565b9150611703600a86612472565b61170e9060306123cd565b60f81b81838151811061172357611723612272565b60200101906001600160f81b031916908160001a905350611745600a8661244b565b94506116e5565b60006001600160e01b031982166380ac58cd60e01b148061177d57506001600160e01b03198216635b5e139f60e01b145b8061179857506001600160e01b0319821663780e9d6360e01b145b8061065f57506301ffc9a760e01b6001600160e01b031983161461065f565b600881901c600090815260209290925260409091208054600160ff1b60ff9093169290921c9091179055565b6117ed8282610d42565b610a4657611805816001600160a01b031660146119a5565b6118108360206119a5565b604051602001611821929190612486565b60408051601f198184030181529082905262461bcd60e51b825261076491600401611ea3565b6004546118548484611b41565b61161160008583868661186e565b600061065f8183611ca6565b60006001600160a01b0385163b1561199857506001835b61188f84866123cd565b81101561199257604051630a85bd0160e11b81526001600160a01b0387169063150b7a02906118c89033908b90869089906004016124fb565b6020604051808303816000875af1925050508015611903575060408051601f3d908101601f1916820190925261190091810190612538565b60015b611960573d808015611931576040519150601f19603f3d011682016040523d82523d6000602084013e611936565b606091505b5080516000036119585760405162461bcd60e51b8152600401610764906123e0565b805181602001fd5b82801561197d57506001600160e01b03198116630a85bd0160e11b145b9250508061198a816121f3565b915050611885565b5061199c565b5060015b95945050505050565b606060006119b4836002612555565b6119bf9060026123cd565b67ffffffffffffffff8111156119d7576119d7611fd4565b6040519080825280601f01601f191660200182016040528015611a01576020820181803683370190505b509050600360fc1b81600081518110611a1c57611a1c612272565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611a4b57611a4b612272565b60200101906001600160f81b031916908160001a9053506000611a6f846002612555565b611a7a9060016123cd565b90505b6001811115611af2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611aae57611aae612272565b1a60f81b828281518110611ac457611ac4612272565b60200101906001600160f81b031916908160001a90535060049490941c93611aeb8161256c565b9050611a7d565b5083156110735760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610764565b60045481611b9f5760405162461bcd60e51b815260206004820152602560248201527f4552433732315073693a207175616e74697479206d7573742062652067726561604482015264074657220360dc1b6064820152608401610764565b6001600160a01b038316611c015760405162461bcd60e51b815260206004820152602360248201527f4552433732315073693a206d696e7420746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610764565b8160046000828254611c1391906123cd565b9091555050600081815260036020526040812080546001600160a01b0319166001600160a01b038616179055611c4990826117b7565b805b611c5583836123cd565b811015610f645760405181906001600160a01b038616906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480611c9e816121f3565b915050611c4b565b600881901c60008181526020849052604081205490919060ff808516919082181c8015611ce857611cd681611d9e565b60ff168203600884901b179350611d95565b60008311611d555760405162461bcd60e51b815260206004820152603460248201527f4269744d6170733a205468652073657420626974206265666f7265207468652060448201527334b73232bc103237b2b9b713ba1032bc34b9ba1760611b6064820152608401610764565b506000199091016000818152602086905260409020549091908015611d9057611d7d81611d9e565b60ff0360ff16600884901b179350611d95565b611ce8565b50505092915050565b600060405180610120016040528061010081526020016125a4610100913960f87e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff611de785611e08565b02901c81518110611dfa57611dfa612272565b016020015160f81c92915050565b6000808211611e1657600080fd5b5060008190031690565b6001600160e01b031981168114610b4957600080fd5b600060208284031215611e4857600080fd5b813561107381611e20565b60005b83811015611e6e578181015183820152602001611e56565b50506000910152565b60008151808452611e8f816020860160208601611e53565b601f01601f19169290920160200192915050565b6020815260006110736020830184611e77565b600060208284031215611ec857600080fd5b5035919050565b80356001600160a01b0381168114611ee657600080fd5b919050565b60008060408385031215611efe57600080fd5b611f0783611ecf565b946020939093013593505050565b600080600060608486031215611f2a57600080fd5b611f3384611ecf565b9250611f4160208501611ecf565b9150604084013590509250925092565b600060208284031215611f6357600080fd5b61107382611ecf565b60008060408385031215611f7f57600080fd5b82359150611f8f60208401611ecf565b90509250929050565b60008060408385031215611fab57600080fd5b611fb483611ecf565b915060208301358015158114611fc957600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561200557612005611fd4565b604051601f8501601f19908116603f0116810190828211818310171561202d5761202d611fd4565b8160405280935085815286868601111561204657600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561207257600080fd5b813567ffffffffffffffff81111561208957600080fd5b8201601f8101841361209a57600080fd5b61125984823560208401611fea565b600080600080608085870312156120bf57600080fd5b6120c885611ecf565b93506120d660208601611ecf565b925060408501359150606085013567ffffffffffffffff8111156120f957600080fd5b8501601f8101871361210a57600080fd5b61211987823560208401611fea565b91505092959194509250565b6000806040838503121561213857600080fd5b61214183611ecf565b9150611f8f60208401611ecf565b600181811c9082168061216357607f821691505b60208210810361218357634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526034908201527f4552433732315073693a207472616e736665722063616c6c6572206973206e6f6040820152731d081bdddb995c881b9bdc88185c1c1c9bdd995960621b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600060018201612205576122056121dd565b5060010190565b6020808252601e908201527f5265737472696374656420746f2061646d696e73206f722075736572732e0000604082015260600190565b6020808252601590820152742932b9ba3934b1ba32b2103a379030b236b4b7399760591b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b601f82111561089b57600081815260208120601f850160051c810160208610156122af5750805b601f850160051c820191505b81811015611446578281556001016122bb565b815167ffffffffffffffff8111156122e8576122e8611fd4565b6122fc816122f6845461214f565b84612288565b602080601f83116001811461233157600084156123195750858301515b600019600386901b1c1916600185901b178555611446565b600085815260208120601f198616915b8281101561236057888601518255948401946001909101908401612341565b508582101561237e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516123a0818460208801611e53565b8351908301906123b4818360208801611e53565b64173539b7b760d91b9101908152600501949350505050565b8082018082111561065f5761065f6121dd565b60208082526035908201527f4552433732315073693a207472616e7366657220746f206e6f6e20455243373260408201527418a932b1b2b4bb32b91034b6b83632b6b2b73a32b960591b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261245a5761245a612435565b500490565b8181038181111561065f5761065f6121dd565b60008261248157612481612435565b500690565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516124be816017850160208801611e53565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516124ef816028840160208801611e53565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061252e90830184611e77565b9695505050505050565b60006020828403121561254a57600080fd5b815161107381611e20565b808202811582820484141761065f5761065f6121dd565b60008161257b5761257b6121dd565b50600019019056fe2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e960001020903110a19042112290b311a3905412245134d2a550c5d32651b6d3a7506264262237d468514804e8d2b95569d0d495ea533a966b11c886eb93bc176c9071727374353637324837e9b47af86c7155181ad4fd18ed32c9096db57d59ee30e2e4a6a5f92a6be3498aae067ddb2eb1d5989b56fd7baf33ca0c2ee77e5caf7ff0810182028303840444c545c646c7425617c847f8c949c48a4a8b087b8c0c816365272829aaec650acd0d28fdad4e22d6991bd97dfdcea58b4d6f29fede4f6fe0f1f2f3f4b5b6b607b8b93a3a7b7bf357199c5abcfd9e168bcdee9b3f1ecf5fd1e3e5a7a8aa2b670c4ced8bbe8f0f4fc3d79a1c3cde7effb78cce6facbf9f8a26469706673582212209a52e94ba902fe78200527dcc5bad9c7eaef062806285ed28f8184b1e551029f64736f6c63430008110033";

type FLACertiblockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FLACertiblockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FLACertiblock__factory extends ContractFactory {
  constructor(...args: FLACertiblockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FLACertiblock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<FLACertiblock>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): FLACertiblock {
    return super.attach(address) as FLACertiblock;
  }
  override connect(signer: Signer): FLACertiblock__factory {
    return super.connect(signer) as FLACertiblock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FLACertiblockInterface {
    return new utils.Interface(_abi) as FLACertiblockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FLACertiblock {
    return new Contract(address, _abi, signerOrProvider) as FLACertiblock;
  }
}