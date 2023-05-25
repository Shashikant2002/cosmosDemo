import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading.jsx";

const Profile = ({ user }) => {
  const updateProfilePopup = useRef();
  const { fetchLoginUser } = useGlobalContext();

  const [loading, setLoading] = useState(false);

  const updateProfile = () => {
    updateProfilePopup.current.classList.toggle("updateProfilePopupShow");
  };

  const logoutProfile = async () => {
    try {
      setLoading(true);
      const url = `${process.env.REACT_APP_BASE_URL}api/user/logout`;
      const res = await axios.post(url, { withCredentials: true });
      console.log(res);
      setLoading(false);
      // window.location.href = window.location.href;
    } catch (ele) {
      console.log(ele);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchLoginUser();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="profile common-section">
        <div
          ref={updateProfilePopup}
          className="updateProfilePopup flex align-center justify-center flex-column"
        >
          <div className="form">
            <span onClick={updateProfile} className="close">
              <MdClose />
            </span>
            <form action="/">
              <div className="name">
                <label htmlFor="name">
                  Name<span className="red">*</span>
                </label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="address">
                <label htmlFor="address">
                  Address<span className="red">*</span>
                </label>
                <input id="address" name="address" type="text" required />
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  Phone<span className="red">*</span>
                </label>
                <input id="phone" name="phone" type="phone" required />
              </div>
              <div className="email">
                <label htmlFor="email">
                  Email Address<span className="red">*</span>
                </label>
                <input id="email" name="email" type="email" required />
              </div>

              <button className="filled-button" type="submit">
                Update Profile
              </button>
            </form>
          </div>
        </div>

        <div className="container flex">
          <div className="userDetail">
            {/* <figure>
              <img src="assets/img/profile.webp" alt="" />
            </figure> */}
            <h2>User Detail</h2>
            <div className="user">
              <h4 className="flex">
                <span>Name:-</span> <p>{user?.username}</p>
              </h4>
              {/* <h4 className="flex">
                {" "}
                <span>Address:-</span>{" "}
                <p>
                  E-2/972-C, Street No. 19, Pusta-4, Sonia Vihar Delhi - 110094
                </p>
              </h4> */}
              <h4 className="flex">
                <span>Phone: -</span> <p>{user?.phone_number}</p>
              </h4>
              {/* <h4 className="flex">
                <span>Email:-</span> <p>shashikant384443@gmail.com</p>
              </h4> */}
            </div>
            <button onClick={updateProfile} className="filled-button">
              Edit Profile
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={logoutProfile}
              className="filled-button"
            >
              Logout Profile
            </button>
          </div>
          <div className="rewards">
            <div className="mainContent flex align-center justify-center flex-column">
              <h3>Rewards Points</h3>
              <h2>{user?.rewords_points}</h2>
              <p className="text-center">
                You can use this Rewards When you have more then <b>1000</b>{" "}
                Rewards Points.
              </p>
              <Link className="border-button" to={"/product"}>
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
