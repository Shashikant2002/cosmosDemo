import React from "react";
import "./filters.css";

const Filters = ({ categoryForFilter }) => {
  console.log(categoryForFilter);
  return (
    <>
      <div className="categories">
        <ul>
          {categoryForFilter &&
            categoryForFilter.map((ele, i) => {
              return (
                <li>
                  {ele._id === "" ? (
                    ""
                  ) : (
                    <label class="box flex align-center">
                      <p>{ele._id}</p>
                      <input type="checkbox" />
                      <span class="mark"></span>
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
