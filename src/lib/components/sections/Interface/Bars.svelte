<script>
	export let on = 0;
</script>

<div class="bars__wraper">
	{#each Array(15) as _, i}
		<div class="bar" style="opacity: {on >= i ? '1' : '0'}" />
	{/each}
</div>

<style lang="postcss">
</style>
