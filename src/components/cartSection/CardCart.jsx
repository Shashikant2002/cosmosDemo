import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "../../context/context";
import {
  fetch_cart,
  updateCart,
} from "../../utils/globalFunction";
import Loading from "../loading/Loading";

const CardCart = ({ ele, handelRemoveCart }) => {
  const [qut, setQut] = useState(1);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const { updateSubTotal, totalQut } = useGlobalContext();

  // const [render, setRender] = useState(false);

  useEffect(() => {
    setQut(ele.changeQut);
    updateSubTotal();
    totalQut();
  }, []);

  // const handelRemoveCart = (ele) => {
  //   remove_cart(ele);
  //   setRender(prev => !prev)
  // };

  const incQutCart = async () => {
    // setLoading(true);
    let fetchData = await fetch_cart();
    // setAllProduct(fetchData);

    const filterData = fetchData.filter(
      (datamain) => datamain.data._id !== ele.data._id
    );

    const newData = [...filterData];
    const thisEle = { data: ele.data, changeQut: qut + 1 };
    newData.push(thisEle);

    updateCart(newData);
    setCounter(counter + 1);
    setQut(qut + 1);
    updateSubTotal();
    setLoading(false);
  };
  const decQutCart = () => {
    // setLoading(true);
    let fetchData = fetch_cart();
    // setAllProduct(fetchData);
    if (qut <= 1) {
      setCounter(counter + 1);
      setLoading(false);
      return;
    }

    const filterData = fetchData.filter(
      (datamain) => datamain.data._id !== ele.data._id
    );

    const newData = [...filterData];
    const thisEle = { data: ele.data, changeQut: qut - 1 };
    newData.push(thisEle);

    updateCart(newData);
    setQut(qut - 1);
    setCounter(counter + 1);
    updateSubTotal();
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="table flex justify-spacebetween align-center">
            <div className="body">
              <p>
                <MdClose
                  onClick={() => {
                    handelRemoveCart(ele);
                    totalQut();
                    updateSubTotal();
                  }}
                />
              </p>
            </div>
            <div className="body">
              <figure>
                <img src={ele.data.product_images[0].image_url} alt="" />
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
      )}
    </>
  );
};

export default CardCart;
