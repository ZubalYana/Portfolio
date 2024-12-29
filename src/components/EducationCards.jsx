import React, { useState } from 'react';
import graduationHat from '/graduationHat.svg';
import creatorLogo from '/creatorLogo.svg';
import 'animate.css';

export default function EducationCards() {
  const [isAnimatingHat, setIsAnimatingHat] = useState(false);
  const [isAnimatingLogo, setIsAnimatingLogo] = useState(false);

  const handleHatClick = () => {
    setIsAnimatingHat(true);
    setTimeout(() => {
      setIsAnimatingHat(false);
    }, 1000); // Match the animation duration
  };

  const handleLogoClick = () => {
    setIsAnimatingLogo(true);
    setTimeout(() => {
      setIsAnimatingLogo(false);
    }, 1000); // Match the animation duration
  };

  return (
    <div className='eduCardsContainer h-[93%] w-[50%] mt-6 flex flex-col items-center justify-around'>
      <div className="eduCard w-[400px] h-[250px] rounded-2xl border-customPurple border-4 p-5 flex flex-col items-center justify-center">
        <img
          src={graduationHat}
          alt="graduation logo"
          className={` ${isAnimatingHat ? 'animate__animated animate__swing' : ''}`}
          onClick={handleHatClick}
        />
        <p className='text-customWhite font-light text-base text-center mt-5'>
          I graduated from the secondary <span className='font-medium'>school of Shklo</span> in Ukraine with red diploma and multiply won competitions
        </p>
      </div>
      <div className="eduCard w-[400px] h-[250px] rounded-2xl border-customPurple border-4 p-5 flex flex-col items-center justify-center">
        <img
          src={creatorLogo}
          alt="creator logo"
          className={` ${isAnimatingLogo ? 'animate__animated animate__swing' : ''}`}
          onClick={handleLogoClick}
        />
        <p className='text-customWhite font-light text-base text-center mt-5'>
          I finished modules: HTML/CSS, JavaScript, Node.js and React in <span className='font-medium'>Creator IT Academy</span> and still continue my education there
        </p>
      </div>
    </div>
  );
}
