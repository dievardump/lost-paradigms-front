<script>
</script>

<button>
	<div class="button-add" />
	<span>ADD TO MY CALENDAR</span>
	<ul class="calendars">
		<li>
			<a href="https://calendar.google.com" rel="external noreferrer" target="_blank"
				>ADD TO GOOGLE AGENDA</a
			>
		</li>
		<li>
			<a href="https://calendar.google.com" rel="external noreferrer" target="_blank"
				>ADD TO X AGENDA</a
			>
		</li>
		<li>
			<a href="https://calendar.google.com" rel="external noreferrer" target="_blank"
				>ADD TO Y AGENDA</a
			>
		</li>
	</ul>
</button>

<style lang="postcss">
	button {
		@apply flex items-center justify-center py-2 gap-4 text-center;
		text-transform: uppercase;
		border: 1px solid var(--blue);
		font-family: Orbitron;
		font-weight: 700;
		position: relative;
	}

	.button-add {
		width: 15px;
		height: 15px;
		background: #fff;
		mask: url('/images/interface/plus.svg');
	}

	button:hover {
		background-color: var(--blue);
		color: #000;
		text-decoration: none;
	}

	button:hover .button-add {
		background: #000;
	}

	.calendars {
		display: none;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		color: #000;
	}

	button:hover .calendars {
		display: block;
	}

	a {
		@apply block py-4;
	}
</style>
