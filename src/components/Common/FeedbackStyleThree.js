import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Client Images
import Client1 from "../../images/client-image/client1.jpg"
import Client2 from "../../images/client-image/client2.jpg"
import Client3 from "../../images/client-image/client3.jpg"

// Shape Images
import AgencyUser1 from "../../images/agency-image/agency-user1.png"
import AgencyUser2 from "../../images/agency-image/agency-user2.png"
import AgencyUser3 from "../../images/agency-image/agency-user3.png"
import AgencyUser4 from "../../images/agency-image/agency-user4.png"
import AgencyUser5 from "../../images/agency-image/agency-user5.png"
import AgencyUser6 from "../../images/agency-image/agency-user6.png"

const FeedbackStyleThree = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Testimonials</span>
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
              <div className="single-testimonials-item">
                <p>
                Digital Polaris' expertise and dedication to optimizing our online presence have played a crucial role in amplifying the reach of our foundation's mission. We highly commend Digital Polaris for their exceptional efforts in driving meaningful results and increasing awareness for Sachin Manchanda Foundation.
                </p>

                <div className="client-info">
                  <img src={Client1} alt="client" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Sachain Manchandha</h3>
                  <span>Managing Director</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                Digital Polaris has been instrumental in bringing our ideas to life, and their attention to detail has truly set our online presence apart. We opted for their Magento development services after hearing a lot of positive things about them. We appreciate their dedication, and we're excited about the enhanced experience the website will bring to our customers.
                </p>
                <div className="client-info">
                  <img src={Client2} alt="client" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Managing Director</h3>
                  <span>Jewelery Unit</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                Many agencies come in, perform their business, and then go. For example, the Digital Polaris team was originally intended to be used purely by our paid advertising team, but has now been employed in branding and SEO services as well, much to our benefit. In terms of scope, Digital Polaris is unrivalled.
                </p>

                <div className="client-info">
                  <img src={Client3} alt="client" />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Managing Director</h3>
                  <span>AOne</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Shape Images */}
          <div className="user-shape1">
            <img src={AgencyUser1} alt="shape" />
          </div>
          <div className="user-shape2">
            <img src={AgencyUser2} alt="shape" />
          </div>
          <div className="user-shape3">
            <img src={AgencyUser3} alt="shape" />
          </div>
          <div className="user-shape4">
            <img src={AgencyUser4} alt="shape" />
          </div>
          <div className="user-shape5">
            <img src={AgencyUser5} alt="shape" />
          </div>
          <div className="user-shape6">
            <img src={AgencyUser6} alt="shape" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackStyleThree
