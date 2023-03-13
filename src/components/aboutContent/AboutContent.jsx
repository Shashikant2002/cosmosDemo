import React from 'react';
import { Link } from 'react-router-dom';
import "./aboutContect.css";

const AboutContent = ({imgPos, subTitle, title, buttonLink = false, bottomPadding, imageBg, imageFr}) => {
    const {butName, path} = buttonLink;
  return (
    <>
        <div className="aboutUsContent common-section" style={{paddingBottom:`${bottomPadding}`}}>
            <div className="container flex align-center">
                <div style={{order: `${imgPos === "right" ? 2 : 1}`}} className="content">
                    <h5 className='right-line'>{subTitle}</h5>
                    <h2>{title}</h2>
                    <p className='spacetop'>Featuring carefully selected nigiri sushi and side dishes created meticulously by the owner chef. Come to enjoy premium quality food at this elegant restaurant.</p>
                    <p className='spacetop'>And don't miss out on the latest seasonal dishes!</p>
                    {butName ? <Link className='border-button' to={path}>{butName}</Link>: ""}
                </div>
                <div style={{order: `${imgPos === "right" ? 1 : 2}`}} className="image">
                    <div>
                        <img src={imageBg} alt="" />
                        <img className='absImage' src={imageFr} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutContent