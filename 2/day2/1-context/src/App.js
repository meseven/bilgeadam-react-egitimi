import "./App.css";

//contexts
import { ThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";

import ChangeTheme from "./components/ChangeTheme";
import Paragraph from "./components/Paragraph";
import Users from "./components/Users";
import OnlineUsers from "./components/OnlineUsers";

function App() {
	return (
		<ThemeProvider>
			<UserProvider>
				<ChangeTheme />
				<Paragraph />

				<Users />
				<OnlineUsers />
			</UserProvider>
		</ThemeProvider>
	);
}

export default App;
