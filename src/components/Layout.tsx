import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const categories = [
  { name: 'Hem', path: '/' },
  { name: 'Livsstil', path: '/category/lifestyle' },
  { name: 'Teknik', path: '/category/tech' },
  { name: 'Om', path: '/about' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Code & Chlorophyll
      </Typography>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem 
            key={category.name} 
            component={RouterLink} 
            to={category.path}
            sx={{
              textAlign: 'center',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FDF7F6' }}>
      <AppBar 
        position="static" 
        color="default" 
        elevation={0}
        sx={{ 
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography
              variant="h4"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.02em',
                flexGrow: isMobile ? 0 : 1,
                textAlign: 'center',
              }}
            >
              Code & Chlorophyll
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    component={RouterLink}
                    to={category.path}
                    color="primary"
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {category.name}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                color="primary"
                component="a"
                href="https://github.com/tinawend/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      
      <Container component="main" sx={{ flex: 1, py: 8}}>
        {children}
      </Container>

      <Box 
        component="footer" 
        sx={{ 
          py: 6,
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
            sx={{ mb: 2 }}
          >
            © {new Date().getFullYear()} Code & Chlorophyll. Built with React and TypeScript.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {categories.map((category) => (
              <Button
                key={category.name}
                component={RouterLink}
                to={category.path}
                color="primary"
                size="small"
              >
                {category.name}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 