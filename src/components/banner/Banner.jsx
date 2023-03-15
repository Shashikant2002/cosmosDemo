import React, { useEffect, useState } from "react";
import "./banner.css";
import { BsChevronDown } from "react-icons/bs";
import axios from "axios";

const Banner = () => {
  const baseUrl = process.env.PUBLIC_URL || "http://localhost:5000";
  const [banner, setBanner] = useState();

  const fetchBannerData = async () => {
    try {
      const data = await axios.get(`${baseUrl}/api/get/all/banners`);
      setBanner(data.data);
    } catch (err) {
      console.log("Error " + err);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  console.log(banner && banner[0].image_url);

  return (
    <>
      {banner ? (
        <section
          id="banner"
          className="banner"
          style={{
            padding: " 230px 0",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            background: `linear-gradient(rgba(0,0,0,.7).image_url, rgba(0,0,0,.7)), url(${
              banner && banner[0].image_url
            })`,
          }}
        >
          <div className="container">
            <div className="content text-center">
              <h1>Contemporary Japanese Cuisine</h1>
              <div className="buttons flex justify-center">
                <button className="filled-button">Order Now</button>
                <button className="border-button">View All Location</button>
              </div>
            </div>

            <a
              className="flex align-center scroll-content justify-center"
              href="#about"
            >
              <BsChevronDown /> Scroll Now
            </a>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
