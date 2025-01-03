import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/final_logo.png"

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
    <header id="header" className="headroom navbar-style-three">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/digital-agency"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" width={180}/>
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
                    to="#" 
                    onClick={e => e.preventDefault()}
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
                    About
                  </Link>
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
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        SEO SERVICES
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Social Media Marketing Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Pay Per Click Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Content Marketing Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Web Development Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                       Website Designing Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Magento Development Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Wordpress Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Branding Services
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
                   Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
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
