<button class="disconnect" on:click>
	<img src="/images/interface/disconnect.png" alt="disconnect" /> <span>disconnect</span>
</button>

<style lang="postcss">
	button {
		@apply flex gap-2 px-8 mt-2 mx-auto items-center;
		background-color: #000;
		border-radius: 30px;
		height: 24px;
		font-family: Tomorrow;
		text-transform: uppercase;
		color: var(--red);
		line-height: 24px;
	}

	span {
		font-size: var(--font-s);
		line-height: 1;
		position: relative;
		/* weird hack but for some reasons the align is not centerd */
		top: -1px;
	}

	button:hover {
		color: #fff;
	}
</style>
