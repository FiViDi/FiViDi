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
			<section className="wrapper">
				<form action="">
					<h1>LOGIN</h1>
					<div className="input-box">
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
					</div>
					<button onClick={onLoginHandler}>Sign In</button>
					<div className="register-link"></div>
				</form>
			</section>
		</>
	);
}

export default Login;
