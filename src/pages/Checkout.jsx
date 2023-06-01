import React, { useEffect, useState } from "react";
import BillingDetail from "../components/billing/BillingDetail";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";

const Checkout = ({setRender, render}) => {
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
          <InnerBanner bgImg={"/assets/img/banner_image.webp"} title={"Check Out"} />
          <BillingDetail setRender = {setRender} render={render} />
        </>
      )}
    </>
  );
};

export default Checkout;
