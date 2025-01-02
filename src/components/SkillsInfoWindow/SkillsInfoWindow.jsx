import React from 'react';
import './SkillsInfoWindow.css';
export default function SkillsInfoWindow({ name, icon, techType, description }) {
  
  return (
    <div className="w-[400px] h-[180px] rounded-2xl bg-customWhite p-6 fixed bottom-[40px] left-[40px]">
      <div className="IconInfoCon flex">
        <img src={icon} alt={`${name} icon`} className="h-[70px] max-w-[100px]" />
        <div className="infoCon ml-4 w-[310px]">
          <h2 className="text-3xl font-semibold text-customBlack">{name}</h2>
          <h3 className="text-1xl font-normal text-customBlack">{techType}</h3>
        </div>
      </div>
      <p className="text-customBlack font-light mt-4">{description}</p>
    </div>
  );
}
