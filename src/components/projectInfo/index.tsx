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
      <ul className="stack">
        {project.stack.map((element) => (
          <li key={element} className="stackElement">
            {element}
          </li>
        ))}
      </ul>
      <div className="projectUrls">
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.websiteUrl}
          >
            Website
          </a>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
