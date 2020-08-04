import React, { useContext } from "react";

import TodoContext from "../context/TodoContext";

function TodoList() {
	const { todos } = useContext(TodoContext);

	console.log(todos);

	return (
		<ul className="todo-list">
			{todos.map((todo, index) => (
				<li key={index} className={todo.completed ? "completed" : ""}>
					<div className="view">
						<input property="done" className="toggle" type="checkbox" />
						<label property="text">{todo.text}</label>
						<button className="destroy" mv-action="delete(todo)"></button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
