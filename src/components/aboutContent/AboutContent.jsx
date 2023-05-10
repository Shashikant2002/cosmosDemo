import React from "react";
import { Link } from "react-router-dom";
import "./aboutContect.css";

const AboutContent = ({
  imgPos,
  subTitle,
  para_1 = "",
  para_2 = "",
  title,
  buttonLink = false,
  imageBg,
  imageFr,
}) => {
  const { butName, path } = buttonLink;
  return (
    <>
      <div className="aboutUsContent common-section">
        <div className="container flex align-center">
          <div
            style={{ order: `${imgPos === "right" ? 2 : 1}` }}
            className="content"
          >
            <h5 className="right-line">{subTitle}</h5>
            <h2>{title}</h2>
            <p style={{ whiteSpace: "pre-line" }} className="spacetop">{para_1}</p>
            <p style={{ whiteSpace: "pre-line" }} className="spacetop">
              {typeof para_2 === "object" ? (
                <ul>
                  {para_2.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              ) : (
                para_2
              )}
            </p>
            {/* {butName ? (
              <Link className="border-button" to={path}>
                {butName}
              </Link>
            ) : (
              ""
            )} */}
          </div>
          <div
            style={{ order: `${imgPos === "right" ? 1 : 2}` }}
            className="image"
          >
            <div>
              <img src={imageBg} alt="" />
              <img className="absImage" src={imageFr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
