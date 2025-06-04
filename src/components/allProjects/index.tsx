import "./styles.css";
import { ProjectType } from "../../../types";
import { ProjectWrapper } from "../ProjectWrapper/ProjectWrapper";

type AllProjectsProps = {
	allProjectsData: ProjectType[];
};

const allProjects = ({ allProjectsData }: AllProjectsProps) => {
	return (
		<div className="allProjects">
			{[...allProjectsData].reverse().map((project, index) => (
				<ProjectWrapper
					key={project.id}
					project={project}
					notes={project.notes}
					projectIndex={index}
				/>
			))}
		</div>
	);
};

export default allProjects;
