import React from 'react';
import Socal from '../socal/Socal';
import "./footer.css"

const Footer = () => {
  return (
    <>
        <footer className="footer common-section">
            <div className="container ">
                <figure className='logo'>
                    <img src="assets/img/logo.svg" alt="" />
                </figure>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor | sit amet consectetur adipisicing elit. Aliquid, placeat.</p>
                <Socal />
            </div>
        </footer>
    </>
  )
}

export default Footer