import React, { useEffect, useState } from "react";
import "./loginSign.css";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    // console.log(name.length, mobile.length);
    if (!name || !mobile) {
      setLoading(false);
      toast.warn("Please Fill The Name or Email !!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else if (!(name.length > 3) || !(mobile.length > 10)) {
      setLoading(false);
      toast.warn("Please enter name or Phone number !!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      await registerUser(name, mobile);
      console.log("done", user);
      setLoading(false);
    }
  };

  useEffect(() => {
    // window.location.reload();
    if (user?.success === true) {
      navigate("/register_verify");
    }else{
      toast.error(user?.message, {
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
  }, [user?.success, user]);

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
      <ToastContainer />
    </div>
  );
};

export default Register;
