import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const LocationCard = () => {
  return (
    <div className="locationCard">
      <figure>
        <img src="assets/img/inner-banner.jpg" alt="" />
      </figure>
      <h3>Location Name</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
        blanditiis praesentium.
      </p>
      <Link className="filled-button" to={"/product"}>
        Product on Location
      </Link>
    </div>
  );
};

export default LocationCard;
