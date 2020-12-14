import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/users" component={Users} />
					<Route path="/user/:id" component={UserDetail} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
