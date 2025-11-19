export type NavLink = {
  label: string;
  href: string;
  type: 'anchor' | 'route';
};

export const navLinks: NavLink[] = [
  { label: 'Solutions', href: '/#solutions', type: 'anchor' },
  { label: 'Process', href: '/#process', type: 'anchor' },
  { label: 'Success stories', href: '/#stories', type: 'anchor' },
  { label: 'Pricing', href: '/#pricing', type: 'anchor' },
  { label: 'Contact', href: '/contact', type: 'route' },
];
