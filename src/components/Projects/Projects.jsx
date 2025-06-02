import React from 'react'
import ExtendedProjectCard from '../ExtendedProjectCard/ExtendedProjectCard'
import sheret from '/projectsImgs/sheret.png';
import travelog from '/projectsImgs/travelog.png';
import dental from '/projectsImgs/dental.png';
import honey from '/projectsImgs/honey.png';
import yantarne from '/projectsImgs/yantarne.png';
import yorokobi from '/projectsImgs/yorokobi.png';
import daunku from '/projectsImgs/daunku.png';
import rickAndMorty from '/projectsImgs/rick and morty.png';
import saveSmart from '/projectsImgs/Save Smart.png';
import myView from '/projectsImgs/My View.png';
import { useTranslation } from 'react-i18next';
import './Projects.css';
export default function Projects() {
  const { i18n } = useTranslation();
  let projects = [
    {
      name: 'JidStro',
      img: '/projectsImgs/jidstro.png',
      description: 'A commercial project developed for UK entrepreneur Nachi Stern. JidStro is a dynamic webpage for a logistics company, fully managed through a powerful admin panel. The admin can update any text, add/edit/delete partners and their logos, and customize the page with ease.',
      uaDescription: 'Комерційний проєкт, створений для підприємця Начі Стерна з Великої Британії. JidStro — це динамічний вебсайт для логістичної компанії, повністю керований через багатофункціональну адмін-панель. Адміністратор може змінювати текст, додавати/редагувати/видаляти партнерів і їх логотипи, а також налаштовувати сторінку як завгодно.',
      frDescription: 'Projet commercial créé pour l’entrepreneur britannique Nachi Stern. JidStro est un site web dynamique pour une entreprise de logistique, entièrement contrôlé via un panneau d’administration multifonction. L’administrateur peut modifier tout le contenu, gérer les partenaires et leurs logos, et personnaliser la page librement.',
      tags: ['React', 'Node.js', 'Bcrypt', 'JWT', 'TailwindCSS', 'MongoDB', 'React-router-dom', 'Multer', 'Zustand', 'MUI', 'React-query', 'Cloudinary'],
      projectLink: 'https://jidstro.com/',
      inDevelopment: false,
    }
    ,
    {
      name: 'Save Smart',
      img: saveSmart,
      description: 'Welcome to Save Smart💸 – your go-to tool for mastering personal finance! This full-fledged finance tracker helps you manage your expenses, track your income, set financial goals, and much more! Currently in development',
      uaDescription: 'Ласкаво просимо до Save Smart💸 – вашого інструменту для управління особистими фінансами! Цей повнофункціональний фінансовий трекер допоможе вам керувати витратами, відслідковувати дохід, встановлювати фінансові цілі та багато іншого! Зараз у розробці',
      frDescription: 'Bienvenue dans Save Smart💸 – votre outil incontournable pour maîtriser vos finances personnelles! Ce tracker financier complet vous aide à gérer vos dépenses, suivre vos revenus, définir vos objectifs financiers et bien plus encore! Actuellement en développement',
      tags: ['HTML', 'CSS', 'JS', 'React', 'API', 'Node.js', 'Bcrypt', 'JWT', 'TailwindCSS', 'MongoDB', 'React-router-dom', 'Multer', 'Swagger'],
      repoLink: 'https://github.com/ZubalYana/SaveSmart',
      videoPresentation: 'https://www.loom.com/share/144a2d69b26840d4a9186d3d8b37f902',
      inDevelopment: true,
    },
    {
      name: 'My View',
      img: myView,
      description: 'Your view on your own life! 🎯Create achievements, set goals, track your progress, and don\'t give up on your journey! Personal achievements tracker. Currently in development.',
      uaDescription: 'Ваш погляд на власне життя! 🎯Створюйте досягнення, ставте цілі, відстежуйте свій прогрес і не здавайтеся на своєму шляху! Трекер особистих досягнень. Зараз у розробці.',
      frDescription: 'Votre regard sur votre propre vie! 🎯Créez des réalisations, fixez des objectifs, suivez vos progrès et ne renoncez pas à votre parcours! Un tracker de réalisations personnelles. Actuellement en développement.',
      tags: ['HTML', 'CSS', 'JS', 'React', 'API', 'Node.js', 'MUI', 'Lucide', 'Bcrypt', 'JWT', 'TailwindCSS', 'MongoDB', 'React-router-dom', 'Swagger'],
      repoLink: 'https://github.com/ZubalYana/My-view',
      videoPresentation: '',
      inDevelopment: true,
    },
    {
      name: 'Rick & Morty',
      img: rickAndMorty,
      description: 'Rick and Morty is a static React application I created as part of a task from an IT company. I\'ve completed this project several times because it\'s a challenging and valuable exercise in working with APIs. Through this project, I learned how to handle APIs using Node.js and React. This version showcases the React implementation of the project. It\'s packed with information about the series, and you can even create your own watchlist! Give it a try!',
      uaDescription: 'Rick and Morty — це статичний застосунок на React, який я створила в рамках завдання від ІТ-компанії. Я виконувала цей проєкт кілька разів, адже це складна і корисна вправа для роботи з API. Завдяки цьому проєкту я навчилася працювати з API за допомогою Node.js та React. Ця версія демонструє реалізацію проєкту на React. Тут зібрано багато інформації про серіал, персонажів, епізоди, локації, більше того, ви можете створити свій watchlist!',
      frDescription: 'Rick and Morty est une application statique React que j\'ai créée dans le cadre d\'une tâche donnée par une entreprise informatique. J\'ai réalisé ce projet plusieurs fois, car c\'est un exercice exigeant et précieux pour travailler avec des APIs. Grâce à ce projet, j\'ai appris à manipuler les APIs avec Node.js et React. Cette version présente l\'implémentation du projet en React. Elle regorge d\'informations sur la série, et vous pouvez même créer votre propre liste de visionnage! Essayez-le!',
      tags: ['HTML', 'CSS', 'JS', 'React', 'API'],
      repoLink: 'https://github.com/ZubalYana/Rick-and-Morty-React',
      projectLink: 'https://rick-and-morty-from-yana.netlify.app/',
      videoPresentation: 'https://www.loom.com/share/f7e80e4cb1f64895b0b00d4fb00f0254?sid=ef7d83a0-883b-49c5-b413-88a4f19dc4db',
    },
    {
      name: 'SHERET',
      img: sheret,
      description: 'Sheret is an online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices. With a sleek, user-friendly interface, my custom design, and incredibly convenient features, Sheret has everything you need. Simply upload your file, receive a unique code, and access your file anytime, anywhere!',
      uaDescription: 'Sheret — це онлайн-платформа для обміну файлами, яка дозволяє легко та зручно управляти вашими файлами без необхідності у фізичних носіях. З сучасним та зручним інтерфейсом, моїм унікальним дизайном і надзвичайно зручними функціями, Sheret має все необхідне. Просто завантажте ваш файл, отримайте унікальний код і отримуйте доступ до нього будь-де та будь-коли!',
      frDescription: 'Sheret est une plateforme en ligne de partage de fichiers conçue pour simplifier la gestion de vos fichiers sans besoin de dispositifs de stockage physiques. Avec une interface élégante et conviviale, mon design personnalisé et des fonctionnalités incroyablement pratiques, Sheret offre tout ce dont vous avez besoin. Téléchargez simplement votre fichier, recevez un code unique et accédez-y à tout moment et depuis n’importe où!',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Sheret',
      presentationLink: 'https://www.canva.com/design/DAGWAE-TrWU/PggvoTljiQ5zdtjk9Rzj7A/edit?utm_content=DAGWAE-TrWU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      projectLink: 'https://sheret.onrender.com/',
      videoPresentation: 'https://www.loom.com/share/59bcefafe33c443b920553d79a2263ef?sid=22718e14-151f-44a0-923b-139458c7430b',
    },
    {
      name: 'Travelog',
      img: travelog,
      description: 'Travelog is a travel blog platform where users can share their experiences, post photos, and interact with others. The platform is designed with a focus on simplicity and usability, featuring a responsive interface for an optimal browsing experience on all devices.',
      uaDescription: 'Travelog — це платформа для туристичних блогів, де користувачі можуть ділитися своїми враженнями, публікувати фото та взаємодіяти з іншими. Платформа розроблена з акцентом на простоту та зручність, з адаптивним інтерфейсом для оптимального перегляду на будь-яких пристроях.',
      frDescription: 'Travelog est une plateforme de blogs de voyage où les utilisateurs peuvent partager leurs expériences, publier des photos et interagir avec d’autres. La plateforme est conçue pour être simple et facile à utiliser, avec une interface responsive pour une navigation optimale sur tous les appareils.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB', 'Bcrypt', 'JWT', 'Cookies'],
      repoLink: 'https://github.com/ZubalYana/Personal-blog',
      presentationLink: 'https://www.canva.com/design/DAGPoAozo18/CaHcLiOBT8_yW07VmK_qrQ/edit',
      projectLink: ''
    },
    {
      name: 'DENTAL',
      img: dental,
      description: 'This webpage is for a dental clinic and offers a range of functions with a user-friendly experience. It was my first major React project, featuring tools for patients to leave reviews, register, and book appointments. On the administrative side, it includes an intuitive admin panel to manage the clinic\'s services efficiently. This project was a valuable step in building dynamic and interactive web applications.',
      uaDescription: 'Ця веб-сторінка для стоматологічної клініки пропонує низку функцій з зручним користувацьким досвідом. Це був мій перший великий проєкт на React, що включає інструменти для залишення відгуків, реєстрації та запису на прийом. Адміністративна частина містить зручну панель для управління послугами клініки. Цей проєкт став важливим кроком у створенні динамічних та інтерактивних веб-додатків.',
      frDescription: 'Cette page web est destinée à une clinique dentaire et offre une gamme de fonctions avec une expérience conviviale. Il s’agissait de mon premier grand projet React, avec des outils permettant aux patients de laisser des avis, de s’inscrire et de prendre rendez-vous. Du côté administratif, elle comprend un panneau d’administration intuitif pour gérer efficacement les services de la clinique. Ce projet a été une étape importante dans le développement d’applications web dynamiques et interactives.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB', 'React', 'React Modal'],
      repoLink: 'https://github.com/ZubalYana/Dental',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Honey',
      img: honey,
      description: 'This project is a static web page I created to learn and practice using the Tailwind CSS framework. Through building this page, I gained valuable hands-on experience with Tailwind\'s utility-first approach to styling, which has since become a key part of my workflow. While this page doesn\'t include real functionality and was completed in just one day, it served as a great starting point for mastering the framework.',
      uaDescription: 'Цей проєкт — статична веб-сторінка, яку я створила, щоб навчитися та попрактикуватися у використанні фреймворку Tailwind CSS. У процесі створення цієї сторінки я отримала цінний практичний досвід із підходом Tailwind до стилізації, орієнтованим на утиліти, який відтоді став важливою частиною моєї роботи. Хоча ця сторінка не має реальної функціональності і була завершена лише за один день, вона стала чудовим стартом для освоєння цього фреймворку.',
      frDescription: 'Ce projet est une page web statique que j’ai créée pour apprendre et pratiquer l’utilisation du framework Tailwind CSS. En construisant cette page, j’ai acquis une expérience précieuse avec l’approche orientée utilitaire de Tailwind pour le style, qui est depuis devenue une partie essentielle de mon flux de travail. Bien que cette page ne comporte pas de fonctionnalités réelles et ait été réalisée en seulement un jour, elle a constitué un excellent point de départ pour maîtriser le framework.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'React', 'Tailwind CSS'],
      repoLink: 'https://github.com/ZubalYana/Honey-Tailwind-practice',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Yantarne FM',
      img: yantarne,
      description: 'This was a team project where I took charge of designing and developing the first screen, focusing on responsive design and engaging animations—something I truly enjoy in every project. Working with the team helped me strengthen my collaboration skills, and we integrated a radio API to create our unique version. This experience was both rewarding and a great opportunity to combine creativity with teamwork.',
      uaDescription: 'Це був командний проєкт, де я відповідала за дизайн і розробку першого екрану, зосередившись на адаптивному дизайні та захоплюючих анімаціях — те, що я дуже люблю у кожному проєкті. Робота з командою допомогла мені зміцнити навички співпраці, і ми інтегрували радіо API, щоб створити нашу унікальну версію. Цей досвід був одночасно корисним і чудовою можливістю поєднати творчість із командною роботою.',
      frDescription: 'Il s’agissait d’un projet d’équipe où j’étais responsable de la conception et du développement du premier écran, en mettant l’accent sur le design réactif et les animations engageantes — quelque chose que j’apprécie particulièrement dans chaque projet. Travailler avec l’équipe m’a permis de renforcer mes compétences en collaboration, et nous avons intégré une API radio pour créer notre version unique. Cette expérience a été à la fois enrichissante et une excellente occasion de combiner créativité et travail d’équipe.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'React', 'API'],
      repoLink: 'https://github.com/ihymon/yantarne-team-project',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Yorokobi',
      img: yorokobi,
      description: 'Yorokobi is a Japanese cuisine restaurant concept born from my passion for Japanese culture and vivid imagination. While it may not match the sophistication or functionality of my more recent projects, it holds a special place in my journey as a developer. This project marked a significant milestone, allowing me to combine creativity with technical skills, and it was one I truly enjoyed and felt proud of completing.',
      uaDescription: 'Yorokobi — концепція ресторану японської кухні, народжена з моєї пристрасті до японської культури та яскравої уяви. Хоча цей проект може не відповідати рівню складності або функціональності моїх останніх розробок, він займає особливе місце в моєму шляху як розробника. Цей проект став важливим етапом, що дозволив поєднати креативність і технічні навички, і я справді насолоджувався процесом його завершення.',
      frDescription: 'Yorokobi est un concept de restaurant de cuisine japonaise né de ma passion pour la culture japonaise et mon imagination vive. Bien qu\'il ne corresponde pas à la sophistication ou à la fonctionnalité de mes projets plus récents, il occupe une place particulière dans mon parcours de développeur. Ce projet a marqué une étape importante, me permettant de combiner créativité et compétences techniques, et c’était un projet que j’ai vraiment apprécié et dont je suis fier d’avoir mené à bien.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'Axios', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Yorokobi',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Daunku',
      img: daunku,
      description: 'Daunku is an online shop for selling plants, designed to provide a seamless shopping experience. This project offered me valuable hands-on experience and features a wide range of functionality. Customers can place orders and track them conveniently via email or a Telegram bot. The admin panel is equipped with robust tools, including the ability to manage inventory, handle user accounts, and send newsletters.',
      uaDescription: 'Daunku — це інтернет-магазин, що спеціалізується на продажу рослин, створений для забезпечення безперебійного процесу покупок. Цей проект надав мені цінний досвід і включає широкий спектр функцій. Клієнти можуть зручно оформлювати замовлення та відстежувати їх через електронну пошту або Telegram-бот. Панель адміністратора оснащена потужними інструментами, серед яких можливість керувати запасами, обробляти облікові записи користувачів та надсилати інформаційні бюлетені.',
      frDescription: 'Daunku est une boutique en ligne de vente de plantes, conçue pour offrir une expérience d\'achat fluide. Ce projet m\'a offert une expérience pratique précieuse et propose une large gamme de fonctionnalités. Les clients peuvent passer des commandes et les suivre facilement par e-mail ou via un bot Telegram. Le panneau d\'administration est équipé d\'outils puissants, y compris la gestion des stocks, la gestion des comptes utilisateurs et l\'envoi de newsletters.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'Axios', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Daunku',
      presentationLink: '',
      projectLink: ''
    },

  ]

  const getTranslatedDescription = (project) => {
    const lang = i18n.language;
    switch (lang) {
      case 'ua':
        return project.uaDescription;
      case 'fr':
        return project.frDescription;
      default:
        return project.description;
    }
  };
  return (
    <div className="wrap w-full min-h-screen bg-customBlack px-10 py-5 flex flex-col items-center">
      {projects.map((project) => (
        <ExtendedProjectCard
          key={project.name}
          name={project.name}
          img={project.img}
          description={getTranslatedDescription(project)}
          tags={project.tags}
          repoLink={project.repoLink}
          presentationLink={project.presentationLink}
          projectLink={project.projectLink}
          videoPresentation={project.videoPresentation}
          inDevelopment={project.inDevelopment}
        />
      ))}
    </div>
  )
}
