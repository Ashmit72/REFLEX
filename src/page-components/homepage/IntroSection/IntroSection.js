import "./IntroSection.scss";
import Image from "next/image";
import Logo from "../../../assets/logo1.png"

const IntroSection = () => {
  return (
    <div className='parent-container' >
      <div className='container-1'>

        <div className='box-1' >
          <div className='reflex-logo' >
            <Image src={Logo} />
          </div>
          <div className='heading'>
            <h1 className='heading-text' >Tech Partner That Thrives <span className='success' >on Your Success</span></h1>
          </div>
          <div className='paragraph-top' >
            If you are looking for an IT Service Provider to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.
          </div>
          <div className='buttons' >
            <button className='inquire-now'>Inquire Now</button>
            <button className='learn-more' >Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection