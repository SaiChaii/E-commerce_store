import { useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./Signup";
import login from "../images/login.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [suggestedEmail, setsuggestedEmail] = useState("");
  const history = useHistory();
  const Users = JSON.parse(localStorage.getItem("Users"));
  useEffect(() => {
    const suggestedEmail = Users.find((p) => p.userN === username);
    setsuggestedEmail(suggestedEmail);
  }, [username]);

  return (
    <div
      className="login-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "100px",
      }}
    >
      <img src={login} alt="login-img" style={{ height: "75vh" }} />
      <div
        style={{
          height: "500px",
          width: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fae7e6",
          gap: "30px",
        }}
      >
        <h1>Login</h1>
        <form
          className="login-form"
          style={{gap:'20px'}}
          onSubmit={(event) => {
            event.preventDefault();

            const Users = JSON.parse(localStorage.getItem("Users"));

            // localStorage.setItem("User","{}")
            Users.forEach((element) => {
              if (element.UserN === username && element.PassW === password) {
                localStorage.setItem("User", JSON.stringify(element));
                setError("");
                history.push("/home");
              } else {
                setError("UserName / Password is wrong");
              }
            });
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Username: </span>
            <input
              type="text"
              value={username}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => setUsername(event.target.value)}
              onClick={(event) => {
                return (
                  <div>
                    {Users.map((user) => {
                      return (
                        <div>
                          {user.UserN}
                          {user.PassW}
                        </div>
                      );
                    })}
                  </div>
                );
              }}
              placeholder="Enter your e-mail"
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
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Password:</span>
            <input
              type="password"
              value={password}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <br />
          <button type="submit" style={{ padding: "8px 20px" }}>
            Login
          </button>
          <br />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Link to="/sign-up" style={{ color: "red" }}>
            New here ? Click here to signup!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
