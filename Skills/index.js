import Navbar from '../Navbar';
import './index.css';

const Skills = () => {
    return (
        <>
            <Navbar />
            <div className='skills-container'>
                <div className='skills-bg'>
                    <h1 className='skills-head'>Skills</h1>
                    <p className='skills-para'>
                        I love to learn new things and experiment with new technologies.
                        These are some of the major languages, technologies, tools and platforms I have worked with:
                    </p>

                    <h2>Languages</h2>
                    <div className='languages-bg'>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/python.png" alt="python" className='img' />
                            <p>Python</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/java.png" alt="java" className='img' />
                            <p>Java</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/js.png" alt="js" className='img' />
                            <p>JavaScript</p>
                        </div>
                    </div>

                    <h3>Frameworks & Technologies</h3>
                    <div className='languages-bg'>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/html.png" alt="html" className='img' />
                            <p>HTML</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/css.png" alt="css" className='img' />
                            <p>CSS</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/react.png" alt="react" className='img' />
                            <p>React JS</p>
                        </div>
                    </div>

                    <h3>Tools</h3>
                    <div className='languages-bg'>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/git.png" alt="git" className='img' />
                            <p>Git</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/redux.png" alt="github" className='img' />
                            <p>GitHub</p>
                        </div>
                        <div className='separate-column'>
                            <img src="https://hithish.com/images/skills/code.png" alt="vs" className='img' />
                            <p>VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;