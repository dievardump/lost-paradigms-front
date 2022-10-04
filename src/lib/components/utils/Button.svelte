<script>
	export let disabled;
	export let href = '';

	export let props = {
		rounded: false,
		target: undefined
	};
</script>

{#if href != ''}
	<a
		class="button"
		class:rounded={props.rounded}
		{disabled}
		{href}
		target={props.target || undefined}
		on:click><slot /></a
	>
{:else}
	<button class="button" class:rounded={props.rounded} on:click {disabled}>
		<slot />
	</button>
{/if}

<style lang="postcss">
	.button {
		@apply flex items-center justify-center px-6;
		height: 34px;
		background-color: transparent;
		color: var(--blue);
		font-size: var(--font-small);
		text-decoration: none;
		/* drop-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25); */
		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
		border-radius: 1px;
		border: 1px solid var(--blue);
		text-transform: uppercase;
	}

	.button:hover {
		background-color: var(--blue);
		color: #fff;
	}

	.button.rounded {
		background-color: var(--background);
		color: var(--foreground);
		border: 2px solid var(--foreground);
		border-radius: 16px;
	}

	.button[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
