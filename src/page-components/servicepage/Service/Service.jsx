import React from 'react';

import ContactSection
    from '@/page-components/homepage/ContactSection/ContactSection';

import ServiceEighthSection from '../ServiceEighthSection/ServiceEighthSection';
import ServiceFifthSection from '../ServiceFifthSection/ServiceFifthSection';
import ServiceFourthSection from '../ServiceFourthSection/ServiceFourthSection';
import ServiceSecondSection from '../ServiceSecondSection/ServiceSecondSection';
import ServiceSeventhSection
    from '../ServiceSeventhSection/ServiceSeventhSection';
import ServiceSixthSection from '../ServiceSixthSection/ServiceSixthSection';
import ServiceThirdSection from '../ServiceThirdSection/ServiceThirdSection';
import ServiceTopSection from '../ServiceTopSection/ServiceTopSection';

// import ServiceFourthSection from '../ServiceFourthSection/ServiceFourthSection';

const Service = () => {
    return (
        <>
            <ServiceTopSection />
            <ServiceSecondSection />
            <ServiceThirdSection />
            <ServiceFourthSection />
            <ServiceFifthSection />
            <ServiceSixthSection />
            <ServiceSeventhSection />
            <ServiceEighthSection />
            <ContactSection />
        </>
    )
}

export default Service