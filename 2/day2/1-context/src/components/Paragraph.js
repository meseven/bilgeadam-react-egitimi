import { useContext } from "react";

import ThemeContext from "../Contexts/ThemeContext";

function Paragraph() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div>
			<hr />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Change Theme
			</button>
			<h3>Active Theme: {theme}</h3>
		</div>
	);
}

export default Paragraph;
