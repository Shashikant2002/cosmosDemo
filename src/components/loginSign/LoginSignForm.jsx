import React, { useEffect, useState } from "react";
import "./loginSign.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

const LoginSignForm = () => {
  const [value, setValue] = useState();
  const [showFormOTP, setShowFormOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const { loginByNumber, authorization } = useGlobalContext();

  const submitForm_ = async () => {
    if (value.length < 10) {
      setLoading(false);
      return console.log("Number is Invalid");
    } else {
      await loginByNumber(value);
      setShowFormOTP(true);
      setLoading(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    submitForm_();
    // setLoading(false);
  };

  const setValueNumber = (e) => {
    setValue(e);
  };

  const setOTPHandelser = (e) => {
    setOtp(e.target.value);
  };

  useEffect(() => {
    if (authorization) {
      navigate("/profile");
    }
  }, [authorization]);

  console.log(otp);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="loginSign common-section">
        <div className="container">
          {!showFormOTP ? (
            <form action="/" className="form">
              {/* <h4>Login Now</h4> */}
              <div className="phone">
                <label htmlFor="phone">
                  Phone<span className="red">*</span>
                </label>
                {/* <input id="phone" name="phone" type="phone" required="true" /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="IN"
                  value={value}
                  onChange={setValueNumber}
                  flags={"india"}
                />
              </div>

              <button onClick={submitForm} className="filled-button">
                Login Now
              </button>

              <p>
                If you are not Registered{" "}
                <span>
                  <Link to={"/register"}>
                    <p>Register Now</p>
                  </Link>
                </span>
              </p>
            </form>
          ) : (
            <form action="/" className="form">
              {/* <h4>Login Now</h4> */}
              <div className="phone">
                <label htmlFor="phone">
                  Enter Your OTP Here<span className="red">*</span>
                </label>
                <input
                  onChange={setOTPHandelser}
                  value={otp}
                  id="phone"
                  name="phone"
                  type="phone"
                  required={true}
                />
              </div>

              <button className="filled-button">Verify OTP</button>

              {/* <p>If you are not Registered <span><Link to={"/register"}><p>Register Now</p></Link></span></p> */}
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignForm;
