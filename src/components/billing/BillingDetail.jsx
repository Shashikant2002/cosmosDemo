import React, { useEffect, useState } from "react";
import { fetch_cart } from "../../utils/globalFunction";
import "./billing.css";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const BillingDetail = ({ setRender, render }) => {
  const [cart, setCart] = useState([]);
  const [subPrice, setSubPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");

  const navigate = useNavigate();

  const rewordsSub = useRef();

  const [rewordCheck, setRewordsCheck] = useState(false);

  const { authorization, fetchLoginUser, user } = useGlobalContext();

  const checkValidateForm = () => {
    if (!name || !address || !phone || !email) {
      return false;
    } else {
      return true;
    }
  };

  let cartData = fetch_cart();
  console.log(cart);
  const setData = () => {
    setCart(cartData);
  };
  console.log(cartData);

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
      let cartData = await fetch_cart();

      const res = await axios.post(
        url,
        { productId: arr_product },
        { withCredentials: true }
      );
      const keyRes = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/paymentKey/rezor`
      );

      // console.log(
      //   keyRes.data.key,
      //   res.data,
      //   `${process.env.REACT_APP_BASE_URL}api/user/paymentVerifyRezor`
      // );
      if (res?.data?.success === true) {
        const options = {
          key: keyRes.data.keyRes,
          amount: res.data.order.amount,
          currency: "INR",
          name: "Kozmo",
          description: "Komo Food Payment",
          image: "assets/img/kozmo logo.png",
          order_id: res.data.order.id,
          handler: async (rezerPayData) => {
            // console.log("rezerpay", rezerPayData);
            const {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            } = rezerPayData;
            const url = `${process.env.REACT_APP_BASE_URL}api/user/paymentVerifyRezor`;

            const orderData = [];
            cartData.map((ele) => {
              orderData.push({
                product_id: ele.data.product_id,
                product_code: ele.data.product_code,
                product_name: ele.data.product_name,
                product_main_category: ele.data.product_main_category,
                product_category: ele.data.product_category,
                product_subcategory: ele.data.product_subcategory,
                product_variant: ele.data.product_variant,
                product_quantity: ele.changeQut,
                product_reword_point: ele.data.product_reword_point,
                product_images: ele.data.product_images,
              });
            });

            console.log("orderData =>", orderData);
            const res = await axios.post(
              url,
              {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                cartData: orderData,
                email,
                address,
              },
              { withCredentials: true }
            );
            console.log(res);
            if (res?.data?.success === true) {
              window.localStorage.removeItem("cartPro");
              navigate("/orderHistory");
              setRender(!render);
              // alert(`Payment Successful ${res?.data?.pay_id}`);
            }
          },
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
        await razor.open();

        // console.log(rees);
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

    if (!authorization) {
      return alert("Please Login And Try again !!");
    } else if (!checkValidateForm()) {
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
    fetchLoginUser();
    console.log(cart);
  }, []);

  console.log(user, rewordCheck);

  const inputCheckRewords = () => {
    setRewordsCheck(!rewordCheck);
  };


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
                  type="number"
                  max={12}
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
                <div className="detailpayment flex">
                  <p>If You Have 200 Rewords Points You Can Use It</p>
                  <input
                    onChange={inputCheckRewords}
                    ref={rewordsSub}
                    type="checkbox"
                    // disabled={user?.rewords_points > 200 ? true : true}
                  />
                </div>
                <div className="detailpayment flex">
                  <div className="product">
                    <p>
                      <b>Your Rewords</b>
                    </p>
                  </div>
                  <div className="subtotal">
                    <p>
                      <b>Rs {user?.rewords_points}</b>
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
