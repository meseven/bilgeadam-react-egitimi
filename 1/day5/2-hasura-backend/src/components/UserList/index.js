import React from "react";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
	{
		users {
			id
			username
		}
	}
`;

function UserList() {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			<ul>
				{data.users.map((user, index) => (
					<li key={index} className={user.id < 0 ? "optimistic" : ""}>
						{user.username}

						{user.id < 0 && (
							<div style={{ textAlign: "right" }}>sending...</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default UserList;
