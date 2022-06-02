module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
