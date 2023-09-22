import "./styles.css";
import { ProjectType } from "../../../types";

type AnnotationProps = {
  project: ProjectType;
  alignSelf: "start" | "end";
};

const Annotation = ({ project, alignSelf }: AnnotationProps) => {
  const notesLength = project.notes.length;

  return (
    <div
      className={`annotation ${
        alignSelf === "end" ? "annotationAlignEnd" : ""
      } ${notesLength > 150 ? "long" : notesLength > 100 ? "medium" : "short"}`}
    >
      {project.notes}
    </div>
  );
};

export default Annotation;
