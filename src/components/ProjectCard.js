import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tags = [],
  link,
  github,
  number,
}) => {
  const codeUrl = github || link || "#";
  return (
    <Col xs={12} sm={6} lg={4}>
      <div className="project-card">
        <div className="project-card-img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="project-card-body">
          {tags.length > 0 && (
            <div className="project-card-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-card-tag">{tag}</span>
              ))}
            </div>
          )}
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{description}</p>
          <div className="project-card-footer">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <Github size={16} /> GITHUB CODE
            </a>
            {number != null && <span className="project-card-num">{String(number).padStart(2, '0')}</span>}
          </div>
        </div>
      </div>
    </Col>
  );
};
