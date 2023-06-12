import './TeamSection.scss';

import React from 'react';

import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

import person1 from '../../../assets/HomePage/TeamSection/Rectangle65.png';
import person2 from '../../../assets/HomePage/TeamSection/Rectangle66.png';
import person3 from '../../../assets/HomePage/TeamSection/Rectangle67.png';
import person4 from '../../../assets/HomePage/TeamSection/Rectangle68.png';

const TeamSection = () => {
  return (
    <div className='container-6'>
      <div className='bg-upfacing'>

        <div className='text'>
          <p className='recent'>RECENT WORK</p>
          <h1>Meet Our Expert Team</h1>
          <p className='description' >
            Our team of experienced professionals is committed to delivering
            the highest level of service and support
          </p>
        </div>
      </div>


      <div className='bg-downfacing'>

        <div className='cards'>

          <div className='card' >
            <div className='image'>
              <Image src={person1} className='img' />
            </div>
            <div className='info' >
              <h1>Person Name</h1>
              <p className='desi' >Designation</p>
              <p className='desc' >Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product.</p>
              <div className='icons' >
                <FaFacebookF className='icon' />
                <FaTwitter className='icon' />
                <FiInstagram className='icon' />
              </div>
            </div>
          </div>

          <div className='card' >
            <div className='image'>
              <Image src={person2} className='img' />
            </div>
            <div className='info' >
              <h1>Person Name</h1>
              <p className='desi' >Designation</p>
              <p className='desc' >Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product.</p>
              <div className='icons' >
                <FaFacebookF className='icon' />
                <FaTwitter className='icon' />
                <FiInstagram className='icon' />
              </div>
            </div>
          </div>

          <div className='card' >
            <div className='image'>
              <Image src={person3} className='img' />
            </div>
            <div className='info' >
              <h1>Person Name</h1>
              <p className='desi' >Designation</p>
              <p className='desc' >Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product.</p>
              <div className='icons' >
                <FaFacebookF className='icon' />
                <FaTwitter className='icon' />
                <FiInstagram className='icon' />
              </div>
            </div>
          </div>

          <div className='card' >
            <div className='image'>
              <Image src={person4} className='img' />
            </div>
            <div className='info' >
              <h1>Person Name</h1>
              <p className='desi' >Designation</p>
              <p className='desc' >Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product.</p>
              <div className='icons' >
                <FaFacebookF className='icon' />
                <FaTwitter className='icon' />
                <FiInstagram className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection