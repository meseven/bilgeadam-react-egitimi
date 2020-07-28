import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

function Users() {
	let match = useRouteMatch();

	return (
		<div>
			<h1>Users</h1>

			<ul>
				<li>
					<Link to={`${match.url}/ahmet`}>Ahmet</Link>
				</li>
				<li>
					<Link to={`${match.url}/burak`}>Burak</Link>
				</li>
				<li>
					<Link to={`${match.url}/hande`}>Hande</Link>
				</li>
				<li>
					<Link to={`${match.url}/sevilay`}>Sevilay</Link>
				</li>
			</ul>
		</div>
	);
}

export default Users;
