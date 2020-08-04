import React from "react";

import TodoList from "./TodoList";
import ContentFooter from "./ContentFooter";

function Content() {
	return (
		<>
			<section className="main">
				<input
					property="toggleAll"
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					checked="[todoLeft = 0]"
					onChange={() => {}}
				/>
				<label htmlFor="toggle-all" mv-action="set(done, !toggleAll)">
					Mark all as complete
				</label>

				<TodoList />
			</section>

			<ContentFooter />
		</>
	);
}

export default Content;
