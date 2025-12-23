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

const getStoredLanguage = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem('preferredLanguage');
  if (!stored) {
    return null;
  }

  return supportedLanguages.includes(stored as SupportedLanguage)
    ? (stored as SupportedLanguage)
    : null;
};

const getBrowserPreferredLanguage = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const navigatorLanguages = window.navigator.languages ?? [window.navigator.language];
  for (const language of navigatorLanguages) {
    const normalized = language?.split('-')[0];
    if (normalized && supportedLanguages.includes(normalized as SupportedLanguage)) {
      return normalized as SupportedLanguage;
    }
  }

  const fallback = window.navigator.language?.split('-')[0];
  return fallback && supportedLanguages.includes(fallback as SupportedLanguage)
    ? (fallback as SupportedLanguage)
    : null;
};

const getInitialLanguage = (): SupportedLanguage => {
  const storedLanguage = getStoredLanguage();
  if (storedLanguage) {
    return storedLanguage;
  }

  const browserLanguage = getBrowserPreferredLanguage();
  return browserLanguage ?? 'en';
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
