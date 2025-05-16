import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              flexGrow: 1 
            }}
          >
            My Blog
          </Typography>
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/TinaW/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>

      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} My Blog. Built with React and TypeScript.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 