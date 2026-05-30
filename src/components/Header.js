import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
   * Header component with navigation for Little Lemon restaurant
 * Includes responsive hamburger menu and accessible navigation
 */
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <Link to="/" aria-label="Little Lemon - Home">
          <div className="logo">
            <span className="logo-icon" aria-hidden="true">🍋</span>
            <span className="logo-text">Little Lemon</span>
          </div>
        </Link>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>

        <nav
          id="main-nav"
          className={`nav ${menuOpen ? 'nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list" role="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <a href="#menu" className="nav-link" onClick={() => setMenuOpen(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
