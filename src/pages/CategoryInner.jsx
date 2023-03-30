import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import InnerBanner from "../components/innerBanner/InnerBanner";
import { useGlobalContext } from "../context/context";
import CategoryInnerSect from "../components/innerCategory/CategoryInner";

const CategoryInner = () => {
  const { categoryText } = useParams();

  const { filterByCategory, allCategoryProduct } = useGlobalContext();
  
  useEffect(() => {
    filterByCategory(categoryText);
      
  }, []);
  
  
  // console.log(allCategoryProduct);
  return (
    <>
      <InnerBanner
        bgImg="/assets/img/inner-banner.jpg"
        title={categoryText + " Category"}
      />
      <CategoryInnerSect categoryProduct={allCategoryProduct} />
    </>
  );
};

export default CategoryInner;
