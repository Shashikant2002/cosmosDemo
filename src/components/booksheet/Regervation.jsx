import React from 'react';
import "./regervation.css";

const Regervation = () => {
  return (
    <>
        <section className="regervation common-section">
            <div className="container text-center">
                {/* <h5 className='r-l-line'>Book Online Now</h5> */}
                {/* <h2>Online Reservation</h2> */}
                <h2>Kozmo Cloud: Where Taste Knows No Limits and Culinary Delights Await Your Doorstep!</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit enim, dolores architecto odit doloribus officiis ab, sequi totam quibusdam natus nisi dicta quisquam repudiandae! Laudantium enim iusto cupiditate labore voluptas?</p> */}
                <button className='filled-button'><a href="/contact">Order Now</a></button>
            </div>
        </section>
    </>
  )
}

export default Regervation