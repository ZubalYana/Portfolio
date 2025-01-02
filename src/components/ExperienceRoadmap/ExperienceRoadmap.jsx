import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceRoadmap.css';

export default function ExperienceRoadmap() {
  const { t, i18n } = useTranslation();
  const steps = [
    {
      year: '2022',
      title: 'I began my journey',
      description:
        'by learning the basics of HTML and CSS at Creator IT Academy. It was there that I first got a taste of programming and quickly developed a liking for it. At the time, I thought it would just be a hobby. This year I experienced JavaScript as well. My first programming language!',
      uaTitle: 'Я розпочала свій шлях',
      uaDescription:
        'вивчаючи основи HTML та CSS в Академії Creator IT. Саме там я вперше доторкнулася до програмування і швидко захопилася цим. Тоді я думала, що це буде лише хобі. Цього року я також познайомилася з JavaScript. Моя перша мова програмування!',
      frTitle: 'J’ai commencé mon parcours',
      frDescription:
        "en apprenant les bases de HTML et CSS à Creator IT Academy. C’est là que j’ai eu un premier aperçu de la programmation et que j’ai rapidement développé une passion pour ça. À l’époque, je pensais que ce serait juste un passe-temps. Cette année-là, j’ai aussi découvert JavaScript, mon premier langage de programmation !",
    },
    {
      year: '2023',
      title: 'I continued my path',
      description:
        'with constant learning, diving into the basics of JavaScript and building simple web pages. I also started using GitHub and Loom, and got acquainted with web design. After taking a few web design courses at Creator IT Academy, my design way was set in motion!',
      uaTitle: 'Я продовжила свій шлях',
      uaDescription:
        'з постійним навчанням, занурюючись у основи JavaScript і створюючи прості веб-сторінки. Я також почала використовувати GitHub і Loom, а також ознайомилася з веб-дизайном. Після кількох курсів з веб-дизайну в Академії Creator IT мій шлях у дизайні був визначений!',
      frTitle: 'J’ai poursuivi mon chemin',
      frDescription:
        "avec un apprentissage constant, plongeant dans les bases de JavaScript et créant des pages web simples. J’ai aussi commencé à utiliser GitHub et Loom, et j’ai découvert le design web. Après avoir suivi quelques cours de design web à Creator IT Academy, ma voie dans le design a été lancée !",
    },
    {
      year: '2024',
      title: 'My experience',
      description:
        'grew steadily throughout the year as I completed various projects and faced many challenges along the way. I made valuable connections in the web development sphere, began working with Node.js, and learned a wide range of tools and technologies. Furthermore, I started learning React!',
      uaTitle: 'Мій досвід',
      uaDescription:
        'зростав поступово протягом року, коли я завершувала різноманітні проекти та стикалася з багатьма викликами. Я завела корисні контакти у сфері веб-розробки, почала працювати з Node.js і освоїла безліч інструментів і технологій. Крім того, я почала вивчати React!',
      frTitle: 'Mon expérience',
      frDescription:
        "a progressé régulièrement tout au long de l’année alors que j’ai réalisé divers projets et affronté de nombreux défis. J’ai fait de précieux contacts dans le domaine du développement web, commencé à travailler avec Node.js et appris une large gamme d’outils et de technologies. De plus, j’ai commencé à apprendre React !",
    },
    {
      year: '2025',
      title: 'See you then!',
      description:
        'The coming year will undoubtedly bring me plenty of new experiences and knowledge as I continue to dive deeper into programming. I aim to enhance my coding and design skills, complete many new projects, and possibly explore animation and Photoshop. Who knows what opportunities await?',
      uaTitle: 'До зустрічі!',
      uaDescription:
        'Наступний рік, безсумнівно, принесе мені безліч нових вражень і знань, оскільки я продовжую поглиблювати свої знання в програмуванні. Моя мета — покращити свої навички кодування та дизайну, завершити багато нових проектів і, можливо, дослідити анімацію та Photoshop. Хто знає, які можливості чекають?',
      frTitle: 'À bientôt!',
      frDescription:
        "L’année à venir m’apportera sans aucun doute de nombreuses nouvelles expériences et connaissances alors que je continue à plonger plus profondément dans la programmation. Je vise à améliorer mes compétences en codage et en design, réaliser de nombreux nouveaux projets et peut-être explorer l’animation et Photoshop. Qui sait quelles opportunités m’attendent ?",
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
              {t(step[`${i18n.language}Title`] || step.title)}
            </div>
            <div className="experience_description text-sm font-light text-customWhite mt-2">
              {t(step[`${i18n.language}Description`] || step.description)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
