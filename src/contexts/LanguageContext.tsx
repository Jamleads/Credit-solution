
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.results': 'Proven Results',
    'nav.repair': 'Credit Repair',
    'nav.monitoring': 'Credit Monitoring',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'hero.title': 'Transform Your Credit Score with Expert Repair Services',
    'hero.subtitle': 'Professional credit repair solutions that deliver real results. Join thousands of satisfied clients who have improved their financial future.',
    'hero.cta': 'Get Started Today',
    'hero.consultation': 'Free Consultation',
    'services.title': 'Our Credit Solutions',
    'services.repair.title': 'Credit Repair',
    'services.repair.desc': 'Remove negative items and boost your credit score',
    'services.monitoring.title': 'Credit Monitoring',
    'services.monitoring.desc': '24/7 credit monitoring and identity protection',
    'services.consultation.title': 'Free Consultation',
    'services.consultation.desc': 'Expert analysis of your credit report',
    'contact.title': 'Get Your Free Credit Analysis',
    'contact.subtitle': 'Take the first step towards better credit today',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Tell us about your credit goals',
    'contact.submit': 'Get Free Analysis',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.results': 'Resultados Comprobados',
    'nav.repair': 'Reparación de Crédito',
    'nav.monitoring': 'Monitoreo de Crédito',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'hero.title': 'Transforme Su Puntaje Crediticio con Servicios de Reparación Expertos',
    'hero.subtitle': 'Soluciones profesionales de reparación de crédito que entregan resultados reales. Únase a miles de clientes satisfechos que han mejorado su futuro financiero.',
    'hero.cta': 'Comience Hoy',
    'hero.consultation': 'Consulta Gratuita',
    'services.title': 'Nuestras Soluciones de Crédito',
    'services.repair.title': 'Reparación de Crédito',
    'services.repair.desc': 'Elimine elementos negativos y mejore su puntaje crediticio',
    'services.monitoring.title': 'Monitoreo de Crédito',
    'services.monitoring.desc': 'Monitoreo de crédito 24/7 y protección de identidad',
    'services.consultation.title': 'Consulta Gratuita',
    'services.consultation.desc': 'Análisis experto de su reporte crediticio',
    'contact.title': 'Obtenga Su Análisis de Crédito Gratuito',
    'contact.subtitle': 'Tome el primer paso hacia un mejor crédito hoy',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.message': 'Cuéntanos sobre sus metas crediticias',
    'contact.submit': 'Obtener Análisis Gratuito',
    'footer.rights': 'Todos los derechos reservados.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.results': 'Résultats Prouvés',
    'nav.repair': 'Réparation de Crédit',
    'nav.monitoring': 'Surveillance de Crédit',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'hero.title': 'Transformez Votre Score de Crédit avec des Services de Réparation Experts',
    'hero.subtitle': 'Solutions professionnelles de réparation de crédit qui livrent de vrais résultats. Rejoignez des milliers de clients satisfaits qui ont amélioré leur avenir financier.',
    'hero.cta': 'Commencer Aujourd\'hui',
    'hero.consultation': 'Consultation Gratuite',
    'services.title': 'Nos Solutions de Crédit',
    'services.repair.title': 'Réparation de Crédit',
    'services.repair.desc': 'Supprimez les éléments négatifs et améliorez votre score de crédit',
    'services.monitoring.title': 'Surveillance de Crédit',
    'services.monitoring.desc': 'Surveillance de crédit 24/7 et protection d\'identité',
    'services.consultation.title': 'Consultation Gratuite',
    'services.consultation.desc': 'Analyse experte de votre rapport de crédit',
    'contact.title': 'Obtenez Votre Analyse de Crédit Gratuite',
    'contact.subtitle': 'Faites le premier pas vers un meilleur crédit aujourd\'hui',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.message': 'Parlez-nous de vos objectifs de crédit',
    'contact.submit': 'Obtenir l\'Analyse Gratuite',
    'footer.rights': 'Tous droits réservés.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
