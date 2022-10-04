<a href="/team">
	<img src="/images/interface/team.svg" alt="" />
	<span>team</span>
</a>

<style lang="postcss">
	a {
		@apply flex gap-4 items-center justify-center;
		position: relative;
		text-transform: uppercase;
		width: 100%;
		height: 60px;
		background: url(images/interface/button-team.svg) center center no-repeat;
		overflow: hidden;
		color: #fff;
	}

	a:hover,
	a:focus {
		background: url(images/interface/button-team-on.svg) center center no-repeat;
		color: #000;
		text-decoration: none;
	}

	a:hover img,
	a:focus img {
		filter: invert(100%);
	}
</style>
