import "./styles.css";
import { ProjectType } from "../../../types";

type ProjectInfoProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div className="projectInfo">
      <h2>{project.name}</h2>
      <p>{project.about}</p>
    </div>
  );
};

export default ProjectInfo;
