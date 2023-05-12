import React from 'react';
import "./card.css"

const MenuesCard = ({ image,heading, paraContent }) => {
    return (
        <>
            <div className="menu-card">
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="content flex flex-column justify-center align-center text-center">
                    <h5 className='r-l-line'>All Menu</h5>
                    <h3>{heading}</h3>
                    <p>{paraContent}</p>
                    <button className='border-button'><a href="/">View All</a></button>
                </div>
            </div>
        </>
    )
}

export default MenuesCard