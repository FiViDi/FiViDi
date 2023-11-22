import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

function App() {
	const STREAM_PUBLIC_KEY = import.meta.env.STREAM_PUBLIC_KEY;
	const cookies = new Cookies();
	const token = cookies.get("token");
	const client = StreamChat.getInstance(STREAM_PUBLIC_KEY);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
