import React from 'react';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Link from React Router

import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);  
    };
    return (
        <>
           <Router>
                <div className="navbar">
                    <div className="navbar-logo">
                        <h2>
                            <span>F</span>arm
                            <span>T</span>ech
                            <span>hub</span>
                        </h2>
                    </div>
                    <div className={`navbar-item ${isOpen ? 'nav--one' : ''}`}>
                        <ul>
                            {/* Use Link components instead of anchor tags */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li>
                            <Link to="/Contact">Contact
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="button">
                        <div className="butt">
                            <button className="login" role="button"><Link to='Login'>Login</Link></button>
                        </div>
                        <div className="butt">
                            <button className="signup" role="button"><Link to='signup'>Signup</Link></button>
                        </div>
                    </div>
                    <div className={`dots ${isOpen ? 'dots--open' : ''}`} onClick={toggleMenu}>
                        <div className='barcontainer'>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                </Router>
        </>
    );
};

export default Navbar;
