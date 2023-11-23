import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import "../App.css";

function Login({ setIsAuth }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const cookies = new Cookies();
	const login = () => {
		Axios.post("http://localhost:3001/login", {
			username,
			password,
		}).then((res) => {
			const { firstName, lastName, username, token, userId } = res.data;
			cookies.set("token", token);
			cookies.set("userId", userId);
			cookies.set("username", username);
			cookies.set("firstName", firstName);
			cookies.set("lastName", lastName);
			setIsAuth(true);
		});
	};
	return (
		<>
			<section className="wrapper">
				<form action="">
					<h1>LOGIN</h1>
					<div className="input-box">
						<input
							type="text"
							placeholder="Username"
							onChange={(event) => {
								setUsername(event.target.value);
							}}
						></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input
							type="password"
							placeholder="Password"
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						></input>
						{/* <i className="bx bxs-lock-alt"></i> */}
					</div>
					<button className="btn" onClick={login}>
						Sign In
					</button>
				</form>
			</section>
		</>
	);
}

export default Login;
