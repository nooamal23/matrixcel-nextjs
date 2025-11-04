// app/about/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import ClientsSection from '@/components/ClientsSection';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE TITLE */}
      {/* ====================================================== */}
      <section
        className="page-title centred"
        style={{ backgroundImage: 'url(/assets/images/background/page-title-3.jpg)' }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>About Us</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ABOUT SECTION */}
      {/* ====================================================== */}
      <section className="about-section about-page pb-0">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              {/* Image Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_2">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/resource/about-1.jpg"
                        alt="Jessica Blake - 20 Years Experience"
                        width={570}
                        height={650}
                      />
                    </figure>
                    <div
                      className="text wow fadeInLeft animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <h2>20</h2>
                      <h4>Years of <br />Experience</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_3">
                  <div className="content-box">
                    <div className="sec-title">
                      <h5>About</h5>
                      <h2>Hi, I’m Jessica Blake</h2>
                    </div>
                    <div className="text">
                      <p>
                        Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et
                        dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco
                        laboris aliquip ex ea commodo consequat duis aute irure.
                      </p>
                      <p>
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat.
                      </p>
                    </div>
                    <ul className="list clearfix">
                      <li>consectetur elit sed do eius</li>
                      <li>consectetur elit sed</li>
                    </ul>
                    <div className="btn-box">
                      <Link href="/contact" className="theme-btn btn-one">
                        Contact With Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SERVICES CAROUSEL (Feature Style 3) */}
      {/* ====================================================== */}
      <section className="feature-style-three centred pb-110">
        <div className="auto-container">
          <div className="sec-title">
            <h5>Our Services</h5>
            <h2>Business Consulting Solutions</h2>
          </div>

          <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
            {/* Service 1 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-1"></i>
                </div>
                <h4>Process Optimization</h4>
                <p>
                  We help organizations streamline operations, reduce inefficiencies, and improve
                  overall productivity.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-26"></i>
                </div>
                <h4>Compliance Management</h4>
                <p>
                  Our experts ensure your business meets all regulatory requirements and maintains
                  transparency.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-21"></i>
                </div>
                <h4>Digital Integration</h4>
                <p>
                  We develop advanced web platforms and tools to support your cross-border
                  operations and e-commerce.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-1"></i>
                </div>
                <h4>Strategic Advisory</h4>
                <p>
                  We provide data-driven strategies that guide business growth and long-term
                  decision making.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-26"></i>
                </div>
                <h4>Cross-Border Coordination</h4>
                <p>
                  Supporting international projects and collaborations to ensure smooth operations
                  globally.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="feature-block-two">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-21"></i>
                </div>
                <h4>Training & Workshops</h4>
                <p>
                  We offer corporate training programs designed to upskill teams and enhance
                  business efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA SECTION */}
      {/* ====================================================== */}
      <section
        className="cta-section alternate-2 pb-240 centred"
        style={{ backgroundImage: 'url(/assets/images/background/cta-1.jpg)' }}
      >
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="text">
              <h2>
                Need Expert Business Advice or <br />
                Support for Your Organization?
              </h2>
            </div>
            <div className="btn-box">
              <Link href="/services" className="theme-btn btn-three">
                Explore Our Services
              </Link>
              <Link href="/contact" className="theme-btn btn-one">
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FUN FACTS */}
      {/* ====================================================== */}
      <section className="funfact-section centred">
        <div className="auto-container">
          <div
            className="inner-container wow slideInLeft animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="50">
                        0
                      </span>
                    </div>
                    <p>Total Experts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="120">
                        0
                      </span>
                    </div>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="85">
                        0
                      </span>
                    </div>
                    <p>Clients Served</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="10">
                        0
                      </span>
                    </div>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TESTIMONIALS (Style 4) */}
      {/* ====================================================== */}
      <section className="testimonial-style-four sec-pad centred">
        <div className="auto-container">
          <div className="sec-title">
            <h5>Testimonials</h5>
            <h2>What Our Clients Say About Us</h2>
            <p>
              We help businesses achieve efficiency, growth, and transparency through structured,
              data-driven solutions.
            </p>
          </div>

          <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
            {/* Testimonial 1 */}
            <div className="testimonial-block-three">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-18"></i>
                </div>
                <h4>
                  “Matrixcel helped streamline our processes and improved cross-border coordination
                  significantly.”
                </h4>
                <h5>Sarah Johnson</h5>
                <span className="designation">Operations Manager</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-block-three">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-18"></i>
                </div>
                <h4>
                  “Their team provided actionable insights that boosted our efficiency and
                  transparency.”
                </h4>
                <h5>David Smith</h5>
                <span className="designation">CEO</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-block-three">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-18"></i>
                </div>
                <h4>
                  “The digital platforms they developed have been essential for our international
                  e-commerce activities.”
                </h4>
                <h5>Linda Brown</h5>
                <span className="designation">Head of Digital Operations</span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-block-three">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-18"></i>
                </div>
                <h4>
                  “Professional, responsive, and highly knowledgeable – Matrixcel delivers every
                  time.”
                </h4>
                <h5>Michael Lee</h5>
                <span className="designation">Business Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CLIENTS & TEAM (Reusable) */}
      {/* ====================================================== */}
      <ClientsSection />
      <TeamSection />
    </>
  );
}