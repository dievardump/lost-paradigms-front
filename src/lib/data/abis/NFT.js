export default [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_vrfHandler',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [],
		name: 'AllowlistNotActive',
		type: 'error'
	},
	{
		inputs: [],
		name: 'AlreadyRevealed',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ApprovalCallerNotOwnerNorApproved',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ApprovalQueryForNonexistentToken',
		type: 'error'
	},
	{
		inputs: [],
		name: 'BalanceQueryForZeroAddress',
		type: 'error'
	},
	{
		inputs: [],
		name: 'CallerIsNotEOA',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MaxAllocationExceeded',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MaxFreeAllocationExceeded',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MaxPublicAllocationExceeded',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MintERC2309QuantityExceedsLimit',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MintToZeroAddress',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MintZeroQuantity',
		type: 'error'
	},
	{
		inputs: [],
		name: 'NotEnoughETHSent',
		type: 'error'
	},
	{
		inputs: [],
		name: 'NotRevealed',
		type: 'error'
	},
	{
		inputs: [],
		name: 'OwnerQueryForNonexistentToken',
		type: 'error'
	},
	{
		inputs: [],
		name: 'OwnershipNotInitializedForExtraData',
		type: 'error'
	},
	{
		inputs: [],
		name: 'PublicMintNotActive',
		type: 'error'
	},
	{
		inputs: [],
		name: 'PurchaseExceedsMaxSupply',
		type: 'error'
	},
	{
		inputs: [],
		name: 'TransferCallerNotOwnerNorApproved',
		type: 'error'
	},
	{
		inputs: [],
		name: 'TransferFromIncorrectOwner',
		type: 'error'
	},
	{
		inputs: [],
		name: 'TransferToNonERC721ReceiverImplementer',
		type: 'error'
	},
	{
		inputs: [],
		name: 'TransferToZeroAddress',
		type: 'error'
	},
	{
		inputs: [],
		name: 'URIQueryForNonexistentToken',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UnrecognizedHash',
		type: 'error'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool'
			}
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'fromTokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'toTokenId',
				type: 'uint256'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address'
			}
		],
		name: 'ConsecutiveTransfer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [],
		name: 'ALLOWLIST_TOKEN_PRICE',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'MAX_PUBLIC_MINT_PER_WALLET',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'PUBLIC_TOKEN_PRICE',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'TOTAL_MAX_SUPPLY',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes'
					},
					{
						internalType: 'address',
						name: 'mintToAddress',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'freeMintAllowance',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'allowListAllowance',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'freeMintCount',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'paidMintCount',
						type: 'uint256'
					}
				],
				internalType: 'struct LostParadigms.AllowListMintParams',
				name: 'p',
				type: 'tuple'
			}
		],
		name: 'allowListMint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'allowListMintActive',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'burn',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'flipAllowListActive',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'flipPublicMintActive',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'freeMintCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address'
			}
		],
		name: 'getAddressMintCounts',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'publicMinted',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'allowlistMinted',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'freeMinted',
						type: 'uint256'
					}
				],
				internalType: 'struct LostParadigms.MintCounts',
				name: '',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'getApproved',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getFinaleIds',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address'
			}
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'numberMinted',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_numberToMint',
				type: 'uint256'
			}
		],
		name: 'ownerMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '_numberToMint',
				type: 'uint256'
			}
		],
		name: 'ownerMintToAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'ownerOf',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'provenanceHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'provenanceMetadata',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes'
			},
			{
				internalType: 'address',
				name: 'mintToAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '_mintCount',
				type: 'uint256'
			}
		],
		name: 'publicMint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'publicMintActive',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes'
			}
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address'
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool'
			}
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'baseURI',
				type: 'string'
			}
		],
		name: 'setBaseURI',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'newProvenanceHash',
				type: 'bytes32'
			}
		],
		name: 'setProvenanceHash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'newProvenanceMetadata',
				type: 'string'
			}
		],
		name: 'setProvenanceMetadata',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_signatureVerifier',
				type: 'address'
			}
		],
		name: 'setSignatureVerifier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newVRFHandler',
				type: 'address'
			}
		],
		name: 'setVRFHandler',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'seed',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'shuffle',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			}
		],
		stateMutability: 'pure',
		type: 'function'
	},
	{
		inputs: [],
		name: 'signatureVerifier',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4'
			}
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'tokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'vrfHandler',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'withdrawFunds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'withdrawFundsToAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
