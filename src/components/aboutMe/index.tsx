import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="profilePicWrapper">
        <img
          className="profilePic"
          src="../images/profile-pic.jpeg"
          alt="profile picture"
        />
      </div>
      <div className="aboutMeInfo">
        <div>
          <h1 className="aboutMeTitle">Valeria Shadrina</h1>
          <p className="aboutMeSubtitle">Front-end Developer</p>
          <p className="aboutMeText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
          <p className="aboutMeText">
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <p className="aboutMeUrlsWrapper">
          <a
            className="aboutMeUrl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="aboutMeUrl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/avreally"
          >
            <FaGithub size={30} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
