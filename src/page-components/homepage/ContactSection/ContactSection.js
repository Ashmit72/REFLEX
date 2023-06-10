import './ContactSection.scss';

import React from 'react';

import Image from 'next/image';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from 'react-icons/fi';

import Logo from '../../../assets/logo3.png';

const ContactSection = () => {
  return (
    <div className='last-container' >

      <div className='top'>


        <div className='reflex' >
          <div><Image src={Logo} /></div>
          <p>If you are looking for an IT Service Provider to help you create a remarkable presence online, you’ve come to the right place.</p>
        </div>

        <div className='company' >
          <h3>Company</h3>
          <p>About Us </p>
          <p>Frequently Asked Questions</p>
          <p>Contact Us</p>
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
        </div>


        <div className='categories' >
          <h3>Popular Categories</h3>
          <p>Projects </p>
          <p>Our Services</p>
          <p>Team Members</p>
        </div>


        <div className='connect' >
          <h3>Connect With Us</h3>
          <p>Dillibazar, Kathmandu</p>
          <p>9863428093, 9823345822</p>
          <div className='icons' >
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

      </div>
      <div className='bottom' >
        <p>Copyright 2023-ReflexITSolution</p>
        <p>Specific Moments Captured</p>
      </div>
    </div>
  )
}

export default ContactSection