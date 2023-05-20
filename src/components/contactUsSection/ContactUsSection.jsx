import React, { useRef, useState } from "react";
import "./contactSection.css";
import emailjs from "@emailjs/browser";
import Loading from "../loading/Loading";

const ContactUsSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formContact = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(formContact.current);
    await emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID_FOR_CONTACT,
        formContact.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Thanks for Message");
          setName("");
          setEmail("");
          setSubject("");
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
      <div className="contactSection common-section">
        <div className="container flex">
          <div className="content">
            <h5 className="right-line">General Inquiries</h5>
            <h2>Contact Us</h2>
            {/* <div className="info">
              <p>
                For general Inquiries please kindly complete the form, or email:
              </p>
              <a href="mailto: info@patiotime.com">
                <p>info@patiotime.com</p>
              </a>
            </div> */}
            <p className="flex bookingEmail">
              Reserve by email: &nbsp;
              <a href="mailto: hello@kozmo-cloud.com">Hello@kozmo-cloud.com</a>
            </p>
            <p className="flex telNum">
              Tel: &nbsp; <a href="tel: +919810288099">+91-9810288099</a>
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
            <form ref={formContact} onSubmit={formSubmit}>
              <div className="name">
                <label htmlFor="name">Your Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="email">
                <label htmlFor="email">Your Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  id="subject"
                  name="subject"
                  type="text"
                />
              </div>
              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="message"
                  name="message"
                  type="text"
                />
              </div>
              <button className="filled-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
