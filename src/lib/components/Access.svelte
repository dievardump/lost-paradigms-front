<section>
	<slot />
</section>

<style lang="postcss">
	section {
		background: url(/images/interface/heading-access.png) center center no-repeat transparent;
		width: 818px;
		height: 193px;
		flex: 0 0 auto;
		position: relative;
		margin: 0 auto;
		@apply hidden sm:flex flex-col items-center justify-center gap-4;
	}

	section::before {
		content: '';
		position: absolute;
		z-index: -1;
		left: 50%;
		top: 0;
		height: 193px;
		width: 818px;
		transform: translate(-50%, 0);
		background: rgba(2, 14, 17, 0.65);
		backdrop-filter: blur(7.5px);
		clip-path: path(
			'M1 29L42 29L69 6L112 6L289 6L322 32L500 32L532 6L743 6L777 29L817 29L817 176L563 175L542 191L314 191L292 175L65 175L41 191L1 191z'
		);
	}
</style>
