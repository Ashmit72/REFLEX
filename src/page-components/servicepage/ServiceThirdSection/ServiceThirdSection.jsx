import './ServiceThirdSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE from '../../../assets/ServicePage/Rectangle1.png';

const ServiceThirdSection = () => {
    return (
        <div className='service-third-section' >
            <div className="image">
                <Image src={IMAGE} />
            </div>
            <div className="content">
                <h1>Website Development</h1>
                <p>We specialize in creating custom websites that are tailored to the specific needs of each client. Our team of experts can handle everything from the design and development of the website to ongoing maintenance and updates.</p>
            </div>
        </div>
    )
}

export default ServiceThirdSection