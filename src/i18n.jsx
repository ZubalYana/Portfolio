import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      about: "About me",
      projects: "Projects",
      welcomeMessage: `Hello there! I'm <strong>Yana Zubal</strong>, a web developer and UI/UX designer based in Ukraine. My passion lies in creating beautiful and functional <strong>web experiences</strong>. I'm very glad you decided to explore my portfolio page, where I show my skills, projects, and the journey I've embarked on as a <strong>designer</strong> and <strong>developer</strong>. I am constantly improving myself by learning new technologies and acquiring new soft skills!`,
      exploreMessage: `Don't hesitate to explore my <strong>projects</strong> as each of them tells a unique story and is a testament to my commitment to quality and <strong>continuous learning</strong>. Whether it's a simple website or a complex application, I strive to deliver the best possible <strong>user experience</strong>. With every new project I create, I feel a sense of growth and a passion for facing and overcoming new <strong>challenges</strong> and I'm always eager to put ideas into reality.`,
      skillsSectionTitle: "<Technical skills/>",
      softSkillsTitle: "<Soft skills/>",
      experienceSectionTitle: "<Experience & education/>",
      projectsSectionTitle: "<Projects/>",
      projectsSectionSubtitle: "Take a look at my latest works! Click for more info and details",
      exploreBtn: "Explore",
      faqSectionTitle: "<FAQ/>",
      faqSectionSubtitle: "Have questions? Search here! There are my answers to the most frequent questions. If you didn’t find what you are looking for, contact me!",
      footerSectionTitle: "<Get in touch!/>",
      footerSectionSubtitle: "Got interested? Have questions or suggestions? Contact me for cooperation! I’d like to discuss any information with you and work together!",
      navElement1: "Who am I?",
      navElement2: "Skills",
      navElement3: "Education",
      navElement4: "Projects",
      navElement5: "FAQ",
      copyright1: "Copyright ©",
      copyright2: "Yana Zubal. All rights reserved.",
      navigation: "Navigation",
      contacts: "Contacts",
      skillsSectionSubtitle: "Hint: click on the skill to learn more about it",
      firstTried: "First tried",
      experience: "Experience",
      years: "years",
      months: "months",
      days: "days",
    },
  },
  ua: {
    translation: {
      about: "Про мене",
      projects: "Проекти",
      welcomeMessage: `Привіт! Я <strong>Яна Зубаль</strong>, веб-розробник і UI/UX дизайнер з України. Моя пристрасть полягає у створенні красивих і функціональних <strong>веб-застосунків</strong>. Я дуже рада, що ви вирішили ознайомитися з моєю портфоліо-сторінкою, де я демонструю свої навички, проєкти та шлях, який я пройшла як <strong>дизайнер</strong> і <strong>розробник</strong>. Я постійно вдосконалюю себе, вивчаючи нові технології та набуваючи нових навичок.`,
      exploreMessage: `Не соромтеся досліджувати мої <strong>проєкти</strong>, адже кожен з них розповідає унікальну історію. У всіх розробках я викладаюся на повну і завжди вивчаю щось нове. Незалежно від того це простий сайт чи складний додаток, я прагну забезпечити найкращий <strong>користувацький досвід</strong>. З кожним новим проєктом я відчуваю зростання та пристрасть до подолання нових <strong>викликів</strong>.`,
      skillsSectionTitle: "<Технічні навички/>",
      softSkillsTitle: "<Гнучкі навички/>",
      experienceSectionTitle: "<Досвід та освіта/>",
      projectsSectionTitle: "<Проєкти/>",
      projectsSectionSubtitle: "Погляньте на мої останні роботи! Клікніть, щоб отримати більше інформації та деталей",
      exploreBtn: "Поглянути",
      faqSectionTitle: "<Поширені питання/>",
      faqSectionSubtitle: "Маєте питання? Погляньте тут! Я відповіла на найчастіші. Якщо ви не знайдете відповіді на своє, зверніться до мене!",
      footerSectionTitle: "<Зв'яжіться зі мною!/>",
      footerSectionSubtitle: "Зацікавились? Маєте питання або пропозиції? Зв'яжіться зі мною для співпраці! Я із задоволенням обговорю будь-яку інформацію!",
      navElement1: "Хто я?",
      navElement2: "Навички",
      navElement3: "Освіта",
      navElement4: "Проекти",
      navElement5: "Поширені питання",
      copyright1: "Copyright ©",
      copyright2: "Yana Zubal. Всі права захищені.",
      navigation: "Навігація",
      contacts: "Контакти",
      skillsSectionSubtitle: "Підказка: клікніть на скіл, щоб дізнатися про нього більше",
      firstTried: "Вперше спробувала",
      experience: "Досвід",
      years: "роки",
      months: "місяці",
      days: "дні"
      
    },
  },
  fr: {
    translation: {
      about: "À propos de moi",
      projects: "Projets",
      welcomeMessage: `Bonjour ! Je suis <strong>Yana Zubal</strong>, développeuse web et designer UI/UX en Ukraine. Ma passion est de créer des <strong>web experiences</strong> belles et fonctionnelles. Je suis ravie que vous exploriez ma page portfolio, où je présente mes compétences, projets et mon parcours en tant que <strong>designer</strong> et <strong>développeuse</strong>. Je me perfectionne constamment en apprenant de nouvelles technologies et compétences interpersonnelles.`,
      exploreMessage: `N'hésitez pas à explorer mes <strong>projets</strong> et à en apprendre davantage sur moi. Chaque projet est un témoignage de mon engagement envers la qualité et <strong>l'apprentissage continu</strong>. Qu'il s'agisse d'un simple site web ou d'une application complexe, je m'efforce d'offrir la meilleure <strong>expérience utilisateur</strong>. Avec chaque nouveau projet, je ressens une croissance et une passion pour relever et surmonter de nouveaux <strong>défis</strong>.`,
      skillsSectionTitle: "<Compétences techniques/>",
      softSkillsTitle: "<Compétences relationnelles/>",
      experienceSectionTitle: "<Expériences et formations/>",
      projectsSectionTitle: "<Projets/>",
      projectsSectionSubtitle: "Regardez mes derniers travaux! Cliquez pour plus d'informations et de détails",
      exploreBtn: "Explorer",
      faqSectionTitle: "<Questions fréquentes/>",
      faqSectionSubtitle: "Avez-vous des questions? Cherchez ici! Il y a mes résponses aux questions les plus fréquentes. Si vous n'avez pas trouvé ce que vous cherchez, contactez-moi!",
      footerSectionTitle: "<Contactez-moi!/>",
      footerSectionSubtitle: "Intéressé(e) ? Vous avez des questions ou des suggestions? Contactez-moi pour une collaboration! J’aimerais discuter de toute information avec vous et travailler ensemble!",
      navElement1: "Qui suis-je?",
      navElement2: "Compétences",
      navElement3: "Éducation",
      navElement4: "Projects",
      navElement5: "Questions fréquentes",
      copyright1: "Copyright ©",
      copyright2: "Yana Zubal. Tous droits reservés.",
      navigation: "Navigation",
      contacts: "Contacts",
      skillsSectionSubtitle: "Astuce : cliquez sur la compétence pour en savoir plus à son sujet.",
      firstTried: "Première tentative",
      experience: "Expérience",
      years: "ans",
      months: "mois",
      days: "jours"
      
    },
  },
};



i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
