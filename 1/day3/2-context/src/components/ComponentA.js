import React, { useContext } from "react";

import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

function ComponentA({ children }) {
	const { name, setName } = useContext(UserContext);
	const { theme } = useContext(ThemeContext);

	const onClick = () => {
		setName("Component A");
	};

	return (
		<div>
			<div>Component A</div>
			<h4>Theme: {theme}</h4>
			<div>
				<input type="button" onClick={onClick} value="Change Name" />
			</div>
			{name}
		</div>
	);
}

export default ComponentA;
