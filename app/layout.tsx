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
        {/* Favicon - Fixed path */}
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />

        {/* Google Fonts - Exact match */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* All CSS - Exact order from template */}
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/jquery-ui.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/color/theme-color.css" rel="stylesheet" id="jssDefault" />
        {/*<link href="/assets/css/switcher-style.css" rel="stylesheet" />*/}
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </head>

      <body>
        <Header />
        <StickyHeader />
        <MobileMenu />
        <main>{children}</main>
        <Footer />

        {/* jQuery Plugins - Exact load order preserved */}
        {/* Critical: Load before React hydration */}
        <Script
          src="/assets/js/jquery.js"
          strategy="beforeInteractive"
        />

        {/* UI Foundations: Load after jQuery, before most content */}
        <Script
          src="/assets/js/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery-ui.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />

        {/* Plugins: Lazy load (non-blocking) */}
        <Script src="/assets/js/owl.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/validation.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/assets/js/appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/scrollbar.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.js" strategy="lazyOnload" />
       {/* <Script src="/assets/js/jQuery.style.switcher.min.js" strategy="lazyOnload" />*/}
        <Script src="/assets/js/product-filter.js" strategy="lazyOnload" />
        {/*<Script src="/assets/js/nav-tool.js" strategy="lazyOnload" />*/}

        <Script
  id="nav-tool-loader"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          if (typeof $ !== 'undefined' && $('#main-navigation').length) {
            // Clone menu only if it exists
            if ($('.mobile-menu .menu-outer .navigation').length === 0) {
              var nav = $('#main-navigation').clone();
              nav.find('.current').removeClass('current');
              $('.mobile-menu .menu-outer').html(nav);
            }
            // Re-init dropdowns
            if (typeof $.fn.mobileMenu !== 'undefined') {
              $('.mobile-menu .navigation').mobileMenu();
            }
          }
        }, 100);
      });
    `,
  }}
/>

        {/* Google Maps - Only if needed (loaded globally for simplicity) */}
        {/* ⚠️ WARNING: Replace with your own API key in production! */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/gmaps.js" strategy="lazyOnload" />
        <Script src="/assets/js/map-helper.js" strategy="lazyOnload" />

        {/* Main script - Last! */}
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}