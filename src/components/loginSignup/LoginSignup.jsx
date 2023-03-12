import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import "./loginSignup.css";

const LoginSignup = () => {
  return (
    <>
      <div className="login-signup flex  align-center">
        <ul className="flex  align-center">
          <li>
            <a title="Login" href="/">
              <BiLogInCircle />
            </a>
          </li>
          <li>
            <a title="Sign Up" href="/">
              <MdSupervisorAccount />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginSignup;
