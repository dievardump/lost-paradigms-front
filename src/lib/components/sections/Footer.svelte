<script>
	import ButtonAbout from '../Buttons/ButtonAbout.svelte';
	import ButtonTeam from '../Buttons/ButtonTeam.svelte';
</script>

<footer>
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
</footer>

<style lang="postcss">
	footer {
		width: 100%;
		max-width: 390px;
		height: 86px;
		position: absolute;
		bottom: 0;

		left: 50%;
		transform: translateX(-50%);
		background: url(/images/interface/footer-mobile.png) center center no-repeat;
		background-size: 100% auto;
		overflow: hidden;
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
			max-width: none;
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
