import './IntroSection.scss';

import Image from 'next/image';

import Logo from '../../../assets/HomePage/IntroSection/logo1.png';

const IntroSection = () => {
  return (
    <div className='parent-container' >

      <div className='header' >
        <div className='image-container' >
          <Image src={Logo} />
        </div>
        <h1>
          Tech Partner That Thrives on Your Success
        </h1>
      </div>

      <div className='footer' >
        <p>If you are looking for an IT Service Provider to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.</p>
        <div className='buttons' >
          <button className='inquire' >Inquire Now</button>
          <button className='learn' >Learn More</button>
        </div>
      </div>


    </div>
  )
}

export default IntroSection