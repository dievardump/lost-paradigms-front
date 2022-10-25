<script>
	import Button from '$lib/components/utils/Button.svelte';

	export let selected;
</script>

<div class="directory">
	<header>
		<h3>{selected?.group ?? ''}</h3>
	</header>
	<div class="content">
		<div class="wrapper">
			<div class="visual">
				<img src={selected.member.image} alt={selected.member.name} />
			</div>
			<div class="data">
				<h4 class="member-name">
					<span>@</span>{selected.member.name}
				</h4>
				<div class="member-content">
					{@html selected.member.content}
				</div>
				<Button href={selected.member.twitter} props={{ target: '_blank' }}>Follow</Button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.directory {
		@apply flex flex-col;
		width: 598px;
		max-height: 100%;
		min-height: 300px;
		overflow: hidden;
	}

	header {
		@apply grid grid-cols-2;
		text-align: center;
		height: 42px;
		flex: 0 0 auto;
		position: relative;
		z-index: -1;
	}

	header::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: 50%;
		top: 0;
		height: 100vh;
		width: 598px;
		transform: translate(-50%, 0);
		background: rgba(2, 14, 17, 0.65);
		backdrop-filter: blur(7.5px);
		clip-path: path('M0 42L27 27L264 27L312 1L560 1L597 26L597 42L598 2000L0 2000z');
	}

	header::after {
		content: '';
		background: url(/images/interface/top-decoration-2.png) no-repeat center center;
		position: absolute;
		z-index: -1;
		height: 100%;
		width: 100%;
		/* height: 65px; */
		left: 0;
		top: 0;
		background-size: auto 100%;
	}

	h3 {
		@apply col-start-2;
		position: relative;
		left: -10px;
		line-height: 42px;
		text-transform: uppercase;
		color: var(--yellow);
	}

	.content {
		@apply flex;
		border: 2px solid var(--blue-pale);
		border-top: none;
		flex: 1 1 0;
	}

	.wrapper {
		@apply mx-16 mt-8 mb-16 grid grid-cols-2;
		flex: 1 1 0;
		height: 341px;
	}

	.visual {
		@apply flex items-center;
		border: 3px dotted var(--blue-pale);
	}

	.visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.data {
		@apply p-8 flex flex-col gap-8;
		border: 2px solid var(--blue-pale);
		border-left: none;
	}

	.member-name {
		text-transform: uppercase;
	}

	.member-name span {
		color: var(--blue);
		padding-right: 2px;
	}

	.member-content {
		@apply flex flex-col gap-4;
		font-size: var(--font-s);
		opacity: 0.6;
		flex: 1 1 0;
		overflow: auto;
	}

	.data :global(.button) {
		align-self: flex-start;
		@apply px-12;
	}
</style>
