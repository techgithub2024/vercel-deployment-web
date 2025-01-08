import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import AgencyIconBG from "../../images/agency-image/agency-icon-bg.png"
import AgencyShape1 from "../../images/agency-image/agency-shape1.png"

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-83" >
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div className="bar"></div>
            <p>
            As a full-service Digital Marketing Agency, we fuel your business growth with brand building, performance marketing, lead generation, automation, and creative solutions. Let us handle your digital strategy!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">BRAND BUILDING </Link>
                </h3>
                <p>
                We offer a full range of digital marketing services to drive growth and maximize ROI, including SEO, SMM, PPC, content marketing, B2B lead generation, email marketing, budget planning, and tailored marketing roadmaps. 
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">PERFORMANCE MARKETING </Link>
                </h3>
                <p>
                Our Performance Marketing and Lead Generation services use data-driven strategies to target the right audience, optimize campaigns, and generate high-quality leads, ensuring measurable results, consistent growth, and a strong ROI for your business.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">BUSINESS SOLUTIONS </Link>
                </h3>
                <p>
                Our business solutions drive efficiency and growth through automation, reporting, and customized strategies, enhancing decision-making, streamlining operations, and empowering your company to stay competitive in a dynamic market.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">ECOMMERCE SOLUTIONS </Link>
                </h3>
                <p>
                Our E-commerce solutions provide seamless websites, customized marketing strategies, and powerful tools to boost customer engagement, enhance operational efficiency, and drive sustainable growth in today's competitive online marketplace.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">MARKETPLACE  MANAGEMENT</Link>
                </h3>
                <p>
                Our marketplace management services optimize product listings, inventory, pricing, and customer engagement to boost visibility, increase sales, streamline operations, and drive business growth for your e-commerce presence.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">LEAD GENERATIONS</Link>
                </h3>
                <p>
                Boost your business with our Lead Generation service, delivering high-quality prospects through tailored strategies. As the best lead generation company, we ensure a steady pipeline of qualified leads to accelerate growth and drive conversions.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">AR AND VR SERVICES </Link>
                </h3>
                <p>
                We provide immersive AR & VR solutions, creating interactive experiences like virtual tours, product demos, and training environments to boost engagement, brand visibility, and foster lasting connections with your audience.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">DIGITAL ARTS AND VFX</Link>
                </h3>
                <p>
                Our Digital Art Services and Visual Effects Services deliver stunning visuals through creative designs, 3D animations, and seamless VFX solutions. Elevate your projects with tailored artistry that transforms ideas into captivating masterpieces.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape9 slow mobile-dnone">
          <img
            src={AgencyShape1}
            className="animate__animated animate__fadeInLeft animate__delay-0.7s"
            alt="Icon"
          />
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
