import React from 'react'
import CartSection from '../components/cartSection/CartSection'
import InnerBanner from '../components/innerBanner/InnerBanner'

const Cart = () => {
  return (
    <>
         <InnerBanner bgImg={"/assets/img/about-1.jpg"} title={"Cart"} />
         <CartSection />
    </>
  )
}

export default Cart