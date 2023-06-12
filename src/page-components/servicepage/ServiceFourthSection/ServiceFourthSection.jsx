import './ServiceFourthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE from '../../../assets/ServicePage/Rectangle2.png';

const ServiceFourthSection = () => {
    return (
        <div className='service-fourth-section' >
            <div className="content">
                <h1>Mobile Application</h1>
                <p>We have experience in developing mobile apps for Android and iOS platforms, we are able to create apps that are optimized for different devices and screen sizes.</p>
            </div>
            <div className="image">
                <Image src={IMAGE} />
            </div>
        </div>
    )
}

export default ServiceFourthSection