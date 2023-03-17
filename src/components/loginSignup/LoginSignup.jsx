import React from "react";
import { BiLogInCircle, BiCartAlt } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import { Link } from "react-router-dom";
import "./loginSignup.css";

const LoginSignup = ({ togleMenu }) => {
  return (
    <>
      <div className="login-signup flex  align-center">
        <ul className="flex  align-center">
          <li>
            <a title="Login" href="/" onClick={togleMenu}>
              <BiLogInCircle />
            </a>
          </li>
          <li>
            <a title="Sign Up" href="/" onClick={togleMenu}>
              <MdSupervisorAccount />
            </a>
          </li>
          <li>
            <Link title="Sign Up" to="/cart" onClick={togleMenu}>
              <BiCartAlt />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginSignup;
