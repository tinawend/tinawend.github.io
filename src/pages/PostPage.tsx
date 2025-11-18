import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { posts } from '../data/posts';
import { Container, Typography, Box, Chip, Divider, Button } from '@mui/material';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const addCopyButtons = () => {
  document.querySelectorAll('pre').forEach((block) => {
    if (block.querySelector('.copy-btn')) return; // redan knapp

    const button = document.createElement('button');
    button.textContent = 'Kopiera';
    button.className = 'copy-btn';
    Object.assign(button.style, {
      position: 'absolute',
      top: '8px',
      right: '8px',
      background: '#444',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer',
      fontSize: '0.8rem',
    });

    button.addEventListener('click', () => {
      const code = block.querySelector('code')?.textContent || '';
      navigator.clipboard.writeText(code);
      button.textContent = 'Kopierat!';
      setTimeout(() => (button.textContent = 'Kopiera'), 1500);
    });

    block.style.position = 'relative';
    block.appendChild(button);
  });
};

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    Prism.highlightAll();
    addCopyButtons();
  }, [post]);

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
          style={{
            width: '100%',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 8,
            marginBottom: 24,
          }}
        />

        <Divider sx={{ mb: 3 }} />

        {/* Rendera varje content-block */}
        {post.content.map((block, index) => {
          switch (block.type) {
            case 'code':
              return (
                <pre key={index} className="language-bash" style={{ borderRadius: 8, overflow: 'auto' }}>
                  <code>{block.content}</code>
                </pre>
              );
            case 'image':
              const isSmall = block.size === 'small' || !block.size; // default to small
              return (
                <Box key={index} sx={{ my: 3 }}>
                  <img
                    src={block.src}
                    alt={block.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      maxHeight: isSmall ? 500 : undefined,
                      objectFit: isSmall ? 'cover' : 'contain',
                      borderRadius: 8,
                      display: 'block',
                    }}
                  />
                  {block.caption && (
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                      {block.caption}
                    </Typography>
                  )}
                </Box>
              );
            case 'text':
            default:
              return (
                <Typography
                  key={index}
                  variant="body1"
                  color="text.primary"
                  sx={{ whiteSpace: 'pre-line', mb: 2 }}
                >
                  {block.content}
                </Typography>
              );
          }
        })}

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
