import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(e) {
     e.preventDefault()
     try {
      const response = await axios.post("http://localhost:3000/api/auth/login",
        {
          username,
          password
        },
        { withCredentials: true }
      );
      console.log(response.data);
     } catch (error) {
        console.log(error)
     }
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter yourname"
            value={username}
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>Login</button>
        </form>
        <p>
          Don't have an account ?{" "}
          <Link className="toggleAuthForm" to="/register">
            {" "}
            Register{" "}
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
