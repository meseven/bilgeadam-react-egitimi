import React from "react";
import "./App.css";

import UsersFetch from "./components/UsersFetch";
import UsersAxios from "./components/UsersAxios";

function App() {
	return (
		<div className="App">
			{/* <UsersFetch /> */}
			<UsersAxios />
		</div>
	);
}

export default App;
