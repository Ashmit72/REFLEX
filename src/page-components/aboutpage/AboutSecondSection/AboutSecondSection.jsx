import './AboutSecondSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE from '../../../assets/AboutPage/AboutSecondSection/Rectangle3.png';

const AboutSecondSection = () => {
    return (
        <div className='about-second-container' >

            <div className="header">

                <h1>About Us</h1>
                <p>Expertise in Web Application and Software Development
                    for Business Growth
                </p>

            </div>


            <div className='bottom' >
                <div className='img-container' >
                    <Image className='img' src={IMAGE} />
                </div>
                <div className='text' >

                    <h1>Expert Team</h1>

                    <p>
                        We are a team of 25 experts with over 3 years of experience in building web applications and software. Our goal is to help businesses grow their online presence and achieve their goals through the use of technology. We have a wealth of experience in this field and are well-equipped to handle any project, big or small. Whether you need a new website, a custom software solution, or help with digital marketing, we have the skills and expertise to help you succeed.
                    </p>

                    <button>Learn More</button>
                </div>

            </div>
        </div>
    )
}

export default AboutSecondSection