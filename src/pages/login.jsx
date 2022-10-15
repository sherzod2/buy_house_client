import React from "react";
import Header from "../components/header";
// import { Link } from "react-router-dom";
import "./pageStyles/login.scss";
import useToken from "../Hooks/useToken";

const Login = () => {
  const { setToken } = useToken();
  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    fetch(
      `http://localhost:7777/admin?username=${username.value}&password=${password.value}`
    )
      .then((res) => res.json())
      .then((accessToken) => {
        if (accessToken?.token) setToken(accessToken?.token);
        else alert(accessToken?.message);
      });
  };
  return (
    <div>
      <Header />
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmitAdmin(e)}>
          <div className="user-box">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="text" name="password" required />
            <label>Password</label>
          </div>
          <button type="Submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
