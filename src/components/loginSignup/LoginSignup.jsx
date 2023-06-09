import React from "react";
import { BiLogInCircle, BiCartAlt } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./loginSignup.css";

const LoginSignup = ({ togleMenu }) => {
  const { totalQuantity, authorization } = useGlobalContext();

  return (
    <>
      <div className="login-signup flex  align-center">
        <ul className="flex  align-center">
          {authorization ? (
            <li>
              <Link title="Sign Up" to="/profile" onClick={togleMenu}>
                <MdSupervisorAccount />
              </Link>
            </li>
          ) : (
            <li>
              <Link className="aligin-center flex" title="Login Signup" to="/loginSign" onClick={togleMenu}>
                {/* <BiLogInCircle /> */}
                <button className="filled-button">Login</button>
              </Link>
            </li>
          )}
          <li className="cart_number">
            <p className="cartCircle">{totalQuantity}</p>
            <Link title="Cart" to="/cart" onClick={togleMenu}>
              <BiCartAlt />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginSignup;
