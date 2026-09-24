import { createFileRoute } from '@tanstack/react-router';
import { ChaptersPage } from '@/components/journal-pages';

export const Route = createFileRoute('/chapters/')({
  head: () => ({ meta: [
    { title: 'My Chapters — Little Chapters' },
    { name: 'description', content: 'Explore the chapters of your life, search your writing, and revisit your thoughts.' },
    { property: 'og:title', content: 'My Chapters — Little Chapters' },
    { property: 'og:description', content: 'Explore the chapters of your life, search your writing, and revisit your thoughts.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ChaptersPage,
});
