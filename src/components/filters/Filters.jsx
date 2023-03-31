import React, { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import "./filters.css";

const Filters = ({ categoryForFilter }) => {
  const { filterByCategory } = useGlobalContext();
  let allCatFil = ["veg thali"];
  let fiterText = [];
  const [filterContent, setFilterContent] =  useState(fiterText);

  const changeProduct = (e, product) => {
    // filterByCategory(allCatFil);
    console.log(e.target)
  };

  useEffect(() => {
    categoryForFilter && categoryForFilter.forEach((ele) => {
      fiterText.push(ele._id);
    })
    fiterText.sort();
    setFilterContent(fiterText)
  }, [categoryForFilter]);

  

  return (
    <>
      <div className="categories">
        <ul>
          {filterContent &&
            filterContent.map((ele, i) => {
              return (
                <li key={i}>
                  {ele === "" ? (
                    ""
                  ) : (
                    <label key={ele._id} className="box flex align-center">
                      <p>{ele}</p>
                      <input
                        onChange={(e) => changeProduct(e, ele._id)}
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
