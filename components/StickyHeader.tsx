// components/StickyHeader.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function StickyHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? 'current' : '');

  return (
    <div className="sticky-header">
      <div className="outer-box">
        <div className="main-box">
          <div className="logo-box">
            <figure className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="Matrixcel Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </figure>
          </div>

          <div className="menu-area clearfix">
            <nav className="main-menu clearfix">
              {/* Menu filled by nav-tool.js – but we keep structure */}
            </nav>
          </div>

          <div className="btn-box">
            <Link href="/auth/signup" className="theme-btn btn-one">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}