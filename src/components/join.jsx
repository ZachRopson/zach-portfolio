import React, { useState } from "react";
import arrow from "../assets/arrow.png";

const Join = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="zigzag-line" />
      <div className="joinBlock">
        <h1>Leave your email for contact info!</h1>
        <p>
          Using this newsletter form, you can leave your email for future connections.
        </p>
        <div className="formBlock">
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button>
            <img src={arrow} alt="arrow" width="14" height="14" />
          </button>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Join;
