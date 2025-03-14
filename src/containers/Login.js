import { useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./Signup";
import login from "../images/login.svg";

const Login = () => {
  const [username, setUsername] = useState("sai");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState(null);
  const [suggestedEmail, setsuggestedEmail] = useState("");
  const history = useHistory();
  const Users = JSON.parse(localStorage.getItem("Users"));
  useEffect(() => {
    const suggestedEmail = Users?.find((p) => p.userN === username);
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
      <img src={login} alt="login-img" style={{ height: "80vh" }} />
      <div
        style={{
          height: "80vh", // Ensure it takes full height of the parent
          width: "50%",
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
          style={{
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            // const Users = JSON.parse(localStorage.getItem("Users"));

            // let isAuthenticated = false;
            // Users?.forEach((element) => {
            //   if (element.UserN === username && element.PassW === password) {
            //     localStorage.setItem("User", JSON.stringify(element));
            //     setError("");
            //     history.push("/home");
            //     isAuthenticated = true;
            //   }
            // });

            // if (!isAuthenticated) {
            //   setError("UserName / Password is wrong");
            // }
            history.push("/home");
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <span>Username:</span>
            <input
              type="text"
              value={username}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your e-mail"
            />
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <span>Password:</span>
            <input
              type="password"
              value={password}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit" style={{ padding: "8px 20px" }}>
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Link to="/sign-up" style={{ color: "red" }}>
            New here? Click here to signup!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
