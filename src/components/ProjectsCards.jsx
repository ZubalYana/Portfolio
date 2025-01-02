import React from 'react';
import { useTranslation } from 'react-i18next';
import sheret from '/projectsImgs/sheret.png';
import travelog from '/projectsImgs/travelog.png';
import dental from '/projectsImgs/dental.png';
import honey from '/projectsImgs/honey.png';
import yantarne from '/projectsImgs/yantarne.png';
import yorokobi from '/projectsImgs/yorokobi.png';

export default function ProjectsCards() {
  let { i18n } = useTranslation();
  
  let projects = [
    {
      name: 'SHERET',
      description: 'Online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices.',
      uaDescription: 'Онлайн платформа для обміну файлами, яка дозволяє зручно та без проблем керувати вашими файлами — без необхідності фізичних пристроїв зберігання.',
      frDescription: "Plateforme de partage de fichiers en ligne conçue pour faciliter la gestion de vos fichiers sans tracas - plus besoin de dispositifs de stockage physiques.",
      img: sheret
    },
    {
      name: 'Travelog',
      description: 'A vibrant travel blog that lets you share your adventures and inspire others! Discover new destinations, get travel tips, connect with fellow travelers, and enjoy the community.',
      uaDescription: 'Яскравий тревел-блог, який дозволяє ділитися вашими подорожами та надихати інших! Відкривайте нові напрямки, отримуйте поради щодо подорожей, та насолоджуйтесь спільнотою.',
      frDescription: "Un blog de voyage vibrant qui vous permet de partager vos aventures et d'inspirer les autres ! Découvrez de nouvelles destinations, obtenez des conseils de voyage, connectez-vous avec d'autres voyageurs et profitez de la communauté.",
      img: travelog
    },
    {
      name: 'DENTAL',
      description: 'This webpage is for a dental clinic and offers a range of functions with a user-friendly experience. It was my first major React project.',
      uaDescription: 'Ця веб-сторінка для стоматологічної клініки пропонує ряд функцій з дружнім інтерфейсом. Це був мій перший великий проект на React.',
      frDescription: "Cette page web est pour une clinique dentaire et offre une gamme de fonctionnalités avec une expérience utilisateur conviviale. C'était mon premier grand projet React.",
      img: dental
    },
    {
      name: 'Honey',
      description: 'A static web page I created to learn and practice the Tailwind CSS framework. Through this project, I gained valuable experience, and the page looks great!',
      uaDescription: 'Статична веб-сторінка, яку я створила, щоб вивчити та попрактикувати фреймворк Tailwind CSS. Завдяки цьому проекту я отримала цінний досвід, а сторінка виглядає чудово!',
      frDescription: "Une page web statique que j'ai créée pour apprendre et pratiquer le framework Tailwind CSS. Grâce à ce projet, j'ai acquis une expérience précieuse et la page est superbe !",
      img: honey
    },
    {
      name: 'Yantarne',
      description: 'A team project I participated in, where I was responsible for the first screen and sound functionality. During this project, we learned how to use APIs in React.',
      uaDescription: 'Проект у команді, в якому я брала участь, де я відповідала за перший екран та функціональність звуку. Під час цього проекту ми вивчили, як використовувати API в React.',
      frDescription: "Un projet d'équipe auquel j'ai participé, où j'étais responsable du premier écran et de la fonctionnalité sonore. Pendant ce projet, nous avons appris à utiliser des API dans React.",
      img: yantarne
    },
    {
      name: 'Yorokobi',
      description: 'This project was born out of my imagination and love for Japanese culture and cuisine. I had a lot of fun experimenting with animations!',
      uaDescription: 'Цей проект народився з моєї уяви та любові до японської культури та кухні. Я отримала багато задоволення від експериментів з анімаціями!',
      frDescription: "Ce projet est né de mon imagination et de mon amour pour la culture et la cuisine japonaises. Je me suis beaucoup amusée à expérimenter avec des animations !",
      img: yorokobi
    },
  ];

  const getDescription = (project) => {
    switch (i18n.language) {
      case 'ua':
        return project.uaDescription || project.description; 
      case 'fr':
        return project.frDescription || project.description; 
      default:
        return project.description;
    }
  };

  return (
    <div className='projectsContainer flex flex-wrap justify-between w-[1120px] mt-7'>
      {projects.map((project, index) => (
        <div className="projectCard w-[360px] h-[200px] rounded-2xl relative group cursor-pointer mb-5" key={index}>
          <img 
            src={project.img} 
            alt="project img" 
            className="projectImg w-full h-full object-cover object-center absolute z-0 rounded-2xl"
          />
          <div className="projectImgOverlay w-full h-full bg-cardsOverlay absolute z-10 flex flex-col justify-center items-center rounded-2xl p-7">
            <div className="projectCard_title font-medium text-4xl text-customWhite text-center">{project.name}</div>
            <div className="projectCard_subtitle max-h-0 opacity-0 overflow-hidden group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-700 font-light text-sm text-customWhite text-center mt-3">
              {getDescription(project)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
