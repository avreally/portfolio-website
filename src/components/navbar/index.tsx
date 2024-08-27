import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="headline">contact me:</div>
      <div className="nav-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
        >
          <FaLinkedin size={35} />
        </a>
        <a href="mailto:valeriia.shadrina@hyperisland.se">
          <IoMail size={35} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/avreally"
        >
          <FaGithub size={35} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
