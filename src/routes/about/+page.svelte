<script>
	import Faq from '$lib/components/sections/FAQ/FAQ.svelte';
	import MobilePageBg from '$lib/components/sections/MobilePageBg.svelte';
</script>

<svelte:head>
	<title>Lost Paradigms | About</title>
	<meta name="description" content="Lost Paradigms | About" />
</svelte:head>

<section>
	<MobilePageBg />
	<header>
		<h2>ABOUT <span>LOST PARADIGMS</span></h2>
	</header>
	<div class="wrapper">
		<div class="content">
			<div class="top">
				<div class="title">
					<img src="/images/pages/about/2_51.png" alt="2 51" />
					<img src="/images/pages/about/title-3d.png" alt="3D Art & Storytelling" />
				</div>
				<p>
					Lost Paradigms is a collection of 10,001 high quality, unique generative pieces of art
					perfectly sized for Twitter banners.
				</p>
				<div class="story">
					<p>
						Each NFT visually tells the story of one or more of the scenes from the lore of the
						CyberBrokers universe.
					</p>
					<img src="/images/pages/about/lp-combined.png" alt="Banners Combined" />
				</div>
			</div>
			<Faq />
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col;
		height: calc(100vh - 144px);
		padding-bottom: 90px;
		overflow: auto;
		position: relative;
	}

	h2 {
		line-height: 42px;
		color: var(--yellow);
		padding-left: 55px;
	}

	h2 span {
		color: var(--yellow);
		display: none;
	}

	.wrapper {
		@apply px-8;
		flex: 1 1 0;
		overflow: hidden;
	}

	.content {
		@apply sm:px-32 py-16 flex flex-col gap-8;
		max-height: 100%;
		overflow: auto;
	}

	.top {
		@apply flex flex-col gap-8;
		@apply py-8 mx-auto;
		max-width: 690px;
		width: 100%;
	}

	.title {
		position: relative;
		overflow: hidden;
	}

	.title img {
		max-width: 50%;
		height: auto;
	}

	.title img:last-child {
		@apply ml-8;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateY(-50%);
	}

	.story {
		@apply grid sm:grid-cols-3 gap-8;
	}

	.story img {
		@apply col-span-2;
	}

	@screen sm {
		section {
			@apply flex flex-col;
			height: calc(100vh - 386px);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 1102px;
			width: calc(100% - 2em);
			padding-bottom: 0;
			overflow: hidden;
		}

		header {
			text-align: center;
			height: 65px;
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
			width: 1102px;
			transform: translate(-50%, 0);
			background: rgba(2, 14, 17, 0.65);
			backdrop-filter: blur(7.5px);
			clip-path: path('M0 65L26 43L262 42L310 0L790 0L840 42L1076 42L1102 65L1102 2000L0 2000z');
		}

		header::after {
			content: '';
			background: url(/images/interface/top-decoration-1.png) no-repeat center center;
			position: absolute;
			z-index: -1;
			height: 100%;
			width: 100%;
			/* height: 65px; */
			left: 0;
			top: 0;
			background-size: auto 100%;
		}

		.wrapper {
			border: 1px solid rgba(32, 179, 211, 1);
			border-top: none;
		}

		h2 {
			color: #fff;
			padding-left: 0;
		}

		h2 span {
			display: inline;
		}
	}
</style>
