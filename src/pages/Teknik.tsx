import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  Box,
  Chip,
  Container,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { posts } from '../data/posts';
import { useLanguage } from '../contexts/LanguageContext';
import { getPostTitle, getPostExcerpt, getPostCategory } from '../utils/postUtils';

const Teknik: React.FC = () => {
  const { language, t } = useLanguage();

  const teknikPosts = [...posts]
    .filter(post => {
      const category = typeof post.category === 'string' ? post.category : post.category.sv;
      return category === 'Teknik';
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('category.tech')}
        </Typography>
        <Divider sx={{ maxWidth: 100, mx: 'auto', mb: 4 }} />
      </Box>
      <Grid container spacing={4}>
        {teknikPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea 
                component={RouterLink} 
                to={`/post/${post.id}`}
                sx={{ flexGrow: 1 }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.imageUrl}
                  alt={getPostTitle(post, language)}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Chip
                    label={getPostCategory(post, language)}
                    color="secondary"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {getPostTitle(post, language)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {getPostExcerpt(post, language)}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {post.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Teknik; 