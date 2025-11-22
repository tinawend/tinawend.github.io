import { Post, PostBlock } from '../data/posts';
import { Language } from '../contexts/LanguageContext';

export const getPostTitle = (post: Post, language: Language): string => {
  if (typeof post.title === 'string') return post.title;
  return post.title[language];
};

export const getPostExcerpt = (post: Post, language: Language): string => {
  if (typeof post.excerpt === 'string') return post.excerpt;
  return post.excerpt[language];
};

export const getPostCategory = (post: Post, language: Language): string => {
  if (typeof post.category === 'string') return post.category;
  return post.category[language];
};

export const getPostContent = (post: Post, language: Language): PostBlock[] => {
  if (language === 'en' && post.contentEn) {
    return post.contentEn;
  }
  // Translate content blocks
  return post.content.map(block => translateBlock(block, language));
};

const translateBlock = (block: PostBlock, language: Language): PostBlock => {
  switch (block.type) {
    case 'text':
      if (typeof block.content === 'string') {
        return block;
      }
      return {
        type: 'text',
        content: block.content[language],
      } as PostBlock;
    case 'image':
      const translatedImage: PostBlock = {
        type: 'image',
        src: block.src,
        alt: typeof block.alt === 'string' ? block.alt : block.alt[language],
        size: block.size,
      } as PostBlock;
      if (block.caption) {
        (translatedImage as any).caption = typeof block.caption === 'string' 
          ? block.caption 
          : block.caption[language];
      }
      return translatedImage;
    case 'code':
    default:
      return block;
  }
};

