import './ServiceSixthSection.scss';

import React from 'react';

import Image from 'next/image';

import ecommerce from '../../../assets/ServicePage/ecommerce.png';

const ServiceSixthSection = () => {
    return (
        <div className='service-sixth-section' >
            <div className="content">
                <h1>E-Commerce</h1>
                <p>
                    We have experience in creating e-commerce websites and integrating it with various payment gateways and shipping providers. We can help you set up your online store and make it easy for customers to purchase your products and services online.
                </p>
            </div>
            <div className="image">
                <Image src={ecommerce} />
            </div>
        </div>
    )
}

export default ServiceSixthSection