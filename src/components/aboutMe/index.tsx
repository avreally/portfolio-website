import "./styles.css";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const AboutMe = () => {
  const handlePictureLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.className = "profilePic profilePicLoaded";
  };

  return (
    <div className="aboutMe">
      <div className="profilePicWrapper">
        <img
          onLoad={handlePictureLoad}
          className="profilePic"
          src="../images/profile-pic.png"
          alt="profile picture"
        />
      </div>
      <div className="aboutMeInfo">
        <div>
          <h1 className="aboutMeTitle">Greetings, web wanderer! </h1>
          <p className="aboutMeSubtitle">Step into my digital world, where I wear the hat of a Frontend Developer.</p>
          <p className="aboutMeText">
            I&apos;m dedicated to the craft of UX, UI, and the art of making things beautiful.
            I genuinely enjoy my work, whether it&apos;s creating functional, visually appealing interfaces, fixing things,
            or finding solutions to meet user needs.
          </p>
          <p className="aboutMeText">
            It is important to me to be in a place that values diversity, equality, and inclusion.
            I appreciate an environment that provides room for me to grow and improve my skills.
          </p>
          <p className="aboutMeText">
            Let me tell you more about myself and my work.
          </p>
        </div>
        <p className="aboutMeUrlsWrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/avreally"
          >
            <FaGithub size={35} />
          </a>
          <a href="mailto:valeriia.shadrina@hyperisland.se">
            <IoMail size={35} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
