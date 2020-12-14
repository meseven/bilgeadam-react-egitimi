import React, { useState } from "react";

import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
	mutation AddUser($input: String!) {
		insert_users_one(object: { username: $input }) {
			id
			username
		}
	}
`;

const GET_USERS = gql`
	{
		users {
			id
			username
		}
	}
`;

function Form() {
	const [username, setUsername] = useState("");

	const updateCache = (cache, { data }) => {
		const { users } = cache.readQuery({
			query: GET_USERS,
		});

		const newList = [data.insert_users_one, ...users];

		cache.writeQuery({
			query: GET_USERS,
			data: {
				users: newList,
			},
		});
	};

	const [addUser, { loading, data }] = useMutation(ADD_USER, {
		update: updateCache,
		optimisticResponse: {
			__typename: "Mutation",
			insert_users_one: {
				__typename: "users",
				id: Math.round(Math.random() * -200000),
				username,
			},
		},
		// refetchQueries: [{ query: GET_USERS }],
	});

	const onSubmit = (e) => {
		e.preventDefault();
		addUser({ variables: { input: username } });
		setUsername("");
	};

	return (
		<div style={{ padding: 10 }}>
			<form onSubmit={onSubmit}>
				<input
					// disabled={loading}
					name="username"
					placeholder="enter a username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default Form;
