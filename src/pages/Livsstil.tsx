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

const livsstilPosts = [...posts]
  .filter(post => post.category === 'Livsstil')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Livsstil: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Livsstil
        </Typography>
        <Divider sx={{ maxWidth: 100, mx: 'auto', mb: 4 }} />
      </Box>
      <Grid container spacing={4}>
        {livsstilPosts.map((post) => (
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

export default Livsstil; 