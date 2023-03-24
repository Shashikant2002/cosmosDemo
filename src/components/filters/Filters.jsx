import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import "./filters.css";

const Filters = ({ categoryForFilter, setProduct }) => {
  const { filterByCategory } = useGlobalContext();
  let allCatFil = ["veg thali"];

  const changeProduct = (product) => {
    // allCatFil.push(product);
    filterByCategory(allCatFil);
  };
  return (
    <>
      <div className="categories">
        <ul>
          {categoryForFilter &&
            categoryForFilter.map((ele, i) => {
              return (
                <li key={i}>
                  {ele._id === "" ? (
                    ""
                  ) : (
                    <label key={ele._id} className="box flex align-center">
                      <p>{ele._id}</p>
                      <input
                        onChange={() => changeProduct(ele._id)}
                        type="checkbox"
                      />
                      <span className="mark"></span>
                    </label>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Filters;
