import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
			navigate("/login");
		} catch (error) {
			console.log(error);
			setError(error);
		}
	}

	if (error) return <h1>{error.message}</h1>;

	return (
		<>
			<section className="register">
				<label>REGISTER</label>
				<input
					type="text"
					placeholder="First Name"
					onChange={isFirstName}
					value={firstName}
				></input>
				<input
					type="text"
					placeholder="Last Name"
					onChange={isLastName}
					value={lastName}
				></input>
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
				<button onClick={onRegisterHandler}>Sign Up</button>
			</section>
		</>
	);
}

export default Register;
