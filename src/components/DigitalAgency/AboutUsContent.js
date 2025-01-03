import React from "react"
import { Link } from "gatsby"

import AgencyAboutImg from "../../images/agency-image/final_why.jpg"
import AgencyAboutImg1 from "../../images/agency-image/3rd_image.jpg"


// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/agency-image/agency-shape2.png"

const AboutUsContent = () => {
  return (
    <>
      <div className="agency-about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <img src={AgencyAboutImg1} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
                <span className="sub-title">About Us</span>
                <h2>We Don’t Just Market, We Transform!</h2>
                <div className="bar"></div>
                <p>
                We are a digital marketing agency that helps businesses grow digitally. We help businesses of all sizes achieve their marketing goals by providing a full range of digital marketing services. 
                </p>
                <p>
                Our team combines creative expertise with data-driven strategies to enhance your brand visibility, connect with your target audience, and deliver measurable results. At the heart of what we do is a commitment to helping businesses thrive in the fast-paced digital world, ensuring their success at every step.
                </p>

                <Link to="/about" className="btn btn-secondary">
                  Discover More
                </Link>
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
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape10">
          <img src={Shape5} alt="Shap" />
        </div>
      </div>
      <div className="agency-about-area" style={{ marginTop: '100px' }}>
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* Content on the left */}
      <div className="col-lg-6 col-md-12 order-lg-1 order-md-1">
  <div style={{ marginLeft: '80px' }}>
    <div className="agency-about-content">
      <span className="sub-title">Why Choose Us</span>

      <div className="bar"></div>
      <p>
      By partnering with us, you gain access to a comprehensive suite of digital marketing services designed to enhance your online visibility, attract new customers, and drive business growth. 
      </p>
      <p>
      We help you build a strong online presence, increase brand awareness, generate high-quality leads, and ultimately boost your revenue. Our data-driven approach ensures that your campaigns are targeted, effective, and deliver measurable results. We're committed to providing exceptional customer service and exceeding your expectations.
      </p>
      <Link to="/about" className="btn btn-secondary">
        Discover More
      </Link>
    </div>
  </div>
</div>
      {/* Image on the right */}
      <div className="col-lg-6 col-md-12 order-lg-2 order-md-2">
        <div className="agency-about-img">
          <img src={AgencyAboutImg} alt="About" />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutUsContent
