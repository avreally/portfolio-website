import React, { useEffect, useState } from "react";
import "./App.css";
import AllProjects from "./components/allProjects";
import AboutMe from "./components/aboutMe";

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
    </div>
  );
};

export default App;
