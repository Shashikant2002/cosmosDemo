import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ data }) => {
  const {
    product_name,
    product_images,
    product_description,
    quantity,
    product_regular_price,
    product_sale_price,
  } = data;
  console.log(data);

  return (
    <>
      <div className="productCardMain">
        <Link to={"/"}>
          <figure className="thumb flex align-center">
            <img
              src={product_images[0].image_url ? "assets/img/fakefood.png" : ""}
              alt=""
            />
          </figure>
        </Link>
        <p className="title">
          <b>
            {product_name.slice(0, 20)}
            {product_name.length > 20 ? "..." : ""}
          </b>
        </p>
        <p>{product_description ? product_description : "Description Not Found"}</p>
        <p className="quantityPrice flex justify-spacebetween">
          <span>Qt. {quantity}</span>
          <span>
            Price: <strike>{product_regular_price}</strike> {product_sale_price}
          </span>
        </p>
        <div className="addInCart flex">
          <button>+</button>
          <input class="text-center" type="text" readonly="" value="1" />
          <button>-</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
