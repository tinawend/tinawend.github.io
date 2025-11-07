import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';

const Om: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Om
        </Typography>
        <Divider sx={{ maxWidth: 100, mx: 'auto', mb: 4 }} />
        <Typography variant="body1" color="text.secondary">
        Välkommen till TechMamman – min plats på nätet där vardag möter teknik. 🌿💻

Jag heter Tina Wendpaap och bor i Strömstad tillsammans med min man, vår lilla pojke och en till på väg (beräknad i februari). Vi båda arbetar som fullstackutvecklare – jag på hemmaplan och han i Fredrikstad i Norge.

Här delar jag med mig av livet hemma: allt från odling i pallkrage, brödbak och matlagning till små projekt som gör vardagen lite enklare och roligare. Samtidigt är teknik och kod en naturlig del av mitt liv, så du kommer också hitta inlägg om apputveckling, programmering och livet som utvecklare.

Bloggen är helt enkelt en blandning av det jag tycker om mest – där både doften av nybakat bröd och känslan av en snygg kodrad får plats.

Hoppas du vill hänga med! ✨
        </Typography>
      </Box>
    </Container>
  );
};

export default Om; 