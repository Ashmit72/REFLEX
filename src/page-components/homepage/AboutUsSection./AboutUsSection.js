import './AboutUsSection.scss';

import React from 'react';

import Image from 'next/image';

import Person from '../../../assets/HomePage/AboutUsSection/Rectangle3.png';

const AboutUsSection = () => {
  return (

    <div className='container' >
      <div className={"header"}>
        <h1>About Us</h1>
        <p>
          Expertise in Web Application and Software Development
          for Business Growth
        </p>
      </div>
      <div className='bottom'>
        <div className='text'>
          <p>
            We are a team of 25 experts with over 3 years of experience in website building and marketing to help businesses grow online.If you are looking for the best website design, development, and marketing services to grow your business online, we are here to help. We are a team of certified experts with tremendous experience in web design, development, and marketing who’ll walk with you all through.
          </p>
          <ul>
            <h4>Our Core Values</h4>
            <li>Comitted to delivering the best</li>
            <li>Honest and Transparent Services</li>
            <li>We care for your business just like ours</li>
            <li>Keep learning and adapting to new technologies</li>

          </ul>
          <button>Learn More</button>
        </div>
        <div className='image-container'>
          <Image className='img' src={Person} fill={true} />
        </div>
      </div>


    </div>

  )
}

export default AboutUsSection