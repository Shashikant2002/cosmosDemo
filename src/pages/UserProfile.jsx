import React, { useEffect } from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Profile from "../components/userProfile/Profile";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const UserProfile = () => {
  const navigate = useNavigate();
  const { authorization } = useGlobalContext();

  useEffect(() => {
    if (!authorization) {
      navigate("/loginSign");
    }
  }, [authorization]);

  return (
    <>
      <InnerBanner bgImg={"/assets/img/about-banner.jpg"} title={"Profile"} />
      <Profile />
    </>
  );
};

export default UserProfile;
