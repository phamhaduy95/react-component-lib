import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages')
		}
	}
});
