// components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function Header() {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const closePreloader = () => setShowPreloader(false);

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <div className="loader-wrap">
          <div className="preloader">
            <div className="preloader-close" onClick={closePreloader}>
              <i className="far fa-times"></i>
            </div>
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                  {['M', 'a', 't', 'r', 'i', 'x', 'c', 'e', 'l'].map((letter, i) => (
                    <span key={i} data-text-preloader={letter} className="letters-loading">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="main-header">
        {/* Header Top */}
        <div className="header-top">
          <div className="top-inner clearfix">
            <div className="left-column pull-left">
              <ul className="info clearfix">
                <li><i className="far fa-map-marker-alt"></i>Sousse, Tunisie</li>
                <li><i className="far fa-clock"></i>Mon - Sat 9.00 - 18.00</li>
                <li><i className="far fa-phone"></i><a href="tel:+2162353256">+216-235-3256</a></li>
              </ul>
            </div>
            <div className="right-column pull-right">
              <ul className="social-links clearfix">
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a></li>
                <li><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="https://vimeo.com" target="_blank" rel="noreferrer"><i className="fab fa-vimeo-v"></i></a></li>
              </ul>
              <div className="sign-box">
                <Link href="/auth/signin"><i className="fas fa-user"></i> Sign In</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="outer-box">
            <div className="main-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Matrixcel" width={150} height={50} />
                  </Link>
                </figure>
              </div>

              <div className="menu-area clearfix">
                {/* Desktop Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Navigation />
                  </div>
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
      </header>
    </>
  );
}