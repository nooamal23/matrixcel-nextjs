// app/industries/page.tsx
'use client';

import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE TITLE */}
      {/* ====================================================== */}
      <section
        className="page-title centred"
        style={{ backgroundImage: 'url(/assets/images/background/page-title-4.jpg)' }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>Testimonials</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INDUSTRIES SECTION */}
      {/* ====================================================== */}
      <section className="testimonial-style-four centred sec-pad-2">
        <div className="auto-container">
          <div className="sec-title centred">
            <h5>Industries</h5>
            <h2>Sectors We Empower</h2>
            <p>
              Matrixcel Business provides strategic consulting and digital process optimization across a
              range of industries. Our goal is to help organizations operate more efficiently, stay
              compliant, and scale internationally.
            </p>
          </div>

          <div className="row clearfix">
            {/* Industry 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We streamline e-commerce and retail operations through system integration and
                    data-driven logistics.”
                  </h4>
                  <h5>E-Commerce & Retail</h5>
                  <span className="designation">Operational Optimization</span>
                </div>
              </div>
            </div>

            {/* Industry 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We help logistics companies enhance cross-border coordination and compliance
                    efficiency.”
                  </h4>
                  <h5>Logistics & Supply Chain</h5>
                  <span className="designation">Process Efficiency</span>
                </div>
              </div>
            </div>

            {/* Industry 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We enable service-oriented businesses to automate reporting and optimize
                    internal workflows.”
                  </h4>
                  <h5>Business Services</h5>
                  <span className="designation">Workflow Automation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            {/* Industry 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We support financial teams with transparent compliance systems and real-time
                    monitoring tools.”
                  </h4>
                  <h5>Finance & Compliance</h5>
                  <span className="designation">Regulatory Management</span>
                </div>
              </div>
            </div>

            {/* Industry 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We help manufacturers digitalize operations to connect production data with
                    decision-making.”
                  </h4>
                  <h5>Manufacturing</h5>
                  <span className="designation">Digital Transformation</span>
                </div>
              </div>
            </div>

            {/* Industry 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-column">
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <h4>
                    “We enable global companies to manage operations smoothly across the UK, Europe,
                    and North Africa.”
                  </h4>
                  <h5>International Trade</h5>
                  <span className="designation">Cross-Border Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SUBSCRIBE / NEWSLETTER SECTION */}
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
                <form action="/contact" method="post" className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      aria-label="Email for newsletter"
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