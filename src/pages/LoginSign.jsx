import React, { useEffect, useState } from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import LoginSignForm from "../components/loginSign/LoginSignForm";

const LoginSign = () => {
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
          {" "}
          <InnerBanner
            bgImg={"/assets/img/about-1.jpg"}
            title={"Login Here"}
          />
          <LoginSignForm />
        </>
      )}
    </>
  );
};

export default LoginSign;
