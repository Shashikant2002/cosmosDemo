import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./builkBooking.css";
import Loading from "../loading/Loading";
import emailjs from "@emailjs/browser";

const BuilkBooking = () => {
  const [loading, setLoading] = useState(false);
  const bulkForm = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    console.log(bulkForm.current);

    await emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID_FOR_BUILK,
        bulkForm.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Thanks for Message");
          setName("");
          setEmail("");
          setLocation("");
          setBookingDate("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendEmail(e);
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
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
              <p>
                Mail:{" "}
                <a href="mailto: Hello@kozmo-cloud.com">
                  Hello@kozmo-cloud.com
                </a>
              </p>
            </div>
          </div>
          <div className="form">
            <form ref={bulkForm} onSubmit={formSubmit} action="/">
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
                  <input id="name" name="location" type="text" />
                </div>
                <div className="email">
                  <label htmlFor="email">Booking Date</label>
                  <input id="email" name="date" type="date" />
                </div>
              </div>

              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" type="text" />
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
