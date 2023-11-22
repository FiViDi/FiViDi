import { useNavigate } from "react-router-dom";
import "../App.css";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

function Game() {
	// const STREAM_PUBLIC_KEY = import.meta.env.STREAM_PUBLIC_KEY;
	const cookies = new Cookies();
	const token = cookies.get("token");
	// const client = StreamChat.getInstance(STREAM_PUBLIC_KEY);

	const navigate = useNavigate();

	async function onLogoutHandler() {
		try {
			cookies.remove("token", token);
			cookies.remove("userId", userId);
			cookies.remove("firstName", firstName);
			cookies.remove("lastName", lastName);
			cookies.remove("username", username);
			cookies.remove("hashedPassword", hashedPassword);
			// client.disconnectUser();

			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<h1>GAME</h1>
			<button onClick={onLogoutHandler}>Log Out</button>
		</>
	);
}

export default Game;
