import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync, updatePassword, updateUsername } from "../features/login/login-slice";

function Login({ setIsAuth }) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const { username, password, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const cookies = new Cookies();
  useEffect(() => {
    dispatch(fetchAsync())
  }, []);

  if (loading) {
    return (
      <>
        <section className="flex justify-center items-center" >
          <h1>LOADING</h1>
        </section>
      </>
    );
  }
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
    <div className="login">
      {" "}
      <label>Login</label>
      <input
        placeholder="Username"
        onChange={(event) => {
          dispatch(updateUsername(event.target.value));
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          dispatch(updatePassword(event.target.value));
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
