import React, { useEffect, useState } from 'react';
import myPhoto from '/photo prototype 2.webp';
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
import EducationCards from '../EducationCards/EducationCards';
import ProjectsCards from '../ProjectsCards/ProjectsCards';
import ExploreBtn from '../ExploreBtn/ExploreBtn';
import Questions from '../Questions/Questions';
import footerLogo from '/footer logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const [copiedText, setCopiedText] = useState('');
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
  const handleCopy = (text) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000); 
  };
  return (
    <div className="wrap w-full min-h-screen bg-customBlack overflow-hidden">
      <section id="about" className="mainSection w-full h-[90vh] p-10 flex flex-col items-center relative xs:p-0 xs:h-auto lg:h-[90vh]">
        <p className="decorationText text-customPurple text-9xl absolute bottom-[10%] w-[900px] flex justify-between xs:text-4xl xs:w-[100%] xs:top-[150px] 2xs:w-[90%] sm:text-7xl sm:w-[550px] sm:bottom-auto sm:top-[200px] lg:top-auto lg:bottom-[50px] xl:bottom-[70px] 2xl:text-9xl 2xl:w-[900px] 2xl:top-auto 2xl:bottom-[10%]">
          <span className="backgroundText">Yana</span>
          <span className="backgroundText">Zubal</span>
        </p>
        <img src={myPhoto} alt="my photo" className="mainPhoto h-[630px] absolute bottom-[0%] xs:h-[400px] xs:w-auto xs:top-[-20px] sm:h-[450px] lg:h-[470px] lg:top-[30px] 2xl:h-[630px] 2xl:top-auto 2xl:bottom-[0%]" />
          <div
            className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[8%] left-[8%] xs:hidden lg:block lg:left-[40px] lg:w-[400px] lg:h-[190px] lg:text-sm xl:w-[500px] xl:h-[150px] xl:left-[5%] xl:top-[10%] 2xl:left-[8%] 2xl:w-[570px] 2xl:h-[180px] 2xl:top-[8%] 2xl:text-base"          
            data-aos="fade-down-right"
          >
            <Trans i18nKey="welcomeMessage" components={{ bold: <strong/> }} />
          </div>
          <div
            className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light absolute top-[30%] right-[7%] xs:hidden lg:block lg:right-[40px] lg:w-[400px] lg:h-[190px] lg:text-sm xl:w-[500px] xl:h-[150px] xl:right-[5%] xl:top-[30%]  2xl:right-[7%] 2xl:w-[570px] 2xl:h-[180px] 2xl:top-[30%] 2xl:text-base"
            data-aos="fade-up-left"
          >
            <Trans i18nKey="exploreMessage" />
          </div>

          <div
            className="textCon w-[570px] h-[320px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light xs:w-full xs:text-xs xs:mt-[300px] xs:h-min sm:mt-[420px] lg:hidden"          
            data-aos="md:fade-down-right"
            id='generalTextCon'
          >
            <Trans i18nKey="welcomeMessage" components={{ bold: <strong/> }} />
            <Trans i18nKey="exploreMessage" />
          </div>



        <div className="socialMediaIcons w-[280px] flex justify-between items-center absolute right-[7%] top-[23%] xs:top-[250px] xs:right-[0px] md:top-[380px] md:right-[10px] lg:right-[7%] lg:top-[23%] lg:left-auto">
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
      <section id="skills" className="w-full h-[100vh] px-10 py-5 xs:h-auto xs:px-0 xs:py-9 lg:h-[100vh] lg:px-10">
        <h3 className="sectionTitle xs:text-xl lg:text-3xl">
        <Trans i18nKey="skillsSectionTitle"/>
        </h3>
        <h3 className="sectionSubtitle text-base font-light text-customWhite mt-1 xs:text-xs xs:mt-1 lg:text-base lg:mt-3">
        <Trans i18nKey="skillsSectionSubtitle"/>
        </h3>
        <SkillsSlider />
        <h3 className="sectionTitle mt-7 xs:text-xl lg:text-3xl">
        <Trans i18nKey="softSkillsTitle"/>
        </h3>
        <SoftSkills />
        <LanguagesSkills />
      </section>
      <section id='experience' className='w-full h-[100vh] px-10 py-5 flex flex-col items-center xs:h-auto xs:px-0 xs:py-9 lg:h-[100vh] lg:px-10'>
        <h3 className="sectionTitle xs:text-xl lg:text-3xl">
        <Trans i18nKey="experienceSectionTitle"/>
        </h3>
        <div className="experienceEducationCon w-full flex justify-between">
        <ExperienceRoadmap />
        <EducationCards />
        </div>
      </section>
      <section id='projects' className='w-full h-[100vh] px-10 py-5 flex flex-col items-center xs:h-auto xs:px-0 xs:py-9 lg:h-[100vh] lg:px-10'>
        <h3 className="sectionTitle xs:text-xl lg:text-3xl">
          <Trans i18nKey="projectsSectionTitle"/>
        </h3>
        <h3 className="sectionSubtitle text-base font-light text-customWhite text-center xs:text-xs xs:mt-1 lg:text-base lg:mt-3">
          <Trans i18nKey="projectsSectionSubtitle"/>
        </h3>
         <ProjectsCards />
         <ExploreBtn />
      </section>
      <section id='faq' className='w-full h-[100vh] px-10 py-10 flex flex-col items-center xs:h-auto xs:px-0 xs:py-9 lg:h-[100vh] lg:px-10'>
         <h3 className="sectionTitle xs:text-xl lg:text-3xl">
         <Trans i18nKey="faqSectionTitle"/>
         </h3>
         <h3 className="sectionSubtitle text-base font-light text-customWhite w-[700px] text-center xs:w-full xs:text-xs xs:mt-1 lg:text-base lg:mt-3 lg:w-[700px]">
         <Trans i18nKey="faqSectionSubtitle"/>
         </h3>
         <Questions />
      </section>
      <section id='footer' className='w-full h-[53vh] px-10 py-5 flex flex-col relative  xs:h-auto xs:px-0 xs:py-9 lg:h-[53vh] lg:px-10'>
      <h3 className="sectionTitle xs:text-xl lg:text-3xl"><Trans i18nKey="footerSectionTitle" /></h3>
        <div className="lineToAnimate w-full h-[1px] rounded-sm bg-customPurple mt-2"></div>
        <div className="footerContent w-full h-auto flex justify-between mt-7 xs:flex-col lg:flex-row">
          <div className="footerLeftPart">
          <img src={footerLogo} alt="futer logo" className='w-[180px] xs:w-[130px] lg:w-[180px]' />
          <p className='w-[420px] font-light text-base text-customWhite mt-2 xs:w-full xs:text-sm lg:w-[420px] lg:text-base'>
           <Trans i18nKey="footerSectionSubtitle" />
          </p>
          <div className="socialMediaIcons w-[150px] flex justify-between items-center mt-6">
          <a href="https://github.com/ZubalYana" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://www.instagram.com/yanavesq/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
          <a href="https://t.me/yanavesq" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" className="text-customPurple socialMediaIcon" />
          </a>
        </div>
          </div>
          <div className="footerRightPart w-[380px] h-auto flex justify-between xs:w-full xs:mt-6 xs:justify-start lg:w-[380px] lg:mt-0 lg:justify-between">
            <div className='flex flex-col items-end footerListElement xs:mr-6 lg:mr-0 xs:items-start lg:items-end'>
              <h4 className='text-2xl font-semibold text-customPurple xs:text-lg lg:text-2xl'><Trans i18nKey="navigation"/></h4>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm' onClick={() => scrollToSection('about')}><Trans i18nKey="navElement1"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm' onClick={() => scrollToSection('skills')}><Trans i18nKey="navElement2"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm'  onClick={() => scrollToSection('experience')}><Trans i18nKey="navElement3"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm'  onClick={() => scrollToSection('projects')}><Trans i18nKey="navElement4"/></p>
              <p className='font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm'  onClick={() => scrollToSection('faq')}><Trans i18nKey="navElement5"/></p>
            </div>
            <div className="flex flex-col items-end footerListElement xs:items-start lg:items-end">
      <h4 className="text-2xl font-semibold text-customPurple xs:text-lg lg:text-2xl">
        <Trans i18nKey="contacts" />
      </h4>
<CopyToClipboard text="+380 97 205 87 86" onCopy={() => handleCopy('+380 97 205 87 86')} className='copyContainer'>
  <div className="font-light text-sm text-customWhite mt-2 cursor-pointer flex flex-col items-start">
    <div className="contactsToCopy flex items-center font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm">
      +380 97 205 87 86
      <FontAwesomeIcon icon={faPhone} className="text-customWhite socialMediaIcon ml-2 text-base" />
    </div>
    {copiedText === '+380 97 205 87 86' && (
      <span className="text-customWhite text-xs w-full text-left mt-1">Copied!</span>
    )}
  </div>
</CopyToClipboard>

<CopyToClipboard text="zubalana0@gmail.com" onCopy={() => handleCopy('zubalana0@gmail.com')} className='copyContainer'>
  <div className="font-light text-sm text-customWhite mt-2 cursor-pointer flex flex-col items-start">
    <div className="contactsToCopy flex items-center font-light text-sm text-customWhite mt-2 cursor-pointer xs:text-xs lg:text-sm">
      zubalana0@gmail.com
      <FontAwesomeIcon icon={faEnvelope} className="text-customWhite socialMediaIcon ml-2 text-base" />
    </div>
    {copiedText === 'zubalana0@gmail.com' && (
      <span className="text-customWhite text-xs w-full text-left mt-1">Copied!</span>
    )}
  </div>
</CopyToClipboard>


    </div>
          </div>
        </div>
        <div className="copyright w-[100%] flex justify-center text-customWhite relative mt-9 font-light text-xs xs:mt-14 lg:mt-9">
          <Trans i18nKey="copyright"/>
        </div>
      </section>
    </div>
  );
}
