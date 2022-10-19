<div class="mobile-page-bg">
	<svg
		viewBox="0 0 1000 18"
		width="1000"
		height="18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 17H31L50 0H170L190 17H10000" stroke="#39eeff" stroke-width="2px" />
	</svg>
</div>

<style lang="postcss">
	.mobile-page-bg {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;

		background: rgba(2, 14, 17, 0.65);
		backdrop-filter: blur(7.5px);
		clip-path: path('M0 17H31L50 0H170L190 17H10000V10000H0z');
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	@screen sm {
		.mobile-page-bg {
			display: none;
		}
	}
</style>
