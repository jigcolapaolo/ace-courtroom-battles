import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#333',
				'secondary': '#ddd',
				'badge': '#ebba34',
				'badge-hover': '#EBBA34ff',
				'third': '#1a1423ff',
				'fourth': '#3d314aff',
				'fifth': '#684756ff',
				'sixth': '#96705bff',
			}
		},
	},
	plugins: [animations],
}
