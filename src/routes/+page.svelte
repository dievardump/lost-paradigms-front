<script>
	import { page } from '$app/stores';
	import Access from '$lib/components/Access.svelte';
	import AccessRefused from '$lib/components/sections/AccessRefused.svelte';
	import AllowList from '$lib/components/sections/Mint/AllowList.svelte';
	import PublicSale from '$lib/components/sections/Mint/PublicSale.svelte';
	import { signer } from '$lib/modules/wallet';

	let state = $page.url.searchParams.get('state') || 0;
</script>

<svelte:head>
	<title>Lost Paradigms | Mint</title>
	<meta name="description" content="Lost Paradigms | Mint" />
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section on:click|capture={() => (state = (state + 1) % 4)}>
	{#if $signer}
		<Access>
			<div class="access-granted">
				<img src="/images/interface/checkmark.png" alt="" />
				<h2>ACCESS GRANTED</h2>
			</div>
		</Access>
		{#if state == 0}
			<AllowList state="before" />
		{:else if state == 1}
			<AllowList state="ongoing" />
		{:else if state == 2}
			<PublicSale state="before" />
		{:else if state == 3}
			<PublicSale state="ongoing" />
		{/if}
	{:else}
		<AccessRefused />
	{/if}
</section>

<style lang="postcss">
	section {
		@apply sm:mx-auto flex flex-col sm:max-w-[818px];
		overflow: auto;
	}

	.access-granted {
		@apply flex gap-4 items-center;
	}

	@screen sm {
		section {
			width: calc(100% - 2em);
		}
	}
</style>
