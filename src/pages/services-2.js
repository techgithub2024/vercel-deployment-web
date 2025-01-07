import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import NavbarStyleFive from "../components/_App/NavbarStyleFive";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import { Link } from "gatsby";

// Service Images
// import ServiceImage1 from "../images/services-image/service-image1.png";
// import ServiceImage2 from "../images/services-image/service-image2.png";
// import ServiceImage3 from "../images/services-image/service-image3.png";
// import ServiceImage4 from "../images/services-image/service-image4.png";
// import ServiceImage5 from "../images/services-image/service-image5.png";
// import ServiceImage6 from "../images/services-image/service-image6.png";

// Shape Images
import Shape1 from "../images/shape1.png";
import Shape2 from "../images/shape2.svg";
import Shape3 from "../images/shape3.svg";
import Shape4 from "../images/shape4.svg";
import Modal from "../components/Modal/modal";

const ServicesPage2 = () => {
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const query = searchParams.get("name");

  // Page title based on query
  const pageTitles = {
    brand_building: "Brand Building",
    social_media: "Social Media Marketing Services",
    lead_Generation: "Performance & Lead Generation",
    business_Solutions: "Business Solutions",
    marketplace_Management: "Marketplace Management",
    ecommerce_Solutions: "E-commerce Solutions",
    digital_Arts: "Digital Arts & VFX",
    ar_vr_Solutions: "AR & VR Solutions",
    branding_Services: "Branding Services",
  };

  const pageTitle = pageTitles[query] || "Our Services";

  // Description based on query
  const descriptions = {
    brand_building:
      "Transform your business with our branding company, offering tailored strategies in SEO, content marketing, PPC, and more to drive lasting success.",
    social_media: "Our Performance Marketing and Lead Generation services use data-driven strategies to target the right audience, optimize campaigns, and generate high-quality leads, ensuring measurable results, consistent growth, and a strong ROI for your business.",
    lead_Generation: "Drive growth with Performance Marketing and Lead Generation services. Optimize Google Ads, Meta Ads, LinkedIn Ads, and Email Marketing to generate quality leads and maximize ROI.",
    business_Solutions: "Comprehensive Automation & Reporting services include complete automation, marketing automation, data analytics, AI-powered integration, business dashboards, virtual assistance, call center setup, and management solutions to optimize business operations.",
    marketplace_Management: "Our Marketplace Management services optimize e-commerce with product launches, content management, reviews, paid campaigns, graphics, inventory handling, and delivery partner management. They enhance organic presence and boost sales through seamless operations and customer engagement.",
    ecommerce_Solutions: "Our E-commerce solutions include platform management, campaign strategies, organic presence, product setup, backend management, influencer collaborations, chatbot integration, and content updates to boost sales, enhance engagement, and grow your online business effectively.",
    digital_Arts: "Digital art services and VFX production include AI advertisements, AI graphics, AI videos, visual effects, comics design, magazine design, graphic designs, and logo design, delivering innovative solutions for diverse creative needs.",
    ar_vr_Solutions: "AR and VR development creates interactive brand experiences, virtual showrooms, AR-driven ads, engaging virtual tours, and realistic product simulations, revolutionizing how businesses connect with customers",
    branding_Services: "Branding Services",
  };

  const description = descriptions[query] || "";

  // Card data based on query
  const servicesData = {
    brand_building: [
      {
        title: "Search Engine Optimization",
        description:
          "We offer professional SEO services to boost your online presence with tailored SEO service packages.",
        modal_data : "" , 
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Social Media Marketing ",
        description:
          "Our social media marketing services enhance your brand's visibility, engagement, and growth through targeted campaigns.",
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Pay-per click (PPC)",
        description:
          "We offer expert Pay Per Click (PPC) services to drive targeted traffic and generate high-quality leads.",
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Content Marketing Service",
        description:
          "We provide expert content marketing services to craft engaging, high-quality content tailored to your brand.",
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Lead Generation",
        description:
          "We specialize in B2B lead generation, delivering high-quality prospects through advanced strategies.",
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Email Marketing",
        description:
          "We craft personalized, engaging email marketing strategies to boost sales, retention, and brand awareness.",
        image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Budget & Planning",
        description:
          "We provide cost-effective marketing strategies tailored to maximize your digital marketing budget.",
          image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
          
      },
      {
        title: "Marketing Roadmap",
        description:
          "Our Marketing Roadmap integrates SEO, content, and social media strategies to boost visibility and conversions.",
          image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
    ],
    lead_Generation: [
      {
        title: "Google Ads",
        description:
          "We offer expert Google Ads support, managing Google Ads accounts and optimizing campaigns for maximum performance. Our services also include leveraging Google AdSense to drive targeted traffic and increase revenue.",
          image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Meta Ads",
        description:
          "Boost your brand with expert Meta Ads support. We help run impactful Facebook Meta Ads through Meta Business Suite, driving engagement, quality leads, and measurable results to elevate your digital marketing strategy.",
          image: "https://cdn-icons-png.flaticon.com/512/5538/5538843.png",
      },
      {
        title: "Linkedin Ads",
        description:
          "Manage LinkedIn Ads cost efficiently with our LinkedIn Paid Ads services. Reach decision-makers, drive meaningful leads, and maximize your advertising ROI on the world’s largest professional network.",
        // image: ServiceImage3,
      },
      {
        title: "Email marketing",
        description:
          "Maximize impact with email marketing tools and automation. We design tailored campaigns that engage audiences, nurture leads, and deliver measurable results to elevate your business growth efficiently.",
        // image: ServiceImage4,
      },
    ],
    business_Solutions: [
      {
        title: "Complete Automation",
        description:
          "Our Complete Automation solutions optimize workflows by automating repetitive tasks, and enhancing efficiency, accuracy, and scalability. Tailored to your needs, we streamline operations, improve data reliability, and enable focus on strategic business growth.",
        // image: ServiceImage1,
      },
      {
        title: "Marketing Automation",
        description:
          "We provide marketing automation services using advanced marketing automation platforms to streamline tasks, enhance personalization, and optimize performance marketing automation, delivering smarter insights, improved targeting, and measurable results to maximize efficiency and ROI.",
        // image: ServiceImage2,
      },
      {
        title: "Data Analytics & Reporting",
        description:
          "Our Marketing Automation service uses marketing data & analytics and a robust marketing reporting platform to streamline campaigns, optimize performance, and deliver measurable results through personalized automation, enhancing ROI and enabling data-driven decisions effortlessly.",
        // image: ServiceImage3,
      },
      {
        title: "AI powered, data integration & reports",
        description:
          " AI-powered technology seamlessly integrates data, offering real-time analytics and customized reports. With advanced data integration and reporting processes are automated, providing actionable insights that drive smarter, data-driven business decisions.",
        // image: ServiceImage4,
      },
      {
        title: "Business Dashboard Setup",
        description:
          "Business dashboard setup using business dashboard software streamlines decision-making by consolidating data, providing real-time insights, tracking key metrics, and enhancing reporting efficiency, ultimately enabling better strategic decisions across departments.",
        // image: ServiceImage4,
      },
      {
        title: "Virtual Assistant & admin Support",
        description:
          "Virtual Assistant & Admin Support services offer efficient administrative assistance, including scheduling, email management, data entry, and customer support. Tailored to client needs, these services streamline operations, enhancing productivity and efficiency.",
        // image: ServiceImage4,
      },
      {
        title: "Call Centre Setup",
        description:
          "Our call centre setup consultancy provides expert call centre configuration services, streamlining processes through Automation and Report solutions, optimizing technology, workflows, and reporting to enhance efficiency, reduce costs, and improve customer experience.",
        // image: ServiceImage4,
      },
      {
        title: "Management Solution",
        description:
          "Our Management Solution integrates inventory management software, automating tasks and generating real-time reports to optimize inventory control, reduce errors, and enhance operational efficiency, helping businesses streamline operations and make data-driven decisions",
        // image: ServiceImage4,
      },
    ],
    marketplace_Management: [
      {
        title: "Organic Presence",
        description:
          "Our Organic Presence service enhances your online organic presence and digital online presence through expert SEO, quality content, and strategic engagement. Boost marketplace rankings, increase traffic, build trust, and drive conversions sustainably.",
        // image: ServiceImage1,
      },
      {
        title: "Content Management",
        description:
          "Content management optimizes your marketplace presence by organizing, updating, and enhancing product listings using advanced content management software. We ensure consistency, relevance, and visibility, driving engagement and conversions to support your marketplace strategy effectively.",
        // image: ServiceImage2,
      },
      {
        title: "Product Launch",
        description:
          "Our New Product Launch Strategy ensures impactful marketplace entry with tailored solutions, including market research, optimized listings, and promotions. We enhance visibility, boost conversions, and drive sales for successful product introductions.",
        // image: ServiceImage3,
      },
      {
        title: "Product Placement",
        description:
          " Enhance product visibility with our Product Placement service. Using digital product placement strategies, we optimize positioning in marketplaces, ensuring maximum exposure, improved discoverability, and increased sales for your brand. Drive engagement and conversions effortlessly.",
        // image: ServiceImage4,
      },
      {
        title: "Product Graphics Enhancement",
        description:
          "Enhance product appeal with our Product Graphics Enhancement service. Using advanced graphics enhancement and product visual enhancement techniques, we create stunning visuals that boost engagement, highlight features, and drive marketplace success.",
        // image: ServiceImage4,
      },
      {
        title: "Positive Product Reviews",
        description:
          "Our Marketplace Management services create authentic positive product reviews that boost credibility and visibility. By leveraging popular product reviews, we help increase trust, drive sales, and enhance your brand's online reputation.",
        // image: ServiceImage4,
      },
      {
        title: "Paid Campaign",
        description:
          " Our Marketplace Management services include targeted Pay Per Click (PPC) campaigns and paid social media ads to enhance visibility, drive conversions, and maximize ROI, ensuring your brand reaches the right audience effectively.",
        // image: ServiceImage4,
      },
      {
        title: "Delivery partner Management",
        description:
          "Our Delivery Partner Management service optimizes relationships with delivery partners, ensuring efficient logistics, on-time fulfillment, and high customer satisfaction. We provide continuous Delivery Partner Support to streamline operations and enhance performance.",
        // image: ServiceImage4,
      },
      {
        title: "Chatbot setup/ Whatsapp chat",
        description:
          "Our Chatbot Setup and WhatsApp Chat services enhance customer engagement by providing instant, personalized responses. Seamlessly integrated into your platform, they boost satisfaction, streamline communication, and improve overall marketplace management.",
        // image: ServiceImage4,
      },
      {
        title: "Inventory Management",
        description:
          " Our inventory management service, powered by an advanced inventory tracking system, ensures real-time stock control, efficient order fulfillment, and seamless marketplace management, optimizing stock levels and enhancing operational efficiency.",
        // image: ServiceImage4,
      },
    ],
    ecommerce_Solutions: [
      {
        title: "Platform Management",
        description:
          "Our Platform Management Services optimize e-commerce operations using advanced Platform Management Software, ensuring seamless functionality, automation, scalability, and analytics to enhance user experience, streamline tasks, and support your business growth effectively.",
        // image: ServiceImage1,
      },
      {
        title: "Campaign Management",
        description:
          "Our Campaign Management service offers expert online campaign management, optimizing strategies through data-driven insights, targeted ads, and performance tracking to boost sales, enhance brand visibility, and drive growth for your e-commerce business.",
        // image: ServiceImage2,
      },
      {
        title: "Organic Presence",
        description:
          "Boost your online organic presence with our e-commerce solutions. We enhance visibility, optimize SEO, and attract the right audience, ensuring sustainable growth, improved rankings, and long-term success in the competitive digital marketplace.",
        // image: ServiceImage3,
      },
      {
        title: "Product Placement",
        description:
          " Enhance product visibility with our Product Placement service. Using digital product placement strategies, we optimize positioning in marketplaces, ensuring maximum exposure, improved discoverability, and increased sales for your brand. Drive engagement and conversions effortlessly.",
        // image: ServiceImage4,
      },
      {
        title: "Graphic Enhancement",
        description:
          "Our graphic enhancement services boost your e-commerce platform's visual appeal with optimized product images, custom banners, and stunning visuals, ensuring improved user experience, stronger brand identity, and increased customer engagement.",
        // image: ServiceImage4,
      },
      {
        title: "Product Setup / Graphics",
        description:
          "Our Product Setup / Graphics service ensures accurate product installation, optimized visuals, and seamless product configurator integration, enhancing customer experience and enabling easy product personalization for your e-commerce platform.",
        // image: ServiceImage4,
      },
      {
        title: "Backend Management",
        description:
          "Our Backend Management services optimize e-commerce operations, focusing on backend user management to streamline user data, access control, and security, ensuring efficient processes, improved performance, and enhanced user experience for your business.",
        // image: ServiceImage4,
      },
      {
        title: "Content Updation",
        description:
          "Our Content Updation service ensures your e-commerce website remains fresh and optimized. We update product details, pricing, and promotional content, enhancing user experience, and SEO rankings, and driving conversions for business growth.",
        // image: ServiceImage4,
      },
      {
        title: "Product Review",
        description:
          "Product Review service under E-Commerce Solutions provides the best product reviews that offer honest, detailed insights, boosting customer trust, enhancing conversions, and improving SEO to support informed purchasing decisions and business growth.",
        // image: ServiceImage4,
      },
      {
        title: "Influencer Collaboration",
        description:
          "We offer expert influencer collaboration as part of our E-commerce solutions, facilitating brand partnerships for influencers to boost visibility, engagement, and brand loyalty through authentic, high-impact campaigns tailored to your goals.",
        // image: ServiceImage4,
      },
      {
        title: "Chatbot setup / Whatsapp chat",
        description:
          "Our WhatsApp Chatbot Setup service enhances customer engagement for e-commerce businesses. We provide tailored chatbot development, automated responses, order processing, and customer support to improve efficiency, sales, and user experience.",
        // image: ServiceImage4,
      },
    ],
    digital_Arts: [
      {
        title: "AI Advertisement",
        description:
          "Our AI Advertisement services use ad creative AI to deliver personalized, data-driven ad designs. Harnessing AI for advertising, we create visually stunning, high-performance campaigns that elevate your brand's marketing success.",
        // image: ServiceImage1,
      },
      {
        title: "AI graphics ",
        description:
          "Transform your designs with AI-generated graphics that redefine creativity. Our AI for graphics design services provide unique, high-quality visuals, ensuring every project stands out with innovation and style.",
        // image: ServiceImage2,
      },
      {
        title: "Organic Presence",
        description:
          "Boost your online organic presence with our e-commerce solutions. We enhance visibility, optimize SEO, and attract the right audience, ensuring sustainable growth, improved rankings, and long-term success in the competitive digital marketplace.",
        // image: ServiceImage3,
      },
      {
        title: "AI videos",
        description:
          "Our AI video generator and AI video maker services create high-quality, engaging videos tailored to your needs. We use advanced AI to precisely deliver seamless, professional visuals for ads, tutorials, and creative campaigns.",
        // image: ServiceImage4,
      },
      {
        title: "Visual effects",
        description:
          "Leverage the power of AI visual effects with our expert animators. We create stunning, high-quality effects that enhance your projects, from cinematic visuals to digital content, pushing the boundaries of creative expression.",
        // image: ServiceImage4,
      },
      {
        title: "Comic Design",
        description:
          "Our Comic Design Art services offer unique comic anime designs, blending creativity and storytelling. We create captivating manga-style characters and visually striking comics, delivering tailored solutions to bring your ideas to life.",
        // image: ServiceImage4,
      },
      {
        title: "Magazine Design",
        description:
          "We offer magazine design services using advanced magazine design software and magazine design AI tools, creating stunning, customized layouts for professional magazines with modern aesthetics and creative flair.",
        // image: ServiceImage4,
      },
      {
        title: "Graphic Design",
        description:
          "We provide the best graphic design services using advanced software for graphic design, delivering high-quality logos, branding, and custom graphics to enhance your business’s visual identity and leave a lasting impact.",
        // image: ServiceImage4,
      },
      {
        title: "Logo Design",
        description:
          " Specializing in brand logo design, we offer custom logo creation and branding solutions that reflect your business identity, ensuring your brand stands out with creative, high-quality digital arts and VFX production.",
        // image: ServiceImage4,
      },
    ],
    ar_vr_Solutions: [
      {
        title: "Interactive Brand Experiences",
        description:
          "Our Interactive Brand Experiences use AR & VR technology to create immersive, personalized brand interactions, enhancing experiential branding. These engaging experiences foster deeper connections, boost customer loyalty, and leave lasting impressions.",
        // image: ServiceImage1,
      },
      {
        title: "Virtual Showrooms",
        description:
          "Virtual showrooms utilize AR and VR technologies to offer an immersive online shopping experience, allowing customers to explore products interactively, view 3D models, and enjoy a personalized, engaging environment from anywhere.",
        // image: ServiceImage2,
      },
      {
        title: "AR Based Advertisement",
        description:
          "AR-based advertisement enhances customer engagement by integrating interactive, immersive content into the real world, using augmented reality. It boosts brand visibility, creates memorable experiences, and improves interactions for more effective marketing campaigns.",
        // image: ServiceImage3,
      },
      {
        title: "Virtual Tours & Experiences",
        description:
          " Virtual Tours & Experiences utilizes advanced 360 virtual tour software, allowing businesses to create immersive, interactive tours. This virtual tour creator offers dynamic, realistic experiences that engage users and enhance decision-making.",
        // image: ServiceImage4,
      },
      {
        title: "Product Simulations",
        description:
          "We offer advanced AR & VR product simulations, enabling businesses to visualize and test product concepts interactively. Enhance development, reduce costs, and improve decision-making with our AR & VR services.",
        // image: ServiceImage4,
      },
    ],
  };

  const services = servicesData[query] || [];

  return (
    <Layout>
      <NavbarStyleFive />
      <PageBanner pageTitle={pageTitle} />
      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <div className="bar"></div>
            <p>{description}</p>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={service.image} alt="Service"  style={{height : "80px"}} />
                  </div>
                  <h3>
                    <Link to="/service-details">{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
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
      {/* <Modal/> */}
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Services" />;

export default ServicesPage2;
