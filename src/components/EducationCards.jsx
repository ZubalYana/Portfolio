import React, { useState, useEffect } from 'react';
import graduationHat from '/graduationHat.svg';
import creatorLogo from '/creatorLogo.svg';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function EducationCards() {
  let { t, i18n } = useTranslation();
  let descriptions = [
    {
      description: "I graduated from the secondary <span className='font-medium'>school of Shklo</span> in Ukraine with red diploma and multiply won competitions",
      uaDescription: "Я закінчила <span className='font-medium'>Шклівську школу</span> у Україні з червоним дипломом і багатьма нагородами",
      frDescription: "Je suis diplômée de l'<span className='font-medium'>Ecole secondaire de Shklo</span> en Ukraine avec un diplome rouge et plusieurs prix",
    },
    {
      description: "I finished modules: HTML/CSS, JavaScript, Node.js and React in <span className='font-medium'>Creator IT Academy</span> and still continue my education there",
      uaDescription: "Я закінчила модулі: HTML/CSS, JavaScript, Node.js та React у <span className='font-medium'>Creator IT Academy</span> та продовжую навчатися там",
      frDescription: "J'ai terminé les modules : HTML/CSS, JavaScript, Node.js et React à <span className='font-medium'>Creator IT Academy</span> et je continue toujours mes études là-bas",
    },
  ];

  const [isAnimatingHat, setIsAnimatingHat] = useState(false);
  const [isAnimatingLogo, setIsAnimatingLogo] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200,
    });
  }, []);

  const handleHatClick = () => {
    setIsAnimatingHat(true);
    setTimeout(() => {
      setIsAnimatingHat(false);
    }, 1000);
  };

  const handleLogoClick = () => {
    setIsAnimatingLogo(true);
    setTimeout(() => {
      setIsAnimatingLogo(false);
    }, 1000); 
  };

  // Function to get the appropriate description based on the current language
  const getDescription = (descriptions) => {
    switch (i18n.language) {
      case 'ua':
        return descriptions.uaDescription;
      case 'fr':
        return descriptions.frDescription;
      default:
        return descriptions.description;
    }
  };

  return (
    <div className='eduCardsContainer h-[93%] w-[50%] mt-6 flex flex-col items-center justify-around'>
      {descriptions.map((desc, index) => (
        <div 
          key={index} 
          className="eduCard w-[380px] h-[240px] rounded-2xl border-customPurple border-4 p-5 flex flex-col items-center justify-center" 
          data-aos="fade-down-left"
        >
          <img
            src={index === 0 ? graduationHat : creatorLogo}
            alt={index === 0 ? "graduation logo" : "creator logo"}
            className={` ${index === 0 ? isAnimatingHat : isAnimatingLogo ? 'animate__animated animate__swing' : ''}`}
            onClick={index === 0 ? handleHatClick : handleLogoClick}
          />
          <p className='text-customWhite font-light text-sm text-center mt-5' dangerouslySetInnerHTML={{ __html: getDescription(desc) }} />
        </div>
      ))}
    </div>
  );
}
