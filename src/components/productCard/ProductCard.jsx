import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../utils/globalFunction";
import "./productCard.css";
import { fetch_cart } from "../../utils/globalFunction";
import { useGlobalContext } from "../../context/context";
import { FaMoneyBillWave } from "react-icons/fa";

const ProductCard = ({ data, reRender }) => {
  const [view, setView] = useState(false);
  const { totalQut } = useGlobalContext();
  const [render, setRender] = useState(false);

  const reRendert = () => {
    setRender(!render);
  };

  useEffect(() => {
    fetch_cart().forEach((element) => {
      if (element.data._id === data._id) {
        setView(true);
      }
    });
    totalQut();
  }, [render]);
  // console.log(view)
  const {
    product_name,
    product_images,
    product_description,
    product_regular_price,
    product_sale_price,
    product_reword_point,
  } = data;
  const [changeQut, setChangeQut] = useState(1);
  console.log(data);
  const increageQuantity = () => {
    // if (quantity <= changeQut) {
    //   return;
    // }
    setChangeQut(changeQut + 1);
  };
  const decreaseQuantity = () => {
    if (changeQut <= 1) {
      return;
    }
    setChangeQut(changeQut - 1);
  };

  //   console.log(data);

  return (
    <>
      <div className="productCardMain flex align-center">
        {/* <Link to={"/"}> */}
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
        {/* </Link> */}
        <div className="mainContent">
          {/* <Link to={"/"}> */}
          {/* <h4>{view} -</h4> */}
          <h5 title={product_name} className="title">
            {product_name.slice(0, 25)}
            {product_name.length > 25 ? "..." : ""}
          </h5>
          {/* </Link> */}
          <p>
            {product_description
              ? product_description
              : "...Description Not Filled. Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          </p>

          <p className="quantityPrice flex justify-spacebetween">
            <span>
              {/* <strike>₹{product_regular_price}</strike>&nbsp; */}
              ₹{product_sale_price}
            </span>
            {product_reword_point ? (
              <span className="flex align-center">
                <FaMoneyBillWave /> &nbsp;{" "}
                {product_reword_point && product_reword_point}
              </span>
            ) : (
              ""
            )}
          </p>
          {/* <div className="addInCart justify-spacebetween">
            <div className="incDec  flex">
              <button onClick={decreaseQuantity}>-</button>
              <input
                className="text-center"
                type="text"
                readOnly={true}
                value={changeQut}
              />
              <button onClick={increageQuantity}>+</button>
            </div>
            <button
              style={{ pointerEvents: changeQut >= 1 ? "inherit" : "none" }}
              className="filled-button"
            >
              <MdAddShoppingCart />
            </button>
            {view && view ? (
              <>
                <Link to={"/cart"} className="filled-button">
                  View Cart
                </Link>
              </>
            ) : (
              <button
                className="filled-button"
                onClick={() => {
                  addToCart({ data, changeQut });
                  totalQut();
                  reRendert();
                }}
              >
                Add to Cart
              </button>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
