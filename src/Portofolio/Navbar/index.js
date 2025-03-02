import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyles=({isActive})=>{
    return{
      fontWeight:isActive ? 'bold' :'normal',
      textDecoration: isActive ? 'None' : 'underline'
      }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-header ">
      <div className="nav-content">
        <NavLink style={navLinkStyles} to="/">
          <img
            src="./images/logo.png"
            className="website-logo"
            alt="website logo"
          />
        </NavLink>
        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className="nav-link">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/Expirence" className="nav-link">
              Expirence
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <a
  href={`${process.env.PUBLIC_URL}/files/kesava_resume.pdf`}
  className="nav-link"
  download="My_Resume.pdf"
>
  Resume
</a>
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
