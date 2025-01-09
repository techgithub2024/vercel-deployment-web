import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link } from "gatsby"

import BlogImg1 from "../images/blog-image/blog1.jpg"
import BlogImg2 from "../images/blog-image/blog2.jpg"
import BlogImg3 from "../images/blog-image/blog3.jpg"
import BlogImg4 from "../images/blog-image/blog4.jpg"
import BlogImg5 from "../images/blog-image/blog5.jpg"
import BlogImg6 from "../images/blog-image/blog6.jpg"
import NavbarStyleFive from "../components/_App/NavbarStyleFive"

const BlogPage = () => (
  <Layout>
    <NavbarStyleFive />

    <PageBanner pageTitle="Blog Page" />

    <div className="blog-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <Link to="/blog-details">
                  <img src='https://digitalpolaris.com/wp-content/uploads/2024/09/SEO-Automation-Tools.webp' alt="Post" />
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

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <Link to="/blog-details">
                  <img src="https://digitalpolaris.com/wp-content/uploads/2024/09/SEO-Chrome-Extensions.webp" alt="Post" />
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

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <Link to="/blog-details">
                  <img src="https://digitalpolaris.com/wp-content/uploads/2024/08/Social-Media-Marketing-Company-in-Gurgaon-1.jpg" alt="Post" />
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
                  By <Link to="/author">Admin</Link>
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

          {/* Pagination */}
          {/* <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      Prev
                    </Link>
                  </li>

                  <li className="page-item active">
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link to="#" className="page-link">
                      2
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link to="#" className="page-link">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
