import React from "react";
import "./App.css";

// contexts
import { TodoProvider } from "./context/TodoContext";

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<TodoProvider>
			<section className="todoapp">
				<Header />
				<Content />
			</section>
			<Footer />
		</TodoProvider>
	);
}

export default App;
