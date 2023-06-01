import React, { useEffect, useState } from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import OrderHistoryMain from "../components/cartSection/OrderHistory";

const OrderHistoryPage = () => {
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
          <InnerBanner bgImg={"/assets/img/banner_image.webp"} title={"Order History"} />
          <OrderHistoryMain />
        </>
      )}
    </>
  );
};

export default OrderHistoryPage;
