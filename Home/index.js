import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Navbar from "../Navbar";
import "./index.css";

const Home = () => {
  const words = ["Front", "end", "Developer"];

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Left-side Christmas image */}
        <img
          src="./left.png" // Replace with the path to your left image
          alt="Christmas Decoration Left"
          className="christmas-image left-image"
        />

        <h1 className="home-name">Katammagari Kesava</h1>
        <h1 className="react-name">
          I am a future
          <span className="frontend-space">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="animated-word">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="animated-letter"
                    style={{
                      animationDelay: `${wordIndex * 0.5 + letterIndex * 0.1}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
                {/* Add a space after each word except the last one */}
                {wordIndex < words.length - 1 && <span className="space"> </span>}
              </span>
            ))}
          </span>
        </h1>

        <p className="home-para">
          As a software developer, my ultimate objective is to transform
          concepts into pleasurable and useful user experiences.
          <br />
          I have strong experience working with complex business problems and
          creating unique solutions.
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

        {/* Right-side Christmas image */}
        <img src="./chri.png" alt="Christmas Decoration Right"
          className="christmas-image right-image" />
      </div>
    </>
  );
};

export default Home;
