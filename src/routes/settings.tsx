import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/components/journal-pages';

export const Route = createFileRoute('/settings')({
  head: () => ({ meta: [
    { title: 'Settings — Little Chapters' },
    { name: 'description', content: 'Manage your local journal preview and export your writing.' },
    { property: 'og:title', content: 'Settings — Little Chapters' },
    { property: 'og:description', content: 'Manage your local journal preview and export your writing.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: SettingsPage,
});
