import React from "react";
import { Link } from "react-router-dom";
import "./builkBooking.css";

const BuilkBooking = () => {
  return (
    <>
      <section className="builkBooking common-section">
        <div className="container flex">
          <div className="content">
            <h5 className="right-line">General Inquiries</h5>
            <h2>Bulk Booking</h2>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                perspiciatis eum magnam quisquam, vel ipsum nisi corrupti
                voluptatum laboriosam dicta non dolore assumenda in iste
                mollitia, natus explicabo optio eius? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur libero voluptates
                voluptas impedit architecto ratione nemo tempore, sed, molestias
                sunt, vel inventore dolorum consequuntur illo nisi odio quia
                reiciendis a!
              </p>
            </div>
          </div>
          <div className="form">
            <form action="/">
              <div className="rowMain flex">
                <div className="name">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" />
                </div>
                <div className="email">
                  <label htmlFor="email">Your Email</label>
                  <input id="email" name="email" type="text" />
                </div>
              </div>
              <div className="rowMain flex">
                <div className="name">
                  <label htmlFor="name">Location</label>
                  <input id="name" name="name" type="text" />
                </div>
                <div className="email">
                  <label htmlFor="email">Booking Date</label>
                  <input id="email" name="email" type="date" />
                </div>
              </div>
              
              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="subject" type="text" />
              </div>
              <button className="filled-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuilkBooking;
