// app/blog/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BlogListPage() {
  const posts = [
    {
      id: 1,
      title: 'Optimizing Business Processes for Growth',
      author: 'Matrixcel Team',
      authorImg: '/assets/images/news/author-1.jpg',
      date: 'October 21, 2025',
      img: '/assets/images/news/news-1.jpg',
      excerpt:
        'Discover how Matrixcel helps companies enhance efficiency and reduce operational costs through structured process optimization frameworks.',
    },
    {
      id: 2,
      title: 'Compliance Management Made Simple',
      author: 'Matrixcel Insights',
      authorImg: '/assets/images/news/author-2.jpg',
      date: 'October 10, 2025',
      img: '/assets/images/news/news-2.jpg',
      excerpt:
        'Learn how our team supports UK businesses in achieving transparency and compliance across complex regulatory environments.',
    },
    {
      id: 3,
      title: 'Building Digital Platforms That Empower',
      author: 'Matrixcel Developers',
      authorImg: '/assets/images/news/author-1.jpg',
      date: 'September 28, 2025',
      img: '/assets/images/news/news-3.jpg',
      excerpt:
        'From internal dashboards to e-commerce integrations, our digital operations team ensures reliability, speed, and scalability.',
    },
    {
      id: 4,
      title: 'Coordinating Cross-Border Operations',
      author: 'Matrixcel Business',
      authorImg: '/assets/images/news/author-2.jpg',
      date: 'September 15, 2025',
      img: '/assets/images/news/news-4.jpg',
      excerpt:
        'Our Tunisia-based coordination hub enables seamless collaboration between UK companies and international teams.',
    },
    {
      id: 5,
      title: 'Using Data to Drive Strategic Decisions',
      author: 'Matrixcel Analytics',
      authorImg: '/assets/images/news/author-1.jpg',
      date: 'August 30, 2025',
      img: '/assets/images/news/news-5.jpg',
      excerpt:
        'We transform complex datasets into clear, actionable insights that support long-term business growth and transparency.',
    },
    {
      id: 6,
      title: 'Innovation Through Structured Strategy',
      author: 'Matrixcel Business',
      authorImg: '/assets/images/news/author-2.jpg',
      date: 'August 12, 2025',
      img: '/assets/images/news/news-6.jpg',
      excerpt:
        'We combine strategy, technology, and operational discipline to help our clients achieve sustainable innovation.',
    },
  ];

  return (
    <>
      {/* ====================================================== */}
      {/* PAGE TITLE */}
      {/* ====================================================== */}
      <section
        className="page-title centred"
        style={{ backgroundImage: 'url(/assets/images/background/page-title-5.jpg)' }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>Blog List</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Blog List</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* BLOG GRID */}
      {/* ====================================================== */}
      <section className="blog-list sec-pad-2">
        <div className="auto-container">
          <div className="row clearfix">
            {posts.map((post, index) => (
              <div key={post.id} className="col-lg-6 col-md-12 col-sm-12 news-block">
                <div
                  className={`news-block-two wow fadeIn${
                    index % 2 === 0 ? 'Left' : 'Right'
                  }`}
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box align-items-center">
                    <div className="image-box">
                      <figure className="image">
                        <Link href={`/blog/${post.id}`}>
                          <Image
                            src={post.img}
                            alt={post.title}
                            width={570}
                            height={380}
                            style={{ objectFit: 'cover' }}
                          />
                        </Link>
                      </figure>
                      <Link href={`/blog/${post.id}`} className="feature">
                        Featured
                      </Link>
                    </div>
                    <div className="content-box">
                      <h4>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li className="author-box">
                          <figure className="author-thumb">
                            <Image
                              src={post.authorImg}
                              alt={post.author}
                              width={40}
                              height={40}
                            />
                          </figure>
                          <h5>
                            <Link href={`/blog/${post.id}`}>{post.author}</Link>
                          </h5>
                        </li>
                        <li>{post.date}</li>
                      </ul>
                      <p>{post.excerpt}</p>
                      <div className="btn-box">
                        <Link href={`/blog/${post.id}`} className="theme-btn btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-wrapper">
            <ul className="pagination clearfix">
              <li>
                <a href="#" className="current">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
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