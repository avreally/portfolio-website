import "./styles.css";

type ProjectImageProps = {
  imgUrl: string;
  websiteUrl: string;
};

const ProjectImage = ({ imgUrl, websiteUrl }: ProjectImageProps) => {
  return (
    <div className="projectImgWrapper">
      <a
        className="projectImgUrl"
        target="_blank"
        rel="noopener noreferrer"
        href={websiteUrl}
      >
        <img className="projectImg" src={imgUrl} alt="Project Preview" />
      </a>
    </div>
  );
};

export default ProjectImage;
