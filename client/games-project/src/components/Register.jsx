import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	// ?User input
	const isFirstName = (event) => {
		setFirstName(event.target.value);
	};
	const isLastName = (event) => {
		setLastName(event.target.value);
	};
	const isUsername = (event) => {
		setUsername(event.target.value);
	};
	const isPassword = (event) => {
		setPassword(event.target.value);
	};

	// ?Navigate after register
	const navigate = useNavigate();

	// ?onClick handler
	async function onRegisterHandler() {
		try {
			const response = await axios.post("http://localhost:3000/register", {
				firstName,
				lastName,
				username,
				password,
			});
			// console.log(response, "<< Register");
			// navigate("/");
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
						<input type="text" placeholder="First Name" onChange={isFirstName} value={firstName}></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input type="text" placeholder="Last Name" onChange={isLastName} value={lastName}></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input type="text" placeholder="Username" onChange={isUsername} value={username}></input>
						{/* <i className="bx bxs-user"></i> */}
					</div>
					<div className="input-box">
						<input type="password" placeholder="Password" onChange={isPassword} value={password}></input>
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
