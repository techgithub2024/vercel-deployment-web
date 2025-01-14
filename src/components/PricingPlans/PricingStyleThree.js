import React, { Component } from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import AgencyShape1 from "../../images/agency-image/agency-shape1.png"

class PricingStyleThree extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    evt.currentTarget.className += "current"
  }

  render() {
    return 
      // <>
      //   <div className="pricing-area pb-50">
      //     <div className="container">
      //       <div className="section-title st-fs-28">
      //         <span className="sub-title">Pricing</span>
      //         <h2>Our Pricing Plan</h2>
      //         <div className="bar"></div>
      //         <p>
      //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //         </p>
      //       </div>

      //       <div className="tab pricing-tab bg-color">
      //         <ul className="tabs">
      //           <li
      //             className="current"
      //             onClick={e => this.openTabSection(e, "tab1")}
      //             aria-hidden="true"
      //           >
      //             Monthly Plan
      //           </li>

      //           <li
      //             onClick={e => this.openTabSection(e, "tab2")}
      //             aria-hidden="true"
      //           >
      //             Yearly Plan <i data-feather="calendar"></i>
      //           </li>
      //         </ul>

      //         <div className="tab_content">
      //           <div id="tab1" className="tabs_item">
      //             <div className="row justify-content-center">
      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Free</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $0 <span>/m</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Get Started Free
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 1000 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>

      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Pro</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $149 <span>/m</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Start 3 Days Free Trial
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 3300 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>

      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Premium</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $179 <span>/m</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Start 6 Days Free Trial
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 10000 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>

      //           <div id="tab2" className="tabs_item">
      //             <div className="row justify-content-center">
      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Free</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $0 <span>/y</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Get Started Free
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 1000 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>

      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Pro</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $249 <span>/y</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Start 3 Days Free Trial
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 3300 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>

      //               <div className="col-lg-4 col-md-6 col-sm-6">
      //                 <div className="pricing-box">
      //                   <div className="pricing-header">
      //                     <h3>Premium</h3>
      //                     <p>
      //                       Get your business up <br /> and running
      //                     </p>
      //                   </div>

      //                   <div className="price">
      //                     $279 <span>/y</span>
      //                   </div>

      //                   <div className="buy-btn">
      //                     <Link to="/login" className="btn btn-primary">
      //                       Start 6 Days Free Trial
      //                     </Link>
      //                   </div>

      //                   <ul className="pricing-features">
      //                     <li>
      //                       <Icon.Check /> Drag & Drop Builder
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Lead Generation & Sales
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Boot & Digital Assistants
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Customer Service
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Up to 10000 Subscribers
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Unlimited Broadcasts
      //                     </li>
      //                     <li>
      //                       <Icon.Check /> Landing Pages & Web Widgets
      //                     </li>
      //                   </ul>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Shape Image */}
      //     <div className="shape9 mobile-dnone">
      //       <img src={AgencyShape1} alt="Shape" />
      //     </div>
      //   </div>
      // </>
  
  }
}

export default PricingStyleThree
