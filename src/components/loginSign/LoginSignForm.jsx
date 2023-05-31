import React, { useEffect, useState } from "react";
import "./loginSign.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

const LoginSignForm = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { loginByNumber, authorization, user } = useGlobalContext();

  const submitForm_ = async () => {
    if (value) {
      if (value.length < 10) {
        setLoading(false);
        return console.log("Number is Invalid");
      } else {
        await loginByNumber(value);

        // navigate("/login_verify");
        setLoading(false);
      }
    } else {
      setLoading(false);
      return console.log("Please Fill the Required field");
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

  useEffect(() => {
    if (user?.success === true) {
      navigate("/login_verify");
    }
    if (authorization) {
      navigate("/profile");
    }
  }, [authorization, user?.success]);

  // console.log(otp);
  console.log(useGlobalContext());

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="loginSign common-section">
        <div className="container">
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
        </div>
      </div>
    </>
  );
};

export default LoginSignForm;
