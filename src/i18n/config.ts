import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import it from './locales/it.json';
import es from './locales/es.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';

export const supportedLanguages = ['en', 'it', 'es', 'ru', 'zh'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  en: { translation: en },
  it: { translation: it },
  es: { translation: es },
  ru: { translation: ru },
  zh: { translation: zh }
} as const;

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLang = window.navigator.language?.split('-')[0] || 'en';
  return supportedLanguages.includes(browserLang as SupportedLanguage)
    ? (browserLang as SupportedLanguage)
    : 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
