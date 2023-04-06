import React from 'react';
import "./whereit.css";

const WhereItAllBegain = ({imgPos, subTitle, title, para_1, para_2, img_1, img_2}) => {
  return (
    <>
        <div className="whereItAllBegain common-section">
            <div className="container flex align-center">
            <div style={{order: `${imgPos !== "right" ? 2 : 1}`}} className="content">
                    <h5 className='right-line'>{subTitle}</h5>
                    <h2>{title}</h2>
                    <p style={{ whiteSpace: "pre-line" }} className='spacetop'>{para_1}</p>
                    <p style={{ whiteSpace: "pre-line" }} className='spacetop'>{para_2}</p>
                </div>
                <div style={{order: `${imgPos !== "right" ? 1 : 2}`}} className="image">
                    <div>
                        <img src={img_1} alt="" />
                        <img className='absImage' src={img_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhereItAllBegain