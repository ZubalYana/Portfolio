import React from 'react';
import myPhoto from '/photo prototype 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
export default function AboutMe() {
  let technicalSkills = [
    {
      name: 'HTML',
      icon: '',
      techType: 'Front-End Development',
      description: 'Active use in all projects with 2.5 years of experience.',
    },
    {
      name: 'CSS',
      icon: '',
      techType: 'Front-End Development',
      description: 'An enjoyable and well-experienced technology with 2.5 years of experience.',
    },
    {
      name: 'SCSS',
      icon: '',
      techType: 'Front-End Development',
      description: 'Used for advanced styling with a focus on reusability and maintainability.',
    },
    {
      name: 'JavaScript',
      icon: '',
      techType: 'Front-End & Back-End Development',
      description: 'Core scripting language for dynamic web content, 2.5 years of experience.',
    },
    {
      name: 'Node.js',
      icon: '',
      techType: 'Back-End Development',
      description: 'JavaScript runtime for building scalable server-side applications.',
    },
    {
      name: 'Bootstrap',
      icon: '',
      techType: 'Front-End Development',
      description: 'A front-end framework for creating responsive, mobile-first web designs.',
    },
    {
      name: 'MongoDB',
      icon: '',
      techType: 'Back-End Development',
      description: 'A NoSQL database used for storing unstructured data in a flexible format.',
    },
    {
      name: 'Figma',
      icon: '',
      techType: 'Design',
      description: 'Design tool for creating user interfaces, wireframes, and prototypes.',
    },
    {
      name: 'Multer',
      icon: '',
      techType: 'Back-End Development',
      description: 'Middleware for handling file uploads in Node.js applications.',
    },
    {
      name: 'ClickUp',
      icon: '',
      techType: 'Project Management',
      description: 'A productivity platform used for organizing tasks, timelines, and collaboration.',
    },
    {
      name: 'Cookies',
      icon: '',
      techType: 'Web Development',
      description: 'Used for storing data on the client-side to manage sessions and preferences.',
    },
    {
      name: 'LocalStorage',
      icon: '',
      techType: 'Web Development',
      description: 'Browser storage mechanism for storing data locally on the user’s device.',
    },
    {
      name: 'Postman',
      icon: '',
      techType: 'API Testing',
      description: 'A tool for testing APIs, sending requests, and analyzing responses.',
    },
    {
      name: 'Tailwind CSS',
      icon: '',
      techType: 'Front-End Development',
      description: 'A utility-first CSS framework for rapid UI development.',
    },
    {
      name: 'React',
      icon: '',
      techType: 'Front-End Development',
      description: 'A JavaScript library for building user interfaces, primarily for single-page applications.',
    },
    {
      name: 'Express.js',
      icon: '',
      techType: 'Back-End Development',
      description: 'A minimalist web framework for Node.js to build RESTful APIs.',
    },
    {
      name: 'Axios',
      icon: '',
      techType: 'Front-End & Back-End Development',
      description: 'A promise-based HTTP client for making requests to APIs.',
    },
    {
      name: 'jQuery',
      icon: '',
      techType: 'Front-End Development',
      description: 'A JavaScript library to simplify DOM manipulation and event handling.',
    },
    {
      name: 'Font Awesome',
      icon: '',
      techType: 'Front-End Development',
      description: 'A library of vector icons and social logos for web projects.',
    },
    {
      name: 'AJAX',
      icon: '',
      techType: 'Front-End Development',
      description: 'Technique for making asynchronous requests to the server without refreshing the page.',
    },
    {
      name: 'Git/GitHub',
      icon: '',
      techType: 'Version Control',
      description: 'A version control system for tracking changes in code and collaborating with teams.',
    },
    {
      name: 'API',
      icon: '',
      techType: 'Web Development',
      description: 'A set of rules and protocols for building and interacting with software applications.',
    },
    {
      name: 'JWT',
      icon: '',
      techType: 'Security',
      description: 'JSON Web Tokens used for secure data transmission between parties.',
    },
    {
      name: 'Bcrypt',
      icon: '',
      techType: 'Security',
      description: 'A library for hashing passwords and ensuring data security.',
    },
    {
      name: 'React Routes',
      icon: '',
      techType: 'Front-End Development',
      description: 'A routing library for React that allows navigation between views in a single-page app.',
    },
    {
      name: 'Zustand',
      icon: '',
      techType: 'State Management',
      description: 'A small, fast state-management library for React.',
    },
    {
      name: 'Redux',
      icon: '',
      techType: 'State Management',
      description: 'A predictable state container for JavaScript apps, useful for large-scale apps.',
    },
    {
      name: 'Socket.io',
      icon: '',
      techType: 'Real-Time Communication',
      description: 'A library for real-time, bidirectional communication between web clients and servers.',
    },
    {
      name: 'OnRender',
      icon: '',
      techType: 'Deployment',
      description: 'A platform for deploying and hosting web applications.',
    },
    {
      name: 'Koyeb',
      icon: '',
      techType: 'Deployment',
      description: 'Cloud platform for deploying web apps and APIs with ease.',
    },
    {
      name: 'JSONPlaceholder',
      icon: '',
      techType: 'API Testing',
      description: 'A free fake online REST API for testing and prototyping.',
    },
    {
      name: 'Material UI',
      icon: '',
      techType: 'Front-End Development',
      description: 'A popular React UI framework for building modern, responsive, and customizable user interfaces.',
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

      <section className='w-full h-[100vh] p-10'>
        <h3 className='sectionTitle'>{'<Technical skills/>'}</h3>
      </section>
    </div>
  );
}
