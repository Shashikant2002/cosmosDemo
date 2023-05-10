import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BuilkBooking from "../components/builkBooking/BuilkBooking";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";

const BuilkBookingPage = () => {
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
          <InnerBanner
            // bgImg={"/assets/img/inner-banner.jpg"}
            bgImg={"/assets/img/banner_image.webp"}
            title={"Builk Booking"}
          />
          <BuilkBooking />
        </>
      )}
    </>
  );
};

export default BuilkBookingPage;
