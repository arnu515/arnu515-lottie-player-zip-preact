import { StrictMode } from "preact/compat"
import { render } from "preact"
import App from "./App"

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")!
)
