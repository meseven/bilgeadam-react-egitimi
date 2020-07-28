import React from "react";

import { useParams } from "react-router-dom";

function UserDetail() {
	const { username } = useParams();

	return (
		<div>
			<h1>User detail</h1>
			<h2>{username}</h2>
		</div>
	);
}

export default UserDetail;
