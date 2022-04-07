import "./styles.css";
import { ProjectType } from "../../../types";
import ProjectEven from "../projectEven";
import ProjectOdd from "../projectOdd";

type AllProjectsProps = {
  allProjectsData: ProjectType[];
};

const allProjects = ({ allProjectsData }: AllProjectsProps) => {
  return (
    <div className="allProjects">
      <h1>All Projects:</h1>
      {allProjectsData
        .map((project) =>
          allProjectsData.indexOf(project) % 2 === 0 ? (
            <ProjectEven key={project.id} project={project} />
          ) : (
            <ProjectOdd key={project.id} project={project} />
          )
        )
        .reverse()}
    </div>
  );
};

export default allProjects;
