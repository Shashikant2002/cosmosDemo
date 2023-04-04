import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const LocationCard = ({title}) => {
  return (
    <div className="locationCard">
      <figure>
        <img src="assets/img/inner-banner.jpg" alt="" />
      </figure>
      <h4>{title}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
        blanditiis praesentium.
      </p>
      <Link className="filled-button" to={"/product"}>
        View Now
      </Link>
    </div>
  );
};

export default LocationCard;
