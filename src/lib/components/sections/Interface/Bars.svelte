<script>
	export let on = 0;
</script>

<div class="bars__wraper">
	{#each Array(15) as _, i}
		<div class="bar" style="opacity: {on >= i ? '1' : '0'}" />
	{/each}
</div>

<style lang="postcss">
	.bars__wraper {
		@apply flex flex-col-reverse;
	}

	.bar {
		width: 100%;
		height: 3px;
		background-color: #fff;
		opacity: 1;
		transition: opacity 0.7s;
		margin-top: 2px;
	}
</style>
