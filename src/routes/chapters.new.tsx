import { createFileRoute } from '@tanstack/react-router';
import { ChapterEditorPage } from '@/components/journal-pages';

export const Route = createFileRoute('/chapters/new')({
  head: () => ({ meta: [
    { title: 'Write a Chapter — Little Chapters' },
    { name: 'description', content: 'Write a personal chapter about your day, thoughts, and feelings.' },
    { property: 'og:title', content: 'Write a Chapter — Little Chapters' },
    { property: 'og:description', content: 'Write a personal chapter about your day, thoughts, and feelings.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ChapterEditorPage,
});
