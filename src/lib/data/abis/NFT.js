export default [
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
		name: 'FreeMintAlreadyClaimed',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MaxAllocationExceeded',
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
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes'
			},
			{
				internalType: 'uint256',
				name: '_freemintAllowance',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_allowListAllowance',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_freeMintCount',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_paidMintCount',
				type: 'uint256'
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
				name: '',
				type: 'address'
			}
		],
		name: 'freeMintClaimed',
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
				name: '',
				type: 'address'
			}
		],
		name: 'numberAllowListMinted',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'numberPublicMinted',
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
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes'
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
	}
];
