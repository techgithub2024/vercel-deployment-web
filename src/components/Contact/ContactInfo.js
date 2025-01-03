import React from "react"
import * as Icon from "react-feather"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
    
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>USA</h3>
                
                <p>
                253 S Broadway, Hicksville, NY, United States, New York
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>INDIA </h3>
                <p>
                Ground Floor, Plot No 127, Sector 44, Gurugram, Haryana 122003
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919654160160">+91 9654 160 160</a>
                </p>
                <p>
                  <a href="mailto:info@digitalpolaris.com">info@digitalpolaris.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
