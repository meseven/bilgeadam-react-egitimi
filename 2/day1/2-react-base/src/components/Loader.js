import React from "react";

function Loader({ text, loading }) {
	if (!loading) return null;

	return <div>{text}</div>;
}

export default Loader;
