import { createFileRoute } from '@tanstack/react-router';
import { ReflectionPage } from '@/components/journal-pages';

export const Route = createFileRoute('/reflection')({
  head: () => ({ meta: [
    { title: 'Monthly Reflection — Little Chapters' },
    { name: 'description', content: 'Pause to look back on your month with guided reflections.' },
    { property: 'og:title', content: 'Monthly Reflection — Little Chapters' },
    { property: 'og:description', content: 'Pause to look back on your month with guided reflections.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ReflectionPage,
});
