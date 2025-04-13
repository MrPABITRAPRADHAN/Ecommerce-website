import  { useState, useEffect } from 'react'
import axios from 'axios'
import '../Style/Userviewproducts.css'
import UserNavbar from './UserNavbar'


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
            <UserNavbar/>

            {product.map((product, id) => {
                return (
                    <div className="product-card" key={id}>
                        <img className="product-image" src={product.image} alt="Product Image"  />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-category">{product.category}</div>
                                <div className="product-price">
                                    {product.price}</div>
                                <div className="product-rating">
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
