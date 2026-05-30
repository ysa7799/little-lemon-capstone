import React from 'react';
import { Link } from 'react-router-dom';

  /**
   * Footer component for Little Lemon restaurant
 * Contains navigation links, contact info, and social media
 */
  function Footer() {
  return (
        <footer className="footer" role="contentinfo">
          <div className="footer-container">
            <div className="footer-brand">
              <span className="logo-icon" aria-hidden="true">🍋</span>
              <h2 className="footer-title">Little Lemon</h2>
              <p className="footer-tagline">Chicago's finest Mediterranean cuisine</p>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <h3>Navigation</h3>
              <ul role="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>

            <div className="footer-contact">
              <h3>Contact</h3>
              <address>
                <p>123 Mediterranean Ave</p>
                <p>Chicago, IL 60601</p>
                <p>
                  <a href="tel:+13125550123" aria-label="Call us at (312) 555-0123">
                    (312) 555-0123
                  </a>
                </p>
                <p>
                  <a href="mailto:info@littlelemon.com" aria-label="Email us">
                    info@littlelemon.com
                  </a>
                </p>
              </address>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <ul role="list" className="social-list">
                <li>
                  <a href="https://facebook.com" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer;
