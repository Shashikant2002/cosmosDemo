import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import ProductCard from "../productCard/ProductCard";
import "./allProduct.css";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const AllOroduct = () => {
  const baseUrl = process.env.PUBLIC_URL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [page, setpage] = useState(1);

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

  console.log(product);

  const pageSelect = (page) => {
    setpage(page);
  };

  const nextPage = () => {
    if (page >= Math.ceil(product.allProducts.length / 6)) {
      return;
    }
    setpage(page + 1);
  };

  const prePage = () => {
    if (page <= 1) {
      return;
    }
    setpage(page - 1);
  };

  return (
    <>
      <div className="allProducts common-section flex flexWrap justify-spacebetween">
        {loading ? (
          <Loading />
        ) : (
          <>
            {product &&
              product.allProducts
                .slice(page * 6 - 6, page * 6)
                .map((ele, i) => {
                  return <ProductCard key={i} data={ele} />;
                })}
            {product && product.allProducts.length >= 6 && (
              <div className="pagenationProduct flex justify-center">
                {page === 1 ? (
                  ""
                ) : (
                  <button
                    onClick={prePage}
                    className="filled-button activePage"
                  >
                    <AiOutlineDoubleLeft />
                  </button>
                )}
                {[...Array(Math.ceil(product.allProducts.length / 6))].map(
                  (_, i) => {
                    return (
                      <button
                        onClick={() => pageSelect(i + 1)}
                        key={i}
                        className={`filled-button ${
                          page === i + 1 ? "activePage" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  }
                )}
                {page === Math.ceil(product.allProducts.length / 6) ? (
                  ""
                ) : (
                  <button
                    onClick={nextPage}
                    className="filled-button activePage"
                  >
                    <AiOutlineDoubleRight />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AllOroduct;
