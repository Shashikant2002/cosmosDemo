import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { fetch_cart } from "../../utils/globalFunction";

const CardCart = ({ ele }) => {
  const [qut, setQut] = useState(0);
  const [allProduct, setAllProduct] = useState();

  useEffect(() => {
    setQut(ele.changeQut);
    let fetchData = fetch_cart();
    setAllProduct(fetchData);
  }, []);

  const incQutCart = () => {
    setQut(qut + 1);
    let filteredProduct = allProduct.filter(
      (element) => element.data._id !== ele.data._id
    );
    filteredProduct.push({ data: ele, changeQut: qut });
    console.log(filteredProduct)
    // localStorage.setItem("cartPro", JSON.stringify(filteredProduct));
  };
  const decQutCart = () => {
    if (qut <= 0) {
      return;
    }
    setQut(qut - 1);
  };

  return (
    <>
      <div className="table flex justify-spacebetween align-center">
        <div className="body">
          <p>
            <MdClose />
          </p>
        </div>
        <div className="body">
          <figure>
            <img src="assets/img/about-banner.jpg" alt="" />
          </figure>
        </div>
        <div className="body">
          <p>{ele.data.product_name}</p>
        </div>
        <div className="body">
          <p>{ele.data.product_sale_price}</p>
        </div>
        <div className="body">
          <div className="quentity flex">
            <button onClick={decQutCart}>-</button>
            <input
              className="text-center"
              value={qut}
              type="text"
              readOnly={true}
            />
            <button onClick={incQutCart}>+</button>
          </div>
        </div>
        <div className="body">
          <p>{qut * ele.data.product_sale_price}</p>
        </div>
      </div>
    </>
  );
};

export default CardCart;
