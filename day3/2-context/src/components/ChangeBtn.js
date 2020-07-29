import React, { useContext } from "react";

import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

function ChangeBtn() {
	const User = useContext(UserContext);
	const { theme, setTheme } = useContext(ThemeContext);

	const onClick = () => {
		User.setName("mehmet");
	};

	const changeTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div>
			<input type="button" onClick={onClick} value="Change Name" />
			<input
				type="button"
				onClick={changeTheme}
				value={`${theme === "dark" ? "Light Theme" : "Dark Theme"}`}
			/>
		</div>
	);
}

export default ChangeBtn;
