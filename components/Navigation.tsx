// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/career', label: 'Careers' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="navigation clearfix">
      {navItems.map((item) => (
        <li
          key={item.href}
          className={pathname === item.href ? 'current' : ''}
        >
          <Link href={item.href} onClick={onClick}>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
