import React, { useEffect, useState } from "react";
import "./cart.css";
import CardCart from "./CardCart";
import { fetch_cart } from "../../utils/globalFunction";

const CartSection = () => {
  const [subPrice, setSubPrice] = useState();
  const [cartData, setCartData] = useState();

  const subTotal = () => {
    let subPrice = 0;
  };
  useEffect(() => {
    const cartProduct = fetch_cart();
    setCartData(cartProduct);
    subTotal();
  }, []);

  return (
    <>
      <div className="cartSec common-section">
        <div className="container">
          <div className="cartMatter">
            <div className="productCartmain">
              <div className="table flex justify-spacebetween">
                <div className="heading">-</div>
                <div className="heading">-</div>
                <div className="heading">
                  <p>
                    <b>PRODUCT</b>
                  </p>
                </div>
                <div className="heading">
                  <p>
                    <b>PRICE</b>
                  </p>
                </div>
                <div className="heading">
                  <p>
                    <b>QUANTITY</b>
                  </p>
                </div>
                <div className="heading">
                  <p>
                    <b>SUBTOTAL</b>
                  </p>
                </div>
              </div>
              {cartData &&
                cartData.map((ele, i) => {
                  return <CardCart key={ele._id} ele={ele} index={i} />;
                })}
            </div>
            <div className="table flex justify-spacebetween updateCart">
              <div className="heading">
                <button className="filled-button">UPDATE CART</button>
              </div>
            </div>
          </div>

          <div className="cartTotal flex">
            <div className="empty"></div>
            <div className="total">
              <h4>Cart Totals</h4>
              <div className="table">
                <div className="subTotal flex">
                  <p>Subtotal</p>
                  <p>${subPrice}</p>
                </div>
                <div className="subTotal flex">
                  <p>Total</p>
                  <p>$5500</p>
                </div>
              </div>
              <button className="filled-button">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
