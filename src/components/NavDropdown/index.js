import React from 'react';

// styles
import s from './NavDropdown.module.css';

const NavDropdown = ({ dropdownOpen, setDropdownOpen }) => {
  if (dropdownOpen) {
    return (
      <div className={s.wrapper}>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className={s.signup}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default NavDropdown;
