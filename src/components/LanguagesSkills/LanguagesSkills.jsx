import React, { useEffect, useRef, useState } from 'react';

export default function LanguagesSkills() {
  const languages = [
    { name: 'Ukrainian', progress: 95, description: 'Native language' },
    { name: 'English', progress: 70, description: 'B2 level' },
    { name: 'French', progress: 20, description: 'A2 level' },
    { name: 'Japanese', progress: 15, description: 'JLPT N5' },
  ];

  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='languagesContainer w-full flex justify-between mt-16'
    >
      {languages.map((language, index) => (
        <div className='language' key={index}>
          <div className='languageProgress w-[225px] h-[11px] rounded-2xl bg-customBgPurple'>
            <div
              className='languageProgressbar h-[11px] rounded-2xl bg-customPurple transition-all duration-1000'
              style={{
                width: visible ? `${language.progress}%` : '0%',
              }}
            ></div>
          </div>
          <p className='languageName text-customWhite text-2xl font-medium mt-2'>
            {language.name}
          </p>
          <p className='languageDescription text-customWhite text-base font-light'>
            {language.description}
          </p>
        </div>
      ))}
    </div>
  );
}
