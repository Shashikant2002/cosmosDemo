import React, { useEffect, useRef } from 'react';
import Nav from '../nav/Nav';
import Socal from '../socal/Socal';
import './header-main.css';

const Header = () => {
    const header = useRef();
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
    }, [])


    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.current.classList.add('header-mainBackground');
        } else {
            header.current.classList.remove('header-mainBackground');
        }
    }

    return (
        <>
            <header ref={header} className='header-main'>
                <div className="container flex justify-spacebetween">
                    <div className="empth"></div>
                    <Nav />
                    <Socal />
                </div>
            </header>
        </>
    )
}

export default Header