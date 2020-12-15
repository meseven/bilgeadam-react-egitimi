import { useContext } from "react";

import UserContext from "../Contexts/UserContext";

function OnlineUsers() {
	const { onlineUsers, setOnlineUsers } = useContext(UserContext);

	return (
		<div>
			<hr />
			<h2>Online: {onlineUsers}</h2>
		</div>
	);
}

export default OnlineUsers;
