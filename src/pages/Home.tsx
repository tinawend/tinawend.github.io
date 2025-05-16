import React from 'react';
import { Typography, Card, CardContent, Grid, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// This will be replaced with actual blog post data later
const samplePosts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    excerpt: 'This is my first blog post using React and TypeScript.',
    date: '2024-03-20',
  },
  {
    id: 2,
    title: 'Getting Started with TypeScript',
    excerpt: 'Learn the basics of TypeScript and how it can improve your React applications.',
    date: '2024-03-21',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Posts
      </Typography>
      <Grid container spacing={4}>
        {samplePosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Card>
              <CardActionArea component={RouterLink} to={`/post/${post.id}`}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {post.date}
                  </Typography>
                  <Typography variant="body1">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home; 