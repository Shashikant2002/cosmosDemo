import React, { useEffect, useState } from "react";
import About from "../components/aboutUs/About";
import Banner from "../components/banner/Banner";
import Regervation from "../components/booksheet/Regervation";
import Dinying from "../components/dinyingExp/Dinying";
import OurMenues from "../components/menues/OurMenues";

// For Change Title
import { Helmet } from "react-helmet";
import Loading from "../components/loading/Loading";
import Locations from "../components/ourLocations/Locations";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    showLoading();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <Banner />
          <About />
          <Locations />
          <OurMenues />
          <Dinying />
          <Regervation />
        </>
      )}
    </>
  );
};

export default Home;
