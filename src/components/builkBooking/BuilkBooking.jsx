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
                Planning a special event or hosting a large gathering? Take the
                stress out of catering with our convenient bulk booking service.
                From corporate functions to social celebrations, our cloud
                kitchen offers a seamless and delicious catering experience for
                any occasion. Enjoy our diverse menu, exceptional quality, and
                hassle-free delivery, ensuring that your guests are treated to a
                memorable dining experience. Contact us now to discuss your bulk
                booking needs and let us handle the culinary details while you
                focus on creating unforgettable moments.
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
