import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), dts({ rollupTypes: true })],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './lib/components'),
			'@pages': path.resolve(__dirname, './src/pages')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/index.ts')
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'react-dom'],
			output: [
				{
					dir: './dist',
					format: 'es'
				}
			]
		},
		sourcemap: true,
		copyPublicDir: false
	}
});
