import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

// Blog Post Images
import BlogImg1 from "../../images/blog-image/blog1.jpg"
import BlogImg2 from "../../images/blog-image/blog2.jpg"
import BlogImg3 from "../../images/blog-image/blog3.jpg"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const BlogPostStyleTwo = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Blog</span>
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
            Grow your online business with our expert insights. Find actionable tips, case studies, and the latest industry trends in our blog.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src="https://digitalpolaris.com/wp-content/uploads/2024/09/SEO-Automation-Tools.webp" alt="Blog Post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2023</li>
                  </ul>

                  <h3>
                    <Link to="/blog-details">
                    Streamlining Success: Leveraging the Power of SEO Automation Tools
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-1/">
                    <img src="https://digitalpolaris.com/wp-content/uploads/2024/09/SEO-Chrome-Extensions.webp" alt="Blog Post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2023</li>
                  </ul>

                  <h3>
                    <Link to="/blog-1/">
                    Outshine the Competition with the Best Social Media Marketing Company in Gurgaon
                    </Link>
                  </h3>

                  <Link to="/blog-1/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-1">
                    <img src="https://digitalpolaris.com/wp-content/uploads/2024/08/Social-Media-Marketing-Company-in-Gurgaon-1.jpg" alt="Blog Post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2023</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default BlogPostStyleTwo
