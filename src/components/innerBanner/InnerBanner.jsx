import React from "react";
import "./innerBanner.css";

const InnerBanner = ({ bgImg, title }) => {
  return (
    <>
      <div
        className="innerBanner"
        
        style={{
          background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default InnerBanner;
