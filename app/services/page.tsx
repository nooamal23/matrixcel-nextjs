// app/services/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import ClientsSection from '@/components/ClientsSection';

export default function ServicesPage() {
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
            <h1>Our Services</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SERVICES GRID (Feature Style 3) */}
      {/* ====================================================== */}
      <section className="feature-style-three service-page centred">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-24"></i>
                  </div>
                  <h4>Business Consulting</h4>
                  <p>Providing strategic and operational guidance to optimize your business processes.</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-25"></i>
                  </div>
                  <h4>Digital Solutions</h4>
                  <p>Developing and maintaining advanced web platforms to support international operations.</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-26"></i>
                  </div>
                  <h4>Cross-Border Coordination</h4>
                  <p>Helping businesses manage compliance and operations across borders efficiently.</p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-27"></i>
                  </div>
                  <h4>Process Optimization</h4>
                  <p>Analyzing workflows and implementing data-driven solutions for maximum efficiency.</p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-28"></i>
                  </div>
                  <h4>Corporate Training</h4>
                  <p>Providing tailored training programs to upskill teams and improve performance.</p>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-two wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-29"></i>
                  </div>
                  <h4>Compliance Management</h4>
                  <p>Ensuring businesses adhere to regulations with streamlined compliance processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TESTIMONIALS (Style 2) */}
      {/* ====================================================== */}
      <section
        className="testimonial-style-two"
        style={{ backgroundImage: 'url(/assets/images/background/testimonial-1.jpg)' }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 inner-column">
              <div className="single-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
                {/* Testimonial 1 */}
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-18"></i>
                    </div>
                    <div className="text">
                      <h3>
                        “Matrixcel helped us streamline our business processes. Their strategic guidance made
                        cross-border coordination seamless and efficient.”
                      </h3>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <Image
                          src="/assets/images/resource/testimonial-1.jpg"
                          alt="Rebeka Dawson"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h4>Rebeka Dawson</h4>
                      <span className="designation">Operations Manager</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-18"></i>
                    </div>
                    <div className="text">
                      <h3>
                        “The team at Matrixcel provided innovative digital solutions that boosted our
                        international e-commerce operations.”
                      </h3>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <Image
                          src="/assets/images/resource/testimonial-2.jpg"
                          alt="Owen Lester"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h4>Owen Lester</h4>
                      <span className="designation">Founder & CEO</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-18"></i>
                    </div>
                    <div className="text">
                      <h3>
                        “Thanks to Matrixcel’s expertise in compliance and process optimization, our operations
                        are now more transparent and efficient than ever.”
                      </h3>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <Image
                          src="/assets/images/resource/testimonial-1.jpg"
                          alt="Marc Kenneth"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h4>Marc Kenneth</h4>
                      <span className="designation">Business Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TEAM & CLIENTS (Reusable) */}
      {/* ====================================================== */}
      <TeamSection />
      <ClientsSection />
    </>
  );
}