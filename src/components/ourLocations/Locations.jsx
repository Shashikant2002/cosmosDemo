import React from "react";
import LocationCard from "../Cards/LocationCard";
import "./locations.css";

const Locations = () => {
  return (
    <>
      <section className="ourLocation common-section">
        <div className="container">
          <div className="cards flex flex-wrap justify-center">
            <LocationCard title={"Kozmo Café Zamrudpur"} />
            <LocationCard title={"Kozmo Café Bani Square Gurgaon"} />
            <LocationCard title={"Kozmo Café Niti Bagh"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
