import { createFileRoute } from '@tanstack/react-router';
import { LettersPage } from '@/components/journal-pages';

export const Route = createFileRoute('/letters/')({
  head: () => ({ meta: [
    { title: 'Letters to Tomorrow — Little Chapters' },
    { name: 'description', content: 'Keep letters for your future self until the day they are ready to open.' },
    { property: 'og:title', content: 'Letters to Tomorrow — Little Chapters' },
    { property: 'og:description', content: 'Keep letters for your future self until the day they are ready to open.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LettersPage,
});
