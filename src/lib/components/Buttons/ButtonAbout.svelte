<script>
	import { page } from '$app/stores';
</script>

<a class="button" href="/about" class:selected={$page.url.pathname == '/about'}>
	<span>about</span>
	<img src="/images/interface/about.svg" alt="" />
</a>

<style lang="postcss">
	a {
		@apply flex gap-4 items-center justify-center;
		position: relative;
		text-transform: uppercase;
		width: 100%;
		height: 60px;
		background: url(images/interface/button-about.svg) center center no-repeat;
		overflow: hidden;
		color: #fff;
	}

	a.selected,
	a:focus,
	a:hover {
		background: url(images/interface/button-about-on.svg) center center no-repeat;
		text-decoration: none;
		color: #000;
	}

	a.selected img,
	a:hover img,
	a:focus img {
		filter: invert(100%);
	}
</style>
