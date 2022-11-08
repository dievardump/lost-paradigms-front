<script>
	import { goto } from '$app/navigation';
	import { shortenAddress } from '$lib/modules/utils';
	import {
		disconnect,
		signer,
		signerAddress,
		connectAccount,
		hasWallet
	} from '$lib/modules/wallet';
	import { connectWeb3Modal } from '$lib/modules/wallet/web3Modal';
	import ButtonDisconnect from './ButtonDisconnect.svelte';

	let hover = false;

	async function onDisconnect() {
		await disconnect();
	}

	async function onConnect() {
		if ($hasWallet) {
			await connectAccount();
		} else {
			await connectWeb3Modal();
		}
		goto('/');
	}
</script>

<div class="wrapper">
	<div class="decoration">
		<svg width="40" height="60" viewBox="0 0 40 60"
			><path
				d="M40 0L0 0L0 50L40 60"
				stroke-width="2px"
				fill="none"
				style="stroke: var(--blue)"
			/></svg
		>
	</div>
	<div class="decoration">
		<svg width="40" height="60" viewBox="0 0 40 60"
			><path
				d="M40 0L0 0L0 50L40 60"
				stroke-width="2px"
				fill="none"
				style="stroke: var(--blue)"
			/></svg
		>
	</div>
	<button
		on:click={onConnect}
		on:mouseover={() => (hover = true)}
		on:focus={() => (hover = true)}
		on:mouseout={() => (hover = false)}
		on:blur={() => (hover = false)}
		name="enter the paradigm, connect wallet"
	>
		{#if $signer}
			{shortenAddress($signerAddress)}
		{:else}
			<div class="wallet">
				<img src="/images/interface/wallet{hover ? '-hover' : ''}.svg" alt="" />
			</div>
			<div class="text">
				<div class="mouseout">enter the<br />paradigm</div>
				<div class="mouseover">connect<br />wallet</div>
			</div>
		{/if}
	</button>
</div>
{#if $signer}
	<ButtonDisconnect on:click={onDisconnect} />
{/if}

<style lang="postcss">
	.wrapper {
		@apply px-[40px];
		position: relative;
	}

	.decoration {
		position: absolute;
		top: 0;
		left: 0;
		background: var(--box-back);
		clip-path: path('M40 0L0 0L0 50L40 60');
	}

	.decoration:nth-child(2) {
		left: auto;
		right: 0;
		transform: scale(-1, 1);
	}

	button {
		@apply flex gap-4 items-center justify-center;
		position: relative;
		text-transform: uppercase;
		width: 100%;
		height: 60px;
		background: var(--box-back);
		overflow: hidden;
		border: 1px solid var(--blue);
	}

	.wallet {
		flex: 0 0 35px;
	}

	.text {
		flex: 0 0 auto;
		position: relative;
		text-align: left;
	}

	.mouseout {
		opacity: 1;
		transform: translate(0, 0);
		transition: all 0.3s;
	}

	.mouseover {
		position: absolute;
		top: 50%;
		left: 0%;
		opacity: 0;
		transform: translate(0, 0);
		transition: all 0.5s;
	}

	button:hover .mouseout,
	button:focus .mouseout {
		opacity: 0;
		transform: translate(0, -50%);
	}

	button:hover .mouseover,
	button:focus .mouseover {
		opacity: 1;
		transform: translate(0, -50%);
	}
</style>
