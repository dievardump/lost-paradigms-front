<script>
	import ButtonAbout from '../Buttons/ButtonAbout.svelte';
	import ButtonTeam from '../Buttons/ButtonTeam.svelte';

	let clientWidth = 0;
	let width;
	let half;
	$: if (clientWidth) {
		width = clientWidth % 2 == 0 ? clientWidth - 2 : clientWidth - 3;
		half = clientWidth / 2;
	}
</script>

<footer bind:clientWidth>
	<nav class="buttons">
		<div class="button">
			<ButtonAbout />
		</div>
		<div class="button">
			<ButtonTeam />
		</div>
	</nav>

	<a href="/" class="logo">
		<img src="/images/logo.png" alt="Lost Paradigms" />
	</a>

	{#if half}
		<svg id="mask" class="mobile-bg" viewBox="0 0 {width} 86" {width} height="86" fill="none">
			<path
				d="M0 15H{half - 50}L{half - 35} 0H{half + 35}L{half + 50} 15H{width}V86H0z"
				stroke="#39eeff"
				stroke-width="2"
			/>
		</svg>
	{/if}
</footer>

<style lang="postcss">
	footer {
		width: 100%;
		height: 86px;
		position: absolute;
		bottom: 0;

		left: 50%;
		transform: translateX(-50%);
		/* background: url(/images/interface/footer-mobile.png) center center no-repeat; */
		/* background-size: 100% auto; */
		overflow: hidden;
		background: var(--box-back);
	}

	.mobile-bg {
		@apply block sm:hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.buttons {
		@apply flex justify-between items-center;
		margin-top: 5px;
		height: 85px;
		padding: 0 15px;
		font-size: var(--font-s);
	}

	.button {
		width: 137px;
		height: 46px;
	}

	.logo {
		position: absolute;
		left: 50%;
		top: 20px;
		transform: translate(-50%, 0);
		width: 45px;
	}

	@screen sm {
		footer {
			height: 143px;
			width: 980px;
			background: transparent;
		}

		footer::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			display: block;
			width: 100%;
			height: 100%;
			transform: scale(1, -1);
			background: url(/images/interface/console-shape-top.png) center center no-repeat transparent;
		}

		.buttons {
			padding: 0 175px;
			margin-top: 43px;
			font-size: var(--font-normal);
		}

		.button {
			width: 210px;
			height: 48px;
		}

		.logo {
			width: auto;
		}
	}
</style>
