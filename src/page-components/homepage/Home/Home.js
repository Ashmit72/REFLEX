import React from 'react';

import AboutUsSection from '../AboutUsSection./AboutUsSection';
import ClientSection from '../ClientSection/ClientSection';
import ContactSection from '../ContactSection/ContactSection';
import FeaturedProjectsSection
    from '../FeaturedProjectsSection/FeaturedProjectsSection';
import IntroSection from '../IntroSection/IntroSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import StartedSection from '../StartedSection/StartedSection';
import TeamSection from '../TeamSection/TeamSection';
import TrustSection from '../TrustSection/TrustSection';

const Home = () => {
    return (
        <>
            <IntroSection />
            <AboutUsSection />
            <ServiceSection />
            <FeaturedProjectsSection />
            <TrustSection />
            <TeamSection />
            <ClientSection />
            <StartedSection />
            <ContactSection />

        </>

    )
}

export default Home