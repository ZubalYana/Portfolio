import React from 'react';
import myPhoto from '/photo prototype 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
import CircleProgressbar from '../CircleProgressbar/CircleProgressbar';
import reactIcon from '/technologies/react.svg';
import { icon } from '@fortawesome/fontawesome-svg-core';
export default function AboutMe() {
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
      icon: '/technologies/clickup.png',
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
      name: 'Express.js',
      icon: '/technologies/express.png',
      techType: 'Back-End Development',
      description: 'A minimalist web framework for Node.js to build RESTful APIs.',
      progress: 75,
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
      progress: 50,
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
      progress: 40,
    },
    {
      name: 'Redux',
      icon: '/technologies/redux.svg',
      techType: 'State Management',
      description: 'A predictable state container for JavaScript apps, useful for large-scale apps.',
      progress: 60,
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
      description: 'A popular React UI framework for building modern, responsive, and customizable user interfaces.',
      progress: 75,
    },
  ];
  
    
  return (
    <div className="wrap w-full min-h-screen bg-customBlack">
      <section className="w-full h-[90vh] p-10 flex flex-col items-center relative">
        <p className="text-customPurple text-9xl absolute bottom-[10%] w-[900px] flex justify-between">
          <span className="backgroundText">Yana</span>
          <span className="backgroundText">Zubal</span>
        </p>
        <img src={myPhoto} alt="my photo" className="w-[448px] absolute bottom-[0%]" />
        <div className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[8%] left-[8%]">
          &lt;Hello there! I'm <b>Yana Zubal</b>, a web developer and UI/UX designer based in Ukraine. My passion lies in creating beautiful and functional <b>web experiences</b>. I'm very glad you decided to explore my portfolio page, where I showcase my skills, projects, and the journey I've embarked on as a <b>designer</b> and <b>developer</b>. I am constantly improving myself by learning new technologies and acquiring new soft skills.&gt;
        </div>
        <div className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[30%] right-[7%]">
          &lt;Don't hesitate to explore my <b>projects</b> and learn more about me. Each project is a testament to my commitment to quality and <b>continuous learning</b>. Whether it's a simple website or a complex application, I strive to deliver the best possible <b>user experience</b>. With every new project I create, I feel a sense of growth and a passion for facing and overcoming new <b>challenges</b>.&gt;
        </div>
        <div className="socialMediaIcons w-[280px] flex justify-between items-center absolute right-[7%] top-[23%]">
          <a href="https://github.com/ZubalYana" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-customPurple hover:text-customWhite transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/yanavesq/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-customPurple hover:text-customWhite transition-colors duration-300" />
          </a>
          <a href="https://t.me/yanavesq" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" className="text-customPurple hover:text-customWhite transition-colors duration-300" />
          </a>
          <a href="mailto:zubalana0@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-customPurple hover:text-customWhite transition-colors duration-300" />
          </a>
          <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} size="2x" className="text-customPurple hover:text-customWhite transition-colors duration-300" />
          </a>

        </div>
      </section>

      <section className="w-full h-[100vh] p-10">
        <h3 className="sectionTitle">{'<Technical skills/>'}</h3>
        <CircleProgressbar icon={reactIcon} progress="60" />
        <CircleProgressbar icon={reactIcon} progress="40" />
        <CircleProgressbar icon={reactIcon} progress="80" />

        </section>
    </div>
  );
}
