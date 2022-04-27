import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="contactMe">
      <p className="contactMeText">
        You can see all my work on GitHub, and contact me on LinkedIn or by
        email.
      </p>
      <p className="contactMeText">
        <FaGithub size={20} />{" "}
        <a
          className="aboutMeUrl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/avreally"
        >
          GitHub
        </a>
      </p>
      <p className="contactMeText">
        <FaLinkedin size={20} />{" "}
        <a
          className="aboutMeUrl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
        >
          LinkedIn
        </a>
      </p>
      <p className="contactMeText">
        <IoMail size={20} />{" "}
        <a href="mailto:valeriia.shadrina@hyperisland.se">
          valeriia.shadrina@hyperisland.se
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
