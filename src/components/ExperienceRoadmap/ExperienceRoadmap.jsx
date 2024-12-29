import React, { useState, useRef, useEffect } from 'react';
import './ExperienceRoadmap.css';

export default function ExperienceRoadmap() {
  const steps = [
    {
      year: '2022',
      title: 'I began my journey',
      description:
        'by learning the basics of HTML and CSS at Creator IT Academy. It was there that I first got a taste of programming and quickly developed a liking for it. At the time, I thought it would just be a hobby. This year I experienced JavaScript as well. My first programming language!',
    },
    {
      year: '2023',
      title: 'I continued my path',
      description:
        'with constant learning, diving into the basics of JavaScript and building simple web pages. I also started using GitHub and Loom, and got acquainted with web design. After taking a few web design courses at Creator IT Academy, my design way was set in motion!',
    },
    {
      year: '2024',
      title: 'My experience',
      description:
        'grew steadily throughout the year as I completed various projects and faced many challenges along the way. I made valuable connections in the web development sphere, began working with Node.js, and learned a wide range of tools and technologies. Furthermore, I started learning React!',
    },
    {
      year: '2025',
      title: 'See you then!',
      description:
        'The coming year will undoubtedly bring me plenty of new experiences and knowledge as I continue to dive deeper into programming. I aim to enhance my coding and design skills, complete many new projects, and possibly explore animation and Photoshop. Who knows what opportunities await?',
    },
  ];

  const [activeStep, setActiveStep] = useState(-1);
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && index === activeStep + 1) {
            setTimeout(() => {
              setActiveStep((prev) => prev + 1);
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    containerRefs.current
      .filter((ref) => ref) 
      .forEach((ref) => observer.observe(ref));

    return () => {
      containerRefs.current
        .filter((ref) => ref) 
        .forEach((ref) => observer.unobserve(ref));
    };
  }, [activeStep]);

  return (
    <div className="StepsCon mt-4">
      {steps.map((step, index) => (
        <div
          className="experienceStep w-[770px] h-[152px] flex"
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          data-index={index}
        >
          <div className="year w-[55px] h-[40px] flex items-center text-lg font-medium text-customWhite">
            {step.year}
          </div>
          <div className="path w-[40px] h-full flex flex-col items-center">
            <div
              className={`path_circle rounded-full bg-customPurple ${
                activeStep >= index ? 'visible' : ''
              }`}
            ></div>
            <div
              className={`path_stick bg-customPurple ${
                activeStep >= index ? 'visible' : ''
              }`}
            ></div>
          </div>
          <div className="experience_text w-[650px] h-full flex flex-col pl-5">
            <div className="experience_title text-2xl font-medium text-customWhite">
              {step.title}
            </div>
            <div className="experience_description text-sm font-light text-customWhite mt-2">
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}