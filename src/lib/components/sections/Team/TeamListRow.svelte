<script>
	import team from '$lib/data/team';

	export let selected;

	const groups = Object.keys(team);
</script>

<section>
	{#each groups as group}
		{#each team[group] as member}
			<button
				on:click={() => (selected = { group, member })}
				class:selected={selected?.member == member}
			>
				<div class="wrapper">
					<img src={member.image} alt={member.name} />
				</div>
			</button>
		{/each}
	{/each}
</section>

<style lang="postcss">
	section {
		@apply flex flex-nowrap pb-4;
		max-width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
	}

	button {
		@apply w-[25%] xs:w-[20%];
		aspect-ratio: 1/1;
		flex: 0 0 auto;
		padding: 0.5em;
		transform: scale(1, 1);
		transition: transform 0.3s;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
		border: 3px solid var(--blue-pale);
	}

	button:hover,
	button.selected {
		transform: scale(1.15, 1.15);
	}

	button:hover .wrapper,
	button.selected .wrapper {
		border: 3px solid #fff;
	}
</style>
