import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "../../context/context";
import { fetch_cart, updateCart } from "../../utils/globalFunction";
import Loading from "../loading/Loading";

const HistoryOrder = ({ ele, handelRemoveCart }) => {
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

  console.log(ele);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        // ele?.products?.map((product, i) => {
        // console.log("product",i,product);
        <>
          <div className="table flex justify-spacebetween align-center">
            <div className="body">
              <p>{ele?.order_id}</p>
            </div>
            {/* <div className="body">
              <figure>
                <img src={ele?.products[0]?.product_images[0]?.image_url} alt="" />
              </figure>
            </div> */}
            <div className="body">
              <p>{ele?.razorpay_payment_id}</p>
            </div>
            <div className="body">
              <p>{ele?.paymentType}</p>
            </div>
            <div className="body">
              <p> {ele?.order_status}</p>
            </div>
            <div className="body">
              <p>
                {new Date(ele?.updatedAt).getDate()}/
                {new Date(ele?.updatedAt).getMonth()}/
                {new Date(ele?.updatedAt).getFullYear()}
              </p>
            </div>
            <div className="body">
              <p>{ele?.total_amount}</p>
            </div>
            <div className="body">
              <p>{ele?.products.length}</p>
            </div>
          </div>
        </>
        // })
      )}
    </>
  );
};

export default HistoryOrder;
