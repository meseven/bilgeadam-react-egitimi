import { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Ahmet");

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	const handleToggle = () => setIsVisible(!isVisible);

	useEffect(() => {
		console.log("count veya name değişti");
	}, [count, name]);

	useEffect(() => {
		console.log("component mount edildi");
	}, []);

	return (
		<div className="App">
			<button onClick={handleToggle}>Toggle {isVisible ? "off" : "on"}</button>

			{isVisible && (
				<>
					<h1>{count}</h1>
					<button onClick={decrement}>Decrement</button>
					<button onClick={increment}>Increment</button>
					<hr />
					<h2>Name: {name}</h2>
					<button onClick={() => setName("Mehmet")}>Change the name</button>
				</>
			)}
		</div>
	);
}

export default App;
