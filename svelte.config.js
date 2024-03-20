import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
	kit: {
		alias: {
			'@homeBrands': path.resolve('./src/homeImages/brands'),
			'@homeIcons': path.resolve('./src/homeImages/icons'),
			'@homeIllustrations': path.resolve('./src/homeImages/illustrations')
		},
		adapter: adapter({ fallback: '404.html' })
	},

	preprocess: [vitePreprocess({})]
};

export default config;
