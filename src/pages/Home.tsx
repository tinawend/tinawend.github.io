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

// This will be replaced with actual blog post data later
const featuredPost = {
  id: 1,
  title: 'Getting Started with React and TypeScript',
  excerpt: 'Learn how to build modern web applications using React and TypeScript. We will cover everything from setup to deployment.',
  date: '2024-03-20',
  category: 'Tech',
  imageUrl: 'https://source.unsplash.com/random/1200x600/?coding',
};

const recentPosts = [
  {
    id: 2,
    title: 'Best Practices for React Development',
    excerpt: 'Discover the best practices and patterns for building scalable React applications.',
    date: '2024-03-21',
    category: 'Tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?developer',
  },
  {
    id: 3,
    title: 'Understanding TypeScript Types',
    excerpt: 'Deep dive into TypeScript types and how they can make your code more robust.',
    date: '2024-03-22',
    category: 'Tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?typescript',
  },
  {
    id: 4,
    title: 'Modern Web Development Tools',
    excerpt: 'Explore the essential tools and utilities for modern web development.',
    date: '2024-03-23',
    category: 'Tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?computer',
  },
];

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Featured Post */}
      <Box sx={{ mb: 8 }}>
        <Card>
          <CardActionArea component={RouterLink} to={`/post/${featuredPost.id}`}>
            <CardMedia
              component="img"
              height="400"
              image={featuredPost.imageUrl}
              alt={featuredPost.title}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Chip
                label={featuredPost.category}
                color="secondary"
                size="small"
                sx={{ mb: 2 }}
              />
              <Typography variant="h4" component="h1" gutterBottom>
                {featuredPost.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {featuredPost.excerpt}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {featuredPost.date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      {/* Section Divider */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Recent Posts
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
                  alt={post.title}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Chip
                    label={post.category}
                    color="secondary"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
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