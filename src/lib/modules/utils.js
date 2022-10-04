export function shortenAddress(addr) {
	if (!addr) return '';
	return (addr.substr(0, 6) + '...' + addr.substr(-3)).toLowerCase();
}

export function debounce(func, wait = 100) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}

export function sleep(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

export function getDiffTime(timestamp) {
	const hour = 60 * 60;
	const minute = 60;

	const hours = Math.floor(timestamp / hour);
	const minutes = Math.floor((timestamp % hour) / minute);
	const seconds = (timestamp % hour) % minute;

	return [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0')
	];
}
