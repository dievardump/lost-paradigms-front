export default function bars(node) {
	const FPS = 1000 / 10;

	let frame;
	let lastAnimation = 0;
	let bars = [0, 0, 0, 0];
	let wrappers = [];

	const $fragment = document.createDocumentFragment();

	for (let j = 0; j < 4; j++) {
		const bars = [];

		const $wrapper = document.createElement('div');
		$wrapper.className = 'bars__wraper';

		for (let i = 0; i < 15; i++) {
			const $bar = document.createElement('div');
			$bar.className = 'bar';
			$bar.style.opacity = '0';
			$wrapper.appendChild($bar);
			bars.push($bar);
		}

		$fragment.appendChild($wrapper);
		wrappers.push(bars);
	}

	function updateBars() {
		for (let i = 0; i < wrappers.length; i++) {
			const newValue =
				!bars[i] || Math.random() < 0.3 ? 1 + ~~(Math.random() * wrappers[i].length) : bars[i];
			for (let j = 0; j < wrappers[i].length; j++) {
				wrappers[i][j].style.opacity = j + 1 >= newValue ? '0' : '1';
			}

			bars[i] = newValue;
		}
	}

	function onAnimate() {
		const now = Date.now();
		if (now - lastAnimation > FPS) {
			lastAnimation = now;
			updateBars();
		}
		frame = requestAnimationFrame(onAnimate);
	}

	node.appendChild($fragment);
	onAnimate();

	return {
		destroy() {
			cancelAnimationFrame(frame);
		}
	};
}
