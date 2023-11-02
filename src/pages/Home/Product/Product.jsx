import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    console.log(allProduct);
    return (
        <div className='mt-16'>
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
                {
                    allProduct.map(product => <SingleProduct key={product.key} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Product;