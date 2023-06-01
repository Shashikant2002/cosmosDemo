import React, { useEffect, useState } from "react";
import "./loginSign.css";
import "react-phone-number-input/style.css";
import Loading from "../loading/Loading";
import InnerBanner from "../innerBanner/InnerBanner";
import { useGlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginVerify = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const navigate = useNavigate();

  const { verifyLoginByNumber, authorization, user } = useGlobalContext();

  const submitOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    verifyLoginByNumber(Number(otp));
    setLoading(false);
  };

  useEffect(() => {
    if (authorization === true) {
      navigate("/profile");
    }
    if (user?.success === true) {
      toast.success(user?.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [authorization]);



  return loading ? (
    <Loading />
  ) : (
    <>
      <InnerBanner
        bgImg={"/assets/img/about-1.jpg"}
        title={"Verify Your Login"}
      />
      <div
        style={{ marginTop: "50px", padding: "0 20px" }}
        className="loginSign"
      >
        <form onSubmit={submitOtp} className="form">
          {/* <h4>Login Now</h4> */}
          <div className="phone">
            <label for="phone">
              Enter Your OTP Here<span className="red">*</span>
            </label>
            <input
              onChange={(e) => setOtp(e.target.value)}
              id="phone"
              name="phone"
              type="number"
              required="true"
            />
          </div>

          <button type="submit" className="filled-button">
            Verify OTP
          </button>

          {/* <p>If you are not Registered <span><Link to={"/register"}><p>Register Now</p></Link></span></p> */}
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginVerify;
