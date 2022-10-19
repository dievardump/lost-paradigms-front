<script>
	import { goto } from '$app/navigation';
	import { shortenAddress } from '$lib/modules/utils';
	import { disconnect, signer, signerAddress, connectAccount } from '$lib/modules/wallet';
	import ButtonDisconnect from './ButtonDisconnect.svelte';

	let hover = false;

	async function onDisconnect() {
		await disconnect();
	}

	async function onConnect() {
		await connectAccount();
		goto('/');
	}
</script>

<button
	on:click={onConnect}
	on:mouseover={() => (hover = true)}
	on:focus={() => (hover = true)}
	on:mouseout={() => (hover = false)}
	on:blur={() => (hover = false)}
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
{#if $signer}
	<ButtonDisconnect on:click={onDisconnect} />
{/if}

<style lang="postcss">
	button {
		@apply flex gap-4 items-center justify-center;
		position: relative;
		text-transform: uppercase;
		width: 100%;
		height: 60px;
		background: url(images/interface/button1.svg) center center no-repeat;
		overflow: hidden;
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
