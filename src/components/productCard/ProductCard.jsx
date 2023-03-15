import React from "react";
import "./productCard.css";

const ProductCard = ({ data }) => {
  const { product_name, product_images } = data;
  console.log(product_images)
  return (
    <>
      <div className="productCardMain">
        <figure className="thumb">
          <img src={data.product_images[0].image_url} alt="" />
        </figure>
        <p>
          <b>{product_name}</b>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
