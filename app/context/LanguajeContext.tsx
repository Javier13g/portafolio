import React, { createContext, useState, useContext, ReactNode } from 'react';
import translations from './translations.json';

type Language = 'en' | 'es';

interface Translations {
    intro: string;
    description: string;
    itemHome: string;
    itemAbout: string;
    itemProyects: string;
    itemContact: string;
    titleAbout: string;
}

interface LanguageContextType {
    language: Language;
    translate: (key: keyof Translations) => string;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const translate = (key: keyof Translations) => {
        return translations[language][key] || key; // Ahora TypeScript sabe que las claves existen
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, translate, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};