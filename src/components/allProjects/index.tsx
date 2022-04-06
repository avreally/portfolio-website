import "./styles.css";
import { ProjectType } from "../../../types";
import Project from "../project";

type AllProjectsProps = {
  allProjectsData: ProjectType[];
};

const allProjects = ({ allProjectsData }: AllProjectsProps) => {
  console.log("allProjectsData", allProjectsData);
  return (
    <div className="allProjects">
      <h1>All Projects:</h1>
      {allProjectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default allProjects;
