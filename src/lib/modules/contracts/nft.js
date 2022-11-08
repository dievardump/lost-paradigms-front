import { getNFTContract } from './contracts';
import { signer } from '../wallet';

let contract;

signer.subscribe((value) => {
	if (value) {
		contract = getNFTContract();
	} else {
		contract = null;
	}
});

export function getAddressMintCounts(account) {
	return contract.getAddressMintCounts(account).then((counts) => ({
		publicMinted: counts.publicMinted.toNumber(),
		allowlistMinted: counts.allowlistMinted.toNumber(),
		freeMinted: counts.freeMinted.toNumber()
	}));
}

export function getAllowlistPrice() {
	return contract.ALLOWLIST_TOKEN_PRICE();
}

export function getPublicPrice() {
	return contract.PUBLIC_TOKEN_PRICE();
}

export function isAllowlistMintActive() {
	return contract.allowListMintActive();
}

export function isPublicMintActive() {
	return contract.publicMintActive();
}

export async function allowlistMint(allowListMintParams, value) {
	return contract.allowListMint(allowListMintParams, {
		value
	});
}

export async function publicMint(signature, to, amount, value) {
	return contract.publicMint(signature, to, amount, {
		value
	});
}
