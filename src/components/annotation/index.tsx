import "./styles.css";

type AnnotationProps = {
	notes: string;
	alignSelf: string;
};

const Annotation = ({ notes, alignSelf }: AnnotationProps) => {
	const notesLength = notes.length;

	return (
		<div
			className={`annotation ${
				alignSelf === "end" ? "annotationAlignEnd" : ""
			} ${notesLength > 150 ? "long" : notesLength > 100 ? "medium" : "short"}`}
		>
			{notes}
		</div>
	);
};

export default Annotation;
