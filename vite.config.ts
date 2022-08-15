import * as path from "path"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.tsx"),
			name: "Lottie Player ZIP",
			fileName: format => `lottie-player-zip.${format}.js`
		},
		rollupOptions: {
			external: ["preact", "@lottiefiles/lottie-player", "@zip.js/zip.js"],
			output: {
				globals: {
					preact: "Preact",
					"@zip.js/zip.js": "zipjs",
					"@lottiefiles/lottie-player": "lottieplayer"
				}
			}
		}
	},
	plugins: [preact()]
})
