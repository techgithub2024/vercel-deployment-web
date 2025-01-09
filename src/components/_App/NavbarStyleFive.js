import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/agency-image/final_logo.png"

const NavbarStyleFive = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom navbar-style-three ">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/digital-agency"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" width={130}/>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/digital-agency" 
                    className="nav-link"
                  >
                    Home 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    About <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/about-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                         WHO WE ARE 
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/ourmission"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        OUR MISSION
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/ourhistory"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link">
                     OUR HISTORY
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Services <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=brand_building"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Brand Building 
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=lead_Generation"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Peformance & Lead Generation
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=business_Solutions"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                       Business Solutions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=marketplace_Management"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Marketplace Management
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=ecommerce_Solutions"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                       E-commerce Solutions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=digital_Arts"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Digitals Arts & VFX
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-2?name=ar_vr_Solutions"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        AR & VR Solutions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog-1"
                    
                    className="nav-link"
                  >
                   Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about-2"
                    className="nav-link"
                  >
                   Career
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link to="/contact" className="btn btn-gradient">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavbarStyleFive
