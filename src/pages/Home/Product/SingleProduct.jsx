import React from 'react';

const SingleProduct = ({ product }) => {
    return (
        <div
            key={product.id}
            className="card bg-base-100 shadow-xl rounded-md">
            <figure><img className='max-w-[250px] h-[200px]' src={product.image} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description.slice(0, 200)}...<span className='text-blue-500 underline' onClick={() => showAllDescription()}>see more</span></p>
                <div className="card-actions">
                    <button className="btn w-full bg-green-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;