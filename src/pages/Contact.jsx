import React from 'react'
import ContactUsSection from '../components/contactUsSection/ContactUsSection'
import InnerBanner from '../components/innerBanner/InnerBanner'

const Contact = () => {
  return (
    <>
       <InnerBanner bgImg={"/assets/img/inner-banner.jpg"} title={"Contact Us"} />
      <ContactUsSection />
    </>
  )
}

export default Contact
