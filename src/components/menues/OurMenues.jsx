import React from 'react';
import MenuesCard from '../Cards/MenuesCard';
import "./menues.css"

const OurMenues = () => {
  return (
    <>
        <section id='services' className="menues common-section">
            <div className="flex justify-center flex-wrap">
                <MenuesCard paraContent="Crispy rolls and flavorful skewers perfect to kickstart your meal with a burst of deliciousness." image = "assets/img/category/home category start your meal.webp"  heading='Meal Of Starters'/>
                <MenuesCard paraContent="Soft and fluffy steamed buns filled with mouthwatering combinations of BBQ pork, teriyaki chicken, or crispy tofu." image = "assets/img/category/category bao.webp"  heading='BAO' />
                <MenuesCard paraContent="Steamed or fried bite-sized dumplings bursting with flavors like shrimp, pork, and vegetables, served with dipping sauces." image = "assets/img/category/dim sum category.webp"  heading='DIM SUM' />
                <MenuesCard paraContent="Indulge in aromatic Indian mains like butter chicken, vegetable biryani, and lamb rogan josh for a true culinary delight." image = "assets/img/category/home category indian meal.webp"  heading='INDIAN MAIN' />
                <MenuesCard paraContent="Fresh and expertly rolled sushi options including California rolls, spicy tuna rolls, and salmon avocado rolls for sushi lovers." image = "assets/img/category/home category sushi.webp"  heading='SUSHI' />
                <MenuesCard paraContent="Savor classic Italian pasta dishes such as spaghetti Bolognese, creamy chicken Alfredo, and vegetarian pesto pasta." image = "assets/img/category/category pasta.webp"  heading='PASTA & SPAGHETTI' />
            </div>
        </section>
    </>
  )
}

export default OurMenues