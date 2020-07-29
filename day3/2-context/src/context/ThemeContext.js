import React, { createContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const defaultTheme = localStorage.getItem("theme");

	const [theme, setTheme] = useState(!defaultTheme ? "light" : defaultTheme);

	const values = {
		theme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
