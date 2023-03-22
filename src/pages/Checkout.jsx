import React from 'react'
import BillingDetail from '../components/billing/BillingDetail'
import CartSection from '../components/cartSection/CartSection'
import InnerBanner from '../components/innerBanner/InnerBanner'

const Checkout = () => {
  return (
    <>
         <InnerBanner bgImg={"/assets/img/about-1.jpg"} title={"Check Out"} />
         <BillingDetail />
    </>
  )
}

export default Checkout