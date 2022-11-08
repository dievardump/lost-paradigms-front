<script>
	import bars from '$lib/actions/bars';
</script>

<div class="bars" use:bars />
<span>TUNNEL VISITON / 2022</span>

<style lang="postcss">
	.bars {
		@apply grid grid-cols-4 gap-1;
		width: 108px;
	}

	span {
		font-size: var(--font-xs);
	}

	.bars :global(.bars__wraper) {
		@apply flex flex-col-reverse;
	}

	.bars :global(.bar) {
		width: 100%;
		height: 3px;
		background-color: #fff;
		opacity: 1;
		transition: opacity 0.7s;
		margin-top: 2px;
	}
</style>
