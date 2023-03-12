import React from 'react';
import './dinying.css'

const Dinying = () => {
  return (
    <>
        <div className="dinying common-section">
            <div className="container flex">
                <figure className='image'>
                    <img src="assets/img/dining-1.jpg" alt="" />
                </figure>
                <div className="content">
                    <h5 className='right-line'>Experince Our Dining</h5>
                    <h2>Perfect Dining Experience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti a, asperiores officia aliquam aspernatur pariatur temporibus magni labore iusto deserunt necessitatibus maiores</p>
                    <button className='border-button'><a href="/">Book Your Dining</a></button>

                    <figure>
                        <img src="assets/img/dining-2.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dinying