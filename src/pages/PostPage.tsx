import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { posts } from '../data/posts';
import { Container, Typography, Box, Chip, Divider, Button } from '@mui/material';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getPostTitle, getPostCategory, getPostContent } from '../utils/postUtils';

const addCopyButtons = (copyText: string, copiedText: string) => {
  document.querySelectorAll('pre').forEach((block) => {
    if (block.querySelector('.copy-btn')) return; // redan knapp

    const button = document.createElement('button');
    button.textContent = copyText;
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
      button.textContent = copiedText;
      setTimeout(() => (button.textContent = copyText), 1500);
    });

    block.style.position = 'relative';
    block.appendChild(button);
  });
};

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    Prism.highlightAll();
    const copyText = language === 'sv' ? 'Kopiera' : 'Copy';
    const copiedText = language === 'sv' ? 'Kopierat!' : 'Copied!';
    addCopyButtons(copyText, copiedText);
  }, [post, language]);

  if (!post) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          {t('post.notFound')}
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" color="primary">
          {t('post.back')}
        </Button>
      </Container>
    );
  }

  const title = getPostTitle(post, language);
  const category = getPostCategory(post, language);
  const content = getPostContent(post, language);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Chip label={category} color="secondary" size="small" />
          <Typography variant="subtitle2" color="text.secondary">
            {post.date}
          </Typography>
        </Box>

        <img
          src={post.imageUrl}
          alt={title}
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
        {content.map((block, index) => {
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
                    alt={typeof block.alt === 'string' ? block.alt : block.alt[language]}
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
                      {typeof block.caption === 'string' ? block.caption : block.caption[language]}
                    </Typography>
                  )}
                </Box>
              );
            case 'text':
            default:
              const textContent = typeof block.content === 'string' 
                ? block.content 
                : block.content[language];
              return (
                <Typography
                  key={index}
                  variant="body1"
                  color="text.primary"
                  sx={{ whiteSpace: 'pre-line', mb: 2 }}
                >
                  {textContent}
                </Typography>
              );
          }
        })}

        <Box sx={{ mt: 4 }}>
          <Button component={RouterLink} to="/" variant="outlined" color="primary">
            {t('post.back')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PostPage;
