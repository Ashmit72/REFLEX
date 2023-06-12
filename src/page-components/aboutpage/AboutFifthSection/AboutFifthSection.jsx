import './AboutFifthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/AboutPage/AboutFifithSection/Rectangle60.png';

const AboutFifthSection = () => {
    return (
        <div className='about-fifth-section' >
            <div className='header' >
                <p>OUR BENIFITS</p>
                <h1>Why Choose Us?</h1>
            </div>
            <div className='bottom' >
                <div className="image-container">
                    <Image src={IMAGE} />
                </div>
                <div className="content">
                    <p className="bold">
                        We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
                    </p>
                    <p className="normal">
                        With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential..
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutFifthSection