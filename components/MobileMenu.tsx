// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add/remove body class for scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button (put in Header) */}
      <div
        className="mobile-nav-toggler"
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>

        {/* Close Button */}
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/images/logo-2.png"
                alt="Matrixcel"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          <div className="menu-outer">
            <ul className="navigation clearfix">
              <li className={pathname === '/' ? 'current' : ''}>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className={pathname === '/about' ? 'current' : ''}>
                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li className={pathname === '/services' ? 'current' : ''}>
                <Link href="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
              </li>
              <li className={pathname === '/industries' ? 'current' : ''}>
                <Link href="/industries" onClick={() => setIsOpen(false)}>Industries</Link>
              </li>
              <li className={pathname === '/career' ? 'current' : ''}>
                <Link href="/career" onClick={() => setIsOpen(false)}>Careers</Link>
              </li>
              <li className={pathname === '/blog' ? 'current' : ''}>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Insights</Link>
              </li>
              <li className={pathname === '/contact' ? 'current' : ''}>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Sousse, Tunisie</li>
              <li><a href="tel:+21601682648101">+216 01682648101</a></li>
              <li><a href="mailto:matrixcel@gmail.com">matrixcel@gmail.com</a></li>
            </ul>
          </div>

          <div className="social-links">
            <ul className="clearfix">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><span className="fab fa-twitter"></span></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><span className="fab fa-facebook-square"></span></a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer"><span className="fab fa-pinterest-p"></span></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><span className="fab fa-instagram"></span></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><span className="fab fa-youtube"></span></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}