import React, { useEffect, useState } from "react";
import { fetch_cart } from "../../utils/globalFunction";
import "./billing.css";
import { IoIosClose } from 'react-icons/io';

const BillingDetail = () => {
  const [cart, setCart] = useState([]);
  const [subPrice, setSubPrice] = useState(0);

  const setData = () => {
    let cartData = fetch_cart();
    setCart(cartData);
  };

  const subTotal = async () => {
    let subPricecal = 0;
    let arr = [];

    let cartData = await fetch_cart();

    cartData.forEach((element) => {
      arr.push(element.changeQut * element.data.product_sale_price);
    });

    arr.forEach((element) => {
      subPricecal += element;
    });
    
    setSubPrice(subPricecal);
  };

  useEffect(() => {
    setData();
    subTotal();
  }, []);

  return (
    <>
      <div className="billingDetail common-section">
        <div className="container flex">
          <div className="detail">
            <h3>Billing detail</h3>
            <form action="/">
              <div className="name">
                <label htmlFor="name">
                  Name<span className="red">*</span>
                </label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="address">
                <label htmlFor="address">
                  Address<span className="red">*</span>
                </label>
                <input id="address" name="address" type="text" required />
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  Phone<span className="red">*</span>
                </label>
                <input id="phone" name="phone" type="phone" required />
              </div>
              <div className="email">
                <label htmlFor="email">
                  Email Address<span className="red">*</span>
                </label>
                <input id="email" name="email" type="email" required />
              </div>

              {/* <button className="filled-button" type="submit">
                Submit
              </button> */}
            </form>
          </div>
          <div className="payment">
            <div className="yourOrder">
              <h3>Your Order</h3>
              <div className="listing">
                <div className="detailpayment flex">
                  <div className="product">
                    <p>
                      <b>PRODUCT</b>
                    </p>
                  </div>
                  <div className="subtotal">
                    <p>
                      <b>SUBTOTAL</b>
                    </p>
                  </div>
                </div>
                {cart &&
                  cart.map((ele) => {
                    return (
                      <div className="detailpayment flex">
                        <div className="product">
                          <p className="flex align-center">
                            {ele.data.product_name} &nbsp; <IoIosClose /> &nbsp; {ele.changeQut}
                          </p>
                        </div>
                        <div className="subtotal">
                          <p>{ele.changeQut * ele.data.product_sale_price}</p>
                        </div>
                      </div>
                    );
                  })}

                <div className="detailpayment flex">
                  <div className="product">
                    <p>
                      <b>Subtotal</b>
                    </p>
                  </div>
                  <div className="subtotal">
                    <p>
                      <b>Rs {subPrice}</b>
                    </p>
                  </div>
                </div>
                <div className="detailpayment flex">
                  <div className="product">
                    <p>
                      <b>Total</b>
                    </p>
                  </div>
                  <div className="subtotal">
                    <p>
                      <b>Rs {subPrice}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentMethod">
              <form action="/">
                <div className="direct flex align-center">
                  <input
                    name="paymentMethod"
                    id="direct"
                    type="radio"
                    checked
                  />
                  <label htmlFor="direct">
                    <p>Direct Bank Transfer</p>
                  </label>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, amet facere. Adipisci tenetur maiores porro
                  repudiandae. Aperiam laudantium magni, voluptates ullam autem
                  incidunt. Itaque officiis, facilis facere placeat molestiae
                  ratione.
                </p>
                <div className="cash flex align-center">
                  <input name="paymentMethod" id="cash" type="radio" />
                  <label htmlFor="cash">
                    <p>Cash on Delivery</p>
                  </label>
                </div>
                <button className="filled-button">Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetail;
