import React, { useState } from 'react';

// styles
import s from './Navbar.module.css';

// logo
import LogoImg from '../../assets/images/logo.svg';

// hamburger icon
import { FaBars, FaTimes } from 'react-icons/fa';

// components
import NavDropdown from '../NavDropdown';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className={s.nav}>
      <div className={s.header}>
        <img src={LogoImg} alt="Shortly" width="121" height="33" />
        <button
          className={s.menuBtn}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-label="Toggle navigation"
        >
          {dropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={s.links}>
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/" className={s.signup}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      {dropdownOpen && (
        <NavDropdown
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
