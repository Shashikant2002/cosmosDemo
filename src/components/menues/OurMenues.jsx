import React from 'react';
import MenuesCard from '../Cards/MenuesCard';
import "./menues.css"

const OurMenues = () => {
  return (
    <>
        <section id='services' className="menues common-section">
            <div className="flex justify-center flex-wrap">
                <MenuesCard image = "assets/img/category/home category start your meal.webp"  heading='Meal Of Starters'/>
                <MenuesCard image = "assets/img/category/home category bao.webp"  heading='BAO' />
                <MenuesCard image = "assets/img/category/home category dim sum.webp"  heading='DIM SUM' />
                <MenuesCard image = "assets/img/category/home category indian meal.webp"  heading='INDIAN MAIN' />
                <MenuesCard image = "assets/img/category/home category sushi.webp"  heading='SUSHI' />
                <MenuesCard image = "assets/img/category/home category pasta.webp"  heading='PASTA & SPAGHETTI' />
            </div>
        </section>
    </>
  )
}

export default OurMenues