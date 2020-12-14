import React, { useState, useEffect } from "react";

import { useParams, Redirect } from "react-router-dom";

function UserDetail() {
	const { id } = useParams();

	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((user) => setUser(user))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, [id]);

	// setTimeout(() => {
	// 	return <Redirect push to="/" />;
	// }, 300);

	return (
		<div>
			<h1>User detail ({id})</h1>
			<hr />
			{loading ? (
				<div>Loading... </div>
			) : (
				<div>
					<b>Name:</b> {user.name} <br />
					<b>Username:</b> {user.username} <br />
					<b>Email:</b> {user.email}
				</div>
			)}
		</div>
	);
}

export default UserDetail;
