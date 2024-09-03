import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

// Inisialisasi konfigurasi
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            id: {
                translation: translationID
            }
        },
        lng: 'id', // Bahasa default
        fallbackLng: 'id', // Jika bahasa tidak tersedia, gunakan ini
        interpolation: {
            escapeValue: false // React sudah melakukan escaping
        }
    });

export default i18n;
