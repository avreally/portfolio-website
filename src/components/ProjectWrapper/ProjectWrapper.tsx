import { Annotation } from "../Annotation/Annotation";
import { ConnectingLine } from "../ConnectingLine/ConnectingLine";
import { Project } from "../Project/Project";
import { ProjectType } from "../../../types";

type ProjectWrapperProps = {
	project: ProjectType;
	projectIndex: number;
	notes: string | undefined;
};

export const ProjectWrapper = ({
	project,
	notes,
	projectIndex,
}: ProjectWrapperProps) => {
	const alignment = projectIndex % 2 === 0 ? "end" : "start";
	const lineVariant = projectIndex % 2 === 0 ? [2, 3] : [0, 1];

	return (
		<>
			{notes && (
				<ConnectingLine
					variant={lineVariant[0]}
					containerAlignSelf={alignment}
				/>
			)}
			{notes && <Annotation notes={notes} alignSelf={alignment} />}
			<ConnectingLine variant={lineVariant[1]} containerAlignSelf={alignment} />
			<Project project={project} imageAlign={alignment} />
		</>
	);
};
