import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import FeedbackStyleThree from "../components/Common/FeedbackStyleThree"
import Partner from "../components/MachineLearning/Partner"

import AboutImg from "../images/agency-image/agency-about-img.jpg"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"
import NavbarStyleFive from "../components/_App/NavbarStyleFive"

const AboutUsPage3 = () => (
  <Layout>
    <NavbarStyleFive />

    <PageBanner pageTitle="About Us" />

    <div className="agency-about-area ptb-80">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="agency-about-img">
              <img src={AboutImg} alt="About" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12" style={{marginBottom : "140px"}}>
            <div className="agency-about-content">
              <span className="sub-title">About Us</span>
              <h2>We Don’t Just Market, We Transform!
              </h2>
              <div className="bar"></div>

              <p>
              We are a digital marketing agency that helps businesses grow digitally. We help businesses of all sizes achieve their marketing goals by providing a full range of digital marketing services. 
              </p>

              <p>
              Our team combines creative expertise with data-driven strategies to enhance your brand visibility, connect with your target audience, and deliver measurable results. At the heart of what we do is a commitment to helping businesses thrive in the fast-paced digital world, ensuring their success at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our History</h3>
                <p>
                Founded with a passion for helping businesses thrive in the digital age, Digital Polaris has evolved into a trusted partner for brands seeking innovative digital marketing solutions. We’ve built a legacy of success through dedication and results.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                Our mission is to empower businesses by providing tailored, data-driven digital marketing strategies that deliver tangible results. We are committed to fostering growth, enhancing brand visibility, and ensuring our clients' success in the ever-evolving digital landscape.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Who We Are</h3>
                <p>
                We are a dynamic team of digital marketing professionals, blending creativity with technical expertise. Our diverse backgrounds and skillsets allow us to approach challenges from multiple angles, ensuring we deliver the best solutions for every client.
                </p>
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
      <div className="shape7">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </div>

    {/* <Team /> */}

    {/* <FeedbackStyleThree /> */}

    {/* <FunFactsArea /> */}

    {/* <div className="pb-80">
      <Partner />
    </div> */}

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage3
