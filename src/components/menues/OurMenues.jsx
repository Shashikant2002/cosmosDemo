import React from 'react';
import MenuesCard from '../Cards/MenuesCard';
import "./menues.css"

const OurMenues = () => {
  return (
    <>
        <section id='services' className="menues common-section">
            <div className="flex justify-center flex-wrap">
                <MenuesCard image = "assets/img/menu-1.jpg" />
                <MenuesCard image = "assets/img/menu-2.jpg" />
                <MenuesCard image = "assets/img/chef-1.jpg" />
                <MenuesCard image = "assets/img/chef-2.jpg" />
                <MenuesCard image = "assets/img/dining-1.jpg" />
                <MenuesCard image = "assets/img/menu-1.jpg" />
            </div>
        </section>
    </>
  )
}

export default OurMenues