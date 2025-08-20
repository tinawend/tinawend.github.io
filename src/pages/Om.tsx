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
        Välkommen till Liv & Logik – min plats på nätet där vardag möter teknik. 🌿💻

Här delar jag med mig av livet hemma: allt från odling i krukor, brödbak och matlagning, till små projekt i hemmet som gör vardagen lite mysigare. Samtidigt är tech och kod en stor del av min vardag, så du kommer också hitta inlägg om utveckling, appar jag bygger och tankar kring att arbeta i IT-branschen.

Bloggen är helt enkelt en blandning av det jag tycker om mest – en plats där både doften av nybakat bröd och känslan av en snygg kodrad får ta plats.

Hoppas du vill hänga med!
        </Typography>
      </Box>
    </Container>
  );
};

export default Om; 