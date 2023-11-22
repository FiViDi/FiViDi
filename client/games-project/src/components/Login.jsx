import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

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
	const navigate = useNavigate();

	// ?onClick Handler
	async function onLoginHandler() {
		try {
			axios.post("http://localhost:3001/login", { username, password }).then((res) => {
				const { token, userId, firstName, lastName, username, hashedPassword } = res.data;

				cookies.set("token", token);
				cookies.set("userId", userId);
				cookies.set("firstName", firstName);
				cookies.set("lastName", lastName);
				cookies.set("username", username);
				cookies.set("hashedPassword", hashedPassword);
			});

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<section className="wrapper">
				<form action="">
					<h1>LOGIN</h1>
					<div className="input-box">
						<input type="text" placeholder="Username" onChange={isUsername}></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input type="password" placeholder="Password" onChange={isPassword}></input>
						{/* <i className="bx bxs-lock-alt"></i> */}
					</div>
					<button className="btn" onClick={onLoginHandler}>
						Sign In
					</button>
					<div className="register-link">
						<p>
							Don't have an account? <Link to={"/register"}>Register</Link>
						</p>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
