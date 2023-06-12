import './ServiceSection.scss';

import React from 'react';

import Image from 'next/image';

import Mobile
  from '../../../assets/HomePage/ServiceSection/carbon_application-mobile.png';
import Software
  from '../../../assets/HomePage/ServiceSection/eos-icons_software.png';
import Website from '../../../assets/HomePage/ServiceSection/ic_round-web.png';
import Shop
  from '../../../assets/HomePage/ServiceSection/mdi_shop-location.png';
import Nimbus
  from '../../../assets/HomePage/ServiceSection/nimbus_marketing.png';
import Pen
  from '../../../assets/HomePage/ServiceSection/zondicons_pen-tool.png';

const ServiceSection = () => {
  return (
    <div className='container-3' >
      <div className='top' >

        <div className='header-section' >
          <p id='provide' >WE PROVIDE</p>
          <h1>Our Best Services</h1>
          <p id='para'>Our team of experienced professionals is committed to delivering the highest level of service and support</p>
        </div>

      </div>
      <div className='middle' >
        <div className='cards'>

          <div className='card website' >
            <div className='image-container' >
              <Image src={Website} />
            </div>
            <h3>Website Development</h3>
            <p>
              We specialize in creating custom websites that are tailored to the specific needs of each client. Our team of experts can handle everything.....
            </p>
            <button>Learn More</button>
          </div>


          <div className='card mobile' >
            <div className='image-container' >
              <Image src={Mobile} />
            </div>
            <h3>Mobile Application</h3>
            <p>
              We have experience in developing mobile apps for Android and iOS platforms, we are able to create apps that are optimized for.....
            </p>
            <button>Learn More</button>
          </div>


          <div className='card software' >
            <div className='image-container' >
              <Image src={Software} />
            </div>
            <h3>Software Development</h3>
            <p>
              We have a team of software developers who can create custom software solutions for businesses of all sizes. Whether you need a simple.....
            </p>
            <button>Learn More</button>
          </div>


          <div className='card ecommerce' >
            <div className='image-container' >
              <Image src={Shop} />
            </div>
            <h3>E-Commerce</h3>
            <p>
              We have experience in creating e-commerce websites and integrating it with various payment gateways and shipping providers.....
            </p>
            <button>Learn More</button>
          </div>


          <div className='card graphics' >
            <div className='image-container' >
              <Image src={Pen} />
            </div>
            <h3>Graphics Design</h3>
            <p>
              We have a team of experienced graphic designers who can create visually appealing and engaging designs for websites, brochure.....
            </p>
            <button>Learn More</button>
          </div>


          <div className='card digital' >
            <div className='image-container' >
              <Image src={Nimbus} />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              We provide a variety of digital marketing services such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media.....
            </p>
            <button>Learn More</button>
          </div>

        </div>
      </div>
      <div className='bottom' >
        <button>View All Services</button>
      </div>
    </div>
  )
}

export default ServiceSection