import Navbar from '../Navbar';
import './index.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg">
        <h1 className="head">About</h1>
        <div className="divide">
          <div className="left">
    
            <p className='para'>
              I’m Kesava Katammagari, I'm currently working as a QA Engineer at Ramco Systems, specializing in the Payce payroll solutions and RVW. 
              Working on Payce, a payroll management product, focusing on delivering high-quality payroll solutions. 
              <br />
              <ul>
                <li>
                Beyond my QA expertise, I have a strong passion for <span className="spaan"> Frontend & Web Development.</span>
              Over the years in acadamedics, HTML5, CSS3, JavaScript, React, Redux, Java, NodeJS, and Bootstrap. Adept in web application development using Spring,SOAP, RESTful APIs, and GIT, Github. Proficient in React, utilizing features like components, lifecycle methods, and state management using Flux and Redux architectures. Experienced in all phases of SDLC and Agile methodologies. 
              
                </li>
                <li>
                I have gained extensive experience building websites,
                showcasing my skills in crafting engaging, user-friendly, and responsive designs. 
                I’ve gained my experience working on eCommerce projects in my academics.
                </li>
                <li>
                When not working on a project or thinking about programming, I'm most likely watching movies, playing cricket, sight-seeing, or spending time with family and friends.
                </li>

              </ul>
            
            </p>
          </div>
          <div className="right">
            <img src="./kesava.jpg" alt="Kesava Katammagari" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
