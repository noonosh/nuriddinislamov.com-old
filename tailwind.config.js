module.exports = {
	mode: "jit",
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
