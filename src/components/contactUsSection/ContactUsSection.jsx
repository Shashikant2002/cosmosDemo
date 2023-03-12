import React from "react";
import './contactSection.css';

const ContactUsSection = () => {
  return (
    <>
      <div className="contactSection common-section">
        <div className="container">
            <div className="content">
                <h5 className="right-line">General Inquiries</h5>
                <h2>Contact Us</h2>
                <p>For general Inquiries please kindly complete the form, or email:</p>
                <a href="mailto: info@patiotime.com"><p>info@patiotime.com</p></a>
                <p className="flex">Reserve by email: &nbsp;<a href="mailto: booking@patiotime.com"><p>info@patiotime.com</p></a></p>
                <p className="flex">Tel: &nbsp; <a href="tel: +39390551234567"><p>+39 055 1234567</p></a></p>
                <p><b>Opening Hour</b></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
