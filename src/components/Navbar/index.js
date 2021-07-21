import React, { useState } from 'react';

// styles
import s from './Navbar.module.css';

// logo
import LogoImg from '../../images/logo.svg';

// hamburger icon
import { FaBars } from 'react-icons/fa';

// components
import NavDropdown from '../NavDropdown';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  return (
    <nav className={s.nav}>
      <div className={s.header}>
        <img src={LogoImg} alt="Shortly" />
        <button
          className={s.menuBtn}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaBars />
        </button>
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
