import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
// import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ data }) => {
  const {
    product_name,
    product_images,
    // product_description,
    quantity = 0,
    // product_regular_price,
    product_sale_price,
  } = data;
  const [changeQut, setChangeQut] = useState(0);

  const increageQuantity = () => {
    if (quantity <= changeQut) {
      return;
    }
    setChangeQut(changeQut + 1);
  };
  const decreaseQuantity = () => {
    if (changeQut <= 0) {
      return;
    }
    setChangeQut(changeQut - 1);
  };

  //   console.log(data);

  return (
    <>
      <div className="productCardMain flex align-center">
        <Link to={"/"}>
          <figure className="thumb flex align-center">
            <img
              src={
                product_images[0].image_url
                  ? product_images[0].image_url
                  : "assets/img/fakefood.png"
              }
              alt=""
            />
          </figure>
        </Link>
        <div className="mainContent">
          <Link to={"/"}>
            {/* <h4>Product -</h4> */}
            <h5 title={product_name} className="title">
                {product_name.slice(0, 9)}
                {product_name.length > 9 ? "..." : ""}
            </h5>
          </Link>
          {/* <p>
            {product_description
              ? product_description
              : "Description Not Found"}
          </p> */}
          <p className="quantityPrice flex justify-spacebetween">
            <span>Qt. {quantity}</span>
            <span>
              ₹{/* <strike>{product_regular_price}</strike> */}
              {product_sale_price}
            </span>
          </p>
          <div className="addInCart justify-spacebetween">
            <div className="incDec  flex">
              <button onClick={decreaseQuantity}>-</button>
              <input
                className="text-center"
                type="text"
                readOnly=""
                value={changeQut}
              />
              <button onClick={increageQuantity}>+</button>
            </div>
            {/* <button
              style={{ pointerEvents: changeQut >= 1 ? "inherit" : "none" }}
              className="filled-button"
            >
              <MdAddShoppingCart />
            </button> */}
            <button
              style={{ pointerEvents: changeQut >= 1 ? "inherit" : "none" }}
              className="filled-button"
            >
              Add in Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
