import React, { useEffect } from 'react';
import myPhoto from '/photo prototype 2.png';
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const target = document.querySelector('.lineToAnimate');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('animate-width');
        }
      },
      { threshold: 0.7 } 
    );
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200,
    });
  }, []);
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="wrap w-full min-h-screen bg-customBlack">
      <section id="about" className="w-full h-[90vh] p-10 flex flex-col items-center relative">
        <p className="text-customPurple text-9xl absolute bottom-[10%] w-[900px] flex justify-between">
          <span className="backgroundText">Yana</span>
          <span className="backgroundText">Zubal</span>
        </p>
        <img src={myPhoto} alt="my photo" className="h-[630px] absolute bottom-[0%]" />
          <div
            className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[8%] left-[8%]"          
            data-aos="fade-down-right"
          >
            <Trans i18nKey="welcomeMessage" components={{ bold: <strong/> }} />
          </div>

          <div
            className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[30%] right-[7%]"
            data-aos="fade-up-left"
          >
            <Trans i18nKey="exploreMessage" />
          </div>

        <div className="socialMediaIcons w-[280px] flex justify-between items-center absolute right-[7%] top-[23%]">
          <a href="https://github.com/ZubalYana" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://www.instagram.com/yanavesq/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://t.me/yanavesq" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="mailto:zubalana0@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} size="2x" className="text-customPurple socialMediaIcon" />
          </a>

        </div>
      </section>
      <section id="skills" className="w-full h-[100vh] px-10 py-5">
        <h3 className="sectionTitle">
        <Trans i18nKey="skillsSectionTitle"/>
        </h3>
        <SkillsSlider />
        <h3 className="sectionTitle mt-7">
        <Trans i18nKey="softSkillsTitle"/>
        </h3>
        <SoftSkills />
        <LanguagesSkills />
      </section>
      <section id='experience' className='w-full h-[100vh] px-10 py-5 flex flex-col items-center'>
        <h3 className="sectionTitle">
        <Trans i18nKey="experienceSectionTitle"/>
        </h3>
        <div className="experienceEducationCon w-full flex justify-between">
        <ExperienceRoadmap />
        <EducationCards />
        </div>
      </section>
      <section id='projects' className='w-full h-[100vh] px-10 py-5 flex flex-col items-center'>
        <h3 className="sectionTitle">
          <Trans i18nKey="projectsSectionTitle"/>
        </h3>
        <h3 className="sectionSubtitle text-base font-light text-customWhite text-center">
          <Trans i18nKey="projectsSectionSubtitle"/>
        </h3>
         <ProjectsCards />
         <ExploreBtn />
      </section>
      <section id='faq' className='w-full h-[100vh] px-10 py-10 flex flex-col items-center'>
         <h3 className="sectionTitle">
         <Trans i18nKey="faqSectionTitle"/>
         </h3>
         <h3 className="sectionSubtitle text-base font-light text-customWhite w-[700px] text-center">
         <Trans i18nKey="faqSectionSubtitle"/>
         </h3>
         <Questions />
      </section>
      <section className='w-full h-[53vh] px-10 py-5 flex flex-col relative'>
      <h3 className="sectionTitle"><Trans i18nKey="footerSectionTitle" /></h3>
        <div className="lineToAnimate w-full h-[1px] rounded-sm bg-customPurple mt-2"></div>
        <div className="footerContent w-full flex justify-between mt-7">
          <div className="footerLeftPart">
          <img src={footerLogo} alt="futer logo" className='w-[180px]' />
          <p className='w-[420px] font-light text-base text-customWhite mt-2'>
           <Trans i18nKey="footerSectionSubtitle" />
          </p>
          <div className="socialMediaIcons w-[280px] flex justify-between items-center mt-6">
          <a href="https://github.com/ZubalYana" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://www.instagram.com/yanavesq/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://t.me/yanavesq" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="mailto:zubalana0@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} size="2x" className="text-customPurple socialMediaIcon" />
          </a>

        </div>
          </div>
          <div className="footerRightPart w-[360px] flex justify-between">
            <div className='flex flex-col items-end'>
              <h4 className='text-2xl font-semibold text-customPurple'><Trans i18nKey="navigation"/></h4>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer' onClick={() => scrollToSection('about')}><Trans i18nKey="navElement1"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer' onClick={() => scrollToSection('skills')}><Trans i18nKey="navElement2"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'  onClick={() => scrollToSection('experience')}><Trans i18nKey="navElement3"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'  onClick={() => scrollToSection('projects')}><Trans i18nKey="navElement4"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'  onClick={() => scrollToSection('faq')}><Trans i18nKey="navElement5"/></p>
            </div>
            <div className='flex flex-col items-end'>
              <h4 className='text-2xl font-semibold text-customPurple'><Trans i18nKey="contacts"/></h4>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>+380 97 205 87 86</p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer'>zubalana0@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copyright w-[95%] flex justify-center text-customWhite absolute bottom-4 font-light text-xs">
          <Trans i18nKey="copyright"/>
        </div>

      </section>
    </div>
  );
}
