import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import signup from "../images/signup.svg";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [perror, setPerror] = useState("");
  const [uerror, setUerror] = useState("");
  const [error, setError] = useState(false);
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
      <img src={signup} style={{ height: "80vh" }} alt="signup-img" />
      <div
        style={{
          height: "80vh",
          width: "50%",
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
          style={{
            gap: "5px",
            margin: "0 10px 0 10px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            // const users = JSON.parse(localStorage?.getItem("Users"));
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
            } else {
              toast.error(
                `Invalid Credentials . please recheck Username and Password`,
                {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  className: "custom-toast",
                  // transition: Bounce,
                }
              );
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
                const Login = JSON.parse(localStorage?.getItem("Users"));
                setUsername(event?.target?.value);
                if (
                  Login.some(
                    (element) => element?.UseN === event?.target?.value
                  )
                ) {
                  setUerror("Username already taken . Please change");
                  setError(true);
                } else {
                  setUerror("");
                  setError(false);
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
              onChange={(event) => setPassword(event?.target?.value)}
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
                if (password !== event?.target?.value) {
                  setPerror("Passwords dont match");
                  setError(true);
                } else {
                  setPerror("");
                  setError(false);
                }
              }}
            />
          </label>
          {/* <p>{error && <p style={{ color: 'red' }}>{error}</p>}</p> */}
          <label>
            <button
              type="submit"
              style={{ margin: "80px 0 0 0", padding: "8px 20px" }}
            >
              SignUp!
            </button>
            <ToastContainer
              position="top-center"
              TypeOptions="success"
              // autoClose={1000}
              // hideProgressBar={false}
              // newestOnTop={true}
              // closeOnClick={false}
              // rtl={true}
              // pauseOnFocusLoss
              // draggable
              // pauseOnHover
              // theme="light"
              // transition={"Slide"}
            />
          </label>
        </form>
        <p>
          Already a user ?,<Link to={"/login"}>Click here to Login</Link>!
        </p>
      </div>
    </div>
  );
};

export default Signup;
