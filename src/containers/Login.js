import { useEffect, useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Signup';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [suggestedEmail,setsuggestedEmail]= useState("")
  const history = useHistory();
  const Users=JSON.parse(localStorage.getItem("Users"))
  useEffect(()=>{
    const suggestedEmail=Users.find((p)=>p.userN===username)
    setsuggestedEmail(suggestedEmail)
  },[username])

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();

          const Users = JSON.parse(localStorage.getItem('Users'));

          // localStorage.setItem("User","{}")
          Users.forEach((element) => {
            if (element.UseN === username && element.PassW === password) {
              localStorage.setItem('User', JSON.stringify(element));
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
            onClick={(event)=>{
              return(
                <div>
                {
                  Users.map((user)=>{
                    return(
                      <div>
                        {user.UserN}
                        {user.PassW}
                      </div>
                    )
                  })
                }
                </div>
              )
            }}
            placeholder='Enter your e-mail'
          />
          {/* {
            suggestedEmail && (
              <div className='email-suggestion'>
                <p>
                  Log in with {suggestedEmail}
                </p>

              </div>
            )
          } */}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Enter your password'
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
          New here ? Click here to signup!
        </Link>
      </form>
    </div>
  );
};

export default Login;
