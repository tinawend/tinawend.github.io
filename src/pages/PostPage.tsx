import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { posts } from '../data/posts';
import { Container, Typography, Box, Chip, Divider, Button } from '@mui/material';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Inlägget hittades inte
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" color="primary">
          Tillbaka till startsidan
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Chip label={post.category} color="secondary" size="small" />
          <Typography variant="subtitle2" color="text.secondary">
            {post.date}
          </Typography>
        </Box>
        <img
          src={post.imageUrl}
          alt={post.title}
          style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8, marginBottom: 24 }}
        />
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-line' }}>
          {post.content}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button component={RouterLink} to="/" variant="outlined" color="primary">
            Tillbaka till startsidan
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PostPage; 