import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const EventsSection = () => {
  const events = [
    {
      eventName: "Birthday Party Celebration",
      imgSrc: "assets/img/event-birthday.jpg",
      price: "$200",
      desc: "Celebrate your special day with us! Enjoy a delicious customized menu, a vibrant party atmosphere, and a dedicated event coordinator to make your birthday unforgettable.",
      points: [
        "Customized menu options",
        "Vibrant party atmosphere",
        "Dedicated event coordinator",
      ],
    },
    {
      eventName: "Private Party Extravaganza",
      imgSrc: "assets/img/event-private.jpg",
      price: "$350",
      desc: "Host your exclusive event at our restaurant! Experience privacy, premium service, and a curated menu for an extraordinary celebration with your loved ones.",
      points: ["Exclusive privacy", "Premium service", "Curated menu"],
    },
    {
      eventName: "Corporate Event Package",
      imgSrc: "assets/img/event-custom.jpg",
      price: "Custom Quote",
      desc: "Plan your next corporate event with us. We offer tailored packages, modern amenities, and professional staff to ensure a successful and seamless event.",
      points: [
        "Tailored packages",
        "Modern amenities",
        "Professional staff support",
      ],
    },
  ];

  return (
    // <!-- ======= Events Section ======= -->
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Organize Your Events in our Restaurant</p>
        </div>

        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {events.map((currElement) => {
            return (
              <SwiperSlide key={currElement.imgSrc}>
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={currElement.imgSrc}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{currElement.eventName}</h3>
                    <div className="price">
                      <p>
                        <span>{currElement.price}</span>
                      </p>
                    </div>
                    <p className="fst-italic">{currElement.desc}</p>

                    <ul>
                      {currElement.points.map((point) => {
                        return (
                          <li>
                            <i className="bi bi-check-circled"></i> {point}
                          </li>
                        );
                      })}
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
