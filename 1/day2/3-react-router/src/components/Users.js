import React, { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";

function Users() {
	let match = useRouteMatch();

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => setUsers(users))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h1>Users</h1>

			{loading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{users.map((user, index) => (
						<li key={index}>
							<Link to={`${match.url}/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Users;
