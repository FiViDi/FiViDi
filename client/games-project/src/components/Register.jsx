import React, { useState } from "react";

function Register() {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

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

	return (
		<>
			<h1>REGISTER</h1>
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
			</section>
		</>
	);
}

export default Register;
