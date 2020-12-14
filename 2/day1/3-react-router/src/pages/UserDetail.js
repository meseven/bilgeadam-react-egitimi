import React from "react";

import { useParams } from "react-router-dom";

function UserDetail() {
	const { id } = useParams();

	return (
		<div>
			<h1>User detail</h1>
			User id: {id}
		</div>
	);
}

export default UserDetail;
