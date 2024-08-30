/* eslint-disable react/prop-types */
// import React from 'react'
// import { prod } from 'mathjs'
import './Product.css'
import { cartContext } from './FoodCart'
import { useContext } from 'react'

const Product = ({ product }) => {
    const {cart,setCart}=useContext(cartContext)
    const deleteFromCart = (prod) => {
        setCart(cart.filter((c)=>c.id != prod.id))
    }
    const addCart = (prod) => {
        // console.log(prod)
        setCart([...cart, prod])
        // console.log(cart)
    }
    // console.log(product)
    return (
        <>
            <div className="product">
                <div className="pro-img">
                    <img src={product.img} alt="FoodImg" />
                </div>
                <div className="details">
                    <h2>{product.foodName}</h2>
                    <p>{"Price: $ " + product.price}</p>
                    {cart.includes(product) ? (<button className='remove-btn' onClick={()=>{deleteFromCart(product)}}>Delete From Cart</button>)
                        : (<button onClick={() => addCart(product)}>Add To Cart</button>)}
                </div>
            </div>
        </>)
}

export default Product