import React from 'react';
import "./about.css"

const About = () => {
    return (
        <>
            <section id='about' className="about common-section">
                <div className="container flex">
                    <div className="content">
                        <h5 className='right-line'>About Us</h5>
                        <h2>Variety For Ever Taste Every Mood</h2>
                        <figure className='image'>
                            <img src="assets/img/about-1.webp" alt="" />
                        </figure>
                    </div>
                    <div className="img">
                        <figure className='image'>
                            <img src="assets/img/about-2.webp" alt="" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About