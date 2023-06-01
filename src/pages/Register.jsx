import React, { useEffect, useState } from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Loading from "../components/loading/Loading";
import Register from "../components/loginSign/Register";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const LoginSign = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {authorization} = useGlobalContext();

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    showLoading();

    if (authorization === true) {
      navigate("/profile");
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <InnerBanner
            bgImg={"/assets/img/banner_image.webp"}
            title={"Register Here"}
          />
          <Register />
        </>
      )}
    </>
  );
};

export default LoginSign;
