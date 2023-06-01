import React, { useEffect, useState } from "react";
import "./loginSign.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignForm = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { loginByNumber, authorization, user } = useGlobalContext();

  const submitForm_ = async () => {
    if (value) {
      if (value.length < 10) {
        setLoading(false);
        toast.warn("Number is Invalid", {
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
        await loginByNumber(value);

        // navigate("/login_verify");
        setLoading(false);
      }
    } else {
      setLoading(false);
      toast.warn("Please Fill the Required field", {
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
      navigate("/login_verify");
    } else {
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
      <ToastContainer />
    </>
  );
};

export default LoginSignForm;
