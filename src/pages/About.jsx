import React, { useEffect, useState } from "react";
import AboutContent from "../components/aboutContent/AboutContent";
import ImageChef from "../components/imageChef/ImageChef";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import WhereItAllBegain from "../components/whereItAllBegail/WhereItAllBegain";

const About = () => {
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
          <InnerBanner
            // bgImg={"/assets/img/about-banner.jpg"}
            bgImg={"/assets/img/banner_image.webp"}
            title={"About Us"}
          />
          <WhereItAllBegain
            title="Kozmo focus is to give best food to our client & to create delicacy"
            subTitle="FOUNDED IN 2023"
            imgPos={"left"}
            para_1="Kozmo by Nua Café is an organisation specialised in the development of good quality food/meals that you can experience sitting at home/office."
            // para_2="A distinctive, well-preserved and comfortable space, high- quality products, authentic cuisine, food and drinks are done flawlessly."
            img_2="assets/img/about-2.jpg"
            img_1="assets/img/dining-1.jpg"
          />

          <AboutContent
            buttonLink={{ butName: "VIEW MENUES", path: "/" }}
            subTitle="Objective"
            title="Our Objective"
            para_1={`It is to establish superior kitchen in best of locations that can offer high quality food in friendly environment at affordable price that represent excellent value for money. 
            Total customer satisfaction is ourt aim.`}
            para_2={[
              `At the same time any development must contribute to the comoverable profitability of the company`,
              `To achieve these objectives, staff is trained at high level. Ingredients are sources from best locations.`,
              `Similar standards are also to ensure customer satisfactions with in our subsidiary companies.`,
            ]}
            imgPos={"left"}
            imageBg="assets/img/chef-1.jpg"
            imageFr="assets/img/chop.jpg"
          />

          <WhereItAllBegain
            title="Neena Khanna
            Samresh Khanna
            Yatin Malhotra"
            subTitle="Founder & Directors"
            imgPos={"left"}
            para_1="Founder & Driven by Directors.
            The group was established in 2023 & soon it will operate 12 cloud Kitchens in Delhi/NCR. We are soon going international in USA & Canada."
            para_2={`Our Team: - 
                    Director operations
                    Marketing
                    Chefs
              `}
            img_1="assets/img/aboutbg.jpg"
            img_2="assets/img/chefAbout.jpg"
          />
          <WhereItAllBegain
            title="Target Market "
            subTitle="market"
            imgPos={"right"}
            para_1="Our target Market is corporates/people’s who really wants good food experience at home in good price proposition."
            para_2="Family/Working class/Bday/Corporates parties/Kitties/Hi-Tea/Solution to your day-to-day food."
            // para_2="We present delicious and enticing dishes with high-quality ingredients. There is no set protocol for ordering from the menu."
            img_1="assets/img/aboutbg.jpg"
            img_2="assets/img/chefAbout.jpg"
          />
          {/* <ImageChef image={"assets/img/imagechef.png"} /> */}
          <ImageChef image={"assets/img/team picture-min.jpg"} />
          <AboutContent
            buttonLink={{ butName: "VIEW MENUES", path: "/" }}
            subTitle="INDIAN"
            title="Giving Kitchen Experience of  years at an affordable prices"
            para_1={`Our main Indian gastronomy with complementary Tapas from the hearing of the ancestors.
            Giving Kitchen Experience of  years at an affordable prices.`}
            para_2={[
              `Best choice of dishes`,
              `Healthy Food`,
              `Lunch model for corporates`,
              `Daily Menu model for corporates`,
              `Dedicated &accurate Menu for best experience Ala carte at home.`,
              `Best service at your doorstep.`,
            ]}
            imgPos={"left"}
            imageBg="assets/img/chef-1.jpg"
            imageFr="assets/img/chop.jpg"
          />
          <AboutContent
            buttonLink={{ butName: "VIEW MENUES", path: "/" }}
            subTitle="Business"
            title="Business Model"
            para_1={`Mission Statement:--------
            To meet Customer expectation in relation to experience a perfect cuisine.`}
            para_2={[
              `Unique value Proposition `,
              `Menu development in Multi-cuisine`,
              `Indian  `,
              `Asian`,
              `Mediterranean`,
            ]}
            imgPos={"right"}
            imageBg="assets/img/chef-1.jpg"
            imageFr="assets/img/chop.jpg"
          />

          {/* <AboutContent
            buttonLink={{ butName: "VIEW MENUES", path: "/" }}
            subTitle="Operating"
            title="Operating Philosophy "
            para_1={`Efficiency to prepare high quality food in our innovative Kitchen environment.
             We get the best of ingredients from our local & Overseas vendors base. \n
             The pre-dominant themes of commitment are:`}
            para_2={[
              `To conceive, create & maintain product of genuine quality. `,
              `To offer our products & services at value for money.`,
              `To motivate our team members at all levels.  `,
              `Kozmo will focus only only on food.`,
              `Objective is to create delicacy.`,
            ]}
            imgPos={"right"}
            imageBg="assets/img/chef-1.jpg"
            imageFr="assets/img/chop.jpg"
          /> */}
        </>
      )}
    </>
  );
};

export default About;
