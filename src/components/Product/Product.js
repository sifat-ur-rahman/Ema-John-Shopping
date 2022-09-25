import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    // console.log(props.product);
    // const { handleAddToCart } = props
    const { name, img, price, ratings, seller } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h4>Price: ${price}</h4>
                <p>Manufacturer {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>


        </div>
    );
};

export default Product;