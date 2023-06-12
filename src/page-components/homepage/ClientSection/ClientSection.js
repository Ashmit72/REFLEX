import './ClientSection.scss';

import Image from 'next/image';

import comma from '../../../assets/HomePage/ClientSection/comma.png';
import person1 from '../../../assets/HomePage/ClientSection/Ellipse1.png';
import person2 from '../../../assets/HomePage/ClientSection/Ellipse2.png';
import person3 from '../../../assets/HomePage/ClientSection/Ellipse3.png';

const ClientSection = () => {
  return (
    <div className="container-7" >

      <div className="header" >
        <p>TESTIMONIAL</p>
        <h1>Write Clients</h1>
      </div>
      <div className="comments" >
        <div className="cards">
          <div className="card">
            <div className="image-container">
              <Image src={person1} />
            </div>
            <div className="content" >
              <h4>Person Name</h4>
              <p>Reflex IT Solution is the leading IT Service Provider in Nepal ....</p>
            </div>
            <div className="comma" >
              <Image src={comma} />
            </div>
          </div>
          <div className="card">
            <div className="image-container">
              <Image src={person2} />
            </div>
            <div className="content" >
              <h4>Person Name</h4>
              <p>Reflex IT Solution is the leading IT Service Provider in Nepal ....</p>
            </div>
            <div className="comma" >
              <Image src={comma} />
            </div>
          </div>
          <div className="card">
            <div className="image-container">
              <Image src={person3} />
            </div>
            <div className="content" >
              <h4>Person Name</h4>
              <p>Reflex IT Solution is the leading IT Service Provider in Nepal ....</p>
            </div>
            <div className="comma" >
              <Image src={comma} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientSection