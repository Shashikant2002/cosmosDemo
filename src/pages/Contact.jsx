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
    }, 100);
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
            bgImg={"/assets/img/inner-banner.jpg"}
            title={"Contact Us"}
          />
          <ContactUsSection />
        </>
      )}
    </>
  );
};

export default Contact;
