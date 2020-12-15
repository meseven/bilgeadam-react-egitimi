import { createContext, useState } from "react";

const ThemeContext = createContext(null);

const defaultTheme = localStorage.getItem("theme");

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(defaultTheme || "light");

	const values = {
		theme,
		changeTheme: (theme) => {
			setTheme(theme);
			localStorage.setItem("theme", theme);
		},
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
