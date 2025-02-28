import { useLanguage } from '@/app/context/LanguajeContext';
import React from 'react';
import { Button } from './ui/button';

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-medium rounded-md"
    >
      {language === 'en' ? 'es' : 'en'} {/* Cambio entre idiomas */}
    </Button>
  );
};

export default LanguageToggleButton;
