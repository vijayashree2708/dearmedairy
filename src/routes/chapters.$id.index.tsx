import { createFileRoute } from '@tanstack/react-router';
import { ChapterDetailPage } from '@/components/journal-pages';

export const Route = createFileRoute('/chapters/$id/')({
  head: () => ({ meta: [
    { title: 'Chapter — Little Chapters' },
    { name: 'description', content: 'Read a little chapter from your personal journal.' },
    { property: 'og:title', content: 'Chapter — Little Chapters' },
    { property: 'og:description', content: 'Read a little chapter from your personal journal.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ChapterDetailPage,
});
