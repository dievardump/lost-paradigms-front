<script>
	import { page } from '$app/stores';
	import Access from '$lib/components/Access.svelte';
	import AccessRefused from '$lib/components/sections/AccessRefused.svelte';
	import AllowList from '$lib/components/sections/Mint/AllowList.svelte';
	import PublicSale from '$lib/components/sections/Mint/PublicSale.svelte';
	import { signer } from '$lib/modules/wallet';

	let selected;

	let state = $page.url.searchParams.get('state') || 1;
</script>

<svelte:head>
	<title>Lost Paradigms | Mint</title>
	<meta name="description" content="Lost Paradigms | Mint" />
</svelte:head>

<section>
	{#if $signer}
		<Access>
			<div class="access-granted">
				<img src="/images/interface/checkmark.png" alt="" />
				<h2>ACCESS GRANTED</h2>
			</div>
		</Access>
		{#if state == 1}
			<AllowList state="before" />
		{:else if state == 2}
			<AllowList state="ongoing" />
		{:else if state == 3}
			<PublicSale state="before" />
		{:else if state == 4}
			<PublicSale state="ongoing" />
		{/if}
	{:else}
		<AccessRefused />
	{/if}
</section>

<style lang="postcss">
	section {
		@apply mx-auto flex flex-col;
		max-width: 818px;
		width: calc(100% - 2em);
		overflow: auto;
	}

	.access-granted {
		@apply flex gap-4 items-center;
	}
</style>
