import React, { useEffect, useState } from "react";
import ContactUsSection from "../components/contactUsSection/ContactUsSection";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";

const Contact = () => {
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
            title={"Contact Us"}
          />
          <ContactUsSection />
        </>
      )}
    </>
  );
};

export default Contact;
