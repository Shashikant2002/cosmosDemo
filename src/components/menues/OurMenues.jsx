import React from "react";
import MenuesCard from "../Cards/MenuesCard";
import "./menues.css";

const OurMenues = () => {
  return (
    <>
      <section id="services" className="menues common-section">
        <div className="flex justify-center flex-wrap">
          <MenuesCard
            paraContent="Crispy rolls and flavorful skewers perfect to kickstart your meal with a burst of deliciousness."
            image="assets/img/update_1/meal of starter.webp"
            heading="Meal Of Starters"
          />
          <MenuesCard
            paraContent="Delicate and tender steamed fish infused with aromatic flavors, bringing you a healthy and delectable choice for seafood lovers."
            image="assets/img/update_1/Steam Fish.webp"
            heading="Steam Fish"
          />
          <MenuesCard
            paraContent="Steamed or fried bite-sized dumplings bursting with flavors like shrimp, pork, and vegetables, served with dipping sauces."
            image="assets/img/update_1/dim sum.webp"
            heading="DIM SUM"
          />
          <MenuesCard
            paraContent="Indulge in aromatic Indian mains like butter chicken, vegetable biryani, and lamb rogan josh for a true culinary delight."
            image="assets/img/update_1/indian main.webp"
            heading="INDIAN MAIN"
          />
          <MenuesCard
            paraContent="Fresh and expertly rolled sushi options including California rolls, spicy tuna rolls, and salmon avocado rolls for sushi lovers."
            image="assets/img/update_1/sushi.webp"
            heading="SUSHI"
          />
          <MenuesCard
            paraContent="Experience the versatility of tofu in our flavorful dishes, from stir-fries to curries, delivering a delightful vegetarian option."
            image="assets/img/update_1/tofu.webp"
            heading="tofu"
          />
        </div>
      </section>
    </>
  );
};

export default OurMenues;
