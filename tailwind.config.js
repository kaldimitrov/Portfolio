/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	darkMode: 'class',
	daisyui: {
		themes: ['night', 'light'],
		darkTheme: 'night',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	},
	safelist: [
		'alert-success',
		'alert-error',
		'alert-warning',
		'alert-info',
	]
};
