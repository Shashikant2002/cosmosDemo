import React, { useEffect, useState } from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import Register from "../components/loginSign/Register";

const LoginSign = () => {
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
            bgImg={"/assets/img/about-1.jpg"}
            title={"Register Here"}
          />
          <Register />
        </>
      )}
    </>
  );
};

export default LoginSign;
