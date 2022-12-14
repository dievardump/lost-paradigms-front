<script>
	import { openModal } from 'yasp-modals';

	import {
		allowlistMint,
		getAddressMintCounts,
		getAllowlistPrice
	} from '$lib/modules/contracts/nft';
	import { shortenAddress } from '$lib/modules/utils';
	import Loader from '$lib/components/utils/Loader.svelte';
	import { chainId, signerAddress } from '$lib/modules/wallet';
	import ButtonAddToCalendar from '$lib/components/Buttons/ButtonAddToCalendar.svelte';

	import MintBox from './MintBox.svelte';
	import MobilePageBg from '../MobilePageBg.svelte';
	import TransactionModal from '$lib/components/modals/TransactionModal.svelte';

	export let state = '';

	// @TODO: dynamic
	let PRICE = ethers.BigNumber.from(0);

	let loading;

	let allowlist = {};

	let userAllotment = null;
	let freeAllotment = 0;
	let reducedAllotment = 0;
	let signature;

	let priceLabel = 'FREE';

	let availableFree = 0;
	let availableReduced = 0;

	let amount = availableFree + availableReduced;
	let max = amount;

	let anotherWallet;

	$: price = PRICE.mul(Math.max(0, amount - availableFree));
	$: priceLabel = price == 0 ? 'FREE' : `${ethers.utils.formatEther(price)} ETH`;

	$: selectedWallet = anotherWallet || $signerAddress;

	$: fetchData($chainId);
	$: selectUserAllotment(allowlist, selectedWallet);

	async function fetchData(chainId) {
		loading = true;
		try {
			allowlist = {};
			if (chainId) {
				PRICE = await getAllowlistPrice();
				allowlist = await fetch(`/allowlists/${parseInt(chainId)}.json`).then((res) => res.json());
			}
		} catch (e) {}
		loading = false;
	}

	async function selectUserAllotment(allowlist, walletToCheck) {
		loading = true;
		try {
			userAllotment = allowlist?.[walletToCheck];
			freeAllotment = userAllotment?.freeMints ?? 0;
			reducedAllotment = userAllotment?.reducedMints ?? 0;

			// now remove how many free this user already minted
			const counts = await getAddressMintCounts(walletToCheck);
			const userFreeMinted = counts.freeMinted;
			const userAllowListMinted = counts.allowlistMinted;

			availableFree = freeAllotment - userFreeMinted;
			availableReduced = reducedAllotment - userAllowListMinted;

			// freeAllotment -= userFreeMinted;
			signature = userAllotment?.signature ?? '';

			amount = availableFree + availableReduced;
			max = amount;
		} catch (e) {
			console.log(e);
		}
		loading = false;
	}

	async function onSubmit() {
		openModal(TransactionModal, {
			title: `Allowlist Mint`,
			txFn: async () => {
				const freeToMint = Math.min(amount, availableFree);
				const reducedToMint = Math.max(0, amount - availableFree);

				return allowlistMint(
					{
						signature,
						mintToAddress: selectedWallet,
						freeMintAllowance: freeAllotment,
						allowListAllowance: reducedAllotment,
						freeMintCount: freeToMint,
						paidMintCount: reducedToMint
					},
					price
				);
			},
			callback: (error) => {
				console.log(error);
				selectUserAllotment(allowlist, selectedWallet);
			}
		});
	}

	async function onSelectAnotherWallet() {
		anotherWallet = null;
		let selected = prompt('Please enter the address you want to mint for:');
		if (selected) {
			try {
				anotherWallet = ethers.utils.getAddress(selected.toLocaleLowerCase());
			} catch (e) {
				console.log(e);
			}
		}
	}
</script>

<section>
	<MobilePageBg />
	<header />
	<div class="content">
		<h1><span>_</span>ALLOWLIST<span>_</span></h1>
		{#if loading}
			<Loader />
		{:else}
			{#if !userAllotment}
				<div class="nolist">
					<p>No allowlist found for wallet</p>
					<p><strong>{shortenAddress(selectedWallet)}</strong></p>
					<button class="another" on:click={onSelectAnotherWallet}
						><em>I want to mint for another wallet</em></button
					>
				</div>
			{:else if max == 0}
				<p>The wallet {shortenAddress(selectedWallet)} already minted its full allocation.</p>
				<button class="another" on:click={onSelectAnotherWallet}
					><em>I want to mint for another wallet</em></button
				>
			{:else}
				<p>{shortenAddress(selectedWallet)} has a mint allotment of:</p>
				<div class="wrapper">
					<div class="box allotment">
						<div class="box__line">
							<div class="box__cell amount">
								<div class="label"><strong>{availableFree} @</strong></div>
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
								<div class="label"><strong>{availableReduced} @</strong></div>
							</div>
							<div class="box__cell type">
								<div class="eth-logo"><img src="/images/interface/logo-ethereum.svg" alt="" /></div>
								<div class="label">
									<strong>{ethers.utils.formatEther(PRICE)}</strong>
									<span>REDUCED COST</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button class="another" on:click={onSelectAnotherWallet}
					><em>I want to mint for another wallet</em></button
				>
			{/if}
			<div class="wrapper">
				{#if userAllotment && state == 'ongoing'}
					{#if max > 0}
						<div class="minter">
							<MintBox bind:amount {max} price={priceLabel} on:submit={onSubmit} />
						</div>
					{/if}
				{:else}
					<p>The 24 hour allowlist mint window begins:</p>
					<div class="box start">
						<div class="box__line">
							<div class="box__cell">
								<div class="label">
									<strong>08 NOV</strong>
									<span>2022</span>
								</div>
							</div>
							<div class="box__cell">
								<div class="label">
									<strong>17:00</strong>
									<span>UTC</span>
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
		@apply flex flex-col gap-4 items-center  pb-24;
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

	.wrapper {
		max-width: 440px;
		width: calc(100% - 1em);
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

	.nolist {
		@apply py-6 text-center;
	}

	.another {
		text-decoration: underline;
		font-size: var(--font-xs);
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
