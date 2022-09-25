import React, { useEffect, useState } from 'react';
import Card from '../Cart/Card';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const handleAddToCart = (product) => {
        console.log(product);
        const newCard = [...cart, product]
        setCart(newCard)
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
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;