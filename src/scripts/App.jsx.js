import React from 'react';

import Header from './components/header/Header.jsx';
import FeatureSection from './components/features/FeatureSection.jsx';
import AboutSection from './components/about/AboutSection.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import PricingSection from './components/pricing/PricingSection.jsx';
import ContactSection from './components/contact/ContactSection.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => (
    <div>
        <Header />
        <FeatureSection />
        <AboutSection />
        <Carousel />
        <PricingSection />
        <ContactSection />
        <Footer />
    </div>
);

export default App;
