import React, { useContext } from "react";

import TodoContext from "../context/TodoContext";

function ContentFooter() {
	const { todos } = useContext(TodoContext);

	const todoLeft = todos.filter((todo) => !todo.completed);

	console.log(todoLeft.length);

	return (
		<footer hidden={todos.length === 0} className="footer">
			{/* <meta property="todoDone" content="22" /> */}
			<meta property="todoLeft" content={todoLeft.length} />

			<span className="todo-count">
				<strong mv-value="todoLeft">{todoLeft.length} </strong>
				{todoLeft.length === 1 ? "item" : "items"} left
			</span>

			<meta property="activeFilter" content="all" mv-storage="none" />
			<ul className="filters">
				<li>
					<a href="#" className="[if(activeFilter = 'all', 'selected')]">
						All
					</a>
				</li>
				<li>
					<a href="#" className="[if(activeFilter = 'active', 'selected')]">
						Active
					</a>
				</li>
				<li>
					<a href="#" className="[if(activeFilter = 'completed', 'selected')]">
						Completed
					</a>
				</li>
			</ul>
			<button
				hidden="[todoDone = 0]"
				className="clear-completed"
				mv-action="delete(todo where done)"
			>
				Clear completed
			</button>
		</footer>
	);
}

export default ContentFooter;
