import React from 'react';
import AboutSection from './AboutSection';
import WhyUsSection from './WhyUsSection';
import MenuSection from './MenuSection';
import SpecialsSection from './SpecialsSection';
import EventsSection from './EventsSection';
import BookATableSection from './BookATableSection';
import TestimonialsSection from './TestimonialsSection';
import GallerySection from './GallerySection';
import ChefsSection from './ChefsSection';
import ContactSection from './ContactSection';

const Main = () => {
    return(
        <main id="main">
            <AboutSection />
            <WhyUsSection />
            <MenuSection />
            <SpecialsSection />
            <EventsSection />
            <BookATableSection />
            <TestimonialsSection />
            <GallerySection />
            <ChefsSection />
            <ContactSection />
        </main>
    )
};

export default Main;
