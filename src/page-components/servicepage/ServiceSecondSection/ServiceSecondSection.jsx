import './ServiceSecondSection.scss';

import React from 'react';

import Image from 'next/image';

import Image1 from '../../../assets/ServicePage/ic_round-web.png';
import Image2 from '../../../assets/ServicePage/iconoir_brain-research.png';
import Image3 from '../../../assets/ServicePage/nimbus_marketing.png';

const ServiceSecondSection = () => {
    return (
        <div className='second-section' >
            <div className="items">

                <div className="item">
                    <Image src={Image1} />
                    <h1>Creative Design</h1>
                    <p>Our team of professional graphic and web designers will help you with unique and creative logo and website designs that will match your business.</p>
                    <button>Get in Touch</button>
                </div>


                <div className="item">
                    <Image src={Image2} />
                    <h1>Research & Development</h1>
                    <p>We help you develop the right website with a good user interface built after a lot of research in the industry to help you make the best out of it.</p>
                    <button>Get in Touch</button>
                </div>

                <div className="item">
                    <Image src={Image3} />
                    <h1>Branding & Marketing</h1>
                    <p>Need help with branding and marketing to reach out to a larger audience? We can help you create a brand presence and marketing efforts.</p>
                    <button>Get in Touch</button>
                </div>

            </div>
        </div>
    )
}

export default ServiceSecondSection