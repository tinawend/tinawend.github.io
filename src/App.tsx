import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Livsstil from './pages/Livsstil';
import Teknik from './pages/Teknik';
import Om from './pages/Om';
import PostPage from './pages/PostPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/lifestyle" element={<Livsstil />} />
            <Route path="/category/tech" element={<Teknik />} />
            <Route path="/about" element={<Om />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
