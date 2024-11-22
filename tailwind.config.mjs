/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {	
			fontFamily: {
                serif: ['Hepta Slab Variable', "serif"],
				//Hepta_Slab_Variable: ["Hepta Slab Variable", "serif"]
            },
			colors: {
                transparent: 'transparent',
                current: 'currentColor',
                chinois: '#798C85',
                dusky: '#736A58',
                autumn: '#BF472C',
                rustic: '#D97059',
                black: '#0D0D0D'
			}
		},
	},
	plugins: [],
}
