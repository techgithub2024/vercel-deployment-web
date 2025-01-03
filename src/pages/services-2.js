import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import { Link } from "gatsby";



// Service Images
import ServiceImage1 from "../images/services-image/service-image1.png";
import ServiceImage2 from "../images/services-image/service-image2.png";
import ServiceImage3 from "../images/services-image/service-image3.png";
import ServiceImage4 from "../images/services-image/service-image4.png";
import ServiceImage5 from "../images/services-image/service-image5.png";
import ServiceImage6 from "../images/services-image/service-image6.png";

// Shape Images
import Shape1 from "../images/shape1.png";
import Shape2 from "../images/shape2.svg";
import Shape3 from "../images/shape3.svg";
import Shape4 from "../images/shape4.svg";
import NavbarStyleFive from "../components/_App/NavbarStyleFive";

const ServicesPage2 = () => {
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const query = searchParams.get("name");
let pageTitle = ""
if (query === "brand_building") {
  pageTitle = "Brand Building ";
} else if (query === "social_media") {
  pageTitle = "Social Media Marketing Services";
} else if (query === "lead_Generation") {
  pageTitle = "Performance & Lead Generation";
} else if (query === "business_Solutions") {
  pageTitle = "Business Solutions";
} else if (query === "marketplace_Management") {
  pageTitle = "Marketplace Management";
} else if (query === "ecommerce_Solutions") {
  pageTitle = "E-commerce Solutions";
} else if (query === "digital_Arts") {
  pageTitle = "Digital Arts & VFX";
} else if (query === "ar_vr_Solutions") {
  pageTitle = "AR & VR Solutions";
} else if (query === "branding_Services") {
  pageTitle = "Branding Services";
}
let description =""
if (query === "brand_building") {
  description = "Transform your business with our branding company, offering tailored strategies in SEO, content marketing, PPC, and more to drive lasting success.";
} else if (query === "social_media") {
  description  = "Social Media Marketing Services";
} else if (query === "lead_Generation") {
  description = "Performance & Lead Generation";
} else if (query === "business_Solutions") {
 description  = "Business Solutions";
} else if (query === "marketplace_Management") {
  description  = "Marketplace Management";
} else if (query === "ecommerce_Solutions") {
  description = "E-commerce Solutions";
} else if (query === "digital_Arts") {
  description = "Digital Arts & VFX";
} else if (query === "ar_vr_Solutions") {
  description = "AR & VR Solutions";
} else if (query === "branding_Services") {
  description = "Branding Services";
}
// description title 


let description_title1 = ""
let description_title2 = ""
let description_title3 = ""
let description_title4 = ""
let description_title5 = ""
let description_title6 = ""
let description_title7 = ""
let description_title8 = ""

let card_description1 = ""
let card_description2 = ""
let card_description3 = ""
let card_description4 = ""
let card_description5 = ""
let card_description6 = ""
let card_description7 = ""
let card_description8 = ""
if (query === "brand_building") {
  card_description1 = "We offer professional SEO services to boost your online presence with tailored SEO service packages. Our strategies improve search rankings, drive traffic, and increase conversions through optimization, keyword research, and link building."
  card_description2 = "Our social media marketing services enhance your brand's visibility, engagement, and growth through targeted campaigns. We connect you with the right audience, drive traffic, and deliver measurable results to boost awareness and customer loyalty."
  card_description3 = "We offer expert Pay Per Click (PPC) services and PPC campaign management services to drive targeted traffic, generate high-quality leads, and maximize ROI through optimized strategies on Google Ads, Bing, and social media platforms."
  card_description4 = "We provide expert content marketing services, crafting engaging, high-quality content tailored to your brand. Our solutions enhance digital marketing efforts, boost visibility, drive conversions, and establish your brand as an industry leader through impactful, audience-focused strategies"
  card_description5 = "We specialize in B2B lead generation, utilizing advanced strategies and tools to deliver high-quality prospects. As one of the best lead generation companies, we help businesses grow by enhancing sales efficiency and accelerating growth."
  card_description6 = "As an expert email campaign agency, we craft personalized, engaging email marketing strategies to boost sales, retention, and brand awareness. Our services ensure impactful, optimized campaigns, delivering measurable results for your business."
  card_description7 = "We provide cost-effective marketing strategies tailored to maximize your digital marketing budget, ensuring optimal results. Our budget and planning approach ensures efficient allocation, delivering measurable ROI while meeting your business goals effectively."
  card_description8 = "Our Marketing Roadmap integrates SEO, content, and social media strategies to boost visibility and conversions, while the Sales Strategy Roadmap optimizes lead generation and customer retention, aligning marketing and sales for sustained business growth."
 description_title1 = "Search Engine Optimization (SEO)"
 description_title2 = "Social Media Marketing(SMM) "
 description_title3 = "Pay-per click (PPC)"
 description_title4 = "Content Marketing Service"
 description_title5 = "Lead Generation"
 description_title6 = "Email Marketing"
 description_title7 = "Budget & planning"
 description_title8 = "Marketing Roadmap"
} else if (query === "social_media") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "lead_Generation") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "business_Solutions") {
 card_description1 = ""
 card_description2 = ""
 card_description3 = ""
 card_description4 = ""
 card_description5 = ""
 card_description6 = ""
 card_description7 = ""
} else if (query === "marketplace_Management") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "ecommerce_Solutions") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "digital_Arts") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "ar_vr_Solutions") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
} else if (query === "branding_Services") {
  card_description1 = ""
  card_description2 = ""
  card_description3 = ""
  card_description4 = ""
  card_description5 = ""
  card_description6 = ""
  card_description7 = ""
}


  return (
    <Layout>
      <NavbarStyleFive />

      <PageBanner pageTitle={pageTitle} />

      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">

            <h2>Our Services</h2>
            <div className="bar"></div>
    
            <p>
            { description}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage1} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">IT Professionals</Link>
                </h3>
                <p>
                 {card_description1}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage2} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Software Engineers</Link>
                </h3>
                <p>
                {card_description2}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage3} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Health & Manufacturing</Link>
                </h3>
                <p>
                {card_description3}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage4} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Security & Surveillance</Link>
                </h3>
                <p>
                {card_description4}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage5} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Automatic Optimization</Link>
                </h3>
                <p>
                {card_description5}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage5} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Automatic Optimization</Link>
                </h3>
                <p>
                {card_description6}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage5} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Automatic Optimization</Link>
                </h3>
                <p>
                {card_description7}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage6} alt="Service" />
                </div>
                <h3>
                  <Link to="/service-details">Data Analysts</Link>
                </h3>
                <p>
                {card_description8}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
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

      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Services" />;

export default ServicesPage2;
