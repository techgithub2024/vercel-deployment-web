import React from "react"
import { Link } from "gatsby"

const CTAStyleTwo = () => {
  return (
    <>
      <div className="agency-cta-area ptb-80">
        <div className="container">
          <div className="agency-cta-content">
            <h2>Ready to Elevate Your Digital Presence?</h2>

            <Link to="/contact" className="btn btn-gradient">
            Schedule a free consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTAStyleTwo
