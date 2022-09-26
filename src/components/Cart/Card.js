import React from 'react';
import './Cart.css'

const Card = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    let shipping = 0

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = Math.round(total * 0.1)

    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h3>Order summary </h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Card;