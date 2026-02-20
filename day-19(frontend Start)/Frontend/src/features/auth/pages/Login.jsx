import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
function Login() {
  return (
     <main>
          <div className="form-container">
              <h1>Login</h1>
              <form >
                <input type="text"  name='username' placeholder='Enter yourname' />
                <input type="text" name='password' placeholder='Enter password' />
                <button>Login</button>
              </form>
             <p>Already have an account ? <Link className='toggleAuthForm' to="/register" > Register </Link></p>
          </div>
     </main>
  )
}

export default Login
