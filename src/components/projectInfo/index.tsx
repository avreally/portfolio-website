import "./styles.css";
import { ProjectType } from "../../../types";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

type ProjectInfoProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div className="projectInfo">
      <h2 className="projectName">{project.name}</h2>
      <p
        className="projectAbout"
        dangerouslySetInnerHTML={{ __html: project.about }}
      />
      <ul className="stack">
        {project.stack.map((element) => (
          <li key={element} className="stackElement">
            {element}
          </li>
        ))}
      </ul>
      <div className="projectUrlsWrapper">
        {project.websiteUrl ? (
          <p className="projectUrl">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.websiteUrl}
            >
              <RiExternalLinkLine size={30} />
            </a>
          </p>
        ) : null}
        <p className="projectUrl">
          <a target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
            <FaGithub size={30} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
