import "./styles.css";
import { ProjectType } from "../../../types";
import Project from "../project";
import Annotation from "../annotation";
import React from "react";
import ConnectingLine from "../connectingLine";

type AllProjectsProps = {
  allProjectsData: ProjectType[];
};

const allProjects = ({ allProjectsData }: AllProjectsProps) => {
  return (
    <div className="allProjects">
      {[...allProjectsData].reverse().map((project) =>
        allProjectsData.indexOf(project) % 2 === 0 ? (
          <React.Fragment key={project.id}>
            <ConnectingLine variant={0} containerAlignSelf="start" />
            <Annotation project={project} alignSelf="start" />
            <ConnectingLine variant={1} containerAlignSelf="start" />
            <Project project={project} imageAlign="start" />
          </React.Fragment>
        ) : (
          <React.Fragment key={project.id}>
            <ConnectingLine variant={2} containerAlignSelf="end" />
            <Annotation project={project} alignSelf="end" />
            <ConnectingLine variant={3} containerAlignSelf="end" />
            <Project project={project} imageAlign="end" />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default allProjects;
