import "./styles.css";
import { ProjectType } from "../../../types";

type AnnotationProps = {
  project: ProjectType;
  alignSelf: "start" | "end";
};

const Annotation = ({ project, alignSelf }: AnnotationProps) => {
  return (
    <div
      className={`annotation ${
        alignSelf === "end" ? "annotationAlignEnd" : ""
      }`}
    >
      {project.notes}
    </div>
  );
};

export default Annotation;
