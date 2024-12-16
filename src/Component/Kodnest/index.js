import { FaLink } from "react-icons/fa"
import { PiCoffee } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go"
import { IoMdContacts } from "react-icons/io";

import './index.css'

const Kodnest = () => {

  return (
    <>
    <div className='bg-top'>
        <div>
        <p className="top-para">Register for the new batch at KodNest and attend 5 days of free demo classes.Secure Your Spot Now!</p>
        </div>
        <div>
        <button className="register-btn">Register Now</button>
        </div>
    </div>
    <div>
    <nav className="nav-header">
      <div className="nav-content">
          <img
            className="website-logo"
            src="https://www.kodnest.com/wp-content/uploads/2023/10/black-transparent-1-1.png"
            alt="kodnest"
          />
        <ul className="nav-menu">
          <li className="nav-link   "> <PiCoffee/> Full Stack Development</li>
          <li className="nav-link"> <FaLink/>  Premium Testing Module</li>
          <li className="nav-link" > <GoShieldCheck/> Hire from us</li>
          <button> <PiStudentFill/> Student login</button>
        </ul>
      </div>
    </nav>

    </div>
    
    <div className="app-container">
        <div className='left-side-bg'>
            <h1 className='head'>From <span className='span-head' >Learning to<br/> Earning:</span>  Transform <br/>into a Skilled <br/>Developer </h1>
            <p className='para'>Enroll in our Full Stack Development or Testing course to secure <br/>your dream job in tech.</p>
            <button className='download-btn'> <IoMdContacts/> Download Brochure</button>
            <button className='contact-btn'> <IoMdContacts/> Contact us</button>
        </div>
        <div className="right-side-bg">
            <img 
                src="https://www.kodnest.com/wp-content/uploads/2023/10/black-transparent-1-1.png"
                alt="rotate"
                className='rotate'
            />
        </div>
    </div>
    </>
    

  )
}
export default Kodnest