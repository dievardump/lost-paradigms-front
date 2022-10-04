<script>
	import Button from '$lib/components/utils/Button.svelte';
	import { connectAccount, signer, signerAddress } from '$lib/modules/wallet';
	import OnlyConnected from './OnlyConnected.svelte';

	import OnlySupportedNetwork from './OnlySupportedNetwork.svelte';

	async function onConnect() {
		await connectAccount();
	}
</script>

{#if !$signer || !$signerAddress}
	<OnlyConnected>
		<div class="only-connected">
			<slot name="only-connected" />
			<Button props={{ rounded: true }} on:click={onConnect}>Connect Wallet</Button>
		</div>
	</OnlyConnected>
{:else}
	<OnlySupportedNetwork>
		<slot />
	</OnlySupportedNetwork>
{/if}

<style lang="postcss">
	.only-connected {
		@apply flex flex-col items-center justify-center py-8 gap-8;
	}
</style>
