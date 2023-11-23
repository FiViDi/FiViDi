import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import "../App.css";

function SignUp({ setIsAuth }) {
	const cookies = new Cookies();
	const [user, setUser] = useState(null);
	const signUp = () => {
		Axios.post("http://localhost:3001/signup", user).then((res) => {
			const { token, userId, firstName, lastName, username, hashedPassword } = res.data;

			cookies.set("token", token);
			cookies.set("userId", userId);
			cookies.set("firstName", firstName);
			cookies.set("lastName", lastName);
			cookies.set("username", username);
			cookies.set("hashedPassword", hashedPassword);
			setIsAuth(true);
		});
	};
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
					</div>
					<div className="input-box">
						<input
							type="password"
							placeholder="Password"
							onChange={(event) => {
								setUser({ ...user, password: event.target.value });
							}}
						></input>
					</div>
					<button className="btn" onClick={signUp}>
						Register
					</button>
				</form>
			</section>
		</>
	);
}

export default SignUp;
