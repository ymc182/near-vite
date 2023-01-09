import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	// ...other config settings
	plugins: [react(), nodePolyfills()],
	optimizeDeps: {
		disabled: false,
	},
	build: {
		commonjsOptions: {
			include: [],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
