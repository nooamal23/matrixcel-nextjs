// components/MobileMenu.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MobileMenu() {
  useEffect(() => {
    // Close menu when clicking close button
    const closeBtn = document.querySelector('.mobile-menu .close-btn');
    const backdrop = document.querySelector('.mobile-menu .menu-backdrop');
    const body = document.body;

    const closeMenu = () => {
      body.classList.remove('mobile-menu-visible');
    };

    closeBtn?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);

    // Cleanup
    return () => {
      closeBtn?.removeEventListener('click', closeMenu);
      backdrop?.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className="mobile-menu">
      <div className="menu-backdrop"></div>
      <nav className="menu-box">
        {/* Close Button – Now Visible & Clickable */}
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="nav-logo">
          <Link href="/">
            <Image
              src="/assets/images/logo-2.png"
              alt="Matrixcel"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Menu will be injected by nav-tool.js */}
        <div className="menu-outer">
          {/* Here Menu Will Come Automatically Via Javascript */}
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
  );
}