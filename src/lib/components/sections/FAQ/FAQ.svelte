<script>
	import questions from '$lib/data/faq';

	/**
	 * @type {{ question: string; answer: string; }}
	 */
	let selected = questions[0];

	/**
	 * @param {number} index
	 */
	function loadQuestion(index) {
		selected = questions[index];
	}
</script>

<section>
	<h1>FAQs</h1>
	<div class="content">
		<div class="questions">
			<ul>
				{#each questions as question, index}
					<li class:selected={selected === question}>
						<button on:click={() => loadQuestion(index)}>
							<span>{question.question}</span>
							<svg
								width="10"
								height="18"
								viewBox="0 0 10 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L9 9L1 17"
									stroke="#375D79"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						{#if selected === question}
							<div class="answer-in">
								{@html selected.answer}
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<div class="answer">
			{#if selected}
				{@html selected.answer}
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
	h1 {
		text-align: left;
		font-size: var(--font-xxxl);
		line-height: 1em;
	}

	.content {
		@apply grid sm:grid-cols-3;
		font-size: var(--font-s);
		overflow: hidden;
	}

	.questions {
		direction: rtl;
		overflow: auto;
		@apply col-span-2;
		border: 1px dotted var(--blue);
		overflow: auto;
		max-height: 345px;
	}

	.questions ul {
		direction: ltr;
	}

	li {
		background: #101018;
		color: var(--blue-pale);
	}

	li button {
		@apply flex items-center gap-6 px-6 py-6;
		width: 100%;
		font-family: Tomorrow;
		font-weight: 400;
	}

	button::before {
		content: '';
		display: block;
		width: 24px;
		height: 24px;
		background-color: var(--blue-pale);
		border-radius: 50%;
		flex: 0 0 auto;
	}

	button span {
		@apply text-left;
	}

	button svg {
		margin-left: auto;
	}

	.selected {
		color: #fff;
	}

	.selected button::before,
	button:hover::before {
		background-color: var(--blue);
	}

	.selected svg {
		transform: rotate(90deg);
	}

	.selected path,
	button:hover path {
		stroke: #fff;
	}

	li:not(.selected) button:hover {
		color: var(--blue);
	}

	.answer {
		border: 1px solid var(--blue);
		border-left: 0px;
		background: linear-gradient(
			180deg,
			rgba(5, 22, 32, 0.75) 0%,
			rgba(0, 0, 0, 0.6075) 47.4%,
			rgba(17, 25, 36, 0.75) 100%
		);
		box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
		border-radius: 1px;
		max-height: 345px;
	}

	.answer {
		@apply hidden sm:block p-8 flex flex-col gap-8;
	}

	.answer :global(strong),
	.answer :global(a),
	.answer-in :global(strong),
	.answer-in :global(a) {
		color: var(--blue);
	}

	.answer-in {
		@apply sm:hidden px-16 py-8;
	}

	@screen sm {
		.selected svg {
			transform: none;
		}
	}
</style>
