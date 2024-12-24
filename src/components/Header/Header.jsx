import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/page logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header() {
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-5 py-10 bg-customBlack">
      <img src={logo} alt="logo" className="w-[36px]" />
      <ul className="w-[300px] flex justify-between items-center text-customWhite text-base font-medium">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            &lt;/About me&gt;
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            &lt;/Projects&gt;
          </NavLink>
        </li>
      </ul>
      <FontAwesomeIcon icon={faGear} className="text-customWhite text-2xl" />
    </header>
  );
}
