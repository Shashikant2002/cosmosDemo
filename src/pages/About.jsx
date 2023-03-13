import React from "react";
import AboutContent from "../components/aboutContent/AboutContent";
import ImageChef from "../components/imageChef/ImageChef";
import InnerBanner from "../components/innerBanner/InnerBanner";

const About = () => {
  return (
    <>
      <InnerBanner bgImg={"/assets/img/about-banner.jpg"} title={"About Us"} />
      <AboutContent
        subTitle="ENJOY OUR SIGNATURE FOOD"
        title="Excellent Ingredients & Authentic Japanese Cuisine"
        imgPos={"right"}
        imageBg="assets/img/dining-1.jpg"
        imageFr="assets/img/about-2.jpg"
        />
      <AboutContent
        bottomPadding="50px"
        subTitle="ENJOY OUR SIGNATURE FOOD"
        title="Excellent Ingredients & Authentic Japanese Cuisine"
        imgPos={"left"}
        imageBg="assets/img/aboutbg.jpg"
        imageFr="assets/img/chefAbout.jpg"
        />
      <ImageChef image={"assets/img/imagechef.png"} />
      <AboutContent
        buttonLink={{ butName: "VIEW MENUES", path: "/" }}
        subTitle="ENJOY OUR SIGNATURE FOOD"
        title="Excellent Ingredients & Authentic Japanese Cuisine"
        imgPos={"left"}
        imageBg="assets/img/chef-1.jpg"
        imageFr="assets/img/about-2.jpg"
        />
    </>
  );
};

export default About;
