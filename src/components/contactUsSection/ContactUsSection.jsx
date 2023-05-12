import React from "react";
import { Link } from "react-router-dom";
import "./contactSection.css";

const ContactUsSection = () => {
  return (
    <>
      <div className="contactSection common-section">
        <div className="container flex">
          <div className="content">
            <h5 className="right-line">General Inquiries</h5>
            <h2>Contact Us</h2>
            <div className="info">
              <p>
                For general Inquiries please kindly complete the form, or email:
              </p>
              <a href="mailto: info@patiotime.com">
                <p>info@patiotime.com</p>
              </a>
            </div>
            <p className="flex bookingEmail">
              Reserve by email: &nbsp;
              <a href="mailto: hello@kozmo-cloud.com">
                <p>Hello@kozmo-cloud.com</p>
              </a>
            </p>
            <p className="flex telNum">
              Tel: &nbsp;{" "}
              <a href="tel: +919810288099">
                <p>+91-9810288099</p>
              </a>
            </p>
            <div className="openingHour">
              <p>
                <b>Opening Hour</b>
              </p>
              <p>Mon - Thu: 10:00am - 01:00am</p>
              <p>Fri - Sun: 10:00am - 02:00am</p>
            </div>

            {/* <Link className="border-button" to="/">
              MAKE A RESERVATION
            </Link> */}
          </div>

          <div className="form">
            <form action="/">
              <div className="name">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="email">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="text" />
              </div>
              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" />
              </div>
              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="subject" type="text" />
              </div>
              <button className="filled-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
