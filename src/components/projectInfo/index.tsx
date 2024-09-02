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
      <div className="projectHeader">
        <h2 className="projectName">{project.name}</h2>
        <div className="projectUrlsWrapper">
          {project.websiteUrl ? (
            <a
              className="projectUrl"
              target="_blank"
              rel="noopener noreferrer"
              href={project.websiteUrl}
            >
              <RiExternalLinkLine />
            </a>
          ) : null}
          <a
            className="projectUrl"
            target="_blank"
            rel="noopener noreferrer"
            href={project.githubUrl}
          >
            <FaGithub />
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default ProjectInfo;
