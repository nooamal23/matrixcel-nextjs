// components/TeamSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="team-section sec-pad centred bg-color-1">
      {/* Background Pattern */}
      <div
        className="pattern-layer"
        style={{ backgroundImage: 'url(/assets/images/shape/shape-1.png)' }}
      ></div>

      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title">
          <h5>Our Agents</h5>
          <h2>Meet Our Excellent Agents</h2>
        </div>

        {/* Owl Carousel */}
        <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
          {/* Agent 1 */}
          <div className="team-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/team/team-1.jpg"
                  alt="Merrie Lewis"
                  width={270}
                  height={300}
                  className="img-fluid"
                />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h4>
                    <Link href="/agents-details">Merrie Lewis</Link>
                  </h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://google.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="team-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/team/team-2.jpg"
                  alt="Parks Missie"
                  width={270}
                  height={300}
                />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h4>
                    <Link href="/agents-details">Parks Missie</Link>
                  </h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent 3 */}
          <div className="team-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/team/team-3.jpg"
                  alt="Mariana Buenos"
                  width={270}
                  height={300}
                />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h4>
                    <Link href="/agents-details">Mariana Buenos</Link>
                  </h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent 4 */}
          <div className="team-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/team/team-4.jpg"
                  alt="Stephen Fowler"
                  width={270}
                  height={300}
                />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h4>
                    <Link href="/agents-details">Stephen Fowler</Link>
                  </h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent 5 */}
          <div className="team-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/team/team-5.jpg"
                  alt="Daisy Phillips"
                  width={270}
                  height={300}
                />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h4>
                    <Link href="/agents-details">Daisy Phillips</Link>
                  </h4>
                  <span className="designation">Senior Agent</span>
                  <ul className="social-links clearfix">
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}