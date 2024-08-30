import { useState } from 'react'
import data from '../assets/Product.json';
import './Home.css';
import Product from './Product';

const Home = () => {
    const [products] = useState(data)
    // console.log(product)
    return (
        <div className="product-container">
            {products.map((product)=>{
                return(
                    <Product key={product.id} product={product}/>
                )
            })}
        </div>
    )
}

export default Home