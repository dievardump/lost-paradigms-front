<script>
	import { onDestroy, onMount } from 'svelte';

	/**
	 * @type {NodeJS.Timeout}
	 */
	let timeout;

	let from = 0;
	let to = 0;

	let angle = from;
	let duration = 5000;
	let startTime = 0;

	let newDelta = 0;
	function start() {
		from = to;

		let temp = 90 + ~~(Math.random() * 180);
		if (newDelta > 0) {
			temp = -temp;
		}
		newDelta = temp;
		to = from + newDelta;
		duration = 4000 + Math.random() * 8000;
		startTime = Date.now();

		onAnimate();
	}

	function onAnimate() {
		let a = Math.min(1, (Date.now() - startTime) / duration);

		angle = ~~(from + (to - from) * a);

		if (a >= 1) {
			timeout = setTimeout(start, 1000 / 25);
		} else {
			timeout = setTimeout(onAnimate, 1000 / 25);
		}
	}

	onMount(start);
	onDestroy(() => clearTimeout(timeout));
</script>

<img style="transform: rotate({angle}deg);" src="/images/interface/animated-orb.svg" alt="" />

<style>
</style>
