import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-header ">
      <div className="nav-content">
        <Link to="/">
          <img
            src="./images/logo.png"
            className="website-logo"
            alt="website logo"
          />
        </Link>
        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="nav-link">
              Education
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="./files/kesava_resume.pdf"
              className="nav-link"
              download="My_Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="/Expirence" className="nav-link">
              Expirence
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
