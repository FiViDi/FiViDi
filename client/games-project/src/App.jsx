import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

function App(setIsAuth) {
	const STREAM_PUBLIC_KEY = import.meta.env.STREAM_PUBLIC_KEY;
	const cookies = new Cookies();
	const token = cookies.get("token");
	const client = StreamChat.getInstance(STREAM_PUBLIC_KEY);

	if (token) {
		client
			.connectUser(
				{
					id: cookies.get("userId"),
					name: cookies.get("username"),
					firstName: cookies.get("firstName"),
					lastName: cookies.get("lastName"),
					hashedPassword: cookies.get("hashedPassword"),
				},
				token
			)
			.then(() => {
				setIsAuth(true);
			});
	}

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
