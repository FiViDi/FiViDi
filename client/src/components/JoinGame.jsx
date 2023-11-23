import React, { useState } from "react";
import { useChatContext, Channel } from "stream-chat-react";
import Game from "./Game";
import CustomInput from "./CustomInput";

function JoinGame() {
	const [rivalUsername, setRivalUsername] = useState("");
	const { client } = useChatContext();
	const [channel, setChannel] = useState(null);
	const createChannel = async () => {
		const response = await client.queryUsers({ name: { $eq: rivalUsername } });

		if (response.users.length === 0) {
			alert("User not found");
			return;
		}

		const newChannel = await client.channel("messaging", {
			members: [client.userID, response.users[0].id],
		});

		await newChannel.watch();
		setChannel(newChannel);
	};
	return (
		<>
			{channel ? (
				<Channel channel={channel} Input={CustomInput}>
					<Game channel={channel} setChannel={setChannel} />
				</Channel>
			) : (
				<section className="wrapper">
					<form action="">
						<h1>CREATE GAME</h1>
						<div className="input-box">
							<input
								type="text"
								placeholder="Username of rival"
								onChange={(event) => {
									setRivalUsername(event.target.value);
								}}
							></input>
						</div>
						<button className="btn" onClick={createChannel}>
							Join/Start Game
						</button>
					</form>
				</section>
			)}
		</>
	);
}

export default JoinGame;
