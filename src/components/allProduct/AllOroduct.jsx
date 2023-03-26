import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./allProduct.css";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const AllOroduct = ({ product, reRender }) => {
  const [page, setpage] = useState(1);

  const pageSelect = (page) => {
    setpage(page);
  };

  const nextPage = () => {
    if (page >= Math.ceil(product.allProducts.length / 12)) {
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
        {product &&
          product.allProducts.slice(page * 12 - 12, page * 12).map((ele, i) => {
            return <ProductCard reRender={reRender} key={i} data={ele} />;
          })}
        {product && product.allProducts.length >= 6 && (
          <div className="pagenationProduct flex justify-center">
            {page === 1 ? (
              ""
            ) : (
              <button onClick={prePage} className="filled-button activePage">
                <AiOutlineDoubleLeft />
              </button>
            )}
            {[...Array(Math.ceil(product.allProducts.length / 12))].map(
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
            {page === Math.ceil(product.allProducts.length / 12) ? (
              ""
            ) : (
              <button onClick={nextPage} className="filled-button activePage">
                <AiOutlineDoubleRight />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AllOroduct;
