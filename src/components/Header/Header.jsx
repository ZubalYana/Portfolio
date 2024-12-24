import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/page logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-5 py-10 bg-customBlack">
      <img src={logo} alt="logo" className="w-[36px]" />
      <ul className="w-[300px] flex justify-between items-center text-customWhite text-base font-medium">
        <li><Link to="/about">&lt;/About me&gt;</Link></li> 
        <li><Link to="/projects">&lt;/Projects&gt;</Link></li> 
      </ul>
      <FontAwesomeIcon icon={faGear} className="text-customWhite text-2xl" />
    </header>
  );
}
