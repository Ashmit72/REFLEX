import React from 'react';

import ContactSection
    from '@/page-components/homepage/ContactSection/ContactSection';

import ContactBackground from '../ContactBackground/ContactBackground';
import HelpSection from '../HelpSection/HelpSection';

const Contact = () => {
    return (
        <>
            <ContactBackground />
            <HelpSection />
            <ContactSection />
        </>
    )
}

export default Contact