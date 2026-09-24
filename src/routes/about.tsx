import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/public-pages';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'About — Little Chapters' },
    { name: 'description', content: 'Discover why Little Chapters gives every little moment in your life a place to be remembered.' },
    { property: 'og:title', content: 'About — Little Chapters' },
    { property: 'og:description', content: 'Discover why Little Chapters gives every little moment in your life a place to be remembered.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: AboutPage,
});
