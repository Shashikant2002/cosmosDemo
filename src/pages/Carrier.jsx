import React, { useEffect, useState } from "react";
import AboutContent from "../components/aboutContent/AboutContent";
import ImageChef from "../components/imageChef/ImageChef";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import WhereItAllBegain from "../components/whereItAllBegail/WhereItAllBegain";

const Career = () => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
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
          <InnerBanner
            bgImg={"/assets/img/about-banner.jpg"}
            title={"Carerr"}
          />
          <WhereItAllBegain
            title="A Sophisticated Interpretation Of Traditional Japanese Cuisine"
            subTitle="FOUNDED IN 2023"
            imgPos={"left"}
            para_1="A distinctive, well-preserved and comfortable space, high- quality products, authentic cuisine, food and drinks are done flawlessly."
            para_2="A distinctive, well-preserved and comfortable space, high- quality products, authentic cuisine, food and drinks are done flawlessly."
            img_2="assets/img/about-2.jpg"
            img_1="assets/img/dining-1.jpg"
          />
          <WhereItAllBegain
            title="Our History & Food Philosophy"
            subTitle="WHERE IT ALL BEGAN"
            imgPos={"right"}
            para_1="We are located in an excellent location in the center of the city, quiet in the middle of the hustle and bustle. Enjoy your meal time in a comfortable environment. We can't wait to serve you at our restaurant."
            para_2="We present delicious and enticing dishes with high-quality ingredients. There is no set protocol for ordering from the menu."
            img_1="assets/img/aboutbg.jpg"
            img_2="assets/img/chefAbout.jpg"
          />
          <ImageChef image={"assets/img/imagechef.png"} />
          <AboutContent
            buttonLink={{ butName: "VIEW MENUES", path: "/" }}
            subTitle="ENJOY OUR SIGNATURE FOOD"
            title="Excellent Ingredients & Authentic Japanese Cuisine"
            imgPos={"left"}
            imageBg="assets/img/chef-1.jpg"
            imageFr="assets/img/chop.jpg"
          />
        </>
      )}
    </>
  );
};

export default Career;
