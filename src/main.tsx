import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@near-wallet-selector/modal-ui/styles.css";

import "react-toastify/dist/ReactToastify.css";
import { Buffer } from "buffer";
import { NearProvider } from "./context/NearProvider";
import { ToastContainer } from "react-toastify";

// @ts-ignore
globalThis.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<NearProvider>
			<App />
			<ToastContainer />
		</NearProvider>
	</React.StrictMode>
);
