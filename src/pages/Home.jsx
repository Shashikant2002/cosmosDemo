import React from "react";
import About from "../components/aboutUs/About";
import Banner from "../components/banner/Banner";
import Regervation from "../components/booksheet/Regervation";
import Dinying from "../components/dinyingExp/Dinying";
import OurMenues from "../components/menues/OurMenues";

// For Change Title
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
      <Banner />
      <About />
      <OurMenues />
      <Dinying />
      <Regervation />
    </>
  );
};

export default Home;
