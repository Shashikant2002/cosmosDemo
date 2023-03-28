import React from "react";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Profile from "../components/userProfile/Profile";

const UserProfile = () => {
  return (
    <>
      <InnerBanner bgImg={"/assets/img/about-banner.jpg"} title={"Profile"} />
      <Profile />
    </>
  );
};

export default UserProfile;
