<script>
	import ButtonAddToCalendar from '$lib/components/Buttons/ButtonAddToCalendar.svelte';
	import MintBox from './MintBox.svelte';

	import allowlist from '$lib/data/allowlist';

	export let state = '';

	const PRICE = 0.0222;

	let freeAllotment = 1;
	let reducedAllotment = 16;

	let price = 0;
	let priceLabel = 'FREE';

	const max = freeAllotment + reducedAllotment;

	let amount = freeAllotment + reducedAllotment;

	$: {
		price = Math.max(0, amount - freeAllotment) * PRICE;
		priceLabel = `${price.toFixed(4)} ETH`;
		if (price == 0) {
			priceLabel = 'FREE';
		}
	}
</script>

<section>
	<header />
	<div class="content">
		<h1><span>_</span>ALLOWLIST<span>_</span></h1>
		<p>this wallet has a mint allotment of:</p>
		<div class="wrapper">
			<div class="box allotment">
				<div class="box__line">
					<div class="box__cell amount">
						<div class="label"><strong>{freeAllotment} @</strong></div>
					</div>
					<div class="box__cell type">
						<div class="eth-logo"><img src="/images/interface/logo-ethereum.svg" alt="" /></div>
						<div class="label">
							<strong>FREE</strong>
							<span>PLUS GAS</span>
						</div>
					</div>
				</div>
				<div class="box__line">
					<div class="box__cell amount">
						<div class="label"><strong>{reducedAllotment} @</strong></div>
					</div>
					<div class="box__cell type">
						<div class="eth-logo"><img src="/images/interface/logo-ethereum.svg" alt="" /></div>
						<div class="label">
							<strong>{PRICE}</strong>
							<span>REDUCED COST</span>
						</div>
					</div>
				</div>
			</div>
			{#if state == 'ongoing'}
				<div class="minter">
					<MintBox bind:amount {max} price={priceLabel} on:submit />
				</div>
			{:else}
				<p>The 24 hour allowlist mint window begins:</p>
				<div class="box start">
					<div class="box__line">
						<div class="box__cell">
							<div class="label">
								<strong>11/08</strong>
								<span>2022</span>
							</div>
						</div>
						<div class="box__cell">
							<div class="label">
								<strong>12:00</strong>
								<span>EST</span>
							</div>
						</div>
					</div>
				</div>
				<p>
					With public mint immediately after. While the allowlist can mint anytime, supplies are
					only guaranteed during the 24 hour window.
				</p>
				<ButtonAddToCalendar />
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col mt-4;
		flex: 0 0 auto;
		overflow: hidden;
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
		width: 818px;
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
		@apply flex flex-col gap-4 items-center justify-center pb-24;
		flex: 1 1 0;
		border: 1px solid rgba(32, 179, 211, 1);
		border-top: none;
	}

	h1 {
		font-size: var(--font-xxl);
		color: var(--blue);
		line-height: 1em;
	}

	h1 span {
		color: #fff;
	}

	.wrapper {
		width: 440px;
		@apply flex flex-col gap-4;
	}

	p {
		font-size: var(--font-s);
		letter-spacing: 0.35rem;
	}

	.label {
		@apply flex flex-col items-center justify-center;
		font-family: Orbitron;
		letter-spacing: 2px;
	}

	.label span {
		font-size: var(--font-xs);
		line-height: 1;
	}

	.allotment,
	.start {
		width: 100%;
	}

	.allotment .box__line {
		height: 77px;
	}

	.start .box__line {
		height: 65px;
	}

	.label strong {
		font-size: var(--font-xl);
	}

	.minter {
		@apply mt-8;
	}
</style>
