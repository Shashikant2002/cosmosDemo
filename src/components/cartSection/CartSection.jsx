import React, { useEffect, useState } from "react";
import "./cart.css";
import CardCart from "./CardCart";
import {
  fetch_cart,
  // getCartTotal,
  remove_cart,
} from "../../utils/globalFunction";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const CartSection = () => {
  // const [subPrice, setSubPrice] = useState();
  const [cartData, setCartData] = useState([]);
  const [render, setRender] = useState(false);

  const { subPrice, totalQut, totalQuantity } = useGlobalContext();

  useEffect(() => {
    getAllCartPro();
    totalQut();

    // subTotal();
  }, [render]);

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


  console.log(totalQuantity == 0)
  return (
    <>
      <div className="cartSec common-section">
        <div className="container">
          {totalQuantity <= 0 ? (
            <>
              <div className="noProduct text-center">
                <h2 className="text-center">Shop Now</h2>
                <Link className="filled-button" to={"/product"}>View Product</Link>
              </div>
            </>
          ) : (
            <>
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
                    cartData?.map((ele, i) => {
                      return (
                        <CardCart
                          handelRemoveCart={handelRemoveCart}
                          key={i}
                          ele={ele}
                          index={i}
                        />
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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSection;
