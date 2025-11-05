// app/signin/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState('client');

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
            <h1>Sign In</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SIGN IN FORM (TABS) */}
      {/* ====================================================== */}
      <section className="ragister-section centred sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-8 col-lg-12 col-md-12 offset-xl-2 big-column">
              <div className="sec-title">
                <h5>Sign in</h5>
                <h2>Sign In With Matrixcel</h2>
              </div>

              <div className="tabs-box">
                {/* Tab Buttons */}
                <div className="tab-btn-box">
                  <ul className="tab-btns tab-buttons centred clearfix">
                    <li
                      className={`tab-btn ${activeTab === 'client' ? 'active-btn' : ''}`}
                      onClick={() => setActiveTab('client')}
                      style={{ cursor: 'pointer' }}
                    >
                      Client
                    </li>
                    <li
                      className={`tab-btn ${activeTab === 'user' ? 'active-btn' : ''}`}
                      onClick={() => setActiveTab('user')}
                      style={{ cursor: 'pointer' }}
                    >
                      User
                    </li>
                  </ul>
                </div>

                {/* Tab Content */}
                <div className="tabs-content">
                  {/* client Tab */}
                  <div className={`tab ${activeTab === 'client' ? 'active-tab' : ''}`} id="tab-1">
                    <div className="inner-box">
                      <h4>Sign in</h4>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          alert('client signed in!');
                        }}
                        className="default-form"
                      >
                        <div className="form-group">
                          <label>Client name</label>
                          <input type="text" name="name" required />
                        </div>
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" required />
                        </div>
                        <div className="form-group message-btn">
                          <button type="submit" className="theme-btn btn-one">
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="othre-text">
                        <p>
                          Have not any account?{' '}
                          <Link href="/auth/signup">Register Now</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* User Tab */}
                  <div className={`tab ${activeTab === 'user' ? 'active-tab' : ''}`} id="tab-2">
                    <div className="inner-box">
                      <h4>Sign in</h4>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          alert('User signed in!');
                        }}
                        className="default-form"
                      >
                        <div className="form-group">
                          <label>User name</label>
                          <input type="text" name="name" required />
                        </div>
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" required />
                        </div>
                        <div className="form-group message-btn">
                          <button type="submit" className="theme-btn btn-one">
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="othre-text">
                        <p>
                          Have not any account?{' '}
                          <Link href="/signup">Register Now</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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