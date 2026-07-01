export interface NavItem {
  label: string;
  href: string;
  /** 'route' navigates to a page; 'anchor' scrolls within the homepage. */
  type: 'route' | 'anchor';
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'ARCHIVE', href: '/', type: 'route' },
  { label: 'EXHIBITIONS', href: '/art', type: 'route' },
  { label: 'MUSIC', href: '/music', type: 'route' },
  { label: 'LAB', href: '/lab', type: 'route' },
  { label: 'SHOP', href: '/shop', type: 'route' },
  { label: 'ABOUT', href: '#about', type: 'anchor' },
  { label: 'CONTACT', href: '#contact', type: 'anchor' },
];

export const SITE_EMAIL = 'pelatiahm@outlook.com';

export const SOCIAL_LINKS = [
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/pelatiah_/' },
  { label: 'THREADS', href: 'https://www.threads.com/@pelatiah_' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@pelatiah_' },
];
