import "./styles.css";

type ProjectImageProps = {
  imgUrl: string;
};

const ProjectImage = ({ imgUrl }: ProjectImageProps) => {
  return (
    <div className="projectImgWrapper">
      <img className="projectImg" src={imgUrl} alt="Project Preview" />
    </div>
  );
};

export default ProjectImage;
