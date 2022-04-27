import React, { useEffect, useState } from "react";
import "./App.css";
import AllProjects from "./components/allProjects";
import AboutMe from "./components/aboutMe";
import ContactInfo from "./components/contactInfo";
import ConnectingLine from "./components/connectingLine";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    const allProjects = await fetch("data/allProjects.json");
    setData(await allProjects.json());
  };

  return (
    <div className="app">
      <AboutMe />
      {data !== undefined ? <AllProjects allProjectsData={data} /> : null}
      <ConnectingLine variant={3} containerAlignSelf="center" />
      <ContactInfo />
    </div>
  );
};

export default App;
