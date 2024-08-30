import { Link } from 'react-router-dom'
import './Header.css'
import { cartContext } from './FoodCart'
import { useContext } from 'react'
import logo from '../../public/images/chef.png'
const Header = () => {
  const{cart}=useContext(cartContext)
  return (
    <div className="header">
        <div className="logo"><img src={logo} alt="logo" />
        <h3>Food Cart</h3></div>
        <ul>
            <li>
                <Link to={'/foodCart'}>Home</Link>
            </li>
            <li>
            <span className='cart-count'>{cart.length}</span>
                <Link to={'/foodCart/cart'}>View Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header