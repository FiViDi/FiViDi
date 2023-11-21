import React, { useState } from "react";

function Login() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	// ?User login input
	const isUsername = (event) => {
		setUsername(event.target.value);
	};
	const isPassword = (event) => {
		setPassword(event.target.value);
	};

	// ?onClick Handler
	async function onLoginHandler() {}

	return (
		<>
			<h1>REGISTER</h1>
			<section className="login ">
				<label>LOGIN</label>
				<input
					type="text"
					placeholder="Username"
					onChange={isUsername}
					value={username}
				></input>
				<input
					type="password"
					placeholder="Password"
					onChange={isPassword}
					value={password}
				></input>
				<button onClick={onRegisterHandler}>Sign In</button>
			</section>
		</>
	);
}

export default Login;
