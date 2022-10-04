<script>
	import team from '$lib/data/team';

	export let selected;

	const groups = Object.keys(team);
	const groupsChunks = {};
	for (const name of groups) {
		groupsChunks[name] = chunk(team[name], 2);
	}

	/**
	 * @param {any[]} array
	 * @param {number} size
	 */
	function chunk(array, size) {
		const chunks = [];
		for (let i = 0; i < array.length; i += size) {
			chunks.push(array.slice(i, i + size));
		}
		return chunks;
	}
</script>

{#each groups as group}
	<div class="team-group">
		<h3>{group}</h3>
		<div class="team-members">
			{#each groupsChunks[group] as members, index}
				<div class="group-line" class:reverse={index % 2 == 1}>
					{#each members as member}
						<div class="member">
							<div class="social">
								<a href={member.twitter} target="_blank">
									<img src="/images/pages/team/twitter.png" alt="Twitter of {member.name}" />
								</a>
							</div>
							<button class="member-data" on:click={() => (selected = { group, member })}>
								<div class="thumbnail">
									<img src={member.thumbnail} alt={member.name} />
								</div>
								<span> {member.name}</span>
							</button>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="postcss">
	.team-group {
		width: 400px;
	}

	h3 {
		@apply py-4;
		text-transform: uppercase;
		text-align: center;
		color: var(--yellow);
		letter-spacing: 1px;
	}

	.group-line {
		@apply grid grid-cols-2 pb-2;
	}

	.member {
		width: 200px;
		height: 152px;
		background: url(/images/pages/team/frame_thumbnail.png) center center no-repeat;
	}

	.member:nth-child(2) {
		background-image: url(/images/pages/team/frame_thumbnail-right.png);
	}

	.group-line.reverse .member {
		background-image: url(/images/pages/team/frame_thumbnail-reverse.png);
	}

	.group-line.reverse .member:nth-child(2) {
		background-image: url(/images/pages/team/frame_thumbnail-reverse-right.png);
	}

	.member {
		@apply flex;
	}

	.social {
		flex: 0 0 88px;
	}

	.social a {
		display: block;
		margin-top: 60px;
		margin-left: 30px;
	}

	.member-data {
		@apply px-2;
		flex: 1 1 0;
		font-size: var(--font-s);
	}

	.member-data .thumbnail {
		border: 1px solid var(--blue-pale);
		padding: 1px;
	}

	.member:nth-child(2) .social {
		order: 2;
	}

	button {
		width: 112px;
		@apply flex flex-col py-2 gap-2;
		overflow: visible;
		text-transform: uppercase;
	}

	.member:nth-child(1) button span {
		align-self: flex-end;
	}
</style>
