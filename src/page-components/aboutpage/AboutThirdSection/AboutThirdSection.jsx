import './AboutThirdSection.scss';

import React from 'react';

import Image from 'next/image';

import IMAGE from '../../../assets/AboutPage/AboutThirdSection/Rectangle34.png';

const AboutThirdSection = () => {
    return (
        <div className='about-third-section' >
            <div className='header' >
                <h1>Mission</h1>
                <p>
                    Empowering Businesses to Achieve their Goals through
                    Customized Technology Solutions
                </p>
            </div>
            <div className="bottom">
                <div className='content' >
                    <h1>Tech-Empowerment</h1>
                    <p>Our mission is to empower our clients to fully utilize the internet by providing affordable and effective custom technology solutions. We believe that the internet has the power to transform businesses and help them achieve their goals, and it is our goal to make that happen for as many clients as possible. We understand that every business is unique, and therefore we offer customized solutions tailored to each client's specific needs. Our team of experts have years of experience in web application and software development, and we are dedicated to providing the highest quality services at an affordable price.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='image-container' >
                    <Image className='img' src={IMAGE} />
                </div>
            </div>
        </div>
    )
}

export default AboutThirdSection