import React from "react";

const LoginHeader = (props) => {
  const { val } = props;
  return (
    <div
      className="ui fixed menu"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
      }}
    >
      <span
        className="loginHeader"
        style={{ alignItems: "center", color: "black", fontSize: "2 rem" }}
      >
        Welcome to Chai-commerce , Please {val} to get the full access to the
        website
      </span>
    </div>
  );
};

export default LoginHeader;
