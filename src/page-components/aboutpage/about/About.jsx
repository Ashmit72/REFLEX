import React from 'react';

import ContactSection
    from '@/page-components/homepage/ContactSection/ContactSection';

import AboutFifthSection from '../AboutFifthSection/AboutFifthSection';
import AboutFourthSection from '../AboutFouthSection/AboutFourthSection';
import AboutSecondSection from '../AboutSecondSection/AboutSecondSection';
import AboutThirdSection from '../AboutThirdSection/AboutThirdSection';
import AboutTopSection from '../AboutTopSection/AboutTopSection';

const About = () => {
    return (
        <>
            <AboutTopSection />
            <AboutSecondSection />
            <AboutThirdSection />
            <AboutFourthSection />
            <AboutFifthSection />
            <ContactSection />
        </>
    )
}

export default About