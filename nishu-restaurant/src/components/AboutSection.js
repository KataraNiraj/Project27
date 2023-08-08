import React from 'react';


const AboutSection = () => {
    return(
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

            <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                <div className="about-img">
                <img src="assets/img/about.jpg" alt="" />
                </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3> "The Tasteful Odyssey"</h3>
                <p className="fst-itali c">
                Once upon a time, in the heart of a bustling city, there stood a quaint and unassuming restaurant named "The Tasteful Odyssey." Tucked away on a quiet cobblestone street, it exuded an aura of mystery that intrigued passersby. With its charming facade adorned with hanging flower baskets and a rustic wooden sign, it seemed to whisper promises of gastronomic delights within.

The restaurant's tale began with Chef Anthony, a culinary maestro with an insatiable passion for flavors. As a child, he would watch his grandmother create magic in the kitchen, and those cherished memories fueled his culinary journey. After years of honing his craft in prestigious kitchens around the world, Chef Anthony returned to his hometown with a dream: to create a place where food became art, and dining turned into an unforgettable experience.
                </p>
                <ul>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            </div>
      </div>
    </section>
    )
}

export default AboutSection;