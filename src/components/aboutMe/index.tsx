import "./styles.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <img
        className="profilePic"
        src="../images/profile-pic.jpeg"
        alt="profile picture"
      />
      <div className="aboutMeInfo">
        <h1 className="aboutMeTitle">Valeria Shadrina</h1>
        <p className="aboutMeSubtitle">Front-end Developer</p>
        <p>JavaScript, React.js, Node.js, TypeScript, UI/UX Design</p>
        <p>You can find my individual and group projects below.</p>
      </div>
    </div>
  );
};

export default AboutMe;
