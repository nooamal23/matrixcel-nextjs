// app/career/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareerPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

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
            <h1>Career Opportunity</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Career Opportunity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CAREER OPENINGS SECTION */}
      {/* ====================================================== */}
      <section className="career-page-section sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Left: Intro */}
            <div className="col-lg-6 col-md-12 col-sm-12 left-side">
              <div className="sec-title">
                <h5>Career Opportunity</h5>
                <h2>
                  Build Your Career With <br />
                  Matrixcel Business
                </h2>
                <p>
                  At Matrixcel, we empower professionals to optimize business processes, support
                  international operations, and deliver digital solutions for our partners worldwide.
                </p>
                <p>
                  Join us to work in a collaborative, growth-oriented environment where innovation
                  and efficiency drive every project.
                </p>
              </div>
            </div>

            {/* Right: Accordion Job Listings */}
            <div className="col-lg-6 col-md-12 col-sm-12 right-side">
              <ul className="accordion-box">
                {/* Job 1 */}
                <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
                  <div
                    className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(0)}
                  >
                    <div className="icon-outer">
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <h5>Business Consultant</h5>
                  </div>
                  <div className={`acc-content ${activeIndex === 0 ? 'current' : ''}`}>
                    <div className="content-box">
                      <p>
                        Provide strategic and operational support to clients to improve efficiency
                        and compliance.
                      </p>
                      <h4>Responsibilities:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Analyze client processes and propose optimizations</li>
                        <li>Support cross-border business operations</li>
                      </ul>
                      <h4>Qualifications:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Bachelor’s degree in Business or related field</li>
                        <li>Strong analytical and communication skills</li>
                      </ul>
                      <Link href="/contact" className="theme-btn btn-one">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Job 2 */}
                <li className={`accordion block ${activeIndex === 1 ? 'active-block' : ''}`}>
                  <div
                    className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(1)}
                  >
                    <div className="icon-outer">
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <h5>Digital Operations Specialist</h5>
                  </div>
                  <div className={`acc-content ${activeIndex === 1 ? 'current' : ''}`}>
                    <div className="content-box">
                      <p>
                        Manage and maintain internal web platforms and integrations that support
                        international e-commerce activities.
                      </p>
                      <h4>Responsibilities:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Maintain and optimize internal web tools</li>
                        <li>Coordinate with international partners</li>
                      </ul>
                      <h4>Qualifications:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Experience in web platform management</li>
                        <li>Familiarity with e-commerce systems</li>
                      </ul>
                      <Link href="/contact" className="theme-btn btn-one">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Job 3 */}
                <li className={`accordion block ${activeIndex === 2 ? 'active-block' : ''}`}>
                  <div
                    className={`acc-btn ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(2)}
                  >
                    <div className="icon-outer">
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <h5>Compliance Analyst</h5>
                  </div>
                  <div className={`acc-content ${activeIndex === 2 ? 'current' : ''}`}>
                    <div className="content-box">
                      <p>
                        Ensure clients and internal operations comply with regulations and
                        standards.
                      </p>
                      <h4>Responsibilities:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Conduct compliance audits and reviews</li>
                        <li>Provide recommendations to improve processes</li>
                      </ul>
                      <h4>Qualifications:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Knowledge of compliance regulations</li>
                        <li>Detail-oriented with strong reporting skills</li>
                      </ul>
                      <Link href="/contact" className="theme-btn btn-one">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Job 4 */}
                <li className={`accordion block ${activeIndex === 3 ? 'active-block' : ''}`}>
                  <div
                    className={`acc-btn ${activeIndex === 3 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(3)}
                  >
                    <div className="icon-outer">
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <h5>Project Coordinator</h5>
                  </div>
                  <div className={`acc-content ${activeIndex === 3 ? 'current' : ''}`}>
                    <div className="content-box">
                      <p>Coordinate and manage projects across our international client base.</p>
                      <h4>Responsibilities:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Track project milestones and deliverables</li>
                        <li>Communicate with clients and internal teams</li>
                      </ul>
                      <h4>Qualifications:</h4>
                      <ul className="list-style-one clearfix">
                        <li>Project management experience</li>
                        <li>Strong organizational and communication skills</li>
                      </ul>
                      <Link href="/contact" className="theme-btn btn-one">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* APPLY FORM SECTION */}
      {/* ====================================================== */}
      <section className="contact-section bg-color-1">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            {/* Form */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title">
                  <h5>Apply Job</h5>
                  <h2>Apply For Career</h2>
                </div>
                <div className="form-inner">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Application submitted!');
                    }}
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="username" placeholder="Your Name" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Email address" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="phone" placeholder="Phone" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button className="theme-btn btn-one" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div
                className="image-box wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="3000ms"
              >
                <figure className="image">
                  <Image
                    src="/assets/images/resource/contact-1.jpg"
                    alt="Career at Matrixcel"
                    width={570}
                    height={500}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* NEWSLETTER SECTION */}
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