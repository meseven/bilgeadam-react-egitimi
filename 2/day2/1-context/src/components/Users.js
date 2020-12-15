import { useContext } from "react";

import UserContext from "../Contexts/UserContext";

function Users() {
	const { users, setUsers, onlineUsers, setOnlineUsers } = useContext(
		UserContext
	);

	const handleClick = () => setUsers([...users, { name: "Murat" }]);

	const increaseOnlineCount = () => setOnlineUsers(onlineUsers + 1);

	return (
		<>
			<hr />

			<button onClick={handleClick}>add user</button>
			<button onClick={increaseOnlineCount}>increase online count</button>

			<ul>
				{users.map((user, k) => (
					<li key={k}>{user.name}</li>
				))}
			</ul>
		</>
	);
}

export default Users;
