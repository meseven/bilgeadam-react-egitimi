import React, { useEffect, useState } from "react";

import axios from "axios";

function UsersAxios() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		try {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);

			setUsers(data);
			setLoading(false);

			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<ul>
					{users.map((user, key) => (
						<li key={key}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default UsersAxios;
