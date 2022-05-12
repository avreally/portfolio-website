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
          src="../images/profile-pic.jpg"
          alt="profile picture"
        />
      </div>
      <div className="aboutMeInfo">
        <div>
          <h1 className="aboutMeTitle">Valeria Shadrina</h1>
          <p className="aboutMeSubtitle">Frontend Developer</p>
          <p className="aboutMeText">
            An eager to learn and full of enthusiasm Frontend Developer. My
            background in UX / UI Design, Project Management, sales, and Digital
            Marketing helps me to better understand the processes of product
            development in IT companies.
          </p>
          <p className="aboutMeText">
            I’d like to work in a company where I will have the opportunity to
            grow and improve my skills. Before I started learning programming
            languages I studied English, Japanese, German, and Swedish. I also
            have a growing interest in IoT and robotics.
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
