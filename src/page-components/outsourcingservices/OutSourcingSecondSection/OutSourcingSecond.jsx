import './OutSourcingSecond.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/OutSourcingPage/OutsourcingSecondSection/Rectangle49.png';

const OutSourcingSecond = () => {
    return (
        <div className='outsource-second-section' >
            <div className="content">
                <h1>About Outsourcing Services</h1>
                <p>Welcome to Reflex IT Solution, your trusted partner for outsourcing services. We offer a range of IT solutions to help businesses streamline their operations and improve their overall efficiency. Our team of experts is committed to delivering high-quality services that meet the unique needs of each client.</p>
            </div>
            <div className="image">
                <Image src={IMAGE} />
            </div>
        </div>
    )
}

export default OutSourcingSecond