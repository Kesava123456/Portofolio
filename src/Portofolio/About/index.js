import Navbar from '../Navbar';
import './index.css';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='bg'>
                <h1 className='head'>About</h1>
                <div className='divide'>
                    <div className='left'>
                        <p>
                            I’m Kesava Katammagari,<br /><br />
                            I am currently working as a QA Engineer at Ramco Systems, specializing in the Payce payroll solutions and RVW.<br /><br />
                            Beyond my QA expertise, I have a strong passion for front-end and web development. Over the years, I have gained extensive experience building websites, showcasing my skills in crafting engaging, user-friendly, and responsive designs.<br /><br />
                            I’ve gained my experience working on Ecommerce projects in my academics.<br /><br />
                            When not working on a project or thinking about programming, I'm most likely watching movies, playing cricket, sight-seeing, spending time with family and friends.
                        </p>
                    </div>
                    <div className='right'>
                        <img src="./kesava.jpg" alt="Kesava Katammagari" className='image' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
