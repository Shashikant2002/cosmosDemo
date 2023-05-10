import React from "react";
import "./banner.css";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
// import axios from "axios";

const Banner = () => {
  // const baseUrl = process.env.PUBLIC_URL || "http://localhost:5000";
  // const [banner, setBanner] = useState();

  // const fetchBannerData = async () => {
  //   try {
  //     const data = await axios.get(`${baseUrl}/api/get/all/banners`);
  //     setBanner(data.data);
  //   } catch (err) {
  //     console.log("Error " + err);
  //   }
  // };

  // useEffect(() => {
    // fetchBannerData();
  // }, []);

  // console.log(banner && banner[0].image_url);

  return (
    <>
      
      <section id="banner" className="banner">
        <div className="container">
          <div className="content text-center">
            <h1>VIRTUAL GRUB HUB !!</h1>
            <div className="buttons flex justify-center">
              <Link to={"/product"} className="filled-button">Order Now</Link>
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
      
    </>
  );
};

export default Banner;
