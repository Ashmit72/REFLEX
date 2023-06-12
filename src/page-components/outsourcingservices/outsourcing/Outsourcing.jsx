import React from 'react';

import ContactSection
    from '@/page-components/homepage/ContactSection/ContactSection';

import OutSourcingFifthSection
    from '../OutSourcingFifthSection/OutSourcingFifthSection';
import OutSourcingFourth from '../OutSourcingFourthSection/OutSourcingFourth';
import OutSourcingSecond from '../OutSourcingSecondSection/OutSourcingSecond';
import OutSourcingSeventhSection
    from '../OutSourcingSeventhSection/OutSourcingSeventhSection';
import OutSourcingSixthSection
    from '../OutSourcingSixthSection/OutSourcingSixthSection';
import OutSourcingThird from '../OutSourcingThirdSection/OutSourcingThird';
import OutSourcingTop from '../OutSourcingTopSection/OutSourcingTop';

const outsourcing = () => {
    return (
        <>
            <OutSourcingTop />
            <OutSourcingSecond />
            <OutSourcingThird />
            <OutSourcingFourth />
            <OutSourcingFifthSection />
            <OutSourcingSixthSection />
            <OutSourcingSeventhSection />
            <ContactSection />

        </>
    )
}

export default outsourcing