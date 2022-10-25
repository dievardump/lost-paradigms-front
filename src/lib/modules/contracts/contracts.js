import { getNetwork } from '$lib/modules/networks';
import { getChainId, getSignerOrProvider } from '../wallet';

export function getNFTContract(forceAddress = null) {
	const contract = getNetwork(getChainId()).nft;
	return new ethers.Contract(forceAddress || contract.address, contract.abi, getSignerOrProvider());
}
