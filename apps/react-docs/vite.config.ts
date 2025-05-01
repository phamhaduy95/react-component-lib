import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
 
	resolve: {
		alias: {
            "src": path.resolve(__dirname,"./src"),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@pages': path.resolve(__dirname, './src/pages'),
            "@component":path.resolve(__dirname,"./src/components")
		}
	},
	build: {
		outDir: 'build'
	}
});
