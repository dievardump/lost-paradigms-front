<script>
	import { shortenAddress } from '$lib/modules/utils';
	import ButtonEnter from '../Buttons/ButtonEnter.svelte';
</script>

<header>
	<div class="content">
		<a href="/" class="logo">
			<img src="/images/lost-paradigms.png" alt="Lost Paradigms" />
		</a>

		<div class="enter">
			<ButtonEnter />
		</div>

		<div class="socials">
			<ul>
				<li>
					<a class="os" href="https://opensea.io" target="_blank">
						<img src="/images/interface/opensea.svg" alt="OpenSea" />
					</a>
				</li>
				<li>
					<a class="tw" href="https://twitter.com/LostParadigms" target="_blank">
						<img src="/images/interface/twitter.svg" alt="Twitter" />
					</a>
				</li>
				<li>
					<a class="discord" href="http://discord.gg/cyberbrokers" target="_blank">
						<img src="/images/interface/discord.svg" alt="Discord" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		width: 980px;
		height: 143px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background: url(/images/interface/console-shape-top.png) center center no-repeat transparent;
	}

	.content {
		@apply flex items-center justify-between;
		padding: 0 110px;
		height: 100px;
		width: 100%;
		position: relative;
	}

	.logo {
		width: 200px;
		height: auto;
	}

	.enter {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		color: #fff;
		width: 285px;
		z-index: 2;
	}

	ul {
		@apply flex gap-8 justify-end;
	}

	li a {
		display: block;
		width: 36px;
		height: 36px;
		background-color: #fff;
		mask-repeat: no-repeat;
		mask-position: center center;
	}

	li a:hover,
	li a:focus {
		background-color: var(--blue);
	}

	a.os {
		mask-image: url(/images/interface/opensea.svg);
	}

	a.tw {
		mask-image: url(/images/interface/twitter.svg);
	}

	a.discord {
		mask-image: url(/images/interface/discord.svg);
	}

	li a img {
		display: none;
	}
</style>
