import React, { useEffect, useState } from "react";
import CartSection from "../components/cartSection/CartSection";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    showLoading();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <InnerBanner bgImg={"/assets/img/about-1.jpg"} title={"Cart"} />
          <CartSection />
        </>
      )}
    </>
  );
};

export default Cart;
