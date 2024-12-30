import React from 'react';
import myPhoto from '/photo prototype 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
import SkillsSlider from '../SkillsSlider/SkillsSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SoftSkills from '../SoftSkills/SoftSkills';
import LanguagesSkills from '../LanguagesSkills/LanguagesSkills';
import ExperienceRoadmap from '../ExperienceRoadmap/ExperienceRoadmap';
import EducationCards from '../EducationCards';
import ProjectsCards from '../ProjectsCards';
import ExploreBtn from '../ExploreBtn/ExploreBtn';
import Questions from '../Questions/Questions';
import footerLogo from '/footer logo.png';
export default function AboutMe() {
      
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
      <section className="w-full h-[100vh] px-10 py-5">
        <h3 className="sectionTitle">{'<Technical skills/>'}</h3>
        <SkillsSlider />
        <h3 className="sectionTitle mt-7">{'<Soft skills/>'}</h3>
        <SoftSkills />
        <LanguagesSkills />
      </section>
      <section className='w-full h-[100vh] px-10 py-5 flex flex-col items-center'>
        <h3 className="sectionTitle">{'<Experience & education/>'}</h3>
        <div className="experienceEducationCon w-full flex justify-between">
        <ExperienceRoadmap />
        <EducationCards />
        </div>
      </section>
      <section className='w-full h-[100vh] px-10 py-5 flex flex-col items-center'>
         <h3 className="sectionTitle">{'<Projects/>'}</h3>
         <h3 className="sectionSubtitle text-base font-light text-customWhite text-center">Take a look at my latest works! Click for more info and details</h3>
         <ProjectsCards />
         <ExploreBtn />
      </section>
      <section className='w-full h-[100vh] px-10 py-10 flex flex-col items-center'>
         <h3 className="sectionTitle">{'<FAQ/>'}</h3>
         <h3 className="sectionSubtitle text-base font-light text-customWhite w-[700px] text-center">Have questions? Search here! There are my answers to the most frequent questions. If you didn’t find what you are looking for, contact me! </h3>
         <Questions />
      </section>
      <section className='w-full h-[53vh] px-10 py-5 flex flex-col'>
        <h3 className="sectionTitle">{'<Get in touch!/>'}</h3>
        <div className='w-full h-[1px] rounded-sm bg-customPurple mt-2'></div>
        <div className="footerContent w-full flex justify-between mt-7">
          <div className="footerLeftPart">
          <img src={footerLogo} alt="futer logo" className='w-[180px]' />
          <p className='w-[420px] font-light text-base text-customWhite mt-2'>Got interested? Have questions or suggestions? Contact me for cooperation! I’d like to discuss any information with you and work together!</p>
          <div className="socialMediaIcons w-[280px] flex justify-between items-center mt-6">
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
          </div>
          <div className="footerRightPart w-[360px] flex justify-between">
            <div className='flex flex-col items-end'>
              <h4 className='text-2xl font-semibold text-customPurple'>Navigation</h4>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>Who am I?</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>Skills</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>Projects</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>Education & Experience</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>FAQ</p>
            </div>
            <div className='flex flex-col items-end'>
              <h4 className='text-2xl font-semibold text-customPurple'>Contacts</h4>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>+380 97 205 87 86</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>zubalana0@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copyright w-full flex justify-center text-customWhite mt-7 font-light text-xs">Copyright © 2024 <span className='copyrightAuthor'>Yana Zubal</span>. All rights reserved.</div>
      </section>
    </div>
  );
}
