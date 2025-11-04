// app/error/page.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE TITLE */}
      {/* ====================================================== */}
      <section className="page-title-two bg-color-1 centred">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-9.png)' }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-10.png)' }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>404</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* 404 ERROR SECTION */}
      {/* ====================================================== */}
      <section className="error-section centred">
        <div className="auto-container">
          <div className="inner-box">
            <h1>404</h1>
            <h2>
              page is not found. <br />
              the page doesn’t exist or deleted
            </h2>
            <Link href="/" className="theme-btn btn-one">
              Go To Home
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* NEWSLETTER */}
      {/* ====================================================== */}
      <section className="subscribe-section bg-color-3">
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-2.png)' }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 text-column">
              <div className="text">
                <span>Subscribe</span>
                <h2>Sign Up To Our Newsletter To Get The Latest News And Offers.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-column">
              <div className="form-inner">
                <form
                  action="/contact"
                  method="post"
                  className="subscribe-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      aria-label="Subscribe to newsletter"
                    />
                    <button type="submit">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}