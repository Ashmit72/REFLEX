import './AboutFourthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/AboutPage/AboutFourthSection/Rectangle35.png';

const AboutFourthSection = () => {
    return (
        <div className='about-fourth-section' >
            <div className='header' >
                <h1>Vison</h1>
                <p>
                    Leading the Way in Custom Technology Solutions
                    for Business Growth
                </p>
            </div>
            <div className='bottom' >
                <div className="image">
                    <Image className='img' src={IMAGE} />
                </div>
                <div className="content">
                    <h1>Staying Ahead in the Game of
                        Technology Solutions for Businesses
                    </h1>
                    <p>
                        Our vision is to be the leading provider of custom technology solutions for businesses looking to grow their online presence. We strive to be at the forefront of technological advancements and to continuously improve our services in order to stay ahead of the competition. We are committed to empowering our clients to fully leverage the potential of the internet through the use of cost-effective and innovative solutions.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutFourthSection