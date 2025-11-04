// app/blog/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetailPage() {
  const { id } = useParams();

  // Mock data for dynamic post (in real app: fetch from API or CMS)
  const post = {
    title: 'How Matrixcel Optimizes Business Operations Through Digital Transformation',
    author: 'Matrixcel Team',
    authorImg: '/assets/images/news/author-1.jpg',
    date: 'October 15, 2025',
    image: '/assets/images/news/news-21.jpg',
    content: [
      'At <strong>Matrixcel Business Ltd</strong>, we believe that operational efficiency begins with structured processes and smart digital tools. Our consulting and digital operations teams work hand in hand to streamline workflows, reduce redundancy, and increase transparency across organizations.',
      'From compliance management to process optimization, Matrixcel combines data-driven insights with tailored strategies to help companies operate more effectively—both locally in the UK and through our support center in Tunisia.',
      '<blockquote><h4>“Efficiency is not just about doing things faster — it’s about building systems that make growth sustainable.”</h4></blockquote>',
      'Our in-house digital solutions automate reporting, connect e-commerce systems, and ensure international teams stay aligned in real time. Whether it’s supporting cross-border trade or enhancing internal coordination, Matrixcel provides the tools and expertise to move businesses forward with confidence.',
      'As part of our ongoing innovation efforts, we’re continuously developing web-based platforms that simplify compliance tracking, data visualization, and operational decision-making — helping our partners stay competitive in an increasingly globalized market.',
    ],
    tags: ['Business Consulting', 'Digital Operations', 'Process Optimization', 'Compliance'],
  };

  const comments = [
    {
      name: 'Sarah Mitchell',
      date: 'October 20, 2025',
      image: '/assets/images/news/comment-1.jpg',
      text: 'Great insights! As a business consultant, I found this article very relevant — especially the part about aligning digital tools with compliance processes.',
    },
    {
      name: 'Matrixcel Team',
      date: 'October 21, 2025',
      image: '/assets/images/news/comment-2.jpg',
      text: 'Thank you, Sarah! We always aim to connect operational improvement with measurable digital outcomes — stay tuned for our next article on automation in compliance management.',
      reply: true,
    },
    {
      name: 'David Parker',
      date: 'October 22, 2025',
      image: '/assets/images/news/comment-3.jpg',
      text: 'Really appreciate Matrixcel’s focus on data-driven strategies. Digital transformation isn’t just a trend — it’s becoming essential for competitive business models.',
    },
  ];

  const recentPosts = [
    {
      title: 'How Data-Driven Decisions Improve Compliance',
      date: 'October 10, 2025',
      image: '/assets/images/news/post-1.jpg',
    },
    {
      title: 'Integrating Digital Platforms Across Borders',
      date: 'September 28, 2025',
      image: '/assets/images/news/post-2.jpg',
    },
    {
      title: 'Building Scalable Systems for Global Teams',
      date: 'September 14, 2025',
      image: '/assets/images/news/post-3.jpg',
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
            <h1>Blog Details</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* BLOG DETAIL + SIDEBAR */}
      {/* ====================================================== */}
      <section className="sidebar-page-container blog-details sec-pad-2">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={770}
                          height={400}
                          style={{ objectFit: 'cover' }}
                        />
                      </figure>
                      <span className="category">Featured</span>
                    </div>
                    <div className="lower-content">
                      <h3>{post.title}</h3>
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
                            <Link href={`/blog/${id}`}>{post.author}</Link>
                          </h5>
                        </li>
                        <li>{post.date}</li>
                      </ul>
                      <div className="text">
                        {post.content.map((paragraph, i) => (
                          <div
                            key={i}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                            className="mb-4"
                          />
                        ))}
                      </div>
                      <div className="post-tags">
                        <ul className="tags-list clearfix">
                          <li>
                            <h5>Tags:</h5>
                          </li>
                          {post.tags.map((tag) => (
                            <li key={tag}>
                              <Link href={`/blog?tag=${tag.toLowerCase()}`}>{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments-area">
                  <div className="group-title">
                    <h4>{comments.length} Comments</h4>
                  </div>
                  <div className="comment-box">
                    {comments.map((comment, i) => (
                      <div
                        key={i}
                        className={`comment ${comment.reply ? 'replay-comment' : ''}`}
                      >
                        <figure className="thumb-box">
                          <Image
                            src={comment.image}
                            alt={comment.name}
                            width={60}
                            height={60}
                          />
                        </figure>
                        <div className="comment-inner">
                          <div className="comment-info clearfix">
                            <h5>{comment.name}</h5>
                            <span>{comment.date}</span>
                          </div>
                          <div className="text">
                            <p>{comment.text}</p>
                            <Link href={`/blog/${id}#reply`}>
                              <i className="fas fa-share"></i>Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comment Form */}
                <div className="comments-form-area">
                  <div className="group-title">
                    <h4>Leave a Comment</h4>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Comment submitted!');
                    }}
                    className="comment-form default-form"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="name" placeholder="Your name" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Your email" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="phone" placeholder="Phone number" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" placeholder="Your message"></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button type="submit" className="theme-btn btn-one">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                {/* Search */}
                <div className="sidebar-widget search-widget">
                  <div className="widget-title">
                    <h4>Search</h4>
                  </div>
                  <div className="search-inner">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                        <input
                          type="search"
                          placeholder="Search"
                          required
                          aria-label="Search blog"
                        />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Social */}
                <div className="sidebar-widget social-widget">
                  <div className="widget-title">
                    <h4>Follow Matrixcel</h4>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Categories */}
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h4>Topics</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <Link href="/blog?category=optimization">
                          Business Optimization<span>(6)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog?category=digital">
                          Digital Transformation<span>(4)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog?category=compliance">
                          Compliance<span>(3)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog?category=ecommerce">
                          E-commerce Operations<span>(5)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog?category=automation">
                          Process Automation<span>(2)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h4>Recent Insights</h4>
                  </div>
                  <div className="post-inner">
                    {recentPosts.map((p, i) => (
                      <div key={i} className="post">
                        <figure className="post-thumb">
                          <Link href={`/blog/${i + 1}`}>
                            <Image
                              src={p.image}
                              alt={p.title}
                              width={70}
                              height={70}
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href={`/blog/${i + 1}`}>{p.title}</Link>
                        </h5>
                        <span className="post-date">{p.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title">
                    <h4>Popular Tags</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      {['Business', 'Consulting', 'Digital', 'Operations', 'Compliance', 'Strategy', 'E-commerce'].map((tag) => (
                        <li key={tag}>
                          <Link href={`/blog?tag=${tag.toLowerCase()}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
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