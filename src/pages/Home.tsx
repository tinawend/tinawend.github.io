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

// Sort posts by date (latest first)
const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const recentPosts = sortedPosts.slice(0, 6);

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg">
      {/* Recent Posts Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('home.recent')}
        </Typography>
        <Divider sx={{ maxWidth: 100, mx: 'auto', mb: 4 }} />
      </Box>

      {/* Recent Posts Grid */}
      <Grid container spacing={4}>
        {recentPosts.map((post) => (
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

export default Home; 