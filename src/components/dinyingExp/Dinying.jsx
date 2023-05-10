import React from "react";
import "./dinying.css";

const Dinying = () => {
  return (
    <>
      <div className="dinying common-section">
        <div className="container flex">
          <figure className="image">
            <img src="assets/img/dining-1.webp" alt="" />
          </figure>
          <div className="content">
            <h5 className="right-line">Experince Our Dining</h5>
            <h2>Perfect Dining Experience</h2>
            <p>
              We Make Delivered Food Faster, More Delicious, And More
              Sustainable. Reliable For Every Delivery And Match your Wallet
            </p>
            <button className="border-button">
              <a href="/">Book Your Dining</a>
            </button>

            <figure>
              <img src="assets/img/dining-2.webp" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dinying;
