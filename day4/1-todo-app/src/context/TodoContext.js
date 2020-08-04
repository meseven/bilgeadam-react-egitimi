import React, { createContext, useState } from "react";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
	const values = {
		name: "a",
	};

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
