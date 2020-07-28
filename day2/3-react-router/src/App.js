import React from "react";
import "./App.css";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

// pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import NoMatch from "./components/NoMatch";

function App() {
	const loggedIn = false;

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about?lang=tr">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about">
						{loggedIn ? <Redirect to="/users" /> : <About />}
					</Route>
					<Route path="/users" exact component={Users} />
					<Route path="/users/:id" component={UserDetail} />
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
