import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage } from '@/components/journal-pages';

export const Route = createFileRoute('/dashboard')({
  head: () => ({ meta: [
    { title: 'Home — Little Chapters' },
    { name: 'description', content: 'Your personal journal home: check in with your mood and return to the moments that matter.' },
    { property: 'og:title', content: 'Home — Little Chapters' },
    { property: 'og:description', content: 'Your personal journal home: check in with your mood and return to the moments that matter.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: DashboardPage,
});
