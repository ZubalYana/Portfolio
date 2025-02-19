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
    <div className="SkillsInfoWindow w-[400px] h-[250px] rounded-2xl bg-customWhite p-6 fixed bottom-[40px] left-[40px] xs:w-[250px] xs:h-fit xs:bottom-5 xs:left-5 xs:p-3 2xs:w-[300px] lg:w-[400px] lg:h-[250px] lg:p-6 lg:bottom-[40px] lg:left-[40px]">
      <div className="IconInfoCon flex">
        <img src={icon} alt={`${name} icon`} className="h-[70px] max-w-[100px] xs:h-[50px] xs:max-w-[70px] lg:h-[70px] lg:max-w-[100px]" />
        <div className="infoCon ml-4 w-[310px]">
          <h2 className="text-3xl font-semibold text-customBlack xs:text-xl lg:text-3xl">{name}</h2>
          <h3 className="text-1xl font-normal text-customBlack xs:text-xs lg:text-1xl">{techType}</h3>
        </div>
      </div>
      <p className="text-customBlack font-light mt-2 xs:text-sm lg:text-base">
        First tried: <span className="font-medium">{firstTried}</span>
      </p>
      <p className="text-customBlack font-light mt-1 xs:text-sm lg:text-base">
        Experience: 
        <span className="font-medium ml-1">
          {experience.years} years, {experience.months} months, {experience.days} days
        </span>
      </p>
      <p className="text-customBlack font-light mt-2 xs:text-xs lg:text-base">{description}</p>
    </div>
  );
}
