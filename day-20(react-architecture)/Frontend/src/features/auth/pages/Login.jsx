import React, {useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../Hook/useAuth.js";


// import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
 const  {user, loading , loginHandle} = useAuth()
 

 if (loading) {
    return <h1>Loding</h1>
 }
  async function handleFormSubmit(e) {
     e.preventDefault()
   const response = await loginHandle(username,password)
    console.log(user)
    
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
