// app/contact/page.tsx
'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE TITLE */}
      {/* ====================================================== */}
      <section
        className="page-title centred"
        style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>Contact Us</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACT INFO SECTION */}
      {/* ====================================================== */}
      <section className="contact-info-section sec-pad centred">
        <div className="auto-container">
          <div className="sec-title">
            <h5>Contact us</h5>
            <h2>Get In Touch</h2>
          </div>
          <div className="row clearfix">
            {/* Email */}
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-32"></i>
                  </div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <br />
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-33"></i>
                  </div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:+23055873407">+2(305) 587-3407</a>
                    <br />
                    <a href="tel:+23055873408">+2(305) 587-3408</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-34"></i>
                  </div>
                  <h4>Office Address</h4>
                  <p>
                    214 West Arnold St. New York, <br />
                    NY 10002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACT FORM + MAP */}
      {/* ====================================================== */}
      <section className="contact-section bg-color-1">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            {/* Form */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title">
                  <h5>Contact</h5>
                  <h2>Contact Us</h2>
                </div>
                <div className="form-inner">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Message sent!');
                    }}
                    id="contact-form"
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

            {/* Map */}
            <div className="col-lg-6 col-md-12 col-sm-12 map-column">
              <div className="google-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.987319684593!3d40.748656779329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117463%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1698082728303!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Matrixcel Office Location"
                ></iframe>
              </div>
            </div>
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