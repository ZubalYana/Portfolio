import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      about: "About me",
      projects: "Projects",
    },
  },
  ua: {
    translation: {
      about: "Про мене",
      projects: "Проекти",
    },
  },
  fr: {
    translation: {
      about: "À propos de moi",
      projects: "Projets",
    },
  },
  es: {
    translation: {
      about: "Sobre mí",
      projects: "Proyectos",
    },
  },
  it: {
    translation: {
      about: "Su di me",
      projects: "Progetti",
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
