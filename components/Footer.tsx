// components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* ==== FOOTER TOP ==== */}
      <div className="footer-top bg-color-2">
        <div className="auto-container">
          <div className="row clearfix">
            {/* ---- About Column ---- */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget about-widget">
                <div className="widget-title">
                  <h3>About</h3>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor amet consetetur adi pisicing elit sed
                    eiusm tempor in cididunt ut labore dolore magna aliqua enim
                    ad minim venitam
                  </p>
                  <p>Quis nostrud exercita laboris nisi ut aliquip commodo.</p>
                </div>
              </div>
            </div>

            {/* ---- Services Links ---- */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml-70">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list class">
                    <li>
                      <Link href="/">About Us</Link>
                    </li>
                    <li>
                      <Link href="/">Listing</Link>
                    </li>
                    <li>
                      <Link href="/">How It Works</Link>
                    </li>
                    <li>
                      <Link href="/">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/">Our Blog</Link>
                    </li>
                    <li>
                      <Link href="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---- Top News ---- */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget post-widget">
                <div className="widget-title">
                  <h3>Top News</h3>
                </div>
                <div className="post-inner">
                  <div className="post">
                    <figure className="post-thumb">
                      <Link href="/blog-details">
                        <Image
                          src="/assets/images/resource/footer-post-1.jpg"
                          alt="The Added Value Social Worker"
                          width={70}
                          height={70}
                          className="img-fluid"
                        />
                      </Link>
                    </figure>
                    <h5>
                      <Link href="/blog-details">
                        The Added Value Social Worker
                      </Link>
                    </h5>
                    <p>Mar 25, 2020</p>
                  </div>

                  <div className="post">
                    <figure className="post-thumb">
                      <Link href="/blog-details">
                        <Image
                          src="/assets/images/resource/footer-post-2.jpg"
                          alt="Ways to Increase Trust"
                          width={70}
                          height={70}
                          className="img-fluid"
                        />
                      </Link>
                    </figure>
                    <h5>
                      <Link href="/blog-details">Ways to Increase Trust</Link>
                    </h5>
                    <p>Mar 24, 2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- Contact Info ---- */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h3>Contacts</h3>
                </div>
                <div className="widget-content">
                  <ul className="info-list clearfix">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                    </li>
                    <li>
                      <i className="fas fa-microphone"></i>
                      <a href="tel:+23055873407">+2(305) 587-3407</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== FOOTER BOTTOM ==== */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            {/* Logo */}
            <figure className="footer-logo">
              <Link href="/">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="Matrixcel Footer Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </figure>

            {/* Copyright */}
            <div className="copyright pull-left">
              <p>
                <Link href="/">Matrixcel</Link> &copy; 2021 All Right Reserved
              </p>
            </div>

            {/* Footer Nav */}
            <ul className="footer-nav pull-right clearfix">
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==== SCROLL TO TOP BUTTON ==== */}
      <button
        className="scroll-top scroll-to-target"
        data-target="html"
        aria-label="Scroll to top"
      >
        <span className="fal fa-angle-up"></span>
      </button>
    </footer>
  );
}