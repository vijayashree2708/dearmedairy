import { createFileRoute } from '@tanstack/react-router';
import { MemoriesPage } from '@/components/journal-pages';

export const Route = createFileRoute('/memories/')({
  head: () => ({ meta: [
    { title: 'Memory Garden — Little Chapters' },
    { name: 'description', content: 'A scrapbook gallery for the photographs and moments you never want to forget.' },
    { property: 'og:title', content: 'Memory Garden — Little Chapters' },
    { property: 'og:description', content: 'A scrapbook gallery for the photographs and moments you never want to forget.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: MemoriesPage,
});
