import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import './nav.css'

const Nav = ({togleMenu}) => {
  return (
    <>
        <nav className='nav-bar flex align-center'>
          <span className='close' onClick={togleMenu}><MdClose /></span>
            <ul className='flex align-center'>
                <li><NavLink className='' to="/" onClick={togleMenu}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={togleMenu}>About</NavLink></li>
                {/* <li><NavLink to="/career" onClick={togleMenu}>Career</NavLink></li> */}
                {/* <li><NavLink to="/product" onClick={togleMenu}>Products</NavLink></li> */}
                <li><NavLink to="/builk_booking" onClick={togleMenu}>Builk Booking</NavLink></li>
                <li><NavLink to="/location" onClick={togleMenu}>Locations</NavLink></li>
                <li><NavLink to="/contact" onClick={togleMenu}>Contact</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav