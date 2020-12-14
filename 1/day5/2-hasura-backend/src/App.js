import React from "react";
import logo from "./logo.svg";
import "./App.css";

import UserList from "./components/UserList";
import Form from "./components/Form";

function App() {
	return (
		<div>
			<Form />
			<hr />
			<UserList />
		</div>
	);
}

export default App;
