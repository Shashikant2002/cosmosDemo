import React from "react";
import "./loading.css";

// For Loading
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <>
      <div className="loading flex justify-center align-center">
        <ClipLoader
          color={"#d47fff "}
          size={150}
        />
      </div>
    </>
  );
};

export default Loading;
