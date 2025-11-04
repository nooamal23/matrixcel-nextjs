// components/ClientsSection.tsx
'use client';

import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="clients-section bg-color-1">
      {/* Background Pattern */}
      <div
        className="pattern-layer"
        style={{ backgroundImage: 'url(/assets/images/shape/shape-1.png)' }}
      ></div>

      <div className="auto-container">
        <div className="row clearfix">
          {/* Title Column */}
          <div className="col-lg-4 col-md-12 col-sm-12 title-column">
            <div className="sec-title">
              <h5>Our Partners</h5>
              <h2>Building Long-Term Business Relationships</h2>
            </div>
          </div>

          {/* Logos Column */}
          <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
            <div className="clients-logo">
              <ul className="logo-list clearfix">
                <li>
                  <figure className="logo">
                    <a href="#" aria-label="Partner 1">
                      <Image
                        src="/assets/images/clients/clients-1.png"
                        alt="Partner 1"
                        width={140}
                        height={80}
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure className="logo">
                    <a href="#" aria-label="Partner 2">
                      <Image
                        src="/assets/images/clients/clients-2.png"
                        alt="Partner 2"
                        width={140}
                        height={80}
                      />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure className="logo">
                    <a href="#" aria-label="Partner 3">
                      <Image
                        src="/assets/images/clients/clients-3.png"
                        alt="Partner 3"
                        width={140}
                        height={80}
                      />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure className="logo">
                    <a href="#" aria-label="Partner 4">
                      <Image
                        src="/assets/images/clients/clients-4.png"
                        alt="Partner 4"
                        width={140}
                        height={80}
                      />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure className="logo">
                    <a href="#" aria-label="Partner 5">
                      <Image
                        src="/assets/images/clients/clients-5.png"
                        alt="Partner 5"
                        width={140}
                        height={80}
                      />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}