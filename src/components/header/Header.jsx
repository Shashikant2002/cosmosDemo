import React, { useEffect, useRef } from "react";
import LoginSignup from "../loginSignup/LoginSignup";
import Nav from "../nav/Nav";
import "./header-main.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const header = useRef();
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.current.classList.add("header-mainBackground");
    } else {
      header.current.classList.remove("header-mainBackground");
    }
  }

  const togleMenu = () => {
    document.querySelector(".nav-bar").classList.toggle("showMenu");
    document.querySelector(".login-signup").classList.toggle("showLogin-signup");
  };

  return (
    <>
      <header ref={header} className="header-main">
        <div className="container flex justify-spacebetween">
          <div className="empth"></div>
          <Nav togleMenu={togleMenu} />
          <LoginSignup togleMenu={togleMenu} />
          <span className="barNavOpen" onClick={togleMenu}>
            <FaBars />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
