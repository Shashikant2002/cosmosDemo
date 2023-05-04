import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllOroduct from "../components/allProduct/AllOroduct";
import Filters from "../components/filters/Filters";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import ProductCategory from "../components/productCategory/ProductCategory";
import { useGlobalContext } from "../context/context";
import "./pageCss/product.css";

const Product = () => {
  const [render, setRender] = useState(false);
  const { fetchProduct, allProduct } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const reRender = () => {
    // console.log(render)
    setRender(!render);
  };

  useEffect(() => {
    // console.log(render);
    setLoading(true);
    fetchProduct();
    showLoading();
    setLoading(false);
  }, [render]);

  console.log(allProduct);

  return (
    <>
      {loading ? (
        <Loading />
      ) : allProduct? (
        <>
          <Helmet>
            <title>Product</title>
          </Helmet>
          <InnerBanner bgImg="/assets/img/inner-banner.jpg" title="PRODUCT" />
          <ProductCategory categoryes={allProduct && allProduct} />
          <div className="productPage common-section">
            <div className="container flex">
              <div className="filters">
                <h3>Categories</h3>
                <Filters
                  categoryForFilter={allProduct && allProduct.categoryForFilter}
                />
              </div>
              <div className="mainProduct">
                <AllOroduct reRender={reRender} product={allProduct} />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
