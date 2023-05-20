import React from "react";
import "./insta.css";
import { Link } from "react-router-dom";

const InstaSticky = () => {
  return (
    <>
      <div className="instaStick flex align-center justify-center">
        <Link className="filled-button" to="/product">Order Now</Link>
        <a
          target="_blank"
          className="insta"
          href="https://instagram.com/kozmo.by.nua?igshid=NTc4MTIwNjQ2YQ=="
        >
          <img src="/assets/img/update_1/instagram icon.svg" alt="" />
        </a>
      </div>
    </>
  );
};

export default InstaSticky;
