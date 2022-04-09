import "./styles.css";
import { ProjectType } from "../../../types";
import Project from "../project";

type AllProjectsProps = {
  allProjectsData: ProjectType[];
};

const allProjects = ({ allProjectsData }: AllProjectsProps) => {
  return (
    <div className="allProjects">
      <h1>All Projects:</h1>
      {allProjectsData
        .reverse()
        .map((project) =>
          allProjectsData.indexOf(project) % 2 === 0 ? (
            <Project key={project.id} project={project} imageAlign="start" />
          ) : (
            <Project key={project.id} project={project} imageAlign="end" />
          )
        )}
    </div>
  );
};

export default allProjects;
