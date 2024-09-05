import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [perror, setPerror] = useState('');
  const [uerror, setUerror] = useState('');
  const history = useHistory();

  // localStorage.setItem("Users",JSON.stringify([]));
  const isPresent = localStorage.getItem('Users') !== null;
  if (isPresent) {
  } else {
    localStorage.setItem(
      'Users',
      JSON.stringify([{ UserN: 'sai', PassW: '123', wishlist: [], bag: [] }])
    );
  }
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>SignUp</h1>
      </div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          const users = JSON.parse(localStorage.getItem('Users'));
          console.log(users);
          if (
            uerror === '' &&
            perror === '' &&
            username !== '' &&
            password !== ''
          ) {
            console.log('data set');
            // const newUsers = [
            //   ...users,
            //   { UserN: username, PassW: password, wishlist: [], bag: [] },
            // ];

            // localStorage.setItem('Users', JSON.stringify(newUsers));
            localStorage.setItem(
              'User',
              JSON.stringify({
                UserN: username,
                PassW: password,
                wishlist: [],
                bag: [],
              })
            );
            history.push('/home');
          }
          else{
            console.log(perror,"perror")
            console.log(uerror,"uerror")

          }
        }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => {
              const Login = JSON.parse(localStorage.getItem('Users'));
              setUsername(event.target.value);
              if (
                Login.some((element) => element.UseN === event.target.value)
              ) {
                console.log('found');
                setUerror('Username already taken . Please change');
              } else {
                setUerror('');
              }
            }}
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
        <label>
          Re-enter Password:
          <input
            type="repassword"
            onChange={(event) => {
              if (password !== event.target.value) {
                setPerror('Passwords dont match');
              } else {
                setPerror('');
              }
            }}
          />
        </label>
        {/* <p>{error && <p style={{ color: 'red' }}>{error}</p>}</p> */}

        <button type="submit" style={{ padding: '8px 20px' }}>
          SignUp!
        </button>
        <br />
        <br />
        <p>
          {perror ||
            uerror || (
              <p style={{ fontSize: '100px', color: 'red' }}>{uerror}</p>
            ) || <p style={{ fontSize: '100px', color: 'red' }}>{perror}</p>}
        </p>
        <p>
          Already a user ,<Link to={'/login'}>Click here to Login</Link>!
        </p>
      </form>
    </div>
  );
};

export default Signup;
