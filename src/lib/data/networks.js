import * as abis from './abis';

export default {
	1: {
		name: 'Ethereum',
		etherscan: 'https://etherscan.io',
		openseaBase: 'https://opensea.io',
		openseaSlug: 'https://opensea.io/collection/ethereal-states',
		opensea: 'https://opensea.io/assets/ethereum/0x4c1af8F4edeBbd73302BFbdb4227Ae92a6a64fde/',
		lokksrareBase: 'https://looksrare.org',
		looksrare: 'https://looksrare.org/collections/0x4c1af8F4edeBbd73302BFbdb4227Ae92a6a64fde/',
		looksrareSlug: 'https://looksrare.org/collections/0x4c1af8F4edeBbd73302BFbdb4227Ae92a6a64fde/',
		nft: {
			address: '0x4c1af8F4edeBbd73302BFbdb4227Ae92a6a64fde',
			abi: abis.NFT
		}
	},
	5: {
		name: 'Goerli',
		test: true,
		etherscan: 'https://goerli.etherscan.io',
		nft: {
			address: '0xA1D00D2614217b68E06F85dccd3cbebd7B1ABbAF',
			abi: abis.NFT,
			opensea: 'https://testnets.opensea.io/collection/lostparadigms',
			looksrare:
				'https://goerli.looksrare.org/collections/0xA1D00D2614217b68E06F85dccd3cbebd7B1ABbAF/'
		}
	},
	31337: {
		name: 'Hardhat',
		test: true,
		etherscan: 'https://rinkeby.etherscan.io',
		opensea: 'https://testnets.opensea.io/assets/0x75537828f2ce51be7289709686A69CbFDbB714F1/',
		looksrare:
			'https://rinkeby.looksrare.org/collections/0x75537828f2ce51be7289709686A69CbFDbB714F1/',
		nft: {
			address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
			abi: abis.NFT
		}
	}
};
