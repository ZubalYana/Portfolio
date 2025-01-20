import React from 'react';
import './SkillsInfoWindow.css';

export default function SkillsInfoWindow({ name, icon, techType, description, firstTried }) {
  const calculateExperience = (startDate) => {
    const start = new Date(startDate.split('.').reverse().join('-'));
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years, months, days };
  };

  const experience = calculateExperience(firstTried);

  return (
    <div className="w-[400px] h-[230px] rounded-2xl bg-customWhite p-6 fixed bottom-[40px] left-[40px]">
      <div className="IconInfoCon flex">
        <img src={icon} alt={`${name} icon`} className="h-[70px] max-w-[100px]" />
        <div className="infoCon ml-4 w-[310px]">
          <h2 className="text-3xl font-semibold text-customBlack">{name}</h2>
          <h3 className="text-1xl font-normal text-customBlack">{techType}</h3>
        </div>
      </div>
      <p className="text-customBlack font-light mt-2">
        First tried: <span className="font-medium">{firstTried}</span>
      </p>
      <p className="text-customBlack font-light mt-1">
        Experience: 
        <span className="font-medium ml-1">
          {experience.years} years, {experience.months} months, {experience.days} days
        </span>
      </p>
      <p className="text-customBlack font-light mt-2">{description}</p>
    </div>
  );
}
