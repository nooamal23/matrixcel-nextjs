// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      {/* Backdrop */}
      <div className="menu-backdrop"></div>

      {/* Close button */}
      <div className="close-btn">
        <i className="fas fa-times"></i>
      </div>

      {/* Menu box */}
      <nav className="menu-box">
        {/* Logo */}
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

        {/* Menu – will be filled by nav-tool.js */}
        <div className="menu-outer">
          {/* Here Menu Will Come Automatically Via Javascript */}
        </div>

        {/* Contact info */}
        <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Sousse, Tunisie</li>
            <li>
              <a href="tel:+21601682648101">+216 01682648101</a>
            </li>
            <li>
              <a href="mailto:matrixcel@gmail.com">matrixcel@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <span className="fab fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="fab fa-facebook-square"></span>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <span className="fab fa-pinterest-p"></span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="fab fa-instagram"></span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <span className="fab fa-youtube"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}