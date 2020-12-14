import React from "react";
import "./App.css";

import MyNav from "./components/MyNav";
import { Container, Row } from "react-bootstrap";

import Detail from "./components/Detail/";
import PokemonList from "./components/PokemonList/";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Container>
			<Router>
				<MyNav />
				<Switch>
					<Route path="/detail/:name" component={Detail} />
					<Route path="/" component={PokemonList} />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
