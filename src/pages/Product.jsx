import React from "react";
import { Helmet } from "react-helmet";
import AllOroduct from "../components/allProduct/AllOroduct";
import InnerBanner from "../components/innerBanner/InnerBanner";
import ProductCategory from "../components/productCategory/ProductCategory";
import "./product.css";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <InnerBanner bgImg="/assets/img/inner-banner.jpg" title="PRODUCT" />
      <div className="productPage common-section">
        <div className="container flex">
          <div className="filters">
            <h3>Filters</h3>
          </div>
          <div className="mainProduct">
            <ProductCategory />
            <AllOroduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
