const { v4: uuidv4 } = require("uuid");
const { StreamChat } = require("stream-chat");
const { hashPassword } = require("../helpers/bcrypt");

class Controller {
	static async register(req, res) {
		try {
			// ?API key for Stream Chat
			// ?process.env.<name> for get the key or else form .env file
			const api_key = process.env.API_KEY;
			const api_secret = process.env.STREAM_API_KEY;
			const serverClient = StreamChat.getInstance(api_key, api_secret);

			const { firstName, lastName, username, password } = req.body;
			const userId = uuidv4();

			// ?hashPassword

			const token = serverClient.createToken(userId);

			res.json({ token, userId, firstName, lastName, hashPassword });
		} catch (error) {
			console.log(error, "<< error");
			console.log(error.message, "<< error message");
		}
	}
}

module.exports = Controller;
