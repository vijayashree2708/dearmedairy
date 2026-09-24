import { createFileRoute } from '@tanstack/react-router';
import { MemoryEditorPage } from '@/components/journal-pages';

export const Route = createFileRoute('/memories/new')({
  head: () => ({ meta: [
    { title: 'Add a Memory — Little Chapters' },
    { name: 'description', content: 'Add a photograph and story to your memory garden.' },
    { property: 'og:title', content: 'Add a Memory — Little Chapters' },
    { property: 'og:description', content: 'Add a photograph and story to your memory garden.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: MemoryEditorPage,
});
