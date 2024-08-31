import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Signup';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();

          const UNList = JSON.parse(localStorage.getItem('LogIn'));
            UNList.forEach((element) => {
              if (element.UseN === username && element.PassW === password) {
                setError('');
                history.push('/home');
              } else {
                setError('UserName / Password is wrong');
              }
            });
        }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" style={{ padding: '8px 20px' }}>
          Login
        </button>
        <br />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Link to="/sign-up" style={{ color: 'red' }}>
          Click here to signup!
        </Link>
      </form>
    </div>
  );
};

export default Login;
