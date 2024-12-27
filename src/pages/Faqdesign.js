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
      short : "Digital marketing is the practice of promoting products, services through online channels."
    },
    {
      question: "What are the services we provide in digital marketing?",
      answer: `
We offer a comprehensive range of digital marketing services to help businesses grow and succeed:

- **Brand Building**: Enhance your brand identity and reputation with creative strategies.
- **Performance & Lead Generation**: Drive targeted leads and optimize ROI through data-driven campaigns.
- **Automation & Reports**: Streamline marketing workflows and provide actionable insights with detailed reporting.
- **AR & VR Solutions**: Deliver immersive customer experiences using augmented and virtual reality.
- **Business Solutions**: Tailored strategies to address unique business challenges.
- **Marketplace Management**: Optimize your presence on e-commerce platforms like Amazon and Flipkart.

Our services are designed to provide end-to-end support for your digital marketing needs.
`,

      image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
      short : 'We offer a comprehensive range of digital marketing services to help businesses grow .'
    },
    {
      question: "What are the benefits of hiring a digital marketing firm?",
      answer:
        "You can get started by contacting us via our website. We'll discuss your requirements and create a custom strategy for your business.",
      image: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      short : "You can get started by contacting us via our website" , 
    },
    {
      question: "What is SEO, and why is it important for websites?",
      answer:
        "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engines like Google. It involves improving content, keywords, and site structure to enhance visibility.",
      image: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      short : "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher" 
    },
    {
      question: "Why is SEO important?",
      answer:
        "You can get started by contacting us via our website. We'll discuss your requirements and create a custom strategy for your business.",
      image: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    short : "You can get started by contacting us via our website"
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
                  <p>{faqs[activeIndex]?.short}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-box">
  <div className="faq-extended-content">
    {activeIndex !== null ? (
      <p>{faqs[activeIndex].answer}</p>
    ) : (
      <p>Select a question to see more details.</p>
    )}
  </div>
</div>
    </div>
  );
};

export default FAQ;
