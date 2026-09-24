import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/public-pages';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Your life, one little chapter at a time. — Little Chapters' },
    { name: 'description', content: 'A beautiful little space to write your days, hold your memories close, and find the magic in being you.' },
    { property: 'og:title', content: 'Your life, one little chapter at a time. — Little Chapters' },
    { property: 'og:description', content: 'A beautiful little space to write your days, hold your memories close, and find the magic in being you.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: HomePage,
});
