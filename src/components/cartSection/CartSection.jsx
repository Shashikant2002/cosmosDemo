import React, { useEffect, useState } from "react";
import "./cart.css";
import CardCart from "./CardCart";
import { fetch_cart, getCartTotal, remove_cart } from "../../utils/globalFunction";
import { Link } from "react-router-dom";

const CartSection = () => {
  const [subPrice, setSubPrice] = useState();
  const [cartData, setCartData] = useState([]);
  const [render, setRender] = useState(false);

  
  
  useEffect(() => {
    // setCartData(fetch_cart());
    console.log(fetch_cart());
    getCartTotal();
    getAllCartPro()
    
    subTotal();
  }, [render]);

  const getAllCartPro = async () => {
    let cartProduct = await fetch_cart();
    if( cartProduct != null){
      setCartData(cartProduct);
    }
  }

  const handelRemoveCart = (ele) => {
    remove_cart(ele);
    setRender((prev) => !prev);
  };

  const subTotal = async () => {
    let subPricecal = 0;

    let arr = [];
    console.log("cart Data" + cartData);
    await cartData.forEach((element) => {
      arr.push(element.changeQut * element.data.product_sale_price);
    });

    console.log(arr);
    arr.forEach((element) => {
      subPricecal += element;
    });

    console.log(subPricecal);

    setSubPrice(subPricecal);
  };

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
        </div>
      </div>
    </>
  );
};

export default CartSection;
