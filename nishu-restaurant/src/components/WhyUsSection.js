import React from "react";

const WhyUsSection = () => {
  const whyChooseUs = [
    {
      title: "Exquisite Culinary Delights",
      desc: "Indulge in our chef's artistry with a diverse menu featuring globally inspired dishes, meticulously prepared to tantalize your taste buds.",
    },
    {
      title: "Warm and Inviting Ambiance",
      desc: "Immerse yourself in an enchanting atmosphere, blending modern elegance with a welcoming touch, creating the perfect setting for unforgettable moments.",
    },
    {
      title: "Exceptional Service",
      desc: "Our dedicated team ensures personalized attention, making your dining experience extraordinary from the moment you step through our doors.",
    },
  ];

  return (
    // <!-- ======= Why Us Section ======= -->
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="row">
          {whyChooseUs.map((currElement, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>{index+=1}</span>
                  <h4>{currElement.title}</h4>
                  <p>{currElement.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
