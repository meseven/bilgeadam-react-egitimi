import { useState, useEffect } from "react";

import "./App.css";

// import Counter from "./components/Counter";
import Loader from "./components/Loader";

function App() {
	// const [isVisible, setIsVisible] = useState(true);
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState("");
	const [users, setUsers] = useState([]);

	const addUser = () => setUsers([{ name }, ...users]);
	const handleChange = (e) => setName(e.target.value);

	useEffect(() => {
		setName("");
	}, [users]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setUsers(json))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="App">
			{/* {isVisible && <Counter />}

			<button onClick={() => setIsVisible(!isVisible)}>Toggle</button> */}

			<input placeholder="name" value={name} onChange={handleChange} />
			<button onClick={addUser}>add</button>

			<Loader text="Fetching..." loading={loading} />

			<ul>
				{users.map((user, i) => (
					<li key={i}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
