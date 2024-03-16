import React from 'react'
import './admin_nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Admin_nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };
  return (
    <>
      <nav>
        <div className="navtitle">
          <h3>Farm Techub</h3>
        </div>
        <div className={`nav-list ${menuOpen ? 'open' : ''}`} >
          <div className='nav_items' >
            <ul>
              <li><Link to="/">Dashboard </Link></li>
              <li><Link to="/crop-details">Crop Details </Link></li>
              <li><Link to="/Application Receive">Application Receive </Link></li>
              <li><Link to="/post-scheme">Post New Scheme</Link></li>
            </ul>
            <button className="logout">Logout</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>


    </>
  )
}
export default Admin_nav
