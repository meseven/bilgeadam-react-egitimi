import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function Container({ children }) {
	const { theme } = useContext(ThemeContext);

	return <div className={theme}>{children}</div>;
}

export default Container;
