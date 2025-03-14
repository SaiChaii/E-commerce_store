import React from "react";

const LoginHeader = (props) => {
  const { val } = props;
  return (
    <div
      className="ui fixed menu"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <span
        className="loginHeader"
        style={{ alignItems: "center", color: "black", fontSize: "1.5rem" }}
      >
        Welcome to Chai-commerce , Please {val} to get the full access to the
        website
      </span>
    </div>
  );
};

export default LoginHeader;
