const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { StreamChat } = require("stream-chat");

// ?setting up the router from express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ?API key for Stream Chat
// ?process.env.<name> for get the key or else form .env file
const api_key = process.env.API_KEY;
const api_secret = process.env.STREAM_API_KEY;
const serverClient = new StreamChat.getInstance(api_key, api_secret);

// ?Route
app.post("/register");

// ?App listen port
app.listen(port, () => {
	console.log(`Games ini mendengarkan pada port ${port}`);
});
