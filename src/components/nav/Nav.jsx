import React from 'react';
import './nav.css'

const Nav = () => {
  return (
    <>
        <nav className='nav-bar flex align-center'>
            <ul className='flex align-center'>
                <li><a className='active' href="#banner">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav