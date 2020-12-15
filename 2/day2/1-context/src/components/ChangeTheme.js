import { useContext } from "react";

import ThemeContext from "../Contexts/ThemeContext";

function ChangeTheme() {
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<div>
			<button onClick={() => changeTheme(theme === "light" ? "dark" : "light")}>
				Change Theme
			</button>
			<h3>Active Theme: {theme}</h3>
		</div>
	);
}

export default ChangeTheme;
