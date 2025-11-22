import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'en' : 'sv');
  };

  const getFlagEmoji = (lang: Language) => {
    return lang === 'sv' ? '🇸🇪' : '🇬🇧';
  };

  const getTooltipText = (lang: Language) => {
    return lang === 'sv' ? 'Switch to English' : 'Växla till svenska';
  };

  return (
    <Tooltip title={getTooltipText(language)}>
      <IconButton
        onClick={toggleLanguage}
        sx={{
          fontSize: '1.5rem',
          padding: '8px',
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
          },
        }}
        aria-label="Change language"
      >
        <Box component="span" sx={{ fontSize: '1.5rem', lineHeight: 1 }}>
          {getFlagEmoji(language === 'sv' ? 'en' : 'sv')}
        </Box>
      </IconButton>
    </Tooltip>
  );
};

export default LanguageSwitcher;

