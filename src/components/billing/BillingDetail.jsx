import React from "react";
import "./billing.css"

const BillingDetail = () => {
  return (
    <>
      <div className="billingDetail common-section">
        <div className="container flex">
          <div className="detail">
            <h3>Billing detail</h3>
            <form action="/">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="address">
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="phone" />
              </div>
              <div className="email">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" />
              </div>
              
              {/* <button className="filled-button" type="submit">
                Submit
              </button> */}
            </form>
          </div>
          <div className="payment">
              <div className="yourOrder">
                <h3>Your Order</h3>
                <div className="detailpayment flex">
                    <div className="product">
                        <p><b>PRODUCT</b></p>
                        {/* <p>prod_!</p> */}
                    </div>
                    <div className="subtotal">
                        <p><b>SUBTOTAL</b></p>
                        {/* <p>prod_!</p> */}
                    </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetail;
