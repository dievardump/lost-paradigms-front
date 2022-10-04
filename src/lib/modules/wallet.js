import { get, writable } from 'svelte/store';
import { connectWallet } from './provider';

export const ethereumProvider = writable(null);
export const signer = writable(null);
export const signerAddress = writable(null);
export const provider = writable(null);
export const chainId = writable(null);
export const connected = writable(false);
export const hasWallet = writable(false);
export const checkedWallet = writable(false);

ethereumProvider.subscribe((value) => {
	if (value) {
		value.on('accountsChanged', handleAccountsChanged);
		// value.on('chainChanged', (id) => handleChainChanged(id, true));
		value.on('chainChanged', (id) => window.location.reload());
	}
});

async function getInstances(ethers = window.ethers) {
	const instances = await connectWallet(ethers);
	provider.set(instances.provider);
	ethereumProvider.set(instances.ethereumProvider);
}

let initialized = false;
function initialize(ethers = window.ethers) {
	if (!initialized) {
		initialized = true;
		if (!window.ethereum) {
			window.addEventListener('ethereum#initialized', () => connect(ethers), {
				once: true,
			});
		}
	}
}
export async function connect(ethers = window.ethers) {
	try {
		initialize(ethers);
		await getInstances(ethers);
		hasWallet.set(true);

		if (localStorage.getItem('wallet:accountConnected')) {
			await connectAccount();
		}
	} catch (e) {
		console.log(e);
	}
	checkedWallet.set(true);
}

export async function connectAccount() {
	await get(ethereumProvider).request({ method: 'eth_requestAccounts' });

	const chainId = await get(ethereumProvider).request({ method: 'eth_chainId' });

	await handleChainChanged(chainId, false);
	await handleAccountsChanged();

	localStorage.setItem('wallet:accountConnected', 'true');
	connected.set(true);
}

export function disconnect() {
	localStorage.removeItem('wallet:accountConnected');
	signer.set(null);
	signerAddress.set(null);
}

// on account change
async function handleAccountsChanged() {
	try {
		const _signer = getProvider().getSigner();
		signer.set(_signer);

		// get current signer address.
		if (_signer) {
			signerAddress.set(await _signer.getAddress());
		} else {
			// null if disconnected
			signerAddress.set(null);
		}
	} catch (e) {}
}

async function handleChainChanged(_chainId, refresh = true) {
	if (refresh) {
		await getInstances();
		await handleAccountsChanged();
	}
	chainId.set(_chainId);
}

export function getChainId() {
	return get(chainId);
}

export function getSignerOrProvider() {
	return get(signer) || get(provider);
}

export function getSigner() {
	return get(signer);
}

export function getEthereumProvider() {
	return get(ethereumProvider);
}

export function getProvider() {
	return get(provider);
}

export async function changeChainFor(chainId) {
	await ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId }],
	});
}

export async function connectWithWeb3Modal(providerEthereum, ethersProvider) {
	provider.set(ethersProvider);
	ethereumProvider.set(providerEthereum);
	hasWallet.set(true);

	const chainId = await get(ethereumProvider).request({ method: 'eth_chainId' });
	await handleChainChanged(chainId, false);
	await handleAccountsChanged();

	// await connectAccount();
	checkedWallet.set(true);
}
