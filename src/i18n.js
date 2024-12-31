import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"; // English translations
import kn from "./locales/kn.json"; // Kannada translations

import Backend from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: { translation: en },
  kn: { translation: kn },
};

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    supportedLngs: ["en", "kn"],
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

export default i18n;
