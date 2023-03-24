import React, { useEffect, useState } from "react";
import BillingDetail from "../components/billing/BillingDetail";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
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
          <InnerBanner bgImg={"/assets/img/about-1.jpg"} title={"Check Out"} />
          <BillingDetail />
        </>
      )}
    </>
  );
};

export default Checkout;
