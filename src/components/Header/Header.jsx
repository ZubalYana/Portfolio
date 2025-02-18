import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '/page logo.png';
import './Header.css';

export default function Header({ openSettings }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const body = document.body;
    if (i18n.language === 'ua') {
      body.classList.add('ukrainian');
    } else {
      body.classList.remove('ukrainian');
    }
  }, [i18n.language]); 

  return (
    <header className="w-full h-[80px] flex justify-between items-center p-10 bg-customBlack xs:p-5 lg:p-10">
      <img src={logo} alt="logo" className="w-[36px] logo xs:w-7 lg:w-[36px]" />
      <ul className="headerNav w-[300px] flex justify-between items-center text-customWhite text-base font-medium lg:w-[300px] lg:text-base lg:font-medium xs:w-[150px] xs:text-xs xs:font-normal">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            &lt;/{t('about')}&gt;
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            &lt;/{t('projects')}&gt;
          </NavLink>
        </li>
      </ul>
      <select
        id="language"
        className="font-medium text-xl bg-customBlack text-customWhite outline-none xs:text-sm lg:font-medium lg:text-xl"
        onChange={changeLanguage}
        defaultValue={i18n.language}
      >
        <option value="en">Eng.</option>
        <option value="fr">Fr.</option>
        <option value="ua">Укр.</option>
      </select>
    </header>
  );
}
