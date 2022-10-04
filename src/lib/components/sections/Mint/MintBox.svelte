<script>
	import { createEventDispatcher } from 'svelte';

	/**
	 * @type {number}
	 */
	export let amount;
	/**
	 * @type {number}
	 */
	export let max;

	/**
	 * @type {string}
	 */
	export let price;

	const dispatch = createEventDispatcher();

	function onSubmit() {
		dispatch('submit');
	}
</script>

<div class="mint-box">
	<div class="selector">
		<button disabled={amount <= 1} on:click={() => amount--}
			><img src="/images/interface/minus-thin.svg" alt="Less" /></button
		>
		<div>
			<strong>{amount}</strong>
			<span>{price}</span>
		</div>
		<button disabled={amount >= max} on:click={() => amount++}
			><img src="/images/interface/plus-thin.svg" alt="More" /></button
		>
	</div>
	<button class="mint" on:click={onSubmit}>MINT</button>
</div>

<style lang="postcss">
	.mint-box {
		@apply mx-auto;
		border: 1px solid var(--blue);
		width: 312px;
	}

	.mint-box .selector {
		@apply flex;
		width: 100%;
		height: 90px;
		border-bottom: 1px solid var(--blue);
	}

	.selector button,
	.selector div {
		@apply flex flex-col justify-center items-center;
	}

	.selector button {
		flex: 0 0 65px;
	}

	.selector div {
		flex: 1 1 0;
		border: 1px solid var(--blue);
		border-top: none;
		border-bottom: none;
	}

	.selector div span {
		font-size: var(--font-xs);
	}

	.mint {
		@apply py-6 text-center w-full;
	}

	.mint-box button:hover {
		background-color: var(--blue);
		color: #000;
	}
</style>
