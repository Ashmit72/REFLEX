import Image from "next/image"
import "./FeaturedProjectSection.scss"
import Project1 from "../../../assets/Rectangle62.png"
import Project2 from "../../../assets/Rectangle63.png"
import Project3 from "../../../assets/Rectangle64.png"
import { FaArrowRight } from "react-icons/fa";



const FeaturedProjectsSection = () => {
  return (
    <div className='container-4' >

      <div className="top">
        <p className="clients">CLIENTS WE WORK FOR</p>
        <h1>Featured Projects</h1>
        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div className="middle" >


        <div className="grid-container" >
          <div className="image-container" >
            <Image src={Project1} />
            <span>
              <h1>Project Name 01</h1>
              <FaArrowRight className="icon" />
            </span>
          </div>

          <div className="image-container">
            <Image src={Project2} />
            <span>
              <h1>Project Name 02</h1>
              <FaArrowRight className="icon" />
            </span>
          </div>

          <div className="image-container" >
            <Image src={Project3} />
            <span>
              <h1>Project Name 03</h1>
              <FaArrowRight className="icon" />
            </span>
          </div>
        </div>

      </div>


      <div className="bottom">
        <button>View All Projects</button>
      </div>
    </div>
  )
}

export default FeaturedProjectsSection