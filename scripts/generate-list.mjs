import { ethers } from 'ethers';

const signer = new ethers.Wallet(
	'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
);

const accounts = [
	'0xD969F09fe55FfB0e64954fc51E2D8af764caa8b0', //mike
	'0x3a71c05b9666e49B5dC15Df245b6D16D8F66f710', //tip
	'0x9ef4314BEb6bab7236eAaaa261747c7cD5885372', //dot
	'0x7B7D2B971a7aF3F5fb96F3047d04E4D5DaE86fB4', //etta
	'0xF4274229bEe63d4A6D1edDE6919aFa815f6e1a24', // dvdtest
	'0x3443Ab9A6bc24EE3C7B196E3080082bb21d9Ba6F', // visual
	'0xD1edDfcc4596CC8bD0bd7495beaB9B979fc50336'
];

async function signAllowance(account, freeMints, reducedMints) {
	const payload = ethers.utils.solidityKeccak256(
		['address', 'uint256', 'uint256'],
		[account, freeMints, reducedMints]
	);
	return await signer.signMessage(ethers.utils.arrayify(payload));
}
(async () => {
	const endValues = {};

	for (const account of accounts) {
		const [freeMints, reducedMints] = [1 + ~~(Math.random() * 5), 1 + ~~(Math.random() * 18)];
		endValues[account] = {
			freeMints,
			reducedMints,
			signature: await signAllowance(account, freeMints, reducedMints)
		};
	}

	console.log(JSON.stringify(endValues));
})();
