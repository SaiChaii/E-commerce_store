import React from "react";
import ex1 from "../exclusivesImages/ex1.jpeg";
import ex2 from "../exclusivesImages/ex2.jpeg";
import ex3 from "../exclusivesImages/ex3.jpeg";
import ex4 from "../exclusivesImages/ex4.jpeg";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

const exImg = [ex1, ex2, ex3, ex4];

const Exclusives = () => {
  const history = useHistory();
  return (
    <div
      className="w-100 d-flex align-items-center gap-3 mx-2"
      style={{
        justifyContent: "space-evenly",
        backgroundColor: "lightgray",
        padding: "20px",
      }}
    >
      {exImg.map((imgSrc, i) => (
        <Link to="/fashion">
          <img
            key={i}
            src={imgSrc}
            alt="exclusives"
            className="exclusives-img"
            style={{ width: "100%" }}
            on
          />
        </Link>
      ))}
    </div>
  );
};

export default Exclusives;
