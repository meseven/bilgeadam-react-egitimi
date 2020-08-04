import React, { createContext, useState } from "react";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
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
	};

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
