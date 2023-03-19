import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../utils/globalFunction";
import "./productCard.css";
import { fetch_cart } from "../../utils/globalFunction";

const ProductCard = ({ data }) => {
  const [view, setView] = useState(false);
  const allProduct = fetch_cart();
  const [cartproduct, setProduct] = useState();
  
  useEffect(() => {
    setProduct(allProduct);
    console.log(cartproduct);
    // cartproduct &&
    //   cartproduct.forEach((element) => {
    //     console.log(element.data._id);
    //     // if (element._id === data.allProducts._id) {
    //     //   setView(true);
    //     // }
    //   });
  }, []);
  // console.log(view)
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
    // if (quantity <= changeQut) {
    //   return;
    // }
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
            <h4>{view} -</h4>
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
            {/* <span>Qt. {quantity}</span> */}
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
                readOnly={true}
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
            {view && view ? (
              <>
                <Link to={"/"} className="filled-button">
                  View Cart
                </Link>
              </>
            ) : (
              <button
                className="filled-button"
                onClick={() => addToCart({ data, changeQut })}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
