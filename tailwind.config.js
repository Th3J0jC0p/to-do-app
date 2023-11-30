/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter var",
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			fontSizes: {
				12: "3rem",
				14: "3.5rem",
				16: "4rem",
				20: "5rem",
				24: "6rem",
				32: "8rem",
				40: "10rem",
				48: "12rem",
				56: "14rem",
				64: "16rem",
				72: "18rem",
				80: "20rem",
				96: "24rem"
			},
			fontWeight: "bold",
			colors: {
				primary: {
					DEFAULT: "#303030"
				},
				secondary: {
					DEFAULT: "#efefef"
				}
			}
		}
	},
	plugins: []
};
