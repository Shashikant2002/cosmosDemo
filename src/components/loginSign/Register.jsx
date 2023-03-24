import React from "react";
import "./loginSign.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="loginSign common-section">
      <div className="container">
        <form action="/" className="form">
          {/* <h4>Register Now</h4> */}
          <div className="name">
            <label for="name">
              Name<span className="red">*</span>
            </label>
            <input id="phone" name="phone" type="phone" required="true" />
          </div>
          <div className="phone">
            <label for="phone">
              Phone<span className="red">*</span>
            </label>
            <input id="phone" name="phone" type="phone" required="true" />
          </div>

          <button className="filled-button">Register Now</button>

          <p>
            <span>
              <Link to={"/loginSign"}>
                <p>Login Now</p>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
