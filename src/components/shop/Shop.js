import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Card from '../Cart/Card';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()

    }

    useEffect(() => {
        // console.log('localST');
        const storedCart = getStoredCart();
        const savedCart = []
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Card clearCart={clearCart} cart={cart}>
                    <Link to='/orders'><button className='btn-review-order'>Review Order</button> </Link>
                </Card>
            </div>
        </div>
    );
};

export default Shop;