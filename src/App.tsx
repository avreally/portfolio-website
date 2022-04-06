import React, { useEffect, useState } from "react";
import "./App.css";
import AllProjects from "./components/allProjects";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjectData();

    // fetch("data/allProjects.json")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  }, []);

  const getProjectData = async () => {
    const allProjects = await fetch("data/allProjects.json");
    setData(await allProjects.json());
    // data = await allProjects.json();
    // return data;
  };

  console.log(data);

  return (
    <div className="app">
      {data !== undefined ? <AllProjects allProjectsData={data} /> : null}
    </div>
  );
};

export default App;
