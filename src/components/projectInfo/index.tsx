import "./styles.css";
import { ProjectType } from "../../../types";

type ProjectInfoProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div>
      Project Info
      {project.about} {project.name}
    </div>
  );
};

export default ProjectInfo;
