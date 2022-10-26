<script>
	import MobilePageBg from '../MobilePageBg.svelte';
	import MintBox from './MintBox.svelte';

	export let state = '';

	const PRICE = 0.0333;

	const MAX_MINT = 10;

	let amount = 1;
	let price = 0;
	let priceLabel = 'invalid';

	$: {
		price = amount * PRICE;
		priceLabel = `${price.toFixed(4)} ETH`;
	}
</script>

<section>
	<MobilePageBg />
	<header />
	<div class="content">
		<h1><span>_</span>PUBLIC SALE<span>_</span></h1>
		{#if state == 'ongoing'}
			<p class="time-info">REVEAL WILL BE 4 DAYS AFTER LAUNCH</p>
			<div class="wrapper">
				<div class="box ">
					<div class="box__line info">
						<div class="box__cell live">Live</div>
						<div class="box__cell eth-logo">
							<img src="/images/interface/logo-ethereum.svg" alt="" />
						</div>
						<div class="box__cell price">{PRICE}</div>
					</div>
				</div>
				<p>
					Maximum of 10 mints per wallet.<br />All minters will be responsible to pay ethereum gas
					fees.
				</p>
				<MintBox bind:amount {MAX_MINT} price={priceLabel} on:submit />
			</div>
		{:else}
			<p class="time-info">WEDNESDAY, NOVEMBER 9, 2020</p>
			<div class="wrapper">
				<div class="info">
					<div class="live">17:00<span>UTC</span></div>
					<div class="eth-logo"><img src="/images/interface/logo-ethereum.svg" alt="" /></div>
					<div class="price">{PRICE}</div>
				</div>
				<p>
					The public mint will immediately follow the allowlist mint taking place on 11/08/2022.
					Maximum of 10 mints per wallet.<br /> All minters will be responsible to pay ethereum gas fees.
				</p>
				<a
					href="https://www.premint.xyz/lost-paradigms-1/"
					rel="external noreferrer"
					target="_blank"
					class="enter-premint"
				>
					<div class="enter-premint__icon" />
					<span>Register to be entered in<br />premint raffle</span>
				</a>
				<a
					href="https://google.com"
					rel="external noreferrer"
					target="_blank"
					class="should-allowlist">? my wallet should be on the allowlist ?</a
				>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col mt-4 pt-16 sm:pt-0;
		flex: 0 0 auto;
		overflow: hidden;
		height: calc(100vh - 144px);
		position: relative;
		padding-bottom: 90px;
	}

	.content {
		@apply flex flex-col gap-4 items-center pb-24;
		flex: 1 1 0;
		border-top: none;
		overflow: auto;
	}

	h1 {
		font-size: var(--font-xxl);
		color: var(--blue);
		line-height: 1em;
	}

	h1 span {
		color: #fff;
	}

	.time-info {
		@apply my-4;
	}

	.wrapper {
		max-width: 440px;
		width: calc(100% - 1em);
		@apply flex flex-col gap-6;
	}

	.info {
		@apply grid grid-cols-8;
		border: 1px solid var(--neutral-gray);
		height: 90px;
		line-height: 90px;
		text-align: center;
	}

	.live,
	.price {
		@apply col-span-3;
		font-family: Orbitron;
		font-size: var(--font-xl);
		font-weight: 700;
		letter-spacing: 2px;
	}

	.eth-logo {
		@apply col-span-2;
	}

	.live {
		@apply flex flex-col items-center justify-center;
		line-height: 1em;
		border-right: 1px solid var(--neutral-gray);
	}

	.live span {
		@apply block;
		font-size: var(--font-xs);
		line-height: 1em;
	}

	.price {
		border-left: 1px solid var(--neutral-gray);
	}

	.eth-logo img {
		@apply mx-auto;
		margin-top: 15px;
	}

	p {
		font-size: var(--font-s);
		letter-spacing: 0.35rem;
	}

	.enter-premint {
		@apply flex items-center justify-center py-2 gap-4 text-center;
		text-transform: uppercase;
		border: 1px solid var(--blue);
		font-family: Orbitron;
		font-weight: 700;
	}

	.enter-premint__icon {
		width: 15px;
		height: 15px;
		background: #fff;
		mask: url('/images/interface/plus.svg');
	}

	.enter-premint:hover {
		background-color: var(--blue);
		color: #000;
		text-decoration: none;
	}

	.enter-premint:hover .enter-premint__icon {
		background: #000;
	}

	.should-allowlist {
		@apply py-2 text-center;
		border: 1px solid var(--blue);
		color: rgba(255, 255, 255, 0.6);
		font-size: var(--font-xs);
		text-transform: uppercase;
		font-family: Orbitron;
		font-weight: 700;
	}

	.should-allowlist:hover {
		border: 1px solid #fff;
		color: #fff;
		text-decoration: none;
	}

	@screen sm {
		section {
			height: auto;
			padding-bottom: 0;
			max-width: 816px;
			flex: 1 1 0;
		}
		header {
			text-align: center;
			height: 37px;
			flex: 0 0 auto;
			position: relative;
			z-index: -1;
		}

		header::before {
			content: '';
			position: absolute;
			z-index: -2;
			left: 50%;
			top: 0;
			height: 100vh;
			width: 816px;
			transform: translate(-50%, 0);
			background: rgba(2, 14, 17, 0.65);
			backdrop-filter: blur(7.5px);
			clip-path: path('M0 22L41 22L65 1L290 1L313 22L800 22L815 37L815 2000L0 2000z');
		}

		header::after {
			content: '';
			background: url(/images/interface/top-decoration-4.png) no-repeat center center;
			position: absolute;
			z-index: -1;
			height: 100%;
			width: 100%;
			/* height: 65px; */
			left: 0;
			top: 0;
			background-size: auto 100%;
		}

		.content {
			border: 1px solid var(--blue-second);
			border-top: 0;
		}
	}
</style>
