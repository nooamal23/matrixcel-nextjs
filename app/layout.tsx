// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import StickyHeader from '@/components/StickyHeader';

export const metadata: Metadata = {
  title: 'Matrixcel Business',
  description: 'Matrixcel Business - Professional Business Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/jquery-ui.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/color/theme-color.css" rel="stylesheet" id="jssDefault" />
        <link href="/assets/css/switcher-style.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </head>

      <body>
        <Header />
        <StickyHeader />
        <MobileMenu />
        <main>{children}</main>
        <Footer />

        {/* ===== SCRIPTS (NO onLoad!) ===== */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />

        {/* nav-tool.js – Loaded early, no onLoad */}
        <Script src="/assets/js/nav-tool.js" strategy="afterInteractive" />

        {/* Lazy plugins */}
        <Script src="/assets/js/owl.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/validation.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/assets/js/appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/scrollbar.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.js" strategy="lazyOnload" />
        <Script src="/assets/js/jQuery.style.switcher.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/product-filter.js" strategy="lazyOnload" />

        {/* Google Maps */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/gmaps.js" strategy="lazyOnload" />
        <Script src="/assets/js/map-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/script.js" strategy="lazyOnload" />

        {/* ===== INLINE SCRIPT: Mobile Menu Fix (Runs After DOM) ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function () {
                if (window.innerWidth <= 991) {
                  const toggler = document.querySelector('.mobile-nav-toggler');
                  const menu = document.querySelector('.mobile-menu');
                  if (toggler && menu) {
                    toggler.addEventListener('click', function (e) {
                      e.preventDefault();
                      menu.classList.toggle('active');
                    });
                    // Close on link click
                    menu.querySelectorAll('a').forEach(link => {
                      link.addEventListener('click', () => menu.classList.remove('active'));
                    });
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}