import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.lifestyle': 'Livsstil',
    'nav.tech': 'Teknik',
    'nav.about': 'Om',
    // Home page
    'home.recent': 'Senaste inläggen',
    // Post page
    'post.back': 'Tillbaka till startsidan',
    'post.notFound': 'Inlägget hittades inte',
    // Category pages
    'category.lifestyle': 'Livsstil',
    'category.tech': 'Teknik',
    // Footer
    'footer.copyright': '© {year} TechMamman.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.lifestyle': 'Lifestyle',
    'nav.tech': 'Tech',
    'nav.about': 'About',
    // Home page
    'home.recent': 'Recent Posts',
    // Post page
    'post.back': 'Back to home',
    'post.notFound': 'Post not found',
    // Category pages
    'category.lifestyle': 'Lifestyle',
    'category.tech': 'Tech',
    // Footer
    'footer.copyright': '© {year} TechMamman.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'sv';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

