import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { SIGNER_KEY, IS_PUBLIC_MINT } from '$env/static/private';
import { ethers } from 'ethers';

const signer = new ethers.Wallet(
	SIGNER_KEY || '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
);

async function signAllowance(account) {
	const payload = ethers.utils.solidityKeccak256(['address'], [account]);
	return await signer.signMessage(ethers.utils.arrayify(payload));
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	if (!IS_PUBLIC_MINT) {
		throw error(401, 'Unauthorized');
	}

	const { account } = await event.request.json();

	return json({
		signature: await signAllowance(account)
	});
}
