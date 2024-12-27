import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./FAQ.css"; // Optional for additional styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Digital Marketing??",
      answer:
        "Digital marketing is the practice of promoting products, services, or brands through online channels such as search engines, social media platforms, email, websites, and more. It leverages digital tools and strategies to reach a targeted audience, drive traffic, generate leads, and ultimately boost sales.",
      image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      question: "What are the services we provide in digital marketing?",
      answer:
        "We offer a comprehensive range of digital marketing services to help businesses grow and succeed",
      image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by contacting us via our website. We'll discuss your requirements and create a custom strategy for your business.",
      image: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const defaultImage = "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg";

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-image">
        <img
          src={activeIndex !== null ? faqs[activeIndex].image : defaultImage}
          alt="FAQ"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
};

export default FAQ;
