import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Client Images
import Client1 from "../../images/client-image/client1.jpg"
import Client2 from "../../images/client-image/client2.jpg"
import Client3 from "../../images/client-image/client3.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const FeedbackStyleFour = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Clients Feedback</h2>
            <div className="bar"></div>
            <p>
            We build effective strategies to help you reach customers and prospects across the entire web.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="ml-feedback-slides"
          >
            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client1} alt="client" />
                  <h3>Sachin Manchanda Foundation</h3>
                  <span>Managing Director</span>
                </div>
                <p>
                Digital Polaris' expertise and dedication to optimizing our online presence have played a crucial role in amplifying the reach of our foundation's mission. We highly commend Digital Polaris for their exceptional efforts in driving meaningful results and increasing awareness for Sachin Manchanda Foundation.
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client2} alt="client" />
                  <h3>Managing Director</h3>
                  <span>Jewellery for Unit</span>
                </div>
                <p>
                Digital Polaris has been instrumental in bringing our ideas to life, and their attention to detail has truly set our online presence apart. We opted for their Magento development services after hearing a lot of positive things about them. We appreciate their dedication, and we're excited about the enhanced experience the website will bring to our customers.
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client3} alt="client" />
                  <h3>Managing Director</h3>
                  <span>AOne</span>
                </div>
                <p>
                Many agencies come in, perform their business, and then go. For example, the Digital Polaris team was originally intended to be used purely by our paid advertising team, but has now been employed in branding and SEO services as well, much to our benefit. In terms of scope, Digital Polaris is unrivalled.
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
    </>
  )
}

export default FeedbackStyleFour
