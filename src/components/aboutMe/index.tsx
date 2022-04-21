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
            An eager to learn and full of enthusiasm Frontend Developer. My
            background in UX / UI Design, Project Management, sales, and Digital
            Marketing helps me to better understand the processes of product
            development in IT companies.
          </p>
          <p className="aboutMeText">
            I prefer to work in companies where I will have the opportunity to
            grow and improve my skills. I like solving complex problems and
            challenging tasks, as I believe that helps my professional growth. I
            enjoy working both in a team and individually, and I value trust and
            open-mindedness.
          </p>
          <p className="aboutMeText">
            Before I started learning programming languages I studied English,
            Japanese, German, and Swedish. I enjoy retrowave, synthwave, and
            electronic music, playing darts and video games, and I have a
            growing interest in IoT and robotics.
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
