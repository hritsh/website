import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://hritish.com",
	output: "static",
	build: {
		assets: "assets",
	},
});
