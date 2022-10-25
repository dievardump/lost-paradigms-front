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

export function getFreeMintClaimed(account) {
	return contract.freeMintClaimed(account).then((a) => a.toNumber());
}

export function getUserAllowlistMinted(account) {
	return contract.numberAllowListMinted(account).then((a) => a.toNumber());
}

export function getAllowlistPrice() {
	return contract.ALLOWLIST_TOKEN_PRICE();
}

export function isAllowlistMintActive() {
	return contract.allowListMintActive();
}

export function isPublicMintActive() {
	return contract.publicMintActive();
}

export async function allowlistMint(
	signature,
	freeAllotment,
	reducedAllotment,
	free,
	reduced,
	value
) {
	try {
		await contract.callStatic.allowListMint(
			signature,
			freeAllotment,
			reducedAllotment,
			free,
			reduced,
			{
				value
			}
		);
	} catch (e) {
		console.log(e);
	}
	return contract.allowListMint(signature, freeAllotment, reducedAllotment, free, reduced, {
		value
	});
}
