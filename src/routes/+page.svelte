<script>
	import Access from '$lib/components/Access.svelte';
	import AccessInitiate from '$lib/components/sections/AccessInitiate.svelte';
	import AllowList from '$lib/components/sections/Mint/AllowList.svelte';
	import PublicSale from '$lib/components/sections/Mint/PublicSale.svelte';
	import Loader from '$lib/components/utils/Loader.svelte';
	import { isAllowlistMintActive, isPublicMintActive } from '$lib/modules/contracts/nft';
	import { signerAddress } from '$lib/modules/wallet';
	import { onDestroy } from 'svelte';

	let loading;

	let type;
	let state;
	let allowListActive;
	let publicActive;

	let timeout;
	// let state = $page.url.searchParams.get('state') || 0;

	$: $signerAddress && init();
	$: selectState(type, allowListActive, publicActive);

	async function init() {
		loading = true;
		await checkActives();

		if (!allowListActive && !publicActive) {
			onSetType('allowlist');
		} else if (allowListActive) {
			onSetType('allowlist');
		} else {
			onSetType('public');
		}

		loading = false;
	}

	async function checkActives() {
		clearTimeout(timeout);

		allowListActive = await isAllowlistMintActive();
		publicActive = await isPublicMintActive();

		timeout = setTimeout(checkActives, 10000);
	}

	function onSetType(newType) {
		type = newType;
	}

	function selectState() {
		if (type == 'allowlist') {
			state = allowListActive ? 'ongoing' : 'before';
		} else {
			state = publicActive ? 'ongoing' : 'before';
		}
	}

	onDestroy(() => clearTimeout(timeout));
</script>

<svelte:head>
	<title>Lost Paradigms | Mint</title>
	<meta name="description" content="Lost Paradigms | Mint" />
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section>
	{#if $signerAddress}
		<Access>
			<div class="access-granted">
				<img src="/images/interface/checkmark.png" alt="" />
				<h2>ACCESS GRANTED</h2>
				{#if !loading}
					<div class="buttons">
						<button class:selected={type == 'allowlist'} on:click={() => onSetType('allowlist')}
							>Allowlist</button
						>
						<span>-</span>
						<button class:selected={type == 'public'} on:click={() => onSetType('public')}
							>Public Mint</button
						>
					</div>
				{/if}
			</div>
		</Access>
		{#if loading}
			<Loader />
		{:else if !type || !state}
			<AccessInitiate />
		{:else if type == 'allowlist'}
			<AllowList {state} />
		{:else}
			<PublicSale {state} />
		{/if}
	{/if}
</section>

<style lang="postcss">
	section {
		@apply sm:mx-auto flex flex-col sm:max-w-[818px];
		overflow: auto;
		flex: 1 1 0;
	}

	.access-granted {
		@apply flex gap-4 items-center relative;
	}

	.buttons {
		@apply flex items-center justify-center pt-6 gap-6 absolute;
		top: 100%;
		width: 100%;
	}

	button {
		color: var(--blue);
	}

	button.selected,
	button:hover,
	button:focus {
		color: #fff;
	}

	button.selected {
		text-decoration: underline;
	}

	@screen sm {
		section {
			@apply relative;
			top: -15px;
			width: calc(100% - 2em);
		}
	}
</style>
