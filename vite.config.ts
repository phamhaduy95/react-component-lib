import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

// const a = Object.fromEntries(
// 	glob
// 		.sync('lib/**/index.{ts,tsx}', {
// 			ignore: ['lib/**/*.d.ts']
// 		})
// 		.map((file) => [
// 			relative('lib', file.slice(0, file.length - extname(file).length)),
// 			fileURLToPath(new URL(file, import.meta.url))
// 		])
// );

// console.log('D:/project/front-end/react/react-component-lib/lib/components/NavigationBar/index.ts');

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
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		},

		copyPublicDir: false
	}
});
