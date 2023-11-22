import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

function Register() {
	const cookies = new Cookies();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	// ?Navigate after register
	const navigate = useNavigate();

	// ?onClick handler
	async function onRegisterHandler() {
		try {
			axios.post("http://localhost:3000/register", user).then((res) => {
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
			setError(error);
		}
	}

	if (error) return <h1>{error.message}</h1>;

	return (
		<>
			<section className="wrapper">
				<form action="">
					<h1>REGISTER</h1>
					<div className="input-box">
						<input
							type="text"
							placeholder="First Name"
							onChange={(event) => {
								setUser({ ...user, firstName: event.target.value });
							}}
						></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input
							type="text"
							placeholder="Last Name"
							onChange={(event) => {
								setUser({ ...user, lastName: event.target.value });
							}}
						></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input
							type="text"
							placeholder="Username"
							onChange={(event) => {
								setUser({ ...user, username: event.target.value });
							}}
						></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input
							type="password"
							placeholder="Password"
							onChange={(event) => {
								setUser({ ...user, password: event.target.value });
							}}
						></input>
						{/* <i className="bx bxs-lock-alt"></i> */}
					</div>
					<button className="btn" onClick={onRegisterHandler}>
						Register
					</button>
					<div className="register-link">
						<p>
							Already have an account? <Link to={"/"}>Sign In</Link>
						</p>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
