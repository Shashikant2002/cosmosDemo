import React from "react";
import "./banner.css";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <section id="banner" className="banner">
        <div className="">
          {/* <h1>jkdj</h1> */}
          <div className="content text-center">
            <h1>VIRTUAL GRUB HUB !!</h1>
            <div className="buttons flex justify-center">
              <Link to={"/product"} className="filled-button">
                Order Now
              </Link>
              {/* <Link to={"/location"} className="border-button">View All Location</Link> */}
              {/* <button className="border-button">View All Location</button> */}
            </div>
          </div>
          <a
            className="flex align-center scroll-content justify-center"
            href="#about"
          >
            <BsChevronDown /> Scroll Now
          </a>
          <Carousel
            autoPlay={true}
            centerMode={false}
            centerSlidePercentage="0"
            infiniteLoop={true}
            interval={4000}
            // swipeable = {true}
          >
            {/* <div className="itemBannerCrowsel">
              <img src={"assets/img/banner_image.webp"} alt="Banner Image" />
            </div> */}
            <div className="itemBannerCrowsel">
              <img src={"assets/img/update_1/banner 2.jpg"} alt="Banner Image" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Banner;
