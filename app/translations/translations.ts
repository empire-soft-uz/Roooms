'use client'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "./uz.json";
import ru from "./ru.json";

i18n
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    debug: true,
    updateMissing: true,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          ...uz,
        },
      },
      ru: {
        translation: {
          ...ru,
        },
      }
    },
  });

export default i18n;
// const resources = {
//   uz: {
//     translation: uz
//   },
//   ru: {
//     translation: ru
//   }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     fallbackLng: "uz", // use en if detected lng is not available

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

// export default i18n;