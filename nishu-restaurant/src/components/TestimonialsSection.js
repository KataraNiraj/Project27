import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John",
      job: "Food Blogger",
      img: "assets/img/testimonials/testimonials-1.jpg",
      desc: "I'm in love with the restaurant's diverse menu and delightful flavors. An absolute foodie paradise!",
    },
    {
      name: "Sarah",
      job: "Fashion Designer",
      img: "assets/img/testimonials/testimonials-2.jpg",
      desc: "The restaurant's elegant decor and exquisite dishes provide an unforgettable dining experience. Highly recommended!",
    },
    {
      name: "David",
      job: "Tech Entrepreneur",
      img: "assets/img/testimonials/testimonials-3.jpg",
      desc: "As a frequent visitor, I can vouch for the consistently high-quality service and scrumptious meals. A go-to spot for me.",
    },
    {
      name: "Megan",
      job: "Travel Enthusiast",
      img: "assets/img/testimonials/testimonials-4.jpg",
      desc: "During my trip, I stumbled upon this gem. The warmth of the staff and the mouthwatering cuisine left me delighted.",
    },
    {
      name: "Alex",
      job: "Art Critic",
      img: "assets/img/testimonials/testimonials-5.jpg",
      desc: "The fusion of flavors in each dish is a work of art. A gastronomic journey that left my taste buds mesmerized.",
    },
  ];

  return (
    // <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What they're saying about us</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((currElement) => {
            return (
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {currElement.desc}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src={currElement.img}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>{currElement.name}</h3>
                  <h4>{currElement.job}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
