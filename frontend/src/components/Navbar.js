import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = ({ click }) => {
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
                        <span className="cartlogo__badge">0</span>
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
