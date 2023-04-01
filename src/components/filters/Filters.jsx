import React, { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import "./filters.css";

const Filters = ({ categoryForFilter }) => {
  const { filterByCategory, filterByMultiCategory } = useGlobalContext();
  let fiterText = [];
  const [filterContent, setFilterContent] = useState(fiterText);
  const [filterArray, setFilterArray] = useState([]);

  let newFilter;
  const changeProduct = (event) => {
    let permissions_array = [...filterArray];
    if (event.target.checked) {
      permissions_array = [...filterArray, event.target.value];
    } else {
      permissions_array.splice(filterArray.indexOf(event.target.value), 1);
    }
    setFilterArray(permissions_array);

    // console.log(permissions_array);

    filterByMultiCategory(permissions_array);
  };

  useEffect(() => {
    categoryForFilter &&
      categoryForFilter.forEach((ele) => {
        fiterText.push(ele._id);
      });
    fiterText.sort();
    setFilterContent(fiterText);
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
                        onChange={changeProduct}
                        type="checkbox"
                        value={ele}
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
