<script>
	import TeamDirectory from '$lib/components/sections/Team/TeamDirectory.svelte';
	import TeamList from '$lib/components/sections/Team/TeamList.svelte';

	let selected;
</script>

<svelte:head>
	<title>Lost Paradigms | Team</title>
	<meta name="description" content="Lost Paradigms | Team" />
</svelte:head>

<section>
	<div class="content">
		<div class="view">
			{#if selected}
				<TeamDirectory {selected} />
			{/if}
		</div>
		<div class="team-list" class:with-selection={!!selected}>
			<TeamList bind:selected />
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col;
		height: calc(100vh - 320px);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 1196px;
		width: calc(100% - 2em);
		overflow: hidden;
	}

	.view {
		@apply flex items-center;
	}

	.content {
		@apply grid grid-cols-2 mx-auto;
		height: 100%;
		overflow: hidden;
		width: 100%;
	}

	.team-list {
		height: 100%;
		overflow: auto;
		padding-right: 26px;
		padding-left: 140px;
		transform: translateX(0);
		transition: all 0.5s;
	}

	.team-list:not(.with-selection) {
		transform: translateX(-50%);
		padding-left: 98px;
		padding-right: 98px;
	}
</style>
