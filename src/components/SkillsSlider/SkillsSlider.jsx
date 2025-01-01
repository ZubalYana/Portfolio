import React, { useState } from 'react'
import CircleProgressbar from '../CircleProgressbar/CircleProgressbar';
import Slider from 'react-slick';
import SkillsInfoWindow from '../SkillsInfoWindow/SkillsInfoWindow';
import './SkillsSlider.css';
export default function SkillsSlider() {
    const [selectedSkill, setSelectedSkill] = useState(null);
    let technicalSkills = [
        {
          name: 'HTML',
          icon: '/technologies/html.svg',
          techType: 'Front-End Development',
          description: 'Active use in all projects with 2.5 years of experience.',
          progress: 90,
        },
        {
          name: 'CSS',
          icon: '/technologies/css.svg',  
          techType: 'Front-End Development',
          description: 'An enjoyable and well-experienced technology with 2.5 years of experience.',
          progress: 85,
        },
        {
          name: 'SCSS',
          icon: '/technologies/scss.svg',
          techType: 'Front-End Development',
          description: 'Used for advanced styling with a focus on reusability and maintainability.',
          progress: 80,
        },
        {
          name: 'JavaScript',
          icon: '/technologies/javascript.svg',
          techType: 'Front-End & Back-End Development',
          description: 'Core scripting language for dynamic web content, 2.5 years of experience.',
          progress: 75,
        },
        {
          name: 'Node.js',
          icon: '/technologies/nodeJs.svg',
          techType: 'Back-End Development',
          description: 'JavaScript runtime for building scalable server-side applications.',
          progress: 70,
        },
        {
          name: 'Bootstrap',
          icon: '/technologies/bootstrap.svg',
          techType: 'Front-End Development',
          description: 'A front-end framework for creating responsive, mobile-first web designs.',
          progress: 65,
        },
        {
          name: 'MongoDB',
          icon: '/technologies/mongoDB.svg',
          techType: 'Back-End Development',
          description: 'A NoSQL database used for storing unstructured data in a flexible format.',
          progress: 60,
        },
        {
          name: 'Figma',
          icon: '/technologies/figma.svg',
          techType: 'Design',
          description: 'Design tool for creating user interfaces, wireframes, and prototypes.',
          progress: 75,
        },
        {
          name: 'Multer',
          icon: '/technologies/multer.svg',
          techType: 'Back-End Development',
          description: 'Middleware for handling file uploads in Node.js applications.',
          progress: 55,
        },
        {
          name: 'ClickUp',
          icon: '/technologies/clickup.svg',
          techType: 'Project Management',
          description: 'A productivity platform used for organizing tasks, timelines, and collaboration.',
          progress: 70,
        },
        {
          name: 'Cookies',
          icon: '/technologies/cookies.svg',
          techType: 'Web Development',
          description: 'Used for storing data on the client-side to manage sessions and preferences.',
          progress: 65,
        },
        {
          name: 'LocalStorage',
          icon: '/technologies/localStorage.svg',
          techType: 'Web Development',
          description: 'Browser storage mechanism for storing data locally on the user’s device.',
          progress: 60,
        },
        {
          name: 'Postman',
          icon: '/technologies/postman.svg',
          techType: 'API Testing',
          description: 'A tool for testing APIs, sending requests, and analyzing responses.',
          progress: 85,
        },
        {
          name: 'Tailwind CSS',
          icon: '/technologies/tailwind.svg',
          techType: 'Front-End Development',
          description: 'A utility-first CSS framework for rapid UI development.',
          progress: 80,
        },
        {
          name: 'React',
          icon: '/technologies/react.svg',
          techType: 'Front-End Development',
          description: 'A JavaScript library for building user interfaces, primarily for single-page applications.',
          progress: 70,
        },
        {
          name: 'Axios',
          icon: '/technologies/axios.png',
          techType: 'Front-End & Back-End Development',
          description: 'A promise-based HTTP client for making requests to APIs.',
          progress: 85,
        },
        {
          name: 'jQuery',
          icon: '/technologies/jquery.svg',
          techType: 'Front-End Development',
          description: 'A JavaScript library to simplify DOM manipulation and event handling.',
          progress: 70,
        },
        {
          name: 'Font Awesome',
          icon: '/technologies/fontawesome.svg',
          techType: 'Front-End Development',
          description: 'A library of vector icons and social logos for web projects.',
          progress: 90,
        },
        {
          name: 'Git/GitHub',
          icon: '/technologies/github.svg',
          techType: 'Version Control',
          description: 'A version control system for tracking changes in code and collaborating with teams.',
          progress: 80,
        },
        {
          name: 'Zustand',
          icon: '/technologies/zustand.png',
          techType: 'State Management',
          description: 'A small, fast state-management library for React.',
          progress: 30,
        },
        {
          name: 'Redux',
          icon: '/technologies/redux.svg',
          techType: 'State Management',
          description: 'A predictable state container for JavaScript apps, useful for large-scale apps.',
          progress: 20,
        },
        {
          name: 'OnRender',
          icon: '/technologies/onrender.png',
          techType: 'Deployment',
          description: 'A platform for deploying and hosting web applications.',
          progress: 55,
        },
        {
          name: 'Koyeb',
          icon: '/technologies/koyeb.png',
          techType: 'Deployment',
          description: 'Cloud platform for deploying web apps and APIs with ease.',
          progress: 50,
        },
        {
          name: 'Material UI',
          icon: '/technologies/materialUI.png',
          techType: 'Front-End Development',
          description: 'A popular React UI framework for building modern and customizable user interfaces.',
          progress: 75,
        },
        {
          name: 'Telegram bot API',
          icon: '/technologies/telegram.svg',
          techType: 'Telegram bots',
          description: 'An instrument for building Telegram bots to interact with users.',
          progress: 80,
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
            },
          },
        ],
    };

    const handleSkillClick = (skill) => {
      setSelectedSkill(skill);
    };
    const handleClosePopup = () => {
      setSelectedSkill(null);
    };
    return (
      <div className="skills-slider">
      <Slider {...settings}>
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-slide"
            onClick={() => handleSkillClick(skill)}
          >
            <CircleProgressbar icon={skill.icon} progress={skill.progress} />
          </div>
        ))}
      </Slider>

      {selectedSkill && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <SkillsInfoWindow
              name={selectedSkill.name}
              icon={selectedSkill.icon}
              techType={selectedSkill.techType}
              description={selectedSkill.description}
            />
          </div>
        </div>
      )}
    </div>
    );
}
