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
          Det här är en svensk blogg om kod och grönska.
        </Typography>
      </Box>
    </Container>
  );
};

export default Om; 