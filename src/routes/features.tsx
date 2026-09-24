import { createFileRoute } from '@tanstack/react-router';
import { FeaturesPage } from '@/components/public-pages';

export const Route = createFileRoute('/features')({
  head: () => ({ meta: [
    { title: 'Features — Little Chapters' },
    { name: 'description', content: 'Explore personal chapters, a mood garden, memories, future letters, and monthly reflections.' },
    { property: 'og:title', content: 'Features — Little Chapters' },
    { property: 'og:description', content: 'Explore personal chapters, a mood garden, memories, future letters, and monthly reflections.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: FeaturesPage,
});
