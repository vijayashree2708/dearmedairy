import { createFileRoute } from '@tanstack/react-router';
import { ChapterEditPage } from '@/components/journal-pages';

export const Route = createFileRoute('/chapters/$id/edit')({
  head: () => ({ meta: [
    { title: 'Edit Chapter — Little Chapters' },
    { name: 'description', content: 'Edit the words and memories in your chapter.' },
    { property: 'og:title', content: 'Edit Chapter — Little Chapters' },
    { property: 'og:description', content: 'Edit the words and memories in your chapter.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ChapterEditPage,
});
