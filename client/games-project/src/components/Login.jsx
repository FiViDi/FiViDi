import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// ?User login input
	const isUsername = (event) => {
		setUsername(event.target.value);
	};
	const isPassword = (event) => {
		setPassword(event.target.value);
	};

	// ?Navigate after login
	// const navigate = useNavigate();

	// ?onClick Handler
	async function onLoginHandler() {}

	return (
		<>
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
				<button onClick={onLoginHandler}>Sign In</button>
			</section>
		</>
	);
}

export default Login;
