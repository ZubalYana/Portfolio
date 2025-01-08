import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Questions.css';
export default function Questions() {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: {
        en: 'What technologies do you specialize in?',
        fr: "Quelles technologies maîtrisez-vous ?",
        ua: 'У яких технологіях ви спеціалізуєтеся?'
      },
      answer: {
        en: 'I specialize in HTML, CSS, JavaScript, Node.js, and React, including frameworks like Express and Tailwind CSS. I can also work with SCSS, jQuery, and AJAX. For my designs, I primarily use Figma. Currently, I am planning to learn TypeScript.',
        fr: "Je me spécialise en HTML, CSS, JavaScript, Node.js et React, y compris des frameworks comme Express et Tailwind CSS. Je peux également travailler avec SCSS, jQuery et AJAX. Pour mes designs, j'utilise principalement Figma. Actuellement, je prévois d'apprendre TypeScript.",
        ua: 'Я спеціалізуюся на HTML, CSS, JavaScript, Node.js і React, включаючи фреймворки, такі як Express і Tailwind CSS. Також я можу працювати з SCSS, jQuery та AJAX. Для дизайну я зазвичай використовую Figma. Наразі я планую вивчити TypeScript.'
      }
    },
    {
      question: {
        en: 'How do you handle project timelines and deadlines?',
        fr: "Comment gérez-vous les délais et échéances des projets ?",
        ua: 'Як ви справляєтесь з термінами та дедлайнами проектів?'
      },
      answer: {
        en: 'I am highly interested in time management and use various tools to stay organized. I track my work in Notion and Coda, and for team projects, I primarily use ClickUp. I take my work seriously, ensuring tasks are completed on time or promptly communicating any potential delays.',
        fr: "Je suis très intéressée par la gestion du temps et j'utilise divers outils pour rester organisée. Je suis mon travail dans Notion et Coda, et pour les projets d'équipe, j'utilise principalement ClickUp. Je prends mon travail au sérieux, en m'assurant que les tâches sont terminées à temps ou en communiquant rapidement tout retard potentiel.",
        ua: 'Мене дуже цікавить тайм-менеджмент, і я використовую різні інструменти для організації. Я відстежую свою роботу в Notion і Coda, а для командних проектів переважно використовую ClickUp. Я серйозно ставлюся до роботи, гарантуючи виконання завдань вчасно або швидко повідомляючи про можливі затримки.'
      }
    },
    {
      question: {
        en: 'Can you integrate third-party APIs or services into a web application?',
        fr: "Pouvez-vous intégrer des API ou services tiers dans une application web ?",
        ua: 'Чи можете ви інтегрувати сторонні API або сервіси в веб-додаток?'
      },
      answer: {
        en: 'Absolutely! I enjoy working with APIs as they are incredibly useful in various contexts. I have experience integrating multiple APIs and currently have a few active projects showcasing their usage. Feel free to check them out on the /projects page!',
        fr: "Absolument ! J'aime travailler avec les API car elles sont incroyablement utiles dans divers contextes. J'ai de l'expérience dans l'intégration de plusieurs API et j'ai actuellement quelques projets actifs qui en démontrent l'utilisation. N'hésitez pas à les découvrir sur la page /projects !",
        ua: 'Звичайно! Мені подобається працювати з API, адже вони надзвичайно корисні в різних контекстах. У мене є досвід інтеграції кількох API, і наразі я маю кілька активних проектів, які демонструють їх використання. Не соромтеся переглянути їх на сторінці /projects!'
      }
    },
    {
      question: {
        en: 'How do you handle feedback and revisions?',
        fr: "Comment gérez-vous les retours et les révisions ?",
        ua: 'Як ви працюєте з відгуками та виправленнями?'
      },
      answer: {
        en: 'I welcome feedback at every stage of the design and development process. I greatly value input from clients, colleagues, and mentors, as it helps me grow and improve both my projects and skills. I’m not afraid of constructive criticism—it challenges me to become better!',
        fr: "J'accueille les retours à chaque étape du processus de conception et de développement. Je valorise beaucoup les contributions des clients, collègues et mentors, car elles m'aident à grandir et à améliorer mes projets et mes compétences. Je n'ai pas peur des critiques constructives, elles me stimulent à m'améliorer !",
        ua: 'Я вітаю відгуки на кожному етапі процесу дизайну та розробки. Я дуже ціную внесок клієнтів, колег та наставників, оскільки це допомагає мені зростати та покращувати мої проекти та навички. Я не боюся конструктивної критики — вона стимулює мене ставати краще!'
      }
    },
    {
      question: {
        en: 'Are you able to work in a team?',
        fr: "Êtes-vous capable de travailler en équipe ?",
        ua: 'Чи можете ви працювати в команді?'
      },
      answer: {
        en: 'Sure! I’ve worked on several projects that required close teamwork and effective communication. I’ve had experience as a designer, backend developer, and even as a project manager. I really enjoyed the collaboration and the way we worked together to bring these projects to life!',
        fr: "Bien sûr ! J'ai travaillé sur plusieurs projets nécessitant un travail d'équipe étroit et une communication efficace. J'ai eu des expériences en tant que designer, développeur backend et même chef de projet. J'ai vraiment apprécié la collaboration et la manière dont nous avons travaillé ensemble pour concrétiser ces projets !",
        ua: 'Звичайно! Я працювала над кількома проектами, які вимагали тісної командної роботи та ефективної комунікації. Я мала досвід роботи як дизайнер, бекенд-розробник і навіть як менеджер проекту. Мені дуже сподобалася співпраця та те, як ми разом працювали над реалізацією цих проектів!'
      }
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questions w-[90%] mt-5">
      {questions.map((question, index) => (
        <div className="questionContainer" key={index}>
          <div
            className="question w-full h-[70px] rounded-2xl bg-customPurple text-customWhite text-xl font-medium flex items-center justify-between p-6 mb-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{question.question[i18n.language] || question.question.en}</h3>
            <div className="plusCon w-[25px] h-[25px] flex justify-center items-center relative">
              <div className="horizontalStroke absolute w-full h-[3px] bg-customWhite rounded-md"></div>
              <div
                className={`verticalStroke absolute w-[3px] h-full bg-customWhite rounded-md transition-transform duration-600 ease-in-out ${
                  activeIndex === index ? 'rotate-90' : ''
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`answer overflow-hidden transition-[height,opacity] duration-500 ease-in-out ${
              activeIndex === index ? 'h-auto opacity-100' : 'h-0 opacity-0'
            }`}
          >
            <div className="w-full p-4 rounded-2xl bg-customBgPurple text-customWhite text-base font-normal mb-4">
              <h3>{question.answer[i18n.language] || question.answer.en}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
