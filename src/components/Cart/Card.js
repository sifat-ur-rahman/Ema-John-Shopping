import React from 'react';
import './Cart.css'

const Card = ({ cart }) => {
    return (
        <div className='cart'>
            <h3>Order summary </h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Card;