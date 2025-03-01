import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Navbar from "../Navbar";
import "./index.css";

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = ["Front End Developer.", "React Developer.", "Full Stack Developer."];
  
    if (currentLetterIndex < titles[currentTitleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentTitle(
          (prev) => prev + titles[currentTitleIndex][currentLetterIndex]
        );
        setCurrentLetterIndex((prev) => prev + 1);
      }, 150); 
      return () => clearTimeout(timeout);
    } else if (currentLetterIndex === titles[currentTitleIndex].length) {
      const timeout = setTimeout(() => {
        if (currentTitleIndex < titles.length - 1) {
          setCurrentTitle("");
          setCurrentLetterIndex(0);
          setCurrentTitleIndex((prev) => prev + 1);
        } else {
          setCurrentTitle("");
          setCurrentLetterIndex(0);
          setCurrentTitleIndex(0);
        }
      }, 2000); // Pause before switching titles
      return () => clearTimeout(timeout);
    }
  }, [currentLetterIndex, currentTitleIndex]);
  

  // Cursor blinking animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinking speed
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="home-name">Kesava Katammagari</h1>
        <h1 className="future-name">
          I'm aspiring{" "}
          <span className="animated-title">
            {currentTitle}
            {showCursor && <span className="cursor">|</span>}
          </span>
        </h1>
        <p className="home-para">
        As an aspiring software developer, my goal is to turn innovative ideas into seamless user experiences. 
          <br />
          I am passionate about solving complex problems and continuously learning new technologies.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/kesava-katammagari"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin className="icon common-icon" />
          </a>
          <a
            href="https://github.com/Kesava123456"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon common-icon" />
          </a>
          <a href="mailto:your-email@example.com" className="icon-link">
            <MdMailOutline className="icon common-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
