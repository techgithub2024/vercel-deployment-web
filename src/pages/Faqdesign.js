import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Make sure to include the CSS

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-area ptb-80">
      <div className="container">
        <h2 className="sub-title">Frequently Asked Questions</h2>
        <div className="faq-accordion">
          <Accordion allowZeroExpanded={true}>
            <AccordionItem uuid="a" isOpen={activeIndex === "a"}>
              <AccordionItemHeading>
                <AccordionItemButton onClick={() => toggleFAQ("a")}>
                  <span>What is Digital Marketing?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p style={{ textAlign: "left" }}>
                  Digital marketing is the practice of promoting products, services, or brands through online channels such as search engines, social media platforms, email, websites, and more. It leverages digital tools and strategies to reach a targeted audience, drive traffic, generate leads, and ultimately boost sales.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b" isOpen={activeIndex === "b"}>
              <AccordionItemHeading>
                <AccordionItemButton onClick={() => toggleFAQ("b")}>
                  <span>What are the services we provide in digital marketing?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p style={{ textAlign: "left" }}>
                  We offer a comprehensive range of digital marketing services to help businesses grow and succeed:
                  <br /><br />
                  <strong>Brand Building:</strong> Enhance your brand identity and reputation with creative strategies.
                  <br /><br />
                  <strong>Performance & Lead Generation:</strong> Drive targeted leads and optimize ROI through data-driven campaigns.
                  <br /><br />
                  <strong>Automation & Reports:</strong> Streamline marketing workflows and provide actionable insights with detailed reporting.
                  <br /><br />
                  <strong>AR & VR Solutions:</strong> Deliver immersive customer experiences using augmented and virtual reality.
                  <br /><br />
                  <strong>Business Solutions:</strong> Tailored strategies to address unique business challenges.
                  <br /><br />
                  <strong>Marketplace Management:</strong> Optimize your presence on e-commerce platforms like Amazon and Flipkart.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c" isOpen={activeIndex === "c"}>
              <AccordionItemHeading>
                <AccordionItemButton onClick={() => toggleFAQ("c")}>
                  <span>What are the benefits of hiring a digital marketing firm?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p style={{ textAlign: "left" }}>
                  Hiring a digital marketing firm offers numerous advantages, including:
                  <br /><br />
                  <strong>Expertise:</strong> Access to a team of skilled professionals specializing in various aspects of digital marketing.
                  <br /><br />
                  <strong>Cost-Effectiveness:</strong> Eliminates the need to hire an in-house team, reducing overhead costs.
                  <br /><br />
                  <strong>Time Savings:</strong> Frees you to focus on core business activities while experts handle your marketing.
                  <br /><br />
                  <strong>Scalable Solutions:</strong> Services can grow with your business, adapting to your evolving needs.
                  <br /><br />
                  <strong>Latest Strategies:</strong> Agencies stay updated with the latest trends and tools to ensure effective campaigns.
                  <br /><br />
                  <strong>Measurable Results:</strong> Regular reporting and analytics help track performance and ROI.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d" isOpen={activeIndex === "d"}>
              <AccordionItemHeading>
                <AccordionItemButton onClick={() => toggleFAQ("d")}>
                  <span>What is SEO, and why is it important for websites?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p style={{ textAlign: "left" }}>
                  SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engines like Google. 
                  It is crucial for:
                  <br /><br />
                  <strong>Increased Visibility:</strong> Helps your site appear higher in search results, making it easier for users to find you.
                  <br /><br />
                  <strong>More Organic Traffic:</strong> Attracts non-paid, sustainable traffic.
                  <br /><br />
                  <strong>Better User Experience:</strong> Improves site speed, mobile-friendliness, and content quality.
                  <br /><br />
                  <strong>Credibility & Trust:</strong> Higher rankings build trust with users.
                  <br /><br />
                  <strong>Higher Conversions:</strong> Relevant traffic increases the chance of turning visitors into customers.
                  <br /><br />
                  In short, SEO boosts visibility, drives traffic, and supports business growth.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
