import React, { useState } from "react";
import "./loginSign.css";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const LoginSignForm = () => {
  const [value, setValue] = useState();
  const [showFormOTP, setShowFormOTP] = useState(false);

  const submitForm = () => {
    setShowFormOTP(true);
  };

  const setValueNumber = (e) => {
    if (e.length >= 10) {
      return;
    } else {
      setValue(e);
    }
  };

  console.log("Number: ", value);

  return (
    <>
      <div className="loginSign common-section">
        <div className="container">
          {!showFormOTP ? (
            <form action="/" className="form">
              {/* <h4>Login Now</h4> */}
              <div className="phone">
                <label for="phone">
                  Phone<span className="red">*</span>
                </label>
                {/* <input id="phone" name="phone" type="phone" required="true" /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="IN"
                  value={value}
                  onChange={setValueNumber}
                  flags={"india"}
                  limitMaxLength={true}
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
                <label for="phone">
                  Enter Your OTP Here<span className="red">*</span>
                </label>
                <input id="phone" name="phone" type="phone" required="true" />
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
