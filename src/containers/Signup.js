import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import signup from "../images/signup.svg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [perror, setPerror] = useState("");
  const [uerror, setUerror] = useState("");
  const history = useHistory();

  // localStorage.setItem("Users",JSON.stringify([]));
  const isPresent = localStorage.getItem("Users") !== null;
  if (isPresent) {
  } else {
    localStorage.setItem(
      "Users",
      JSON.stringify([{ UserN: "sai", PassW: "123", wishlist: [], bag: [] }])
    );
  }
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
      <img src={signup} style={{ width: "630px" }} alt="signup-img" />
      <div
        className="login-header"
        style={{
          height: "600px",
          width: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#CFE6FA",
          gap: "50px",
        }}
      >
        <h1>SignUp</h1>

        <form
          className="login-form"
          style={{ gap: "20px", margin: "0 10px 0 10px" }}
          onSubmit={(event) => {
            event.preventDefault();
            const users = JSON.parse(localStorage.getItem("Users"));
            if (
              uerror === "" &&
              perror === "" &&
              username !== "" &&
              password !== ""
            ) {
              localStorage.setItem(
                "User",
                JSON.stringify({
                  UserN: username,
                  PassW: password,
                  wishlist: [],
                  bag: [],
                })
              );
              history.push("/home");
            }
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Username :</span>
            <input
              type="text"
              value={username}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => {
                const Login = JSON.parse(localStorage.getItem("Users"));
                setUsername(event.target.value);
                if (
                  Login.some((element) => element.UseN === event.target.value)
                ) {
                  setUerror("Username already taken . Please change");
                } else {
                  setUerror("");
                }
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ justifyContent: "left" }}>Password :</span>
            <input
              type="password"
              value={password}
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Re-enter Password :</span>
            <input
              type="repassword"
              style={{ marginLeft: "30px", width: "300px" }}
              onChange={(event) => {
                if (password !== event.target.value) {
                  setPerror("Passwords dont match");
                } else {
                  setPerror("");
                }
              }}
            />
          </label>
          {/* <p>{error && <p style={{ color: 'red' }}>{error}</p>}</p> */}
        </form>
        <button type="submit" style={{ padding: "8px 20px" }}>
          SignUp!
        </button>
        <br />
        <br />
        <p>
          {perror ||
            uerror || (
              <p style={{ fontSize: "100px", color: "red" }}>{uerror}</p>
            ) || <p style={{ fontSize: "100px", color: "red" }}>{perror}</p>}
        </p>
        <p>
          Already a user ?,<Link to={"/login"}>Click here to Login</Link>!
        </p>
      </div>
    </div>
  );
};

export default Signup;
