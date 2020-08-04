import React from "react";
import "./App.css";

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<section className="todoapp">
				<Header />
				<Content />
			</section>
			<Footer />
		</div>
	);
}

export default App;
