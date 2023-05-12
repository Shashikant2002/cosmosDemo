import React from "react";
import "./dinying.css";

const Dinying = () => {
  return (
    <>
      <div className="dinying common-section">
        <div className="container flex alignItemFlexEnd">
          <figure className="image">
            <img src="assets/img/dining-1.webp" alt="" />
          </figure>
          <div className="content">
            <h5 className="right-line">Experience our Delivery</h5>
            <h2>Perfect Delivery Experience</h2>
            <p>
            We make delicious food fast with sustainable packaging and swift delivery. 
            We Reliably deliver tasty food which matches your wallet
            </p>
            <button className="border-button">
              <a href="/contact">Order Now</a>
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
