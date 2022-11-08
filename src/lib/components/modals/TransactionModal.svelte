<script>
	import { onMount } from 'svelte';

	import Button from '$lib/components/utils/Button.svelte';
	import Loader from '$lib/components/utils/Loader.svelte';
	import TxChecker from '$lib/components/utils/TxChecker.svelte';
	import ErrorComponent from '$lib/components/utils/ErrorComponent.svelte';

	import BaseModal from './BaseModal.svelte';

	export let title = '';
	export let txFn = () => {};
	export let callback = () => {};

	let txHash;
	let error;
	let loading = true;

	async function doTx() {
		loading = true;
		error = null;
		try {
			const tx = await txFn();
			txHash = tx.hash;
			await tx.wait();
		} catch (e) {
			error = e;
		}

		callback(error);

		loading = false;
	}

	async function onRetry() {
		doTx();
	}
	onMount(doTx);
</script>

<BaseModal>
	<header slot="header"><h1>{title}</h1></header>
	<div>
		{#if loading}
			<Loader>
				{#if !txHash}
					<p><strong>Follow your wallet instructions.</strong></p>
				{:else}
					<p><strong>Waiting for transaction to go through...</strong></p>
				{/if}
			</Loader>
		{:else if !error}
			<p><strong>Success!</strong></p>
		{/if}

		<div class="tx">
			<TxChecker {txHash} />
		</div>

		<ErrorComponent {error}>
			<div class="buttons">
				<Button on:click={onRetry}>Retry</Button>
			</div>
		</ErrorComponent>
	</div>
</BaseModal>

<style lang="postcss">
	header {
		@apply flex items-center justify-center py-8;
		max-width: calc(100vw - 2em);
	}

	div {
		width: 600px;
	}

	p {
		font-size: var(--font-s);
		text-align: center;
	}

	.tx {
		@apply text-center;
	}

	.buttons {
		@apply flex items-center justify-center;
		@apply my-16;
	}
</style>
