import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

import ServicesDetails1 from "../images/services-details-image/services-details1.png"
import ServicesDetails2 from "../images/services-details-image/services-details2.png"
import NavbarStyleFive from "../components/_App/NavbarStyleFive"
import ContactForm from "../components/Contact/ContactForm"
import Apply from "../components/Contact/Apply"

const ServiceDetailsPage = () => {
  let query = ''; // Declare globally
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    query = searchParams.get("jd"); 
  }
  const perks = [
    "Health Insurance",
    "Work from Home Option",
    "Performance Bonuses",
    "Flexible Working Hours",
    "Paid Time Off"
  ];

  const additionalInfo = [
    "Experience with Google Ads and Facebook Ads required",
    "Must have a strong analytical mindset",
    "Must have a strong analytical mindset",
  ];
  
  console.log(query)
  let jd, responsibilities;

  if (query === "dme") {
    jd = "DIGITAL MARKETING EXPERT";
    responsibilities = [
      "Develop and implement digital marketing strategies.",
      "Manage social media accounts and campaigns.",
      "Analyze and report on performance metrics."
    ];
  } else if (query === "gd") {
    jd = "GRAPHIC DESIGNER";
    responsibilities = [
      "Create visual content for marketing campaigns.",
      "Collaborate with the team to develop design concepts.",
      "Ensure brand consistency across all designs."
    ];
  } else if (query === "cw") {
    jd = "CONTENT WRITER";
    responsibilities = [
      "Write and edit content for various platforms.",
      "Conduct research to create engaging content.",
      "Optimize content for SEO purposes."
    ];
  } else {
    jd = "Job Role Not Found";
    responsibilities = ["No responsibilities available for the selected job role."];
  }
  
  return(
  <Layout>
    <NavbarStyleFive />

    <PageBanner pageTitle={jd} />

    <div className="services-details-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 services-details">
          <div className="services-details-desc">
            <div className="single-card">
              <h5 style={{textAlign : "left"}}>RESPONSIBILITIES</h5>
              <div className="section-content responsibilities">
                {responsibilities.map((responsibility, index) => (
                  <p key={index}>{responsibility}</p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
<Apply/>
    <Footer />
  </Layout>)
}

export const Head = () => <Seo title="Service Details" />

export default ServiceDetailsPage
