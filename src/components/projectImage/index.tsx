import "./styles.css";

type ProjectImageProps = {
  imgUrl: string;
  websiteUrl: string | null;
};

const ProjectImage = ({ imgUrl, websiteUrl }: ProjectImageProps) => {
  const imgElement = (
    <img className="projectImg" src={imgUrl} alt="Project Preview" />
  );

  return websiteUrl ? (
    <a
      className="projectImgUrl"
      target="_blank"
      rel="noopener noreferrer"
      href={websiteUrl}
    >
      {imgElement}
    </a>
  ) : (
    imgElement
  );
};
export default ProjectImage;
