import "./styles.css";

type ProjectImageProps = {
  imgUrl: string;
  websiteUrl: string | null;
};

const ProjectImage = ({ imgUrl, websiteUrl }: ProjectImageProps) => {
  return (
    <div className="projectImgWrapper">
      <a
        className="projectImgUrl"
        target="_blank"
        rel="noopener noreferrer"
        href={websiteUrl ? websiteUrl : undefined}
      >
        <img className="projectImg" src={imgUrl} alt="Project Preview" />
      </a>
    </div>
  );
};

export default ProjectImage;
