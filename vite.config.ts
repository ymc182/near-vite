import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
	// ...other config settings
	plugins: [react(), nodePolyfills()],
});
