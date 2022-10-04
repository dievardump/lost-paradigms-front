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
		width: 980px;
		height: 143px;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
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
		@apply flex justify-between items-center;
		margin-top: 43px;
		height: 85px;
		padding: 0 175px;
	}

	.button {
		width: 210px;
		height: 46px;
	}

	.logo {
		position: absolute;
		left: 50%;
		top: 20px;
		transform: translate(-50%, 0);
	}
</style>
