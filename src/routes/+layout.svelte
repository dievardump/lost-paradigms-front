<script>
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import Interface from '$lib/components/sections/Interface.svelte';
	import '../app.css';
</script>

<div class="background">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video autoplay muted loop>
		<source src="/videos/background.webm" type="video/webm" />
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>
<Interface />

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -2;
	}

	.background::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}

	video {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 144px 0;
		height: 100vh;
	}
</style>
