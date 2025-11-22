import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

const Om: React.FC = () => {
  const { language, t } = useLanguage();

  const aboutText = {
    sv: `Välkommen till TechMamman – min plats på nätet där vardag möter teknik. 🌿💻

Jag heter Tina Wendpaap och bor i Strömstad tillsammans med min man, vår lilla pojke och en till på väg (beräknad i februari). Vi båda arbetar som fullstackutvecklare – jag på hemmaplan och han i Fredrikstad i Norge.

Här delar jag med mig av livet hemma: allt från odling i pallkrage, brödbak och matlagning till små projekt som gör vardagen lite enklare och roligare. Samtidigt är teknik och kod en naturlig del av mitt liv, så du kommer också hitta inlägg om apputveckling, programmering och livet som utvecklare.

Bloggen är helt enkelt en blandning av det jag tycker om mest – där både doften av nybakat bröd och känslan av en snygg kodrad får plats.

Hoppas du vill hänga med! ✨`,
    en: `Welcome to TechMamman – my place online where everyday life meets technology. 🌿💻

My name is Tina Wendpaap and I live in Strömstad together with my husband, our little boy and one more on the way (due in February). We both work as full-stack developers – me from home and him in Fredrikstad, Norway.

Here I share life at home: everything from growing in pallet collars, bread baking and cooking to small projects that make everyday life a little easier and more fun. At the same time, technology and code are a natural part of my life, so you'll also find posts about app development, programming and life as a developer.

The blog is simply a mix of what I like most – where both the smell of freshly baked bread and the feeling of a clean line of code have a place.

Hope you want to join! ✨`,
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('nav.about')}
        </Typography>
        <Divider sx={{ maxWidth: 100, mx: 'auto', mb: 4 }} />
        <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
          {aboutText[language]}
        </Typography>
      </Box>
    </Container>
  );
};

export default Om; 