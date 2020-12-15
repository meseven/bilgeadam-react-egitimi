import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([{ name: "Mehmet" }]);
	const [onlineUsers, setOnlineUsers] = useState(1);

	const values = {
		users,
		setUsers,
		onlineUsers,
		setOnlineUsers,
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
