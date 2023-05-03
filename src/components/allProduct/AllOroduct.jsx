import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./allProduct.css";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

const AllOroduct = ({ product, reRender }) => {
  const [page, setpage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const { searchProduct } = useGlobalContext();

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

  const searchHandeler = (e) => {
    e.preventDefault();
    console.log(searchText);
    searchProduct(searchText);
  };


  return (
    <>
      <div className="searchProduct">
        <form
          onSubmit={searchHandeler}
          action="/"
          className="flex align-center"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
          />
          <button className="filled-button">Search</button>
        </form>
      </div>
      <div className="allProducts common-section flex flexWrap justify-spacebetween">
        {product && product.allProducts.length > 0 ? (
          product.allProducts.slice(page * 12 - 12, page * 12).map((ele, i) => {
            return <ProductCard reRender={reRender} key={i} data={ele} />;
          })
        ) : (
          <p> Product Not Found </p>
        )}
        {product && product.allProducts.length <= 0 ? (
          ""
        ) : (
          <>
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
