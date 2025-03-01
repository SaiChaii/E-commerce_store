import React from "react";

const LoginHeader = (props) => {
  const { val } = props;
  return (
    <div
      className="ui fixed menu"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <span
        className="loginHeader"
        style={{ alignItems: "center", color: "black", fontSize: "2 rem" }}
      >
        Welcome to Chai-commerce , Please {val} to get the full access to the
        website
      </span>
      <span style={{ alignItems: "center", color: "black" }}>
        Please have redux installed in your browser to view this project without
        any issues (we dont have a backend for login and credentials for login
        are hardcoded in redux )
      </span>
    </div>
  );
};

export default LoginHeader;
