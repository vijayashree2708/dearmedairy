import { createFileRoute } from '@tanstack/react-router';
import { LetterEditorPage } from '@/components/journal-pages';

export const Route = createFileRoute('/letters/new')({
  head: () => ({ meta: [
    { title: 'Write a Letter — Little Chapters' },
    { name: 'description', content: 'Write and seal a letter for your future self.' },
    { property: 'og:title', content: 'Write a Letter — Little Chapters' },
    { property: 'og:description', content: 'Write and seal a letter for your future self.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LetterEditorPage,
});
