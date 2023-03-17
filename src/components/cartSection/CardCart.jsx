import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const CardCart = ({ele}) => {
    const [qut, setQut] = useState(0);

    const incQutCart = () => {
        setQut(qut + 1)
    }
    const decQutCart = () => {
        if(qut <= 0){
            return;
        }
        setQut(qut - 1)
    }

  return (
    <>
      <div key={ele} className="table flex justify-spacebetween align-center">
        <div className="body">
          <p>
            <MdClose />
          </p>
        </div>
        <div className="body">
          <figure>
            <img src="assets/img/about-banner.jpg" alt="" />
          </figure>
        </div>
        <div className="body">
          <p>PRODUCT{ele}</p>
        </div>
        <div className="body">
          <p>{ele}00</p>
        </div>
        <div className="body">
          <div className="quentity flex">
            <button onClick={decQutCart}>-</button>
            <input
              className="text-center"
              value={qut}
              type="text"
              readOnly={true}
            />
            <button onClick={incQutCart}>+</button>
          </div>
        </div>
        <div className="body">
          <p>{ele * ele}00</p>
        </div>
      </div>
    </>
  );
};

export default CardCart;
