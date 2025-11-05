// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-visible', isOpen);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <div
        className="mobile-nav-toggler"
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
      </div>

      {/* Mobile Menu Panel */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>

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

          {/* Shared Menu */}
          <div className="menu-outer">
            <Navigation onClick={() => setIsOpen(false)} />
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