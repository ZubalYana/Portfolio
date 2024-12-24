import React from 'react';
import logo from '/page logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-5 py-10">
      <img src={logo} alt="logo" className="w-[36px]" />
      <ul className="w-[300px] flex justify-between items-center text-customWhite text-base font-medium">
        <li><a href="#">&lt;/About me&gt;</a></li>
        <li><a href="#">&lt;/Projects&gt;</a></li>
      </ul>
      <FontAwesomeIcon icon={faGear} className="text-customWhite text-2xl" />
    </header>
  );
}
