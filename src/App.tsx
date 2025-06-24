import { useEffect, useState } from "react";
import "./App.css";
import { AllProjects } from "./components/AllProjects/AllProjects";
import AboutMe from "./components/aboutMe";
import Navbar from "./components/navbar";

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
			<Navbar />
			<AboutMe />
			{data !== undefined ? <AllProjects allProjectsData={data} /> : null}
		</div>
	);
};

export default App;
