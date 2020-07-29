import React, { useEffect } from "react";

function User({ name }) {
	useEffect(() => {
		console.log("User componenti render edildi.");
	});

	return (
		<div>
			<br />
			Burası user component
			<h2>{name}</h2>
		</div>
	);
}

export default React.memo(User);
