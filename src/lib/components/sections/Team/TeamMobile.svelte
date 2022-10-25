<script>
	import Button from '$lib/components/utils/Button.svelte';
	import MobilePageBg from '../MobilePageBg.svelte';
	import TeamListRow from './TeamListRow.svelte';

	export let selected;

	let open;
</script>

<section>
	<MobilePageBg />
	<header>
		<h2>TEAM</h2>
	</header>
	<div class="content">
		{#if selected}
			<div class="cta">
				<Button on:click={() => (open = !open)}>
					<div class="icon">
						{#if open}
							<img src="/images/interface/close.svg" alt="Visual" />
						{:else}
							<img src="/images/interface/open.svg" alt="Details" />
						{/if}
					</div>
					{selected.member.name}</Button
				>
			</div>
			<div class="view">
				<img class="sizzer" src="/images/interface/team-mobile-mask.png" alt="" />
				<div class="visual" class:hidden={open}>
					<img src={selected.member.image} alt={selected.member.name} />
				</div>
				<div class="data" class:hidden={!open}>
					<div class="member-content">
						{@html selected.member.content}
					</div>
					<Button href={selected.member.twitter} props={{ target: '_blank' }}>Follow</Button>
				</div>
			</div>
		{/if}
		<div class="team-list">
			<TeamListRow bind:selected />
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

	.content {
		@apply flex flex-col justify-end items-center mx-auto;
		width: 90%;
		flex: 1 1 0;
	}

	.cta {
		@apply mb-8;
	}

	.cta .icon {
		@apply flex items-center justify-center mr-4;
		width: 22px;
		height: 22px;
	}

	.view {
		@apply mx-auto mb-8;
		width: 70%;
		position: relative;
	}

	.sizzer {
		visibility: hidden;
	}

	.visual,
	.data {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.visual {
		mask: url(/images/interface/team-mobile-mask.png);
		mask-size: 100% auto;
		mask-repeat: no-repeat;
	}

	.visual::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url(/images/interface/team-mobile-card-around.png) no-repeat center center
			transparent;
		background-size: 100% 100%;
	}

	.visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.data {
		@apply p-4  flex-col gap-4;
		border: 2px dotted var(--blue-pale);
		border-radius: 5px;
		font-size: var(--font-s);
		background: rgba(2, 14, 17, 0.65);
		backdrop-filter: blur(7.5px);
		color: #fff;
	}

	.data:not(.hidden) {
		@apply flex;
	}

	.member-content {
		flex: 1 1 0;
		overflow: auto;
	}
</style>
