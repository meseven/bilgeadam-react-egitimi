import React from "react";

function Paragraph({ description }) {
	console.log("RE-RENDER");
	return <p>{description}</p>;
}

export default React.memo(Paragraph);
