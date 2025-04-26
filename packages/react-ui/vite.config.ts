import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import * as glob from 'glob';
import path, { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const components: Array<[string, string]> = glob
	.sync('lib/**/*.{ts,tsx}', {
		ignore: ['lib/**/*.d.ts', 'lib/**/type.ts']
	})
	.map((file) => [
		relative('lib', file.slice(0, file.length - extname(file).length)),
		fileURLToPath(new URL(file, import.meta.url))
	]);

const themes = glob
	.sync('lib/themes/**/*.css')
	.map((file) => [
		relative('lib/themes', file.slice(0, file.length - extname(file).length)),
		fileURLToPath(new URL(file, import.meta.url))
	]);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), libInjectCss()],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './lib/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@lib': path.resolve(__dirname, './lib')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es']
		},
		sourcemap: true,
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				assetFileNames: (a) => {
					if (a.originalFileNames.length > 0) {
						console.log(a);
						const targetDir = relative('lib', path.dirname(a.originalFileNames[0]));
						const fileName = path.join(targetDir, a.names[0]);
						return fileName;
					}
					return 'assets/[name][extname]';
				},
				entryFileNames: '[name].js',
				chunkFileNames: 'common/[name].js',
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'JSXRuntime'
				}
			},
			input: Object.fromEntries([...components, ...themes])
		},
		copyPublicDir: false
	}
});
