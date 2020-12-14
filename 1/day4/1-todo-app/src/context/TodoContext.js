import React, { createContext, useState } from "react";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
	const [activeFilter, setActiveFilter] = useState("all");
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Test",
			completed: false,
		},
	]);

	const values = {
		todos,
		setTodos,
		activeFilter,
		setActiveFilter,
	};

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
