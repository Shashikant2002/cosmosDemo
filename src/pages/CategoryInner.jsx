import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InnerBanner from "../components/innerBanner/InnerBanner";
import { useGlobalContext } from "../context/context";
import CategoryInnerSect from "../components/innerCategory/CategoryInner";
import Loading from "../components/loading/Loading";

const CategoryInner = () => {
  const { categoryText } = useParams();
  const [loading, setLoading] = useState(true);

  const { filterByCategory, allCategoryProduct } = useGlobalContext();

  const filteredPro = async () => {
    await setLoading(true);
    await filterByCategory(categoryText);
    await setLoading(false);
  };

  useEffect(() => {
    filteredPro();
  }, []);

  // console.log(allCategoryProduct);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <InnerBanner
            bgImg="/assets/img/inner-banner.jpg"
            title={categoryText}
          />
          <CategoryInnerSect categoryProduct={allCategoryProduct} />
        </>
      )}
    </>
  );
};

export default CategoryInner;
