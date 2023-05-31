import React, { useEffect, useState } from "react";
import "./loginSign.css";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

const Register = () => {
  const navigate = useNavigate();
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

    if (!name.length > 3 || !mobile.length > 13) {
      setLoading(false);
      alert("Please enter name or Phone number");
    } else {
      await registerUser(name, mobile);
      console.log("done", user);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.success === true) {
      navigate("/register_verify");
    }
  }, [user?.success]);

  console.log("Register Data =>", user);

  return loading ? (
    <Loading />
  ) : (
    <div className="loginSign common-section">
      <div className="container">
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
      </div>
    </div>
  );
};

export default Register;
