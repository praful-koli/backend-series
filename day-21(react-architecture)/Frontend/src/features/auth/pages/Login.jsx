import { Link } from 'react-router-dom';
import '../styles/form.scss';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate()

  if (loading) {
    return (<main>
        <h1>Loading ..... </h1>
    </main>);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response =  await handleLogin(username, password);
        console.log(response)
        navigate('/')
      } catch (error) {
        console.error(error.message)
      }
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggle-link" to="/register">
            Create one.
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
