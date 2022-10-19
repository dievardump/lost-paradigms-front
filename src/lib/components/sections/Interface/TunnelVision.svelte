<script>
	import { onDestroy, onMount } from 'svelte';
	import Bars from './Bars.svelte';

	const FPS = 1000 / 10;

	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let timeout = undefined;

	let bars = [0, 0, 0, 0];

	function setBars() {
		for (let i = 0; i < bars.length; i++) {
			bars[i] = !bars[i] || Math.random() < 0.3 ? 1 + Math.random() * 15 : bars[i];
		}

		bars = bars;
	}
	function onAnimate() {
		setBars();
		timeout = setTimeout(onAnimate, FPS);
	}

	onMount(onAnimate);

	onDestroy(() => clearTimeout(timeout));
</script>

<div class="bars">
	<Bars on={bars[0]} />
	<Bars on={bars[1]} />
	<Bars on={bars[2]} />
	<Bars on={bars[3]} />
</div>
<span>TUNNEL VISITON / 2022</span>

<style lang="postcss">
	.bars {
		@apply grid grid-cols-4 gap-1;
		width: 108px;
	}

	span {
		font-size: var(--font-xs);
	}
</style>
