import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/final_logo.png"
import MapImg from "../../images/map.png"
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="logo"  width={60}  height={40} />
                  </Link>
                </div>
                <p >
                Digital Polaris is a leading digital marketing agency dedicated to helping businesses of all sizes achieve their online goals.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-3">About</Link>
                  </li>
                  <li>
                    <Link to="/coming-soon">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about-2">Career</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="list">
                  <li>
        
                    <Link to="/services-2/?name=brand_building">Brand Building</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=lead_Generation">Performance and Lead Generation</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=business_Solutions">Business Solutions</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=marketplace_Management">Marketplace Management</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=ecommerce_Solutions">E-commerce Solutions</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=digital_Arts">Digitals Art and VFX</Link>
                  </li>
                  <li>
                    <Link to="/services-2/?name=ar_vr_Solutions">AR AND VR SOLUTIONS</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    Head Office : Ground Floor, <br /> Plot No 127, Sector 44, <br/>
                    Gurugram, Haryana 122003
                  </li>
                  <li>
                    <Icon.Mail />
                    Email: <a href="mailto:spet@gmail.com">info@digitalpolaris.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+91 9654160160</a>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/digitalpolaris"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/DigitalPolaris1"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/digital_polaris/"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/digitalpolaris/"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                © {currentYear}, Solis Technologies Pvt. Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={MapImg} className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
