/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '600px',
			sm: '980px',
			// 	// => @media (min-width: 640px) { ... }

			md: '1180px',
			// 	// => @media (min-width: 768px) { ... }

			lg: '1760px'
			// 	// => @media (min-width: 1536px) { ... }
		},
		extend: {}
	},
	plugins: []
};
