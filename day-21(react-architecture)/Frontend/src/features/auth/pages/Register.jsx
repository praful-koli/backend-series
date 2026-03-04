import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
 const navigate = useNavigate()
 const  [username, setUsername] = useState("")
 const  [email, setEmail] = useState("")
 const  [password, setPassword] = useState("")
 
 const {loading,handleRegister} = useAuth()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await handleRegister(username , email, password)
      navigate('/')
    } catch (error) {
      console.error(error.message)
    }
  };

  if (loading) {
     return(
       <main>
          <h1>Loading....</h1>
       </main>
     )
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter usernaem"
            value={username}
            onInput={(e)=>setUsername(e.target.value)}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onInput={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onInput={(e)=>setPassword(e.target.value)}
          />
          

          <button className="button primary-button ">Register</button>
        </form>
        <p>Already have account ? <Link className='toggle-link' to={'/login'}> Login to account </Link>  </p> 
      </div>
    </main>
  )
}
