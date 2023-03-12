import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <>
        <nav className='nav-bar flex align-center'>
            <ul className='flex align-center'>
                <li><Link className='active' to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="#services">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav