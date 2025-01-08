import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import Partner from "../components/MachineLearning/Partner"
import { Link } from "gatsby"
import AboutImg from "../images/about4.png"
import NavbarStyleFive from "../components/_App/NavbarStyleFive"

const AboutUsPage2 = () => {
  let query = ''; 
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    query = searchParams.get("name");
  }

return (
  <Layout>
    <NavbarStyleFive />

    <PageBanner pageTitle="Careers" />

    <div className="about-area ptb-80">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ml-about-img">
              <img src={AboutImg} alt="About" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ml-about-content">
              <h2>A Culture of Innovation, Collaboration, and Passion</h2>
              <div className="bar"></div>

              <p>
              At Solis Technology, we believe that our people are our greatest asset. We've cultivated a collaborative and supportive environment where everyone feels empowered to contribute their best work. If you're seeking a challenging and rewarding career in a dynamic environment, we encourage you to explore our open positions.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
          <div className="container">
            <div className="section-title">
              <h2>CURRENT JOB OPENINGS</h2>
              <div className="bar"></div>
              {/* <p>
              Transform your business with our branding company, offering tailored strategies in SEO, content marketing, PPC, and more to drive lasting success.
    
              </p> */}
            </div>
    
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  {/* <div className="icon"> */}
                    {/* <Icon.Settings /> */}
                  {/* </div> */}
                  <h3>
                    <Link to="/service-details">Digital Marketing Expert
                    </Link>
                  </h3>
                  <p>
                  We are looking for a creative and results-driven Digital Marketing Expert to elevate our online presence and drive growth. If you're passionate about crafting innovative strategies, analyzing data, and achieving measurable results, we want you!
                  </p>
                  <div className="others-option">
                                <Link to="/service-details?jd=dme" className="btn btn-gradient">
                                  APPLY
                                </Link>
                              </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <h3>
                    <Link to="/service-details">  Graphic Designer </Link>
                  </h3>
                  <p>
                  We’re on the lookout for a talented and innovative Graphic Designer to bring fresh ideas to life and create visually stunning designs. If you have a passion for design, creativity, and attention to detail, we want you!
                  </p>
                  <div className="others-option">
                                <Link to="/service-details" className="btn btn-gradient">
                                  APPLY
                                </Link>
                              </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <h3>
                    <Link to="/service-details">Content Writer</Link>
                  </h3>
                  <p>
                  We’re seeking a skilled and creative Content Writer to craft compelling, high-quality content that engages and informs. If you have a passion for writing and a knack for storytelling, we want you! . Feel free to include your thought in your content.
                  </p>
                  <div className="others-option">
                                <Link to="/service-details" className="btn btn-gradient">
                                  APPLY
                                </Link>
                              </div>
                   {/* <li className="nav-item">
                                    <Link
                                      to="/contact"
                                      activeClassName="active"
                                      className="nav-link"
                                    >
                                      Contact
                                    </Link>
                                  </li> */}
                </div>
              </div>
    
              {/* <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <div className="icon bg-c679e3">
                    <Icon.Grid />
                  </div>
                  <h3>
                    <Link to="/service-details">	
                    Content Marketing Service</Link>
                  </h3>
                  <p>
                  We provide expert content marketing services, crafting engaging, high-quality content tailored to your brand. Our solutions enhance digital marketing efforts, boost visibility, drive conversions, and establish your brand as an industry leader through impactful, audience-focused strategies.
                  </p>
                </div>
              </div> */}
    
              {/* <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <div className="icon bg-c679e3">
                    <Icon.Info />
                  </div>
                  <h3>
                    <Link to="/service-details">Lead Generation</Link>
                  </h3>
                  <p>
                  We specialize in B2B lead generation, utilizing advanced strategies and tools to deliver high-quality prospects. As one of the best lead generation companies, we help businesses grow by enhancing sales efficiency and accelerating growth.
                  </p>
                </div>
              </div> */}
    
              {/* <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <div className="icon bg-c679e3">
                    <Icon.HardDrive />
                  </div>
                  <h3>
                    <Link to="/service-details">Email Marketing</Link>
                  </h3>
                  <p>
                  As an expert email campaign agency, we craft personalized, engaging email marketing strategies to boost sales, retention, and brand awareness. Our services ensure impactful, optimized campaigns, delivering measurable results for your business.
                  </p>
                </div>
              </div>
     */}
              {/* <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <div className="icon bg-eb6b3d">
                    <Icon.MousePointer />
                  </div>
                  <h3>
                    <Link to="/service-details">Budget & planning</Link>
                  </h3>
                  <p>
                  We provide cost-effective marketing strategies tailored to maximize your digital marketing budget, ensuring optimal results. Our budget and planning approach ensures efficient allocation, delivering measurable ROI while meeting your business goals effectively.
                  </p>
                </div>
              </div> */}
{/*     
              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                  <div className="icon bg-eb6b3d">
                    <Icon.Bell />
                  </div>
                  <h3>
                    <Link to="/service-details">Marketing Roadmap</Link>
                  </h3>
                  <p>
                  Our Marketing Roadmap integrates SEO, content, and social media strategies to boost visibility and conversions, while the Sales Strategy Roadmap optimizes lead generation and customer retention, aligning marketing and sales for sustained business growth.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

    {/* <Team /> */}

    {/* <FeedbackStyleFour /> */}

    {/* <FunFactsArea /> */}

    {/* <div className="pb-80">
      <Partner />
    </div> */}

    <Footer />
  </Layout>
)
}
export const Head = () => <Seo title="About Us" />

export default AboutUsPage2
