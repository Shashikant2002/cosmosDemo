import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./innerCategory.css";

const CategoryInnerSect = ({ categoryProduct }) => {
  console.log(categoryProduct);
  return (
    <>
      <div className="categoryInnerSect common-section">
        <div className="container flex flex-wrap justify-center">
          {categoryProduct && categoryProduct.length <= 0 ? (
            <h3 className="text-center">Product Not Found</h3>
          ) : (
            categoryProduct &&
            categoryProduct.map((ele, i) => {
              return <ProductCard key={i} data={ele} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryInnerSect;
