// import React from 'react'
import { useEffect, useState } from 'react'
import './Cart.css'
import { cartContext } from './FoodCart'
import { useContext } from 'react'

const Cart = () => {
  const { cart } = useContext(cartContext)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    setTotal(()=>{
      const total = cart.reduce((acc, cur) => acc + parseFloat(cur.price), 0);
      return total.toFixed(2);
      })
  },[cart])
  return (
    <>
      <div className="cart-container">
        <h2> Cart Products</h2>
        {cart.map((product) => {
          return (
            <div className="cart-product" key={product.id}>
              <div className="cart-product-img">
                <img src={product.img} alt={product.foodName} />
              </div>
              <div className="cart-product-details">
                <h3>{product.foodName}</h3>
                <p>Price $ : {product.price}</p>
              </div>
            </div>
          )
        })}
        <h3>Total Amount is $: {total}</h3>
      </div>
    </>
  )
}

export default Cart