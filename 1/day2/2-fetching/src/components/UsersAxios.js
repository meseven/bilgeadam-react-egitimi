import React, { useEffect, useState } from "react";

import axios from "axios";

import UserCount from "./UserCount";

function UsersAxios() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	const [name, setName] = useState("");
	const [search, setSearch] = useState("");

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
		} catch (e) {
			console.log(e);
		}
	};

	const saveUser = () => {
		if (name === "") return false;

		setUsers([...users, { name }]);
	};

	const filtered = users.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<input
				name="name"
				placeholder="New User"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input type="button" value="Save" onClick={saveUser} />

			<hr />
			<input
				name="filter"
				placeholder="Filter"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{loading ? (
				<h3>Loading...</h3>
			) : (
				<ul>
					{filtered.map((user, key) => (
						<li className="listItem" key={key}>
							{user.name}
						</li>
					))}
				</ul>
			)}

			<UserCount count={filtered.length} />
		</div>
	);
}

export default UsersAxios;
