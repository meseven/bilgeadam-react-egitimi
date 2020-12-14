import { useState, useEffect } from "react";

import "./App.css";
import Paragraph from "./components/Paragraph";

function App() {
	const [count, setCount] = useState(0);
	const [description, setDescription] = useState("Lorem ipsum doler.");

	useEffect(() => {
		if (count > 4) {
			setDescription("Doler ipsum lorem");
		}
	}, [count]);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Generate</button>

			<Paragraph description={description} />
		</div>
	);
}

export default App;
