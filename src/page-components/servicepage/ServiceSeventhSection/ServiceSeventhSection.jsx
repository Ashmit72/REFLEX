import './ServiceSeventhSection.scss';

import React from 'react';

import Image from 'next/image';

import graphics from '../../../assets/ServicePage/graphics.png';

const ServiceSeventhSection = () => {
    return (
        <div className='service-seventh-section' >
            <div className="image">
                <Image src={graphics} />
            </div>
            <div className="content">
                <h1>Graphics Design</h1>
                <p>
                    We have a team of experienced graphic designers who can create visually appealing and engaging designs for websites, brochures, business cards, and other marketing materials.
                </p>
            </div>
        </div>
    )
}

export default ServiceSeventhSection