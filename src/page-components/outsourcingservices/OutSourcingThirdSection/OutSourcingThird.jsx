import './OutSourcingThird.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/OutSourcingPage/OutSourcingThirdSection/Rectangle50.png';

const OutSourcingThird = () => {
    return (
        <div className='outsourcing-third-section' >
            <div className="image">
                <Image src={IMAGE} />
            </div>
            <div className="text">
                <h1>Service Offered</h1>
                <p>We offer a comprehensive suite of IT services, including IT support, network management, cloud services, managed security services, project management, software development, and digital marketing. Our services are designed to help businesses improve their IT infrastructure, increase productivity, and achieve their goals.</p>
            </div>
        </div>
    )
}

export default OutSourcingThird