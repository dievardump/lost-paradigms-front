<script>
	import AnimatedOrb from './AnimatedOrb.svelte';
	import TunnelVision from './TunnelVision.svelte';
</script>

<div class="interface">
	<img class="battery" src="/images/interface/battery.svg" alt="" />
	<img class="slashes-left" src="/images/interface/slashes-left.svg" alt="" />
	<img class="slashes-right" src="/images/interface/slashes-right.svg" alt="" />
	<div class="animated-orb">
		<AnimatedOrb />
	</div>
	<div class="big">
		<img class="union-left" src="/images/interface/union-left.png" alt="" />
		<img class="union-right" src="/images/interface/union-right.png" alt="" />
		<img class="dont-be-afraid" src="/images/interface/dont-be-afraid.png" alt="" />
		<div class="tunnel-vision">
			<TunnelVision />
		</div>
	</div>
	<div class="large">
		<div class="union-left-top" />
		<div class="union-left-bottom" />
		<div class="union-right-top" />
		<div class="union-right-bottom" />
	</div>
</div>

<style lang="postcss">
	.interface {
		@apply hidden md:block;
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

	.tunnel-vision {
		position: absolute;
		bottom: 22px;
		left: 22px;
	}

	.union-left-top {
		position: absolute;
		top: 80px;
		left: 33px;
		height: calc(50vh - 80px);
		background: url(/images/interface/union-left-large.svg) top left no-repeat transparent;
		width: 106px;
	}

	.union-left-bottom {
		position: absolute;
		width: 106px;
		bottom: 80px;
		left: 33px;
		height: calc(50vh - 80px);
		background: url(/images/interface/union-left-large.svg) bottom left no-repeat transparent;
	}

	.union-right-top {
		position: absolute;
		top: 80px;
		right: 33px;
		height: calc(50vh - 80px);
		background: url(/images/interface/union-right-large.svg) top right no-repeat transparent;
		width: 106px;
	}

	.union-right-bottom {
		position: absolute;
		width: 106px;
		bottom: 80px;
		right: 33px;
		height: calc(50vh - 80px);
		background: url(/images/interface/union-right-large.svg) bottom right no-repeat transparent;
	}

	.big,
	.large {
		@apply hidden;
	}

	.big {
		@apply lg:block;
	}

	.large {
		@apply md:block lg:hidden;
	}
</style>
