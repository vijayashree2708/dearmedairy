import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/components/journal-pages';

export const Route = createFileRoute('/profile')({
  head: () => ({ meta: [
    { title: 'My Profile — Little Chapters' },
    { name: 'description', content: 'A little about the person behind the pages.' },
    { property: 'og:title', content: 'My Profile — Little Chapters' },
    { property: 'og:description', content: 'A little about the person behind the pages.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ProfilePage,
});
