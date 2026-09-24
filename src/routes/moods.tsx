import { createFileRoute } from '@tanstack/react-router';
import { MoodsPage } from '@/components/journal-pages';

export const Route = createFileRoute('/moods')({
  head: () => ({ meta: [
    { title: 'Mood Garden — Little Chapters' },
    { name: 'description', content: 'A gentle visual garden for the feelings that color your days.' },
    { property: 'og:title', content: 'Mood Garden — Little Chapters' },
    { property: 'og:description', content: 'A gentle visual garden for the feelings that color your days.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: MoodsPage,
});
