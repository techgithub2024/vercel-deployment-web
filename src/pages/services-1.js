import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const ServicesPage = () => (

  <Layout>
    <Navbar />

    <PageBanner pageTitle="BRAND BUILDING" />

    <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="bar"></div>
          <p>
          Transform your business with our branding company, offering tailored strategies in SEO, content marketing, PPC, and more to drive lasting success.

          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Settings />
              </div>
              <h3>
                <Link to="/service-details">Search Engine Optimization (SEO)
                </Link>
              </h3>
              <p>
              We offer professional SEO services to boost your online presence with tailored SEO service packages. Our strategies improve search rankings, drive traffic, and increase conversions through optimization, keyword research, and link building.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3>
                <Link to="/service-details">Social Media Marketing(SMM) </Link>
              </h3>
              <p>
              Our social media marketing services enhance your brand's visibility, engagement, and growth through targeted campaigns. We connect you with the right audience, drive traffic, and deliver measurable results to boost awareness and customer loyalty.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Bell />
              </div>
              <h3>
                <Link to="/service-details">Pay-per click (PPC)</Link>
              </h3>
              <p>
              We offer expert Pay Per Click (PPC) services and PPC campaign management services to drive targeted traffic, generate high-quality leads, and maximize ROI through optimized strategies on Google Ads, Bing, and social media platforms.
	
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
          </div>

          <div className="col-lg-4 col-sm-6">
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
          </div>

          <div className="col-lg-4 col-sm-6">
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

          <div className="col-lg-4 col-sm-6">
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
          </div>

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
          </div>
        </div>
      </div>
    </div>
    <div className="faq-area ptb-80">
      <div className="container">
        <div className="faq-accordion">
          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>What do you mean by brand building?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Brand building is the process of creating a unique identity for a business, enhancing recognition and trust through consistent messaging and visuals.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How do SEO, SMO, & PPC work together in digital marketing?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                SEO, SMO, and PPC work together by driving organic traffic, enhancing social media visibility, and ensuring paid reach for comprehensive digital marketing success.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                  How can businesses use email marketing effectively for lead generation?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Email marketing can generate leads by nurturing relationships, sending personalized content, and guiding prospects through the sales funnel.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How is Content Marketing customer engagement?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Content marketing fosters customer engagement by providing valuable, relevant, and consistent content that builds trust and encourages interactions.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How can Sales Strategy Roadmap improve my business?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                A Sales Strategy Roadmap outlines clear goals, actions, and timelines to enhance sales performance, optimize processes, and achieve sustainable growth.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Why is budget planning essential for branding and marketing?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Budget planning is essential for branding and marketing as it ensures resource allocation for effective campaigns, helping achieve measurable business results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
        </div>
        
        <Footer />
  </Layout>
)

export const Head = () => <Seo title="Services" />

export default ServicesPage
