import { connectWithGivenProvider } from './index';

export async function connectWeb3Modal(ethers = window.ethers) {
	const { default: WalletConnectProvider } = await import(
		'@walletconnect/web3-provider/dist/umd/index.min.js'
	);
	const { default: Web3Modal } = await import('web3modal');

	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider, // required
			options: {
				infuraId: '6e43a97f174f4b5188c068d179d7ac63' // required
			}
		}
	};

	const web3Modal = new Web3Modal({
		network: 'mainnet', // optional
		cacheProvider: true, // optional
		providerOptions // required
	});

	const ethereumProvider = await web3Modal.connect();

	const provider = new ethers.providers.Web3Provider(ethereumProvider);

	await connectWithGivenProvider(ethereumProvider, provider);
}
