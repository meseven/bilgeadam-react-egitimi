import React, { useState, useEffect } from "react";
import "./App.css";

import User from "./components/User";

function App() {
	const [name, setName] = useState("Ahmet");
	const [number, setNumber] = useState(2);

	useEffect(() => {
		console.log("Updated");
	});

	return (
		<div>
			<h1>{number}</h1>
			<h1>{name}</h1>

			<input
				type="button"
				onClick={() => setNumber(Math.random())}
				value="Update Number"
			/>

			<input
				type="button"
				onClick={() => setName("Hande")}
				value="Update Name"
			/>

			<User name={name} />
		</div>
	);
}

export default App;
