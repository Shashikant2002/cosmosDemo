import React, { useEffect, useState } from "react";
import "./loginSign.css";
import "react-phone-number-input/style.css";
import Loading from "../loading/Loading";
import InnerBanner from "../innerBanner/InnerBanner";
import { useGlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const RegVerify = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const navigate = useNavigate()

  const {regUserDAta, verifyRegUSer, authorization} = useGlobalContext();

  const submitOtp = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(Number(otp))
    verifyRegUSer(Number(otp))
    setLoading(false)
  }

  console.log(useGlobalContext(), regUserDAta);


useEffect(() => {
  if(authorization === true){
    // navigate("/profile")
    window.location.href = `${window.location.origin}/profile`
  }
})

  return loading ? (
    <Loading />
  ) : (
    <>
      <InnerBanner bgImg={"/assets/img/about-1.jpg"} title={"Register Here"} />
      <div style={{marginTop: "50px", padding: "0 20px"}} className="loginSign">
        <form onSubmit={submitOtp} className="form">
          {/* <h4>Login Now</h4> */}
          <div className="phone">
            <label for="phone">
              Enter Your OTP Here<span className="red">*</span>
            </label>
            <input onChange={(e) => setOtp(e.target.value)} id="phone" name="phone" type="number" required="true" />
          </div>

          <button type="submit" className="filled-button">Verify OTP</button>

          {/* <p>If you are not Registered <span><Link to={"/register"}><p>Register Now</p></Link></span></p> */}
        </form>
      </div>
    </>
  );
};

export default RegVerify;
