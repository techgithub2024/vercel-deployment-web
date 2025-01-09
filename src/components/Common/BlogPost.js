import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import BlogImg1 from "../../images/blog-image/blog1.jpg"
import BlogImg2 from "../../images/blog-image/blog2.jpg"
import BlogImg3 from "../../images/blog-image/blog3.jpg"

const BlogPost = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
            Grow your online business with our expert insights. Find actionable tips, case studies, and the latest industry trends in our blog.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg1} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                    Streamlining Success: Leveraging the Power of SEO Automation Tools
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">Admin</Link>
                  </span>

                  <p>
                  As search engine optimization (SEO) grows in complexity, marketers are turning to SEO automation tools to handle repetitive tasks and maximize outcomes. These tools allow businesses to manage SEO campaigns .
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg2} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                    Boost Your Website Search Rankings with These Powerful SEO Chrome Extensions
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">Admin</Link>
                  </span>

                  <p>
                  SEO can often feel like a relentless chase. Google shifts its algorithms constantly, and keeping pace is no small feat. But with the right tools at your fingertips, optimization becomes simpler and more efficient.
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg3} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                    Outshine the Competition with the Best Social Media Marketing Company in Gurgaon
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">John</Link>
                  </span>

                  <p>
                  Social Media Marketing Company in Gurgaon Tired of blending in with the social media crowd? Ready to turn your brand’s online presence into a powerhouse of engagement and influence?
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
