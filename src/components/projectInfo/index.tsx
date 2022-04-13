import "./styles.css";
import { ProjectType } from "../../../types";

type ProjectInfoProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div className="projectInfo">
      <h2 className="projectName">{project.name}</h2>
      <p className="projectAbout">{project.about}</p>
      <ul className="stack">
        {project.stack.map((element) => (
          <li key={element} className="stackElement">
            {element}
          </li>
        ))}
      </ul>
      <div className="projectUrlsWrapper">
        <p className="projectUrl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.websiteUrl}
          >
            Website
          </a>
        </p>
        <p className="projectUrl">
          <a target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
