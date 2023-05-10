import React, { useState } from "react";
import "./loginSign.css";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

const Register = () => {
  const [showFormOTP, setShowFormOTP] = useState(false);
  const [mobile, setMobile] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const { registerUser, user } = useGlobalContext();

  const setNumber = (e) => {
    setMobile(e);
  };
  const nameHandeler = (e) => {
    setName(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(mobile, name);

    setLoading(true);

    console.log(name.length, mobile.length);

    if (!(name.length > 3) || !(mobile.length > 13)) {
      setLoading(false);
      console.log("Please enter name or Phone number");
    } else {
      await registerUser(name, mobile);
      console.log("done");
      // setShowFormOTP(true);
      setLoading(false);
    }
  };

  console.log("Register Data =>", user);

  return loading ? (
    <Loading />
  ) : (
    <div className="loginSign common-section">
      <div className="container">
        {!showFormOTP ? (
          <form action="/" className="form">
            {/* <h4>Register Now</h4> */}
            <div className="name">
              <label htmlFor="name">
                Name<span className="red">*</span>
              </label>
              <input
                value={name}
                onChange={nameHandeler}
                id="phone"
                name="phone"
                type="phone"
                required={true}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">
                Phone<span className="red">*</span>
              </label>
              {/* <input id="phone" name="phone" type="phone" required="true" /> */}
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="IN"
                value={mobile}
                onChange={setNumber}
                flags={"india"}
                limitMaxLength={true}
              />
            </div>

            <button onClick={submitForm} className="filled-button">
              Register Now
            </button>

            <p>
              <span>
                <Link to={"/loginSign"}>
                  <p>Login Now</p>
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
  );
};

export default Register;
