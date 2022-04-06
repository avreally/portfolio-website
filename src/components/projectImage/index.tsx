import "./styles.css";

type ProjectImageProps = {
  imgUrl: string;
};

const ProjectImage = ({ imgUrl }: ProjectImageProps) => {
  return (
    <div>
      Project Image
      <img src={imgUrl} alt="Project Preview" />
    </div>
  );
};

export default ProjectImage;
