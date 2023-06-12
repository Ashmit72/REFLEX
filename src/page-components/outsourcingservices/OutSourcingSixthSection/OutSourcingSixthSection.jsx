import './OutSourcingSixthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/OutSourcingPage/OutSourcingSixthSection/Rectangle69.png';

const OutSourcingSixthSection = () => {
    return (
        <div className='outsourcing-sixth-section' >
            <div className="content">
                <h1>Why choose us</h1>
                <p>
                    There are several reasons to choose Reflex IT Solution for your outsourcing needs. First, we have a team of experienced professionals who are dedicated to providing you with exceptional service and support. Second, we use the latest technologies and best practices to ensure that your systems are secure and up to date. Third, we offer competitive pricing and flexible solutions to meet your unique needs.
                </p>
            </div>
            <div className="image">
                <Image src={IMAGE} />
            </div>
        </div>

    )
}

export default OutSourcingSixthSection