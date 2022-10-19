<script>
	import TeamDirectory from '$lib/components/sections/Team/TeamDirectory.svelte';
	import TeamList from '$lib/components/sections/Team/TeamList.svelte';
	import TeamListRow from '$lib/components/sections/Team/TeamListRow.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let selected;

	let mq;

	let teamComponent;
	function onMQ(e) {
		if (e.matches) {
			teamComponent = TeamList;
		} else {
			teamComponent = TeamListRow;
		}
		console.log(e.matches, teamComponent);
	}

	onMount(() => {
		mq = window.matchMedia('(min-width: 1180px)');
		mq.addEventListener('change', onMQ);
		onMQ(mq);
	});

	onDestroy(() => {
		mq && mq.removeEventListener('change', onMQ);
	});
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
			{#if teamComponent}
				<svelte:component this={teamComponent} bind:selected />
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col max-w-[600px] md:max-w-[1196px] mt-4 md:mt-0;
		height: calc(100vh - 288px);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 2em);
		overflow: hidden;
	}

	.content {
		@apply md:grid md:grid-cols-2 mx-auto md:w-full;
		height: 100%;
		overflow: hidden;
	}

	.view {
		@apply flex items-center;
	}

	@screen md {
		.team-list.with-selection {
			transform: translateX(130px);
		}

		.team-list {
			width: 420px;
			padding: 0 10px;
			height: 100%;
			overflow: auto;
			/* transform: translateX(0); */
			transition: all 0.5s;
			transform: translateX(-50%);
		}
	}
</style>
