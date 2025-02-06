import React, { useState } from 'react'
import CircleProgressbar from '../CircleProgressbar/CircleProgressbar';
import Slider from 'react-slick';
import SkillsInfoWindow from '../SkillsInfoWindow/SkillsInfoWindow';
import './SkillsSlider.css';
import { useTranslation, Trans } from 'react-i18next';

export default function SkillsSlider() {
    const { i18n } = useTranslation(); 
    const [selectedSkill, setSelectedSkill] = useState(null);
    let technicalSkills = [
        {
          name: 'HTML',
          icon: '/technologies/html.svg',
          techType: 'Front-End Development',
          description: 'Standard language used to create and structure content on webpages.',
          uaDescription: 'Стандартна мова для створення та структурування вмісту на вебсторінках.',
          frDescription: 'Langage standard utilisé pour créer et structurer le contenu sur les pages web.',
          firstTried: '13.10.2022',
        },
        {
          name: 'CSS',
          icon: '/technologies/css.svg',
          techType: 'Front-End Development',
          description: 'Used to style and layout HTML content, controlling its appearance on a webpage.',
          uaDescription: 'Використовується для стилізації та розташування вмісту HTML, контролюючи його вигляд на вебсторінці.',
          frDescription: 'Utilisé pour styliser et organiser le contenu HTML, contrôlant son apparence sur une page web.',
          firstTried: '27.11.2022',
        },      
        {
          name: 'SCSS',
          icon: '/technologies/scss.svg',
          techType: 'Front-End Development',
          description: 'Used for advanced styling with a focus on reusability and maintainability.',
          uaDescription: 'Використовується для розширеного стилізування з акцентом на повторне використання та підтримуваність.',
          frDescription: 'Utilisé pour la mise en forme avancée, axé sur la réutilisabilité et la maintenabilité.',
          firstTried: '14.07.2023',
        },
        {
          name: 'JavaScript',
          icon: '/technologies/javascript.svg',
          techType: 'Front-End & Back-End Development',
          description: 'Core scripting language for dynamic web content, 2.5 years of experience.',
          uaDescription: 'Основна мова сценаріїв для динамічного веб-контенту, 2.5 роки досвіду.',
          frDescription: 'Langage de script principal pour le contenu dynamique sur le web, 2.5 ans d\'expérience.',
          firstTried: '05.03.2023',
        },
        {
          name: 'Node.js',
          icon: '/technologies/nodeJs.svg',
          techType: 'Back-End Development',
          description: 'JavaScript runtime for building scalable server-side applications.',
          uaDescription: 'Часова середовище JavaScript для створення масштабованих серверних додатків.',
          frDescription: 'Environnement d\'exécution JavaScript pour construire des applications serveur évolutives.',
          firstTried: '20.01.2024',
        },
        {
          name: 'Bootstrap',
          icon: '/technologies/bootstrap.svg',
          techType: 'Front-End Development',
          description: 'A front-end framework for creating responsive, mobile-first web designs.',
          uaDescription: 'Фреймворк для створення адаптивних, мобільних веб-дизайнів.',
          frDescription: 'Un framework front-end pour créer des designs web réactifs, d\'abord pour mobiles.',
          firstTried: '27.11.2022',
        },
        {
          name: 'MongoDB',
          icon: '/technologies/mongoDB.svg',
          techType: 'Back-End Development',
          description: 'A NoSQL database used for storing unstructured data in a flexible format.',
          uaDescription: 'База даних NoSQL для зберігання неструктурованих даних у гнучкому форматі.',
          frDescription: 'Une base de données NoSQL utilisée pour stocker des données non structurées dans un format flexible.',
          firstTried: '13.04.2024',
        },
        {
          name: 'Figma',
          icon: '/technologies/figma.svg',
          techType: 'Design',
          description: 'Design tool for creating user interfaces, wireframes, and prototypes.',
          uaDescription: 'Інструмент для дизайну, створення інтерфейсів, вайрфреймів та прототипів.',
          frDescription: 'Outil de conception pour créer des interfaces utilisateur, des maquettes et des prototypes.',
          firstTried: '18.12.2022',
        },
        {
          name: 'Multer',
          icon: '/technologies/multer.svg',
          techType: 'Back-End Development',
          description: 'Middleware for handling file uploads in Node.js applications.',
          uaDescription: 'Проміжне програмне забезпечення для обробки завантаження файлів у додатках Node.js.',
          frDescription: 'Middleware pour gérer les téléchargements de fichiers dans les applications Node.js.',
          firstTried: '04.12.2023',
        },
        {
          name: 'ClickUp',
          icon: '/technologies/clickup.svg',
          techType: 'Project Management',
          description: 'A productivity platform used for organizing tasks, timelines, and collaboration.',
          uaDescription: 'Платформа для підвищення продуктивності, яка використовується для організації завдань, термінів та співпраці.',
          frDescription: 'Une plateforme de productivité utilisée pour organiser les tâches, les échéances et la collaboration.',
          firstTried: '22.05.2023',
        },
        {
          name: 'Cookies',
          icon: '/technologies/cookies.svg',
          techType: 'Web Development',
          description: 'Used for storing data on the client-side to manage sessions and preferences.',
          uaDescription: 'Використовується для зберігання даних на стороні клієнта для керування сесіями та перевагами.',
          frDescription: 'Utilisé pour stocker des données côté client afin de gérer les sessions et les préférences.',
          firstTried: '02.03.2024',
        },
        {
          name: 'LocalStorage',
          icon: '/technologies/localStorage.svg',
          techType: 'Web Development',
          description: 'Browser storage mechanism for storing data locally on the user’s device.',
          uaDescription: 'Механізм зберігання даних у браузері для зберігання інформації локально на пристрої користувача.',
          frDescription: 'Mécanisme de stockage dans le navigateur pour stocker les données localement sur l\'appareil de l\'utilisateur.',
          firstTried: '28.10.2023',
        },
        {
          name: 'Postman',
          icon: '/technologies/postman.svg',
          techType: 'API Testing',
          description: 'A tool for testing APIs, sending requests, and analyzing responses.',
          uaDescription: 'Інструмент для тестування API, надсилання запитів та аналізу відповідей.',
          frDescription: 'Un outil pour tester les API, envoyer des requêtes et analyser les réponses.',
          firstTried: '12.02.2024',
        },
        {
          name: 'Tailwind CSS',
          icon: '/technologies/tailwind.svg',
          techType: 'Front-End Development',
          description: 'A utility-first CSS framework for rapid UI development.',
          uaDescription: 'CSS-фреймворк, орієнтований на швидку розробку інтерфейсів користувача.',
          frDescription: 'Un framework CSS utilitaire pour un développement rapide d\'interfaces utilisateur.',
          firstTried: '21.08.2024',
        },
        {
          name: 'React',
          icon: '/technologies/react.svg',
          techType: 'Front-End Development',
          description: 'A JavaScript library for building user interfaces, primarily for single-page applications.',
          uaDescription: 'Бібліотека JavaScript для створення інтерфейсів користувача, переважно для односторінкових додатків.',
          frDescription: 'Une bibliothèque JavaScript pour créer des interfaces utilisateur, principalement pour des applications à une seule page.',
          firstTried: '21.08.2024',
        },
        {
          name: 'Axios',
          icon: '/technologies/axios.png',
          techType: 'Front-End & Back-End Development',
          description: 'A promise-based HTTP client for making requests to APIs.',
          uaDescription: 'Клієнт HTTP на основі обіцянок для відправки запитів до API.',
          frDescription: 'Un client HTTP basé sur des promesses pour faire des requêtes aux API.',
          firstTried: '20.01.2024',
        },
        {
          name: 'jQuery',
          icon: '/technologies/jquery.svg',
          techType: 'Front-End Development',
          description: 'A JavaScript library to simplify DOM manipulation and event handling.',
          uaDescription: 'Бібліотека JavaScript для спрощення маніпулювання DOM і обробки подій.',
          frDescription: 'Une bibliothèque JavaScript pour simplifier la manipulation du DOM et la gestion des événements.',
          firstTried: '13.04.2023',
        },
        {
          name: 'Font Awesome',
          icon: '/technologies/fontawesome.svg',
          techType: 'Front-End Development',
          description: 'A library of vector icons and social logos for web projects.',
          uaDescription: 'Бібліотека векторних іконок і соціальних логотипів для веб-проєктів.',
          frDescription: 'Une bibliothèque d\'icônes vectorielles et de logos sociaux pour les projets web.',
          firstTried: '12.02.2023',
        },
        {
          name: 'Git/GitHub',
          icon: '/technologies/github.svg',
          techType: 'Version Control',
          description: 'A version control system for tracking changes in code and collaborating with teams.',
          uaDescription: 'Система контролю версій для відстеження змін у коді та співпраці з командами.',
          frDescription: 'Un système de gestion de versions pour suivre les modifications du code et collaborer avec les équipes.',
          firstTried: '12.07.2023',
        },
        {
          name: 'Zustand',
          icon: '/technologies/zustand.png',
          techType: 'State Management',
          description: 'A small, fast state-management library for React.',
          uaDescription: 'Мала, швидка бібліотека для керування станом у React.',
          frDescription: 'Une petite et rapide bibliothèque de gestion d\'état pour React.',
          firstTried: '17.12.2024',
        },
        {
          name: 'Redux',
          icon: '/technologies/redux.svg',
          techType: 'State Management',
          description: 'A predictable state container for JavaScript apps, useful for large-scale apps.',
          uaDescription: 'Контейнер передбачуваного стану для JavaScript-додатків, корисний для великих додатків.',
          frDescription: 'Un conteneur d\'état prévisible pour les applications JavaScript, utile pour les applications à grande échelle.',
          firstTried: '08.01.2025',
        },
        {
          name: 'OnRender',
          icon: '/technologies/onrender.png',
          techType: 'Deployment',
          description: 'A platform for deploying and hosting web applications.',
          uaDescription: 'Платформа для розгортання та хостингу веб-додатків.',
          frDescription: 'Une plateforme pour déployer et héberger des applications web.',
          firstTried: '08.01.2024',
        },
        {
          name: 'Koyeb',
          icon: '/technologies/koyeb.png',
          techType: 'Deployment',
          description: 'Cloud platform for deploying web apps and APIs with ease.',
          uaDescription: 'Хмарна платформа для розгортання веб-додатків та API з легкістю.',
          frDescription: 'Plateforme cloud pour déployer des applications web et des API facilement.',
          firstTried: '05.09.2024',
        },
        {
          name: 'Material UI',
          icon: '/technologies/materialUI.png',
          techType: 'Front-End Development',
          description: 'A popular React UI framework for building modern and customizable user interfaces.',
          uaDescription: 'Популярний фреймворк React для створення сучасних та налаштовуваних інтерфейсів користувача.',
          frDescription: 'Un framework React populaire pour créer des interfaces utilisateur modernes et personnalisables.',
          firstTried: '12.01.2025',
        },
        {
          name: 'Telegram bot API',
          icon: '/technologies/telegram.svg',
          techType: 'Telegram bots',
          description: 'An instrument for building Telegram bots to interact with users.',
          uaDescription: 'Інструмент для створення Telegram-ботів для взаємодії з користувачами.',
          frDescription: 'Un instrument pour créer des bots Telegram afin d\'interagir avec les utilisateurs.',
          firstTried: '23.03.2024',
        },
        {
          name: 'Swagger',
          icon: '/technologies/swagger.png',
          techType: 'Back-End Development',
          description: 'A toolset for designing, building, documenting, and testing RESTful APIs using the OpenAPI Specification.',
          uaDescription: 'Набір інструментів для проєктування, створення, документування та тестування RESTful API за допомогою OpenAPI Specification.',
          frDescription: 'Un ensemble d\'outils pour concevoir, créer, documenter et tester des API RESTful à l\'aide de la spécification OpenAPI.',
          firstTried: '26.01.2025',
        },
        {
          name: 'React Query',
          icon: '/technologies/react-query.png',
          techType: 'State Management & Data Fetching',
          description: 'A powerful data-fetching and state management library for React, designed to handle caching, background updates, and server synchronization.',
          uaDescription: 'Потужна бібліотека для отримання даних і управління станом у React, що забезпечує кешування, фонові оновлення та синхронізацію із сервером.',
          frDescription: 'Une bibliothèque puissante de récupération de données et de gestion d\'état pour React, conçue pour gérer la mise en cache, les mises à jour en arrière-plan et la synchronisation avec le serveur.',
          firstTried: '01.02.2025',
        },  
        {
          name: 'Passport JS',
          icon: '/technologies/passport js.png',
          techType: 'Authentication',
          description: 'A flexible authentication middleware for Node.js, supporting various strategies like OAuth, JWT, and local authentication.',
          uaDescription: 'Гнучке проміжне програмне забезпечення для автентифікації в Node.js, яке підтримує різні стратегії, такі як OAuth, JWT та локальна автентифікація.',
          frDescription: 'Un middleware d\'authentification flexible pour Node.js, prenant en charge diverses stratégies comme OAuth, JWT et l\'authentification locale.',
          firstTried: '22.02.2024',
        }
        
        
        
    ];
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        dots: true,
        appendDots: dots => (
          <div
            style={{
              color: "#fff",
              borderRadius: "10px",
              padding: "0px",
            }}
          >
            <ul style={{width: "100%" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "10px",
              height: "10px",
              color: "#fff",
            }}
          >
            <div className="sliderDot"></div>
          </div>
        ),
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 769, 
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 426, 
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 376, 
            settings: {
              slidesToShow: 3,
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

    const getTranslatedDescription = (skill) => {
      const lang = i18n.language;
      switch (lang) {
        case 'ua':
          return skill.uaDescription;
        case 'fr':
          return skill.frDescription;
        default:
          return skill.description; 
      }
    };

    return (
      <div className="skills-slider mt-4">
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
              firstTried={selectedSkill.firstTried}
              description={getTranslatedDescription(selectedSkill)}
            />
          </div>
        </div>
      )}
    </div>
    );
}
