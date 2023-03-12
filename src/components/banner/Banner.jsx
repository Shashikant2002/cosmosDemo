import React from 'react';
import "./banner.css";
import { BsChevronDown } from 'react-icons/bs';

const Banner = () => {
  return (
    <>
        <section id='banner' className="banner">
            <div className="container">
                <div className="content text-center">
                    <h1>Contemporary Japanese Cuisine</h1>
                    <div className="buttons flex justify-center">
                      <button className='filled-button'>Order Now</button>
                      <button className='border-button'>View All Location</button>
                    </div>
                </div>

                <a className='flex align-center scroll-content justify-center' href="#about"><BsChevronDown /> Scroll Now</a>
            </div>
        </section>
    </>
  )
}

export default Banner