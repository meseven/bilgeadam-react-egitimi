import React from "react";
import { Link } from "react-router-dom";

function Users() {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				<li>
					<Link to="/user/1">Ahmet</Link>
				</li>
				<li>
					<Link to="/user/2">Murat</Link>
				</li>
				<li>
					<Link to="/user/3">Hanife</Link>
				</li>
			</ul>
		</div>
	);
}

export default Users;
