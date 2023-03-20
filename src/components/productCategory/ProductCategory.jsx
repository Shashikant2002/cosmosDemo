import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "../loading/Loading";
import "./productCategory.css";

const ProductCategory = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

  const fetchBannerData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://kozmo.onrender.com/api/all/products`);
      // const { data } = await axios.get(`${baseUrl}/api/all/products`);
      setCategory(data);
      setLoading(false);
    } catch (err) {
      console.log("Error " + err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="productCategory common-section">
          <div className="container">
            {category ? (
              <Carousel infinite={true} responsive={responsive}>
                {category &&
                  category.categoryForFilter.map((ele, i) => {
                    return (
                      <div key={i} className="card">
                        <p><b>{ele._id}</b></p>
                      </div>
                    );
                  })}
              </Carousel>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCategory;
