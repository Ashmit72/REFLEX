import './ServiceFifthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE from '../../../assets/ServicePage/Rectangle3.png';

const ServiceFifthSection = () => {
    return (
        <div className='service-fifth-section' >
            <div className="image">
                <Image src={IMAGE} />
            </div>
            <div className="content">
                <h1>Software Development</h1>
                <p>We have a team of software developers who can create custom software solutions for businesses of all sizes. Whether you need a simple application or a complex system, we have the skills and expertise to deliver a solution that meets your needs.</p>
            </div>
        </div>
    )
}

export default ServiceFifthSection