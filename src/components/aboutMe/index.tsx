import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { RiExternalLinkLine } from "react-icons/ri";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <img
        className="profilePic"
        src="../images/profile-pic.jpeg"
        alt="profile picture"
      />
      <div className="aboutMeInfo">
        <div>
          <h1 className="aboutMeTitle">Valeria Shadrina</h1>
          <p className="aboutMeSubtitle">Front-end Developer</p>
          <p className="aboutMeText">Add text.</p>
          <p className="aboutMeText">Add text.</p>
        </div>
        <p className="aboutMeUrlsWrapper">
          <a
            className="aboutMeUrl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
          >
            <FaLinkedin />
          </a>
          <a
            className="aboutMeUrl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/avreally"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
