import './ServiceEighthSection.scss';

import React from 'react';

import Image from 'next/image';

import digital from '../../../assets/ServicePage/digital.png';

const ServiceEighthSection = () => {
    return (
        <div className='service-eighth-section' >
            <div className="content">
                <h1>Digital Marketing</h1>
                <p>We provide a variety of digital marketing services such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and email marketing to help businesses increase their online visibility and reach more customers.</p>
            </div>
            <div className="image">
                <Image src={digital} />
            </div>
        </div>
    )
}

export default ServiceEighthSection