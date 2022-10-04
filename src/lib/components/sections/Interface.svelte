<script>
	import AnimatedOrb from '$lib/components/AnimatedOrb.svelte';
</script>

<div class="interface">
	<img class="battery" src="/images/interface/battery.svg" alt="" />
	<img class="slashes-left" src="/images/interface/slashes-left.svg" alt="" />
	<img class="slashes-right" src="/images/interface/slashes-right.svg" alt="" />
	<img class="union-left" src="/images/interface/union-left.png" alt="" />
	<img class="union-right" src="/images/interface/union-right.png" alt="" />
	<img class="dont-be-afraid" src="/images/interface/dont-be-afraid.png" alt="" />
	<div class="animated-orb">
		<AnimatedOrb />
	</div>
</div>

<style>
	.interface {
		position: absolute;
		overflow: visible;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.battery {
		position: absolute;
		top: 36px;
		left: 33px;
	}

	.union-left {
		position: absolute;
		top: 80px;
		left: 33px;
	}

	.slashes-left {
		position: absolute;
		top: 22px;
		left: 202px;
	}

	.slashes-right {
		position: absolute;
		top: 22px;
		right: 202px;
	}

	.union-right {
		position: absolute;
		bottom: 80px;
		right: 33px;
	}

	.dont-be-afraid {
		position: absolute;
		top: 22px;
		right: 33px;
	}

	.animated-orb {
		position: absolute;
		bottom: 22px;
		right: 22px;
	}
</style>
