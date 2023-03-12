import React from "react";
import "./innerBanner.css";

const InnerBanner = ({title}) => {
  return (
    <>
      <div className="innerBanner">
        <div className="container text-center">
            <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default InnerBanner;
