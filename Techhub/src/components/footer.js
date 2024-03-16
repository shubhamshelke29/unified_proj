import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer>
    <div class="footer-content">
        <div class="footer-section about">
            <h3>About FarmTechhub</h3>
            <p>We are an agricultural service that offers a range of services, news, and information for farmers. Our aim is to provide a comprehensive service that helps farmers make informed decisions and access funding.</p>
        </div>
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>123 FarmTechhub Street, City, Country</p>
            <p>Email: info@farmtechhub.com</p>
            <p>Phone: +123 456 7890</p>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 FarmTechhub | All rights reserved
    </div>
</footer>

  )
}
