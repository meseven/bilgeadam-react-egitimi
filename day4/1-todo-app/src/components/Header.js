import React from "react";

function Header() {
	return (
		<header className="header">
			<h1>todos</h1>
			<form>
				<input
					property="newTodo"
					className="new-todo"
					placeholder="What needs to be done?"
					autofocus
				/>
			</form>
		</header>
	);
}

export default Header;
