import React from 'react';
import Socal from '../socal/Socal';
import "./footer.css"

const Footer = () => {
  return (
    <>
        <footer className="footer common-section">
            <div className="container ">
                <figure className='logo'>
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <img src="assets/img/logo-colored.png" alt="" />
                </figure>
                <p className='text-center'>Elevating your dining experience with delectable flavors delivered straight to you. Indulge in culinary perfection today!</p>
                {/* <Socal /> */}
            </div>
        </footer>
    </>
  )
}

export default Footer