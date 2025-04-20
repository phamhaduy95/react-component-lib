import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './lib/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@lib': path.resolve(__dirname, './lib')
		}
	},
	build: {
		outDir: 'build'
	}
});
