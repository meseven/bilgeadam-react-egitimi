import React from "react";
import "./App.css";

import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

import Container from "./components/Container";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ChangeBtn from "./components/ChangeBtn";

function App() {
	return (
		<ThemeProvider>
			<UserProvider>
				<Container>
					<ComponentA />

					<hr />
					<ComponentB />

					<br />
					<br />

					<ChangeBtn />
				</Container>
			</UserProvider>
		</ThemeProvider>
	);
}

export default App;
