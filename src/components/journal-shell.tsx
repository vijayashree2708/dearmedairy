import { Link, useRouterState } from '@tanstack/react-router';
import { BookOpen, Flower2, Heart, Home, Mail, Menu, Moon, PenLine, Settings, Sparkles, UserRound, X } from 'lucide-react';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { initialData, type JournalData } from '@/lib/journal-data';

type JournalContextValue = { data: JournalData; update: (fn: (prev: JournalData) => JournalData) => void };
const JournalContext = createContext<JournalContextValue | null>(null);
export function useJournal() { const value = useContext(JournalContext); if (!value) throw new Error('Journal provider missing'); return value; }
export function JournalProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<JournalData>(initialData);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const saved = localStorage.getItem('little-chapters-demo'); if (saved) setData(JSON.parse(saved) as JournalData); } catch { /* fall back to sample entries */ } setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem('little-chapters-demo', JSON.stringify(data)); }, [data, ready]);
  return <JournalContext.Provider value={{ data, update: setData }}>{children}</JournalContext.Provider>;
}
const nav = [
  { to: '/dashboard', label: 'Home', icon: Home }, { to: '/chapters', label: 'My Chapters', icon: BookOpen },
  { to: '/moods', label: 'Mood Garden', icon: Flower2 }, { to: '/memories', label: 'Memory Garden', icon: Heart },
  { to: '/letters', label: 'Letters', icon: Mail }, { to: '/reflection', label: 'Monthly Reflection', icon: Moon },
  { to: '/profile', label: 'Profile', icon: UserRound }, { to: '/settings', label: 'Settings', icon: Settings },
] as const;
export function Brand({ light = false }: { light?: boolean }) { return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Little Chapters home"><span className="brand-symbol"><BookOpen size={19} strokeWidth={1.6} /><span className="brand-spark">✦</span></span><span>little chapters<span className="brand-period">.</span></span></Link>; }
function PublicHeader() { const [open, setOpen] = useState(false); return <header className="public-header"><div className="public-header-inner"><Brand /><nav className={`public-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation"><Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>Home</Link><Link to="/features" onClick={() => setOpen(false)}>Features</Link><Link to="/about" onClick={() => setOpen(false)}>About</Link><Button asChild variant="editorial" size="sm"><Link to="/dashboard" onClick={() => setOpen(false)}>Start Writing <PenLine size={14}/></Link></Button></nav><Button className="public-menu" variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div></header>; }
function PublicFooter() { return <footer className="public-footer"><div className="container-wide footer-inner"><div><Brand /><p>A little space for everything that makes your life yours.</p></div><div className="footer-links"><Link to="/features">Features</Link><Link to="/about">About</Link><Link to="/dashboard">Start writing</Link></div><span>© {new Date().getFullYear()} Little Chapters. Made for the little moments.</span></div></footer>; }
function Sidebar() { return <aside className="sidebar"><div className="sidebar-top"><Brand /><p>YOUR PERSONAL SPACE</p></div><nav className="sidebar-nav" aria-label="Journal navigation">{nav.map(({ to, label, icon: Icon }) => <Link key={to} to={to} activeOptions={{ exact: true }} className="sidebar-link" activeProps={{ className: 'sidebar-link active' }}><Icon size={18} strokeWidth={1.7}/><span>{label}</span></Link>)}</nav><div className="sidebar-bottom"><div className="sidebar-note"><Sparkles size={17}/><p>“The little things? The little moments? They aren’t little.”</p></div><Link to="/profile" className="sidebar-person"><span className="avatar">S</span><span><strong>Sophie’s space</strong><small>A story in progress</small></span></Link></div></aside>; }
function MobileNav() { const visible = [nav[0], nav[1], nav[2], nav[3], nav[6]]; return <nav className="mobile-nav" aria-label="Mobile journal navigation">{visible.map(({ to, label, icon: Icon }) => <Link key={to} to={to} activeOptions={{ exact: true }} className="mobile-nav-link" activeProps={{ className: 'mobile-nav-link active' }}><Icon size={20} strokeWidth={1.7}/><span>{label === 'My Chapters' ? 'Chapters' : label === 'Mood Garden' ? 'Moods' : label === 'Memory Garden' ? 'Memories' : label}</span></Link>)}</nav>; }
export function AppFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const isPublic = ['/', '/features', '/about'].includes(pathname);
  return <JournalProvider>{isPublic ? <><PublicHeader /><main>{children}</main><PublicFooter /></> : <div className="app-frame"><Sidebar /><div className="app-main"><header className="app-mobile-header"><Brand /><Link to="/settings" aria-label="Settings"><Settings size={20}/></Link></header><main className="app-content">{children}</main></div><MobileNav /></div>}</JournalProvider>;
}
export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) { return <div className="page-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <div className="page-heading-action">{action}</div>}</div>; }
export function EmptyState({ icon, title, description, action }: { icon: ReactNode; title: string; description?: string; action?: ReactNode }) { return <div className="empty-state"><div className="empty-icon">{icon}</div><h3>{title}</h3>{description && <p>{description}</p>}{action}</div>; }
