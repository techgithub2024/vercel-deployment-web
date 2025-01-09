import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion" style={{minWidth : "680px"}}>
          {/* First FAQ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading0">
              <button
                className={`accordion-button ${activeIndex === 0 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleFAQ(0)}
              >
                What is Digital Marketing?
              </button>
            </h2>
            <div
              id="collapse0"
              className={`accordion-collapse collapse ${activeIndex === 0 ? "show" : ""}`}
              aria-labelledby="heading0"
            >
              <div className="accordion-body">
                <p>Digital marketing is the practice of promoting products, services through online channels.</p>
              </div>
            </div>
          </div>

          {/* Second FAQ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                className={`accordion-button ${activeIndex === 1 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleFAQ(1)}
              >
                What are the services we provide in digital marketing?
              </button>
            </h2>
            <div
              id="collapse1"
              className={`accordion-collapse collapse ${activeIndex === 1 ? "show" : ""}`}
              aria-labelledby="heading1"
            >
              <div className="accordion-body">
                <p>We offer a comprehensive range of digital marketing services to help businesses grow.</p>
              </div>
            </div>
          </div>

          {/* Third FAQ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2">
              <button
                className={`accordion-button ${activeIndex === 2 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleFAQ(2)}
              >
                What are the benefits of hiring a digital marketing firm?
              </button>
            </h2>
            <div
              id="collapse2"
              className={`accordion-collapse collapse ${activeIndex === 2 ? "show" : ""}`}
              aria-labelledby="heading2"
            >
              <div className="accordion-body">
                <p>
                  Hiring a digital marketing firm offers numerous advantages, including expertise, cost-effectiveness,
                  time savings, scalable solutions, latest strategies, and measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth FAQ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                className={`accordion-button ${activeIndex === 3 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleFAQ(3)}
              >
                What is SEO, and why is it important for websites?
              </button>
            </h2>
            <div
              id="collapse3"
              className={`accordion-collapse collapse ${activeIndex === 3 ? "show" : ""}`}
              aria-labelledby="heading3"
            >
              <div className="accordion-body">
                <p>
                  SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search
                  engines like Google. It's important for increased visibility, more organic traffic, better user
                  experience, credibility & trust, and higher conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-extended-content">
          {activeIndex === 0 && (
            <>
              <h3 className="faq-question" style={{ fontWeight: "bold" }}>
                What is Digital Marketing?
              </h3>
              <p>
                Digital marketing is the practice of promoting products, services, or brands through online channels
                such as search engines, social media platforms, email, websites, and more. It leverages digital tools
                and strategies to reach a targeted audience, drive traffic, generate leads, and ultimately boost sales.
              </p>
            </>
          )}
          {activeIndex === 1 && (
            <>
              <h3 className="faq-question" style={{ fontWeight: "bold" }}>
                What are the services we provide in digital marketing?
              </h3>
              <p>
                We offer a comprehensive range of digital marketing services to help businesses grow and succeed: Brand
                Building, Performance & Lead Generation, Automation & Reports, AR & VR Solutions, Business Solution,
                Marketplace Management. Our services are designed to provide end-to-end support for your digital
                marketing needs.
              </p>
            </>
          )}
          {activeIndex === 2 && (
            <>
              <h3 className="faq-question" style={{ fontWeight: "bold" }}>
                What are the benefits of hiring a digital marketing firm?
              </h3>
              <p>
                Hiring a digital marketing firm offers numerous advantages, including expertise, cost-effectiveness,
                time savings, scalable solutions, latest strategies, and measurable results.
              </p>
            </>
          )}
          {activeIndex === 3 && (
            <>
              <h3 className="faq-question" style={{ fontWeight: "bold" }}>
                What is SEO, and why is it important for websites?
              </h3>
              <p>
                SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search
                engines like Google. It involves improving content, keywords, and site structure to enhance visibility.
              </p>
            </>
          )}
          {activeIndex === null && (
                  <>
                  <h3 className="faq-question" style={{ fontWeight: "bold" }}>
                    What is Digital Marketing?
                  </h3>
                  <p>
                    Digital marketing is the practice of promoting products, services, or brands through online channels
                    such as search engines, social media platforms, email, websites, and more. It leverages digital tools
                    and strategies to reach a targeted audience, drive traffic, generate leads, and ultimately boost sales.
                  </p>
                </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
