<script>
	import { getNetwork } from '$lib/modules/networks';
	import { shortenAddress } from '$lib/modules/utils';
	import { chainId } from '$lib/modules/wallet';

	export let txHash;
</script>

{#if txHash}
	<p>
		Your transaction: <a
			href="{getNetwork($chainId).etherscan}/tx/{txHash}"
			target="_blank"
			rel="external noreferrer">{shortenAddress(txHash)}</a
		>
	</p>
{/if}

<style lang="postcss">
	p {
		@apply my-8;
		font-size: var(--font-s);
	}

	a {
		text-decoration: underline;
	}
</style>
