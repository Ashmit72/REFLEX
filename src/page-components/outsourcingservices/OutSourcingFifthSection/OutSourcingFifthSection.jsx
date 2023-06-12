import './OutSourcingFifthSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/OutSourcingPage/OutSourcingFifthSection/Rectangle50.png';

const OutSourcingFifthSection = () => {
    return (
        <div className='outsourcing-fifth-section' >
            <div className="image">
                <Image src={IMAGE} />
            </div>

            <div className='content' >
                <h1>How it works</h1>
                <p>There are several reasons to choose Reflex IT Solution for your outsourcing needs. First, we have a team of experienced professionals who are dedicated to providing you with exceptional service and support. Second, we use the latest technologies and best practices to ensure that your systems are secure and up to date. Third, we offer competitive pricing and flexible solutions to meet your unique needs.</p>
            </div>

        </div>
    )
}

export default OutSourcingFifthSection