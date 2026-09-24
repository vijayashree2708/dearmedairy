import coffee from '@/assets/memory-coffee.jpg';
import flowers from '@/assets/memory-flowers.jpg';
import seaside from '@/assets/memory-seaside.jpg';
import tulip from '@/assets/mood-1f337.svg';
import leaf from '@/assets/mood-1f33f.svg';
import blossom from '@/assets/mood-1f338.svg';
import sunflower from '@/assets/mood-1f33b.svg';
import wilted from '@/assets/mood-1f940.svg';
import cloud from '@/assets/mood-2601.svg';

export const moods = [
  { name: 'Happy', icon: tulip, color: 'mood-happy' },
  { name: 'Calm', icon: leaf, color: 'mood-calm' },
  { name: 'Loved', icon: blossom, color: 'mood-loved' },
  { name: 'Excited', icon: sunflower, color: 'mood-excited' },
  { name: 'Sad', icon: wilted, color: 'mood-sad' },
  { name: 'Tired', icon: cloud, color: 'mood-tired' },
] as const;
export type Mood = typeof moods[number]['name'];
export type Chapter = { id: string; title: string; date: string; mood: Mood; body: string; tags: string[]; photo?: string };
export type Memory = { id: string; title: string; date: string; description: string; collection: string; tags: string[]; photo?: string };
export type Letter = { id: string; title: string; recipient: string; body: string; openDate: string; created: string };
export type JournalData = { chapters: Chapter[]; memories: Memory[]; letters: Letter[]; moodLog: Record<string, Mood>; reflections: Record<string, string>; profile: { name: string; bio: string }; settings: { privateJournal: boolean; gentleReminders: boolean } };

export const initialData: JournalData = {
  chapters: [
    { id: '1', title: 'The beauty of an ordinary Tuesday', date: '2026-09-22', mood: 'Calm', body: 'This morning, the light found its way through the curtains before my alarm did. I made coffee slowly, opened the windows, and let the day begin without rushing it. Nothing extraordinary happened, and perhaps that was the loveliest part.\n\nI walked home the long way and noticed how the trees are just beginning to turn. I want to remember that small things are still things worth remembering.', tags: ['little things', 'slow mornings'], photo: coffee },
    { id: '2', title: 'A little bit of sunshine', date: '2026-09-18', mood: 'Happy', body: 'Bought myself flowers on the way home today. No reason, no occasion. Just a reminder that joy doesn’t always need an invitation.\n\nI think I’m learning to be kinder to myself, one tiny choice at a time.', tags: ['flowers', 'self love'], photo: flowers },
    { id: '3', title: 'Where the water meets the sky', date: '2026-09-12', mood: 'Loved', body: 'We stayed at the beach until the sky turned the color of peaches. The air was cool and the water kept meeting our feet. I wish I could bottle the feeling of this evening and keep it on a shelf forever.', tags: ['summer', 'together'], photo: seaside },
    { id: '4', title: 'Finding my way back to quiet', date: '2026-09-06', mood: 'Tired', body: 'Some days ask for more of us than we have to give. Today I rested, made tea, and decided that was enough. It was.', tags: ['rest', 'reflection'] },
  ],
  memories: [
    { id: '1', title: 'Coffee and long conversations', date: '2026-09-22', description: 'The kind of afternoon you wish you could pause.', collection: 'Little Moments', tags: ['coffee', 'friends'], photo: coffee },
    { id: '2', title: 'Flowers for no reason', date: '2026-09-18', description: 'A little reminder that there is beauty everywhere.', collection: 'Little Moments', tags: ['flowers'], photo: flowers },
    { id: '3', title: 'One last summer evening', date: '2026-09-12', description: 'Sunset, sandy feet, and nowhere else to be.', collection: 'Places', tags: ['beach', 'summer'], photo: seaside },
  ],
  letters: [
    { id: '1', title: 'For Future Me 💌', recipient: 'My future self', body: 'I hope you remember how brave you were to begin. I hope you kept noticing the little beautiful things.', openDate: '2027-12-31', created: '2026-09-01' },
    { id: '2', title: 'On the days you need a reminder', recipient: 'My future self', body: 'You have made it through every difficult day so far. Keep going gently.', openDate: '2027-02-14', created: '2026-08-28' },
  ],
  moodLog: { '2026-09-02': 'Calm', '2026-09-04': 'Happy', '2026-09-06': 'Tired', '2026-09-08': 'Loved', '2026-09-10': 'Calm', '2026-09-12': 'Loved', '2026-09-14': 'Happy', '2026-09-16': 'Excited', '2026-09-18': 'Happy', '2026-09-20': 'Calm', '2026-09-22': 'Calm' },
  reflections: {},
  profile: { name: 'Sophie', bio: 'Collecting little moments, one day at a time.' },
  settings: { privateJournal: true, gentleReminders: false },
};
export const collections = ['All memories', 'College Days', 'Little Moments', 'People I Love', 'Places', 'Celebrations'];
export const prompts = ['What made me smile?', 'What challenged me?', 'What did I learn?', 'What am I grateful for?', 'Favorite memory?', 'What do I want to carry forward?'];
export function prettyDate(date: string) { return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); }
export function todayISO() { return new Date().toLocaleDateString('en-CA'); }
