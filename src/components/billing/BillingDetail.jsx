import React, { useEffect, useState } from "react";
import { fetch_cart } from "../../utils/globalFunction";
import "./billing.css";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import Loading from "../loading/Loading";

const BillingDetail = () => {
  const [cart, setCart] = useState([]);
  const [subPrice, setSubPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const checkValidateForm = () => {
    if (!name || !address || !phone || !email) {
      return false;
    } else {
      return true;
    }
  };

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

  const url = `${process.env.REACT_APP_BASE_URL}api/user/payment_add_reword`;

  const makePayment = async (arr_product) => {
    try {
      setLoading(true);
      const res = await axios.post(
        url,
        { productId: arr_product },
        { withCredentials: true }
      );
      const keyRes = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/paymentKey/rezor`
      );

      console.log(
        keyRes.data.key,
        res.data,
        `${process.env.REACT_APP_BASE_URL}api/user/paymentVerifyRezor`
      );
      if (res?.data?.success === true) {
        const options = {
          key: keyRes.data.keyRes,
          amount: res.data.order.amount,
          currency: "INR",
          name: "Kozmo",
          description: "Komo Food Payment",
          image: "assets/img/kozmo logo.png",
          order_id: res.data.order.id,
          callback_url: `${process.env.REACT_APP_BASE_URL}api/user/paymentVerifyRezor`,
          prefill: {
            name: res.data.user.username,
            contact: res.data.user.phone_number,
          },
          notes: {
            address: res.data.user.phone_number,
          },
          theme: {
            color: "#0e0d09",
          },
        };

        const razor = await new window.Razorpay(options);
        const rees = await razor.open();
        console.log(rees);
      }

      // alert(
      //   `User Name ${res.data.user.username} \nSuccess: ${res.data.success} \nTotal Price ${res.data.totalPrice} \nTotal Rewards Added ${res.data.totatRewards} \nUser id ${res.data.user._id},\nTotal rewards ${res.data.user.rewords_points}`
      // );
      setLoading(false);
    } catch (ele) {
      console.log(ele);
      setLoading(false);
    }
  };

  const fetuchAllCatProduct = (e) => {
    e.preventDefault();
    console.log(checkValidateForm());
    if (!checkValidateForm()) {
      alert("Please Fill all the Required Fields");
    } else {
      let cartData = fetch_cart();
      console.log(cartData);
      makePayment(cartData);
    }
  };

  useEffect(() => {
    setData();
    subTotal();
  }, []);

  return loading ? (
    <Loading />
  ) : (
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
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="address">
                <label htmlFor="address">
                  Address<span className="red">*</span>
                </label>
                <input
                  onChange={(e) => setaddress(e.target.value)}
                  value={address}
                  id="address"
                  name="address"
                  type="text"
                  required
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  Phone<span className="red">*</span>
                </label>
                <input
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                  id="phone"
                  name="phone"
                  type="phone"
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email">
                  Email Address<span className="red">*</span>
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  required
                />
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
                      <div key={ele.data._id} className="detailpayment flex">
                        <div className="product">
                          <p className="flex align-center">
                            {ele.data.product_name} &nbsp; <IoIosClose /> &nbsp;{" "}
                            {ele.changeQut}
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
                {/* <div className="direct flex align-center">
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
                </p> */}
                {/* <div className="cash flex align-center">
                  <input name="paymentMethod" id="cash" type="radio" />
                  <label htmlFor="cash">
                    <p>Cash on Delivery</p>
                  </label>
                </div> */}
                <button onClick={fetuchAllCatProduct} className="filled-button">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetail;
