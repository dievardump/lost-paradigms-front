<script>
	import { getNetwork } from '$lib/modules/networks';
	import { chainId } from '$lib/modules/wallet';
	import { shortenAddress } from '$lib/modules/utils';
	import BigButtonEnter from '../Buttons/BigButtonEnter.svelte';
	import ButtonEnter from '../Buttons/ButtonEnter.svelte';

	let opensea = 'https://opensea.io/collection/lostparadigms';

	$: {
		if ($chainId) {
			const network = getNetwork($chainId);
			opensea = network.nft.opensea;
		}
	}
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
					<a class="os" href={opensea} rel="external noreferrer" target="_blank">
						<img src="/images/interface/opensea.svg" alt="OpenSea" />
					</a>
				</li>
				<li>
					<a
						class="tw"
						href="https://twitter.com/LostParadigms"
						rel="external noreferrer"
						target="_blank"
					>
						<img src="/images/interface/twitter.svg" alt="Twitter" />
					</a>
				</li>
				<li>
					<a
						class="discord"
						href="http://discord.gg/cyberbrokers"
						rel="external noreferrer"
						target="_blank"
					>
						<img src="/images/interface/discord.svg" alt="Discord" />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="enter-after">
		<BigButtonEnter />
	</div>
</header>

<style lang="postcss">
	header {
		width: 100%;
		position: absolute;
		top: 0;
	}

	.content {
		@apply flex items-center justify-between px-4;
		height: 60px;
		width: 100%;
		position: relative;
		background-color: black;
	}

	.logo {
		max-width: 200px;
		width: 40%;
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

	.enter-after {
		@apply block sm:hidden;
	}

	.enter {
		@apply hidden sm:block;
	}

	@screen sm {
		header {
			width: 980px;
			height: 143px;
			background: url(/images/interface/console-shape-top.png) center center no-repeat transparent;

			left: 50%;
			transform: translateX(-50%);
		}

		.content {
			background-color: transparent;
			height: 100px;
			padding: 0 110px;
		}
	}
</style>
