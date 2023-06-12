import './OutSourcingFourth.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE
    from '../../../assets/OutSourcingPage/OutSourcingFourthSection/bgimg.png';

const OutSourcingFourth = () => {
    return (
        <div className='outsourcing-fourth-section' >
            <div className='content' >
                <h1>Benifits of Outsourcing</h1>
                <p>Outsourcing your IT services to Reflex IT Solution comes with several benefits. First, it allows you to focus on your core business operations, while we take care of your IT needs. Second, it helps you reduce costs by eliminating the need to hire and train IT staff. Third, it gives you access to the latest technologies and best practices, ensuring that your systems are up to date and secure.</p>
            </div>
            <div className='image' >
                <Image src={IMAGE} />
            </div>
        </div>
    )
}

export default OutSourcingFourth