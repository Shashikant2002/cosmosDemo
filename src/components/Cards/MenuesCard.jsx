import React from 'react';
import "./card.css"

const MenuesCard = ({ image,heading }) => {
    return (
        <>
            <div className="menu-card">
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="content flex flex-column justify-center align-center text-center">
                    <h5 className='r-l-line'>All Menues</h5>
                    <h3>{heading}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum perferendis itaque corrupti expedita,</p>
                    <button className='border-button'><a href="/">View All</a></button>
                </div>
            </div>
        </>
    )
}

export default MenuesCard