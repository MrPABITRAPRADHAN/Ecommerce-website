import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Style/Userviewproducts.css'


function Userviewproducts() {

    let [product, setProduct] = useState([])


    useEffect(() => {
        function fetchdata() {
            axios.get('http://localhost:1000/products')
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchdata();
    }, [])


    return (
        <div className='AdminViewItems'>

            {product.map((product) => {
                return (
                    <div className="product-card">
                        <img className="product-image" src={product.image} alt="Product Image"  />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-category">{product.category}</div>
                                <div className="product-price">
                                    {product.price}</div>
                                <div class="product-rating">
                                    <div className="stars">⭐⭐⭐⭐☆{product.description}</div>
                                    <div className="rating-value">{product.rating}</div>
                                </div>
                                <div className="product-description">
                                    Experience ultimate comfort and style with the Nike Air Max, featuring superior cushioning and a modern design.
                                </div>
                            </div>
                    </div>
                );
              })}
            


        </div>
    );
}

export default Userviewproducts
