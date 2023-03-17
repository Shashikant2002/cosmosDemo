import React from "react";
import "./cart.css";
import CardCart from "./CardCart";

const CartSection = () => {
  const data = [1, 2, 3, 4, 5];
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
              {data &&
                data.map((ele) => {
                  return (
                    <CardCart ele={ele} />
                  );
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
                  <p>$5500</p>
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
