import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import ProductCard from "../productCard/ProductCard";
import "./allProduct.css"

const AllOroduct = () => {
  const baseUrl = process.env.PUBLIC_URL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const fetchBannerData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${baseUrl}/api/all/products`);
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

  return (
    <>
      <div className="allProducts common-section flex flexWrap justify-spacebetween">
        {loading ? (
          <Loading />
        ) : (
          product &&
          product.allProducts.map((ele, i) => {
            return (
                <ProductCard key={i} data={ele} />
            );
          })
        )}
      </div>
    </>
  );
};

export default AllOroduct;
