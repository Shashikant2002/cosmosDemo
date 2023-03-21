import React, { useEffect, useState } from "react";
import { BiLogInCircle, BiCartAlt } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetch_cart } from "../../utils/globalFunction";
import "./loginSignup.css";

const LoginSignup = ({ togleMenu }) => {
  const[totalCart, setTotalCart] = useState(0);
  const fetchCart = fetch_cart();

  useEffect(() => {
    console.log(fetchCart)
    setTotalCart(fetchCart.length)
  }, [])

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
          <li className="cart_number">
            <p className="cartCircle">{totalCart}</p>
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
