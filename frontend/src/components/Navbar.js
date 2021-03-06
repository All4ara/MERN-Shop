import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        <nav className="navbar">
        {/* Logo */}
        <div className="nav__logo">
            <h2>Mern Shopping Cart</h2>
        </div>

        {/* Links */}
        <ul className="navbar__links">
            <li>
                <Link to="/cart" className="cart__link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart
                        <span className="cartlogo__badge">{getCartCount()}</span>
                    </span>
                    
                </Link>
            </li>
            <li>
                <Link to="/" className="">
                    Shop
                </Link>
            </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </nav>
    )
}

export default Navbar
