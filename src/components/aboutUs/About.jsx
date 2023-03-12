import React from 'react';
import "./about.css"

const About = () => {
    return (
        <>
            <section id='about' className="about common-section">
                <div className="container flex">
                    <div className="content">
                        <h5 className='right-line'>About Us</h5>
                        <h2>A Sophisticated Interpretation Of Traditional Japanese Cuisine</h2>
                        <figure className='image'>
                            <img src="assets/img/about-1.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="img">
                        <figure className='image'>
                            <img src="assets/img/about-2.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About