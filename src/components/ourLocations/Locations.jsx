import React from "react";
import LocationCard from "../Cards/LocationCard";
import "./locations.css";

const Locations = () => {
  return (
    <>
      <section className="ourLocation">
        <div className="container">
          <div className="cards flex flex-wrap justify-center">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
