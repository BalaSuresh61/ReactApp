import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import './FoodCart.css'

export const cartContext = createContext();

const FoodCart = () => {
    const [cart, setCart] = useState([])
    return (
        <cartContext.Provider value={{ cart, setCart }}>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
        </cartContext.Provider>
    )
}   

export default FoodCart