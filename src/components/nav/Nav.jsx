import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <>
        <nav className='nav-bar flex align-center'>
            <ul className='flex align-center'>
                <li><NavLink className='' to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/cart">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav