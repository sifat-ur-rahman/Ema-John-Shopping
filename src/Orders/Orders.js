import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../components/Cart/Card';
import ReviewItem from '../ReviwItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()

    }


    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items For Review. Please <Link to='/'>Shop more</Link> </h2>
                }

            </div>
            <div className='cart-container'>
                <Card clearCart={clearCart} cart={cart}></Card>
            </div>
        </div>
    );
};

export default Orders;