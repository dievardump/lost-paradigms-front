<script>
	import TeamDesktop from '$lib/components/sections/Team/TeamDesktop.svelte';
	import TeamMobile from '$lib/components/sections/Team/TeamMobile.svelte';
	import { onMount, onDestroy } from 'svelte';

	let selected;

	let mq;

	let component = TeamDesktop;
	function onMQ(e) {
		if (e.matches) {
			component = TeamDesktop;
		} else {
			component = TeamMobile;
		}
	}

	onMount(() => {
		mq = window.matchMedia('(min-width: 980px)');
		mq.addEventListener('change', onMQ);
		onMQ(mq);
	});

	onDestroy(() => {
		mq && mq.removeEventListener('change', onMQ);
	});
</script>

<svelte:head>
	<title>Lost Paradigms | Team</title>
	<meta name="description" content="Lost Paradigms | Team" />
</svelte:head>

<svelte:component this={component} bind:selected />
