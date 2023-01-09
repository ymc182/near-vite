import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginBtn from "./components/LoginBtn/LoginBtn";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			{Buffer.from("hello world!").toString("base64")}
			<LoginBtn />
		</div>
	);
}

export default App;
