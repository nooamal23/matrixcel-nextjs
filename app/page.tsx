// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <>
      {/* ====================================================== */}
      {/* BANNER SECTION */}
      {/* ====================================================== */}
      <section
        className="banner-section"
        style={{ backgroundImage: 'url(/assets/images/banner/banner-1.jpg)' }}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="content-box centred">
              <h2>Empowering Growth Through Smart Business Solutions</h2>
              <p>
                Matrixcel Business Ltd — Transforming visions into sustainable success through
                innovation, strategy, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CATEGORY SECTION */}
      {/* ====================================================== */}
      <section className="category-section centred">
        <div className="auto-container">
          <div
            className="inner-container wow slideInLeft animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <ul className="category-list clearfix">
              <li>
                <div className="category-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-1"></i>
                    </div>
                    <h5>
                      <a href="#">Business Consulting</a>
                    </h5>
                    <span>12</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="category-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-2"></i>
                    </div>
                    <h5>
                      <a href="#">Process Optimization</a>
                    </h5>
                    <span>08</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="category-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-3"></i>
                    </div>
                    <h5>
                      <a href="#">Compliance Management</a>
                    </h5>
                    <span>15</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="category-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-4"></i>
                    </div>
                    <h5>
                      <a href="#">Digital Solutions</a>
                    </h5>
                    <span>09</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="category-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-5"></i>
                    </div>
                    <h5>
                      <a href="#">Cross-Border Coordination</a>
                    </h5>
                    <span>05</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FEATURED SERVICES SECTION */}
      {/* ====================================================== */}
      <section className="feature-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred">
            <h5>Our Services</h5>
            <h2>Featured Solutions</h2>
            <p>
              Matrixcel Business provides strategic, operational, and digital solutions to help your
              organization achieve efficiency and growth.
            </p>
          </div>

          <div className="row clearfix">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/feature/feature-1.jpg"
                        alt="Business Consulting"
                        width={370}
                        height={250}
                      />
                    </figure>
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <span className="category">Featured</span>
                  </div>
                  <div className="lower-content">
                    <div className="author-info clearfix">
                      <div className="author pull-left">
                        <figure className="author-thumb">
                          <Image
                            src="/assets/images/feature/author-1.jpg"
                            alt="Matrixcel Team"
                            width={50}
                            height={50}
                          />
                        </figure>
                        <h6>Matrixcel Team</h6>
                      </div>
                    </div>
                    <div className="title-text">
                      <h4>
                        <a href="#">Business Consulting</a>
                      </h4>
                    </div>
                    <p>
                      Providing strategic guidance to optimize operations and drive sustainable
                      growth for your business.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-two">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/feature/feature-2.jpg"
                        alt="Process Optimization"
                        width={370}
                        height={250}
                      />
                    </figure>
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <span className="category">Featured</span>
                  </div>
                  <div className="lower-content">
                    <div className="author-info clearfix">
                      <div className="author pull-left">
                        <figure className="author-thumb">
                          <Image
                            src="/assets/images/feature/author-2.jpg"
                            alt="Matrixcel Team"
                            width={50}
                            height={50}
                          />
                        </figure>
                        <h6>Matrixcel Team</h6>
                      </div>
                    </div>
                    <div className="title-text">
                      <h4>
                        <a href="#">Process Optimization</a>
                      </h4>
                    </div>
                    <p>
                      Streamlining your business processes to reduce costs, improve efficiency, and
                      ensure compliance.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-two">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/feature/feature-3.jpg"
                        alt="Digital Solutions"
                        width={370}
                        height={250}
                      />
                    </figure>
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <span className="category">Featured</span>
                  </div>
                  <div className="lower-content">
                    <div className="author-info clearfix">
                      <div className="author pull-left">
                        <figure className="author-thumb">
                          <Image
                            src="/assets/images/feature/author-3.jpg"
                            alt="Matrixcel Team"
                            width={50}
                            height={50}
                          />
                        </figure>
                        <h6>Matrixcel Team</h6>
                      </div>
                    </div>
                    <div className="title-text">
                      <h4>
                        <a href="#">Digital Solutions</a>
                      </h4>
                    </div>
                    <p>
                      Developing and integrating advanced digital platforms to support international
                      e-commerce and business operations.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-two">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="more-btn centred">
            <a href="#" className="theme-btn btn-one">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* VIDEO SECTION */}
      {/* ====================================================== */}
      <section
        className="video-section centred"
        style={{ backgroundImage: 'url(/assets/images/background/video-1.jpg)' }}
      >
        <div className="auto-container">
          <div className="video-inner">
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                className="lightbox-image"
                data-caption=""
              >
                <i className="icon-17"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DEALS / PROJECTS SECTION */}
      {/* ====================================================== */}
      <section className="deals-section sec-pad">
        <div className="auto-container">
          <div className="sec-title">
            <h5>Featured Solutions</h5>
            <h2>Our Top Projects</h2>
          </div>

          <div className="deals-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            {/* Project 1 */}
            <div className="single-item">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="deals-block-one">
                    <div className="inner-box">
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                      <span className="category">Business Consulting</span>
                      <div className="lower-content">
                        <div className="title-text">
                          <h4>
                            <a href="#">Operational Optimization for UK Client</a>
                          </h4>
                        </div>
                        <p>
                          We provided strategic guidance and operational support to improve
                          efficiency and transparency in cross-border business operations.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-one">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/resource/deals-1.jpg"
                        alt="Business Consulting Project"
                        width={570}
                        height={380}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="single-item">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="deals-block-one">
                    <div className="inner-box">
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                      <span className="category">Process Optimization</span>
                      <div className="lower-content">
                        <div className="title-text">
                          <h4>
                            <a href="#">Digital Workflow Implementation</a>
                          </h4>
                        </div>
                        <p>
                          Implemented digital tools to streamline processes, enhance compliance,
                          and reduce operational overhead for a partner company.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-one">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/resource/deals-2.jpg"
                        alt="Process Optimization Project"
                        width={570}
                        height={380}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="single-item">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="deals-block-one">
                    <div className="inner-box">
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                      <span className="category">Digital Solutions</span>
                      <div className="lower-content">
                        <div className="title-text">
                          <h4>
                            <a href="#">E-commerce Platform Integration</a>
                          </h4>
                        </div>
                        <p>
                          Developed and maintained internal web platforms supporting international
                          e-commerce activities for partners, ensuring efficiency and scalability.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="theme-btn btn-one">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src="/assets/images/resource/deals-3.jpg"
                        alt="Digital Solutions Project"
                        width={570}
                        height={380}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TESTIMONIALS SECTION */}
      {/* ====================================================== */}
      <section className="testimonial-section bg-color-1 centred">
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-1.png)' }}
        ></div>
        <div className="auto-container">
          <div className="sec-title">
            <h5>Testimonials</h5>
            <h2>What Our Clients Say</h2>
          </div>

          <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            {/* Testimonial 1 */}
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <Image
                    src="/assets/images/resource/testimonial-1.jpg"
                    alt="Rebeka Dawson"
                    width={100}
                    height={100}
                  />
                </figure>
                <div className="text">
                  <p>
                    Matrixcel helped us streamline our operations and improve efficiency across
                    multiple departments. Their team is professional, responsive, and highly
                    knowledgeable.
                  </p>
                </div>
                <div className="author-info">
                  <h4>Rebeka Dawson</h4>
                  <span className="designation">Operations Manager</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <Image
                    src="/assets/images/resource/testimonial-2.jpg"
                    alt="Marc Kenneth"
                    width={100}
                    height={100}
                  />
                </figure>
                <div className="text">
                  <p>
                    Thanks to Matrixcel’s consulting services, our cross-border projects are now
                    running smoothly. Their expertise in compliance and process optimization is
                    unmatched.
                  </p>
                </div>
                <div className="author-info">
                  <h4>Marc Kenneth</h4>
                  <span className="designation">Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* WHY CHOOSE US SECTION */}
      {/* ====================================================== */}
      <section className="chooseus-section">
        <div className="auto-container">
          <div className="inner-container bg-color-2">
            <div className="upper-box clearfix">
              <div className="sec-title light">
                <h5>Why Choose Us?</h5>
                <h2>Reasons To Partner With Matrixcel</h2>
              </div>
            </div>
            <div className="lower-box">
              <div className="row clearfix">
                {/* Reason 1 */}
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-19"></i>
                      </div>
                      <h4>Proven Expertise</h4>
                      <p>
                        Our team brings extensive experience in business consulting, process
                        optimization, and compliance management.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-26"></i>
                      </div>
                      <h4>Tailored Solutions</h4>
                      <p>
                        We provide customized strategies and digital solutions to meet your
                        organization’s unique needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-21"></i>
                      </div>
                      <h4>Reliable Support</h4>
                      <p>
                        From operational guidance to cross-border coordination, we ensure your
                        projects run smoothly and efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TEAM SECTION (Reusable) */}
      {/* ====================================================== */}
      <TeamSection />
    </>
  );
}