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
            <Annotation project={project} alignSelf="start" />
            <ConnectingLine />
            <Project project={project} imageAlign="start" />
          </React.Fragment>
        ) : (
          <React.Fragment key={project.id}>
            <Annotation project={project} alignSelf="end" />
            <Project project={project} imageAlign="end" />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default allProjects;
