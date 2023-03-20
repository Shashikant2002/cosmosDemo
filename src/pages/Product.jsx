import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllOroduct from "../components/allProduct/AllOroduct";
import Filters from "../components/filters/Filters";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import ProductCategory from "../components/productCategory/ProductCategory";
import "./product.css";

const Product = () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  const baseUrl = "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();


  const fetchBannerData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://kozmo.onrender.com/api/all/products"); 
      // const { data } = await axios.get(`${baseUrl}api/all/products`);
      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.log("Error " + err);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchBannerData();
  }, []);

  // console.log(product);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Product</title>
          </Helmet>
          <InnerBanner bgImg="/assets/img/inner-banner.jpg" title="PRODUCT" />
          <ProductCategory />
          <div className="productPage common-section">
            <div className="container flex">
              <div className="filters">
                <h3>Categories</h3>
                <Filters categoryForFilter = {product && product.categoryForFilter} />
              </div>
              <div className="mainProduct">
                <AllOroduct product={product} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
