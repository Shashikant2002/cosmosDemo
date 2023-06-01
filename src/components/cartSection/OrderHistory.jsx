import React, { useEffect, useState } from "react";
import "./cart.css";
import CardCart from "./CardCart";
import { fetch_cart, remove_cart } from "../../utils/globalFunction";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import HistoryOrder from "./HistoryOrder";

const OrderHistory = () => {
  // const [subPrice, setSubPrice] = useState();
  const [cartData, setCartData] = useState([]);
  const [render, setRender] = useState(false);

  const [orders, setOrders] = useState([])

  const { subPrice, totalQut, totalQuantity } = useGlobalContext();

  const allOrders = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}api/get/all/orders/user`;
      console.log(url);
      const orders = await axios.get(url, { withCredentials: true });
      console.log(orders);
      setOrders(orders?.data?.allOrders)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCartPro();
    totalQut();
    allOrders();
  }, [render]);

  console.log(orders);

  const getAllCartPro = async () => {
    let cartProduct = await fetch_cart();
    if (cartProduct != null) {
      setCartData(cartProduct);
    }
  };

  const handelRemoveCart = (ele) => {
    remove_cart(ele);
    setRender((prev) => !prev);
  };

  // console.log(totalQuantity == 0)
  return (
    <>
      <div className="cartSec common-section">
        <div className="container">
          {orders.length <= 0 ? (
            <>
              <div className="noProduct text-center">
                <h2 className="text-center">Shop Now</h2>
                <Link className="filled-button" to={"/product"}>
                  View Product
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="cartMatter">
                <div className="productCartmain">
                  <div className="table flex justify-spacebetween">
                    <div className="heading"><p><b>ORDER ID</b></p></div>
                    <div className="heading"><p><b>IMAGE</b></p></div>
                    <div className="heading">
                      <p>
                        <b>STATUS</b>
                      </p>
                    </div>
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
                        <b>PAYMENT ID</b>
                      </p>
                    </div>
                  </div>
                  {orders &&
                    orders?.map((ele, i) => {
                      return (
                        <HistoryOrder 
                          handelRemoveCart={handelRemoveCart}
                          key={i}
                          ele={ele}
                          index={i}
                        />
                      );
                    })}
                </div>
                {/* <div className="table flex justify-spacebetween updateCart">
                  <div className="heading">
                    <button className="filled-button">UPDATE CART</button>
                  </div>
                </div> */}
              </div>

              {/* <div className="cartTotal flex">
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
                      <p>${subPrice}</p>
                    </div>
                  </div>
                  <Link to={"/checkout"} className="filled-button">
                    PROCEED TO CHECKOUT
                  </Link>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
