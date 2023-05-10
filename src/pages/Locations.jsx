import React from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Locations from "../components/ourLocations/Locations";

const LocationsPage = () => {
  return (
    <>
      {/* <InnerBanner bgImg="/assets/img/inner-banner.jpg" title={"Locations"} /> */}
      <InnerBanner bgImg="/assets/img/banner_image.webp" title={"Locations"} />
      <Locations />
    </>
  );
};

export default LocationsPage;
