import "./styles.css";
import { ProjectType } from "../../../types";

type ProjectInfoProps = {
	project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
	return (
		<div className="wrapper">
			<div className="projectInfo">
				<div className="projectHeader">
					<h2 className="projectName">{project.name}</h2>
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
			{project.websiteUrl || project.githubUrl ? (
				<div className="projectUrlsWrapper">
					{project.websiteUrl ? (
						<a
							className="projectUrl"
							target="_blank"
							rel="noopener noreferrer"
							href={project.websiteUrl}
						>
							[ website ]
						</a>
					) : null}
					{project.githubUrl ? (
						<a
							className="projectUrl"
							target="_blank"
							rel="noopener noreferrer"
							href={project.githubUrl}
						>
							[ github ]
						</a>
					) : null}
				</div>
			) : null}
		</div>
	);
};

export default ProjectInfo;
